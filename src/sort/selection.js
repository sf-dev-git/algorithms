function selection_sort(x) {
    const len = x.length;
    let sorted = x;
    for (let i=0; i < len; i++) {
        let min_index = i;
        for (let j=i+1; j < len; j++) {
            if (sorted[min_index] > sorted[j]) {
                min_index = j;
            }
        }
        let y = sorted[i];
        sorted[i] = sorted[min_index];
        sorted[min_index] = y;
    }
    return sorted;
}

module.exports = selection_sort;