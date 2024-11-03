import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdCloudUpload, MdDelete, MdFastfood, MdFoodBank, MdAttachMoney} from 'react-icons/md';
import { categories } from '../utils/data';
import Loader from './Loader';
import { getAllFoodItems, saveItem } from '../utils/firebaseFunctions';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { useStateValue } from '../Context/StateProvider';
import { actionType } from '../Context/Reducer';
export default function CreateContainer() {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const storage = getStorage();
  const [{ }, dispatch] = useStateValue();

  const uploadImage = (e) => {
    setIsLoading(true);

    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);

    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try Again 🙇‍♂️");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully 😊");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );



  }

  const deleteImage = (e) => {
    setIsLoading(true);
    const imageRef = ref(storage, imageAsset);
    deleteObject(imageRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully 😊");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });


  }
  const saveDetails = (e) => {
    setIsLoading(true)
    try {
      if (!title || !calories || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          calories: calories,
          qty: 1,
          price: price
        };
        saveItem(data);
        setFields(true);
        setIsLoading(false);
        setMsg("Data Uploaded successfully 😊");
        clearData();
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
    }
    catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try Again 🙇‍♂️");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
    fetchData();

  }


  // fetch data 
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      console.log(data);

      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    })

  };
  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCategory("");
  }

  return (
    <>
      <div className="container">
        <div className="row py-12 mx-auto" >
          <div className="col text-center">
            <p className="text-headingColor font-semibold capitalize relative lg:text-7xl md:text-6xl sm:text-5xl xs:text-3xl inline-block">
             Add Food Items
              <span className="block h-1 mt-2 rounded-lg bg-gradient-to-tr from-orange-400 to-orange-600 w-32 lg:w-72 mx-auto"></span>
            </p>
          </div>
          
        </div>
      </div>
      <div className="w-[100%] min-h-screen flex items-center justify-center " id='createContainer'>

        <div id='box' className="w-[70%] md:w-[60%] border absolute z-10 border-gray-300 rounded-lg p-4 flex gap-4 flex-col items-center justify-center">
          {fields && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`w-full p-2 rounded-lg text-center text-lg font-semibold
              ${alertStatus === "danger" ? "bg-red-400 text-red-800"
                  : "bg-emerald-400 text-emerald-800"}`}
            >
              {msg}
            </motion.p>
          )}
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFastfood className="text-xl text-gray-700" />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-500 text-textColor font-semibold"
            />
          </div>
          {/* Select category */}
          <div className="w-full">
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
            >
              <option value="other" className="bg-white p-2">Select Category</option>
              {categories.map((item) => (
                <option
                  key={item.id}
                  className="bg-white p-2"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          {/* Select image */}
          <div className="w-full group justify-center py-2 border border-gray-400 flex items-center gap-2 flex-col border-dotted h-[100px] md:h-[200px] cursor-pointer rounded-lg">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {!imageAsset ? (
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 cursor-pointer">
                      <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700' />
                      <p className="text-gray-500 hover:text-gray-700">Click here to upload</p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                ) : (
                  <div className='relative h-full'>
                    <img
                      src={imageAsset}
                      alt="uploaded image"
                      className="w-full h-full object-cover" />
                    <button
                      type="button"
                      className="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text
                    white font-bold py-1 px-2 rounded-full"
                      onClick={deleteImage}
                    >
                      <MdDelete className='text-white ' />
                    </button>

                  </div>
                )}
              </>
            )}
          </div>
          {/* calories & price  */}

          <div className="w-full flex flex-col md:flex-row items-center gap-3">
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <MdFoodBank className="text-gray-700 text-2xl" />
              <input
                type="text"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="Calories"
                required
                className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-500 text-textColor font-semibold"
              />
            </div>
            {/* price  */}

            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <MdAttachMoney className="text-gray-700 text-2xl" />
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                required
                className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-500 text-textColor font-semibold"
              />
            </div>
          </div>
          {/* save details button  */}

          <div className="w-full flex items-center justify-center">
            <button
              onClick={saveDetails}
              className="w-full ml:0 md:ml-auto md:w-auto border-none rounded-lg text-lg outline-none  py-2 px-12 bg-emerald-500  text-white font-semibold"
            >
              Save
            </button>

          </div>
        </div>
      </div>
    </>

  );
}
