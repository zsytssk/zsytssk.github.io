use std::collections::HashSet;

impl Solution {
    pub fn single_numbers(nums: Vec<i32>) -> Vec<i32> {
        let mut hset: HashSet<i32> =  HashSet::new();

        for (item in nums) {
            if hset.contains(&item) {
                hset.remove(&item);
                continue;
            }
            hset.insert(item)
        }
        return hset.into_iter().collect();
    }
}