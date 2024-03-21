import cv from "@techstark/opencv-js"

function processImage() {
    //
    let src = cv.imread("imageSrc")
    let dst = new cv.Mat()

    // You can try more different parameters
    cv.cvtColor(src, dst, cv.COLOR_BGR2GRAY)

    //cv.adaptiveThreshold(dst, dst, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 3, 2);
    cv.threshold(dst, dst, 95, 255, cv.THRESH_BINARY)
    
    cv.imshow("imageCanvas", dst)
    src.delete()
    dst.delete()
}

export { processImage }
