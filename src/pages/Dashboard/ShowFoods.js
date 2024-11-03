import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { setDoc, serverTimestamp, doc, getDocs, collection, deleteDoc } from 'firebase/firestore';
import { firestore } from '../../config/firebase.config';
import { orderBy, query } from 'firebase/firestore';
import { Table, Button, Spinner } from 'react-bootstrap';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
// import { RiArrowGoBackFill } from "react-icons/ri";
// import { Link } from 'react-router-dom';

const initialState = {
    title: "",
    calories: "",
    price: "",
    category: "",
    imageURL: ""
};

export default function ShowFoods() {
    const [documents, setDocuments] = useState([]);
    const [filteredDocuments, setFilteredDocuments] = useState([]);
    const [todo, setTodo] = useState(initialState);
    const [isLoading, setIsLoading] = useState(true);
    const [isProcessing, setProcessing] = useState(false);
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setTodo(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        filterDocuments(e.target.value);
    };

    const filterDocuments = (searchTerm) => {
        const filtered = documents.filter(doc =>
            doc.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDocuments(filtered);
    };

    const fetchDocuments = async () => {
        try {
            const foodItemsCollectionRef = collection(firestore, 'foodItems');
            const q = query(foodItemsCollectionRef, orderBy("id", "desc"));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log("Fetched data from Firestore:", data);
            setDocuments(data);
            setFilteredDocuments(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching food items: ", error);
            message.error("Error fetching food items: " + error.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDocuments();
    }, []);

    const handleDelete = async (item) => {
        try {
            await deleteDoc(doc(firestore, "foodItems", item.id));
            setDocuments(docs => docs.filter(doc => doc.id !== item.id));
            setFilteredDocuments(docs => docs.filter(doc => doc.id !== item.id));
            message.success("Item deleted successfully");
        } catch (error) {
            message.error("Error deleting item: " + error.message);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        todo.dateModified = serverTimestamp();
        setProcessing(true);
        try {
            await setDoc(doc(firestore, "foodItems", todo.id), todo, { merge: true });
            setDocuments(docs => docs.map(doc => doc.id === todo.id ? todo : doc));
            setFilteredDocuments(docs => docs.map(doc => doc.id === todo.id ? todo : doc));
            message.success("Item updated successfully");
            setTodo(initialState);
        } catch (error) {
            message.error("Error updating item: " + error.message);
        }
        setProcessing(false);
    };

    return (
        <>
            <div className="py-2">
                <div className="container ">

                    <div className="row py-12 mx-auto" id="storebg">
                        <div className="col text-center">
                            <p className="text-headingColor font-semibold capitalize relative lg:text-7xl md:text-6xl sm:text-5xl xs:text-3xl inline-block">
                                My Food Store
                                <span className="block h-1 mt-2 rounded-lg bg-gradient-to-tr from-orange-400 to-orange-600 w-32 lg:w-72 mx-auto"></span>
                            </p>
                        </div>
                        <div className="col xs:w-full sm:w-full lg:w-[50%] mx-auto">
                            <input
                                type="search"
                                name="search"
                                className="form-control text-center my-5 rounded-lg shadow-lg border-2 border-orange-400 focus:outline-none focus:border-orange-600 transition duration-300 ease-in-out"
                                placeholder="Search by title"
                                value={search}
                                onChange={handleSearchChange}
                            />
                            <p className="text-center text-orange-600 mb-4 font-semibold lg:text-6xl sm:text-3xl xs:text-2xl">
                                Food Items
                            </p>
                        </div>
                    </div>

                    <div className="row mt-2 ">
                        <div className="col">
                            <div className="card p-3 p-md-4 p-lg-5">
                                {!isLoading ? (
                                    <div className="table-responsive">
                                        <Table bordered className="table">
                                            <thead>
                                                <tr>
                                                    <th>Sr.No</th>
                                                    <th>Title</th>
                                                    <th>Calories</th>
                                                    <th>Price</th>
                                                    <th>Category</th>
                                                    <th>Image</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredDocuments.map((item, index) => (
                                                    <tr key={item.id}>
                                                        <td>{index + 1}</td>
                                                        <td className="max-w-24 overflow-hidden text-left pe-2">
                                                            {item.title}
                                                        </td>
                                                        <td>{item.calories}</td>
                                                        <td>{item.price}</td>
                                                        <td>{item.category}</td>
                                                        <td>
                                                            <img
                                                                src={item.imageURL}
                                                                alt={item.title}
                                                                className="img-fluid my-1 p-1 rounded-full w-20 h-20"
                                                            />
                                                        </td>
                                                        <td className='flex flex-row '>

                                                            <FaRegEdit
                                                                className="me-2 text-3xl w-[50%] text-blue-800 cursor-pointer"
                                                                onClick={() => setTodo(item)}
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal" />

                                                            <RiDeleteBin5Line className='w-[50%] text-3xl text-red-500 cursor-pointer'

                                                                onClick={() => handleDelete(item)} />

                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <Spinner animation="grow" />
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* modal  */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Food Item</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <input
                                            type="text"
                                            className='form-control'
                                            name='title'
                                            placeholder='Enter Title'
                                            value={todo.title}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input
                                            type="text"
                                            className='form-control'
                                            name='calories'
                                            placeholder='Enter Calories'
                                            value={todo.calories}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input
                                            type="text"
                                            className='form-control'
                                            name='price'
                                            placeholder='Enter Price'
                                            value={todo.price}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input
                                            type="text"
                                            className='form-control'
                                            name='category'
                                            placeholder='Enter Category'
                                            value={todo.category}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {/* update img  */}
                                    <div className="col-12 mb-3">
                                        {/* Display the current image */}
                                        {todo.imageURL && (
                                            <img
                                                src={todo.imageURL}
                                                alt={todo.title}
                                                className="img-fluid my-1 p-1 rounded-full w-20 h-20"
                                            />
                                        )}

                                        {/* Input for selecting a new image */}
                                        <input
                                            type="file"
                                            className="form-control"
                                            name="imageURL"
                                            placeholder="Please choose an image to update"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    // Create a preview URL and update the state
                                                    const imageUrl = URL.createObjectURL(file);
                                                    setTodo((prev) => ({
                                                        ...prev,
                                                        imageURL: imageUrl,
                                                    }));
                                                }
                                            }}
                                        />
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={handleUpdate}
                            >
                                {!isProcessing ? "Update Food Item" :
                                    <div className="spinner-border spinner-border-sm"></div>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
