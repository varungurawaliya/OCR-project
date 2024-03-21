import { useState } from "react"
import ReactLoading from "react-loading"
import { extractDetails } from "./tesseract/extractDetails.js"
import { processImage } from "./opencv/processImage.js"

function App() {
  //
  const [extractedDetails, setExtractedDetails] = useState({})
  const [image, setImage] = useState()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    //
    e.preventDefault()
    setLoading(true)
    processImage()

    const canvas = document.getElementById("imageCanvas")
    var file = new Image()
    file.src = canvas.toDataURL()

    const data = await extractDetails(file)
    console.log(data)

    setExtractedDetails(data)
    setLoading(false)
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Upload ID</h2>
          <p className="text-gray-500 mb-6">upload any govt issued ID</p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <ReactLoading
              type="bars"
              color="#11182e"
              height="150px"
              width="150px"
              className={`fixed top-[40vh] left-[45vw] ${
                !loading ? `hidden` : null
              }`}
            />
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="h-[70vh]">
                <form
                  id="form"
                  onSubmit={handleSubmit}
                  className={loading ? `hidden` : null}
                >
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="file">Please upload your ID</label>
                        <input
                          type="file"
                          name="file"
                          id="file"
                          onChange={(e) => {
                            setExtractedDetails({})
                            setImage(URL.createObjectURL(e.target.files[0]))
                          }}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div className="md:col-span-5">
                        <div>ID Type</div>
                        <div className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                          {extractedDetails?.cardType}
                        </div>
                      </div>

                      <div className="md:col-span-5">
                        <div>ID</div>
                        <div className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                          {extractedDetails?.details?.ID}
                        </div>
                      </div>

                      <div className="md:col-span-5">
                        <div>Name</div>
                        <div className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                          {extractedDetails?.details?.NAME}
                        </div>
                      </div>

                      <div className="md:col-span-5">
                        <div>Father Name</div>
                        <div className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                          {extractedDetails?.details?.FATHERNAME}
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <div>Gender</div>
                        <div className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                          {extractedDetails?.details?.GENDER}
                        </div>
                      </div>

                      <div className="md:col-span-3">
                        <div>Date Of Birth</div>
                        <div className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                          {extractedDetails?.details?.DOB}
                        </div>
                      </div>

                      <div className="md:col-span-5">
                        <div>Address / Street</div>
                        <div className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                          {extractedDetails?.details?.ADDRESS}
                        </div>
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex w-full">
                          <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="text-gray-600 pl-3 w-full">
                <p className="font-medium text-lg mb-5">Uploaded Image</p>
                <img
                  id="imageSrc"
                  alt="No Image"
                  src={image}
                  className="hidden"
                />
                <canvas id="imageCanvas" className="w-full"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
