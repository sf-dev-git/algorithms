function insertion_sort(sorted) {
    const len = sorted.length;

    for (let i = 0; i < len; i++) {
        let key = sorted[i+1];
        for (let j = i; j >= 0; j--) {
            if (sorted[j] > key) {
                let tmp = sorted[j];
                sorted[j] = key;
                sorted[j+1] = tmp;
            }
        }
    }

    return sorted;
}

module.exports = insertion_sort;