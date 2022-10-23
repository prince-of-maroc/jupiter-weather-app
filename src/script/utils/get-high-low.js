// Return an object with the highest and lowest values between specifed start and end indices in a numerical array.

export default function getHighLow(arr, start, end) {
    let high = arr[start];
    let low = arr[start];
    for (let i = start; i < end; i++) {
        if (arr[i] > high) {
            high = arr[i];
        } else if (arr[i] < low) {
            low = arr[i];
        }
    }
    return {
        high,
        low,
    };
}
