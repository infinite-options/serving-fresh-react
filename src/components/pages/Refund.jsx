import React, {useState} from "react";
import ImageUploading from "react-images-uploading";
import HeaderCart from "../HeaderCart";
import Footer from "../Footer";

function Refund(){
    var currentImg = "./unuploadImg.png"; 
    const [imgs,setImgs] = useState([]);
    const [isAdded,setAdd] = useState(false);
    const maxNumImg = 1;
    
    const makeChange = (imgList, newIndex)=>{
        console.log(imgList,newIndex);
        setImgs(imgList);
        setAdd(true);
        console.log(imgs);
        console.log(isAdded);
        // currentImg= imgs;
    }
    // console.log();

    return(
    <div>
        <header className="stickyCart"><HeaderCart/></header>
        <div className="makeTopRefund">
            <ImageUploading 
                multiple
                value = {imgs}
                onChange = {makeChange}
                maxNumber = {maxNumImg}
                dataURLKey = "data_url"
            > 
            {
                ({
                    imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps
                }) => (
                    <div>
                        <img className="groundImageRefund" src={currentImg} alt ="no-img-displace" 
                            style={isDragging ? { color: "red" } : null}
                            onClick={onImageUpload}
                            {...dragProps}> 
                        </img>
                        &nbsp;
                        <button className="takePhoto"> Take Photo</button>
                        &nbsp;
                        <button className="getPicBtn" onClick={onImageUpload}>
                                Choose a Photo from Gallery</button>
                    </div>
                )
            }
            
            
            </ImageUploading>
        </div>
        <Footer />  
    </div>
    );
}


export default Refund;