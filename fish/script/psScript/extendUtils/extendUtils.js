//@include "./json2.js"
//@include "./extend.lib.js"

/** 获得没有子类的图层 */
function getAllLayers(doc, is_visible) {
    var result = [];
    for (var k = 0; k < doc.layers.length; k++) {
        var activeLayer = doc.layers[k];
        if (is_visible) {
            if (!activeLayer.visible) {
                continue;
            }
        }
        /** 排除锁定的图层 */
        if (activeLayer.allLocked) {
            continue;
        }
        if (!activeLayer.layers || !activeLayer.layers.length) {
            result.push(activeLayer);
        } else {
            result = result.concat(getAllLayers(activeLayer, is_visible));
        }
    }
    return result;
}

function writeFile(path, content) {
    var f = new File(path);
    f.encoding = 'UTF8';
    f.open('w');

    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }

    f.writeln(content);
    f.close('w');
}

function getLayerBound(layer) {
    var bounds = layer.bounds;
    var x1 = parseInt(bounds[0]);
    var y1 = parseInt(bounds[1]);
    var x2 = parseInt(bounds[2]);
    var y2 = parseInt(bounds[3]);

    return {
        x: x1,
        y: y1,
        width: x2 - x1,
        height: y2 - y1,
    };
}

function genPathInfo(doc, layer) {
    doc.activeLayer = layer;
    if (!doc.pathItems) {
        return;
    }
    /** 只能处理一个图层只有一个路径 */
    for (var i = 0; i < doc.pathItems.length; i++) {
        var myPathItem = doc.pathItems[i];
        for (var j = 0; j < myPathItem.subPathItems.length; j++) {
            var mySubPathItem = myPathItem.subPathItems[j];
            var sub_path_info = getSubPathInfo(mySubPathItem);
            return sub_path_info;
        }
    }
}

function getSubPathInfo(sub_path_info) {
    var nrPoints = sub_path_info.pathPoints.length;
    var sub_path_arr = [];
    for (var k = 0; k < nrPoints; k++) {
        var sub_path_item = {};
        var myPoint = sub_path_info.pathPoints[k];
        sub_path_item.leftDirection = roundCoordinate(myPoint.leftDirection);
        sub_path_item.rightDirection = roundCoordinate(myPoint.rightDirection);
        sub_path_item.anchor = roundCoordinate(myPoint.anchor);

        sub_path_arr.push(sub_path_item);
    }
    return formatPath(sub_path_arr);
}

// 将path的数组对象 转换成二维数组形式
function formatPath(sub_path_arr) {
    var result_arr = [];
    for (var i = 0; i < sub_path_arr.length - 1; i++) {
        var result_item = [];
        var cur_point = sub_path_arr[i];
        var next_point = sub_path_arr[i + 1];

        result_item.push(cur_point.anchor.x, cur_point.anchor.y);
        if (
            cur_point.leftDirection.x != cur_point.anchor.x ||
            cur_point.leftDirection.y != cur_point.anchor.y
        ) {
            result_item.push(
                cur_point.leftDirection.x,
                cur_point.leftDirection.y,
            );
        }

        if (
            next_point.rightDirection.x != next_point.anchor.x ||
            next_point.rightDirection.y != next_point.anchor.y
        ) {
            result_item.push(
                next_point.rightDirection.x,
                next_point.rightDirection.y,
            );
        }
        result_item.push(next_point.anchor.x, next_point.anchor.y);
        result_arr.push(result_item);
    }
    return result_arr;
}

function roundCoordinate(coor_arr) {
    var result = {};
    for (var i = 0; i < coor_arr.length; i++) {
        if (i == 0) {
            result.x = Math.round(coor_arr[i]);
            continue;
        }
        result.y = Math.round(coor_arr[i]);
    }
    return result;
}
