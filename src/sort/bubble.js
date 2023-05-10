function bubble_sort(x) {
    let sorted = x;
    for (let i=0; i < x.length; i++ ) {
        for (let j=0; j < x.length; j++ ) {
            if (sorted[j] > sorted[j+1]) {
                let tmp = sorted[j];
                sorted[j] = sorted[j+1];
                sorted[j+1] = tmp;
            }
        }
    }
    return sorted;
}

module.exports = bubble_sort;