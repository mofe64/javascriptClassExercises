const getElements = (array=[] , n=0) => {
    if (n === 0) {
        return array[n]
    } else {
        return array.slice(0, n)
    }
}