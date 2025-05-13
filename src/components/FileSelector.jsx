import React, { useEffect } from 'react'
import { useContext } from 'react'
import { qrContext } from '../App'


export const FileSelector = () => {


    const [file, setFile] = React.useState(null)

    const contextValue = useContext(qrContext);
    const { setImageData, setWidth, setHeight } = contextValue;


    useEffect(() => {
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                console.log(reader.result)
                console.log("file:", file)
                setImageData(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }, [file])


    const saveFile = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFile(file)
        }
    }

  return (
    <div>FileSelector:
    
    <input onChange={(e) => {saveFile(e)}} type="file" accept="image/*" capture="environment" id="fileInput" />
    



    </div>
  )
}
