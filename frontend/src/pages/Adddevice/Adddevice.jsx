import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
function Adddevice({ onClose, refreshDevices }) {

    const [formData, setFormData] = useState({
        Devicename: '',
        Category: '',
        Status: '',
        Purchaseddate: '',
        Warranty: '',
        Image: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/devices', formData);
            console.log('Device added successfully:', response.data);
            refreshDevices()
            onClose();
        } catch (error) {
            console.error('Error adding device:', error)
        }
    };

    // const [selectedImages, setSelectedImages] = useState([null, null]);
    // const [imageNames, setImageNames] = useState(['', '']);

    // const handleImageChange = (index, e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //             const updatedSelectedImages = [...selectedImages];
    //             updatedSelectedImages[index] = reader.result;
    //             setSelectedImages(updatedSelectedImages);
    //         };
    //         reader.readAsDataURL(file);
    //         const updatedImageNames = [...imageNames];
    //         updatedImageNames[index] = file.name;
    //         setImageNames(updatedImageNames);
    //     }  
    // };

    const [selectedImages, setSelectedImages] = useState([null, null]);
    const [imageNames, setImageNames] = useState(['', '']);
    const handleImageChange = (index, e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const updatedSelectedImages = [...selectedImages];
                updatedSelectedImages[index] = reader.result;
                setSelectedImages(updatedSelectedImages);
            };
            reader.readAsDataURL(file);
            const updatedImageNames = [...imageNames];
            updatedImageNames[index] = file.name;
            setImageNames(updatedImageNames);
        }
    };

    return (
        <>
            {/* <div className="flex justify-center items-center h-screen "> */}
            <div className="flex justify-center items-center w-screen h-screen absolute top-0 left-0   ">

                <div className='w-96 h-auto space-y-3 bg-white border-2 border-black rounded-lg p-5'>
                    <div className='flex justify-between'>
                        <h2 className='capitalize text-xl font-bold'>add device</h2>
                        <CloseIcon onClick={onClose} />
                    </div>
                    {/* <form> */}    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-1">
                            <label className='capitalize font-medium'>name</label>
                            <input
                                type="text"
                                name="Devicename"
                                value={formData.Devicename}
                                onChange={handleChange}
                                className="shadow-sm border-2 rounded-md w-full px-3 py-2"
                                placeholder="enter your device name"
                                required
                            />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className='capitalize font-medium'>category</label>
                            <input
                                type="text"
                                name="Category"
                                value={formData.Category}
                                onChange={handleChange}
                                className="shadow-sm border-2 rounded-md w-full px-3 py-2"
                                placeholder="category"
                                required
                            />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className='capitalize font-medium'>Vendor</label>
                            <input
                                type="text"
                                name="Status"
                                value={formData.Status}
                                // value={e.Status}
                                onChange={handleChange}
                                className="shadow-sm border-2 rounded-md w-full px-3 py-2"
                                placeholder="vendorName"
                                required

                            />
                            {/* <select>
                 <option value=""></option>
                <option value="aasign">Assign</option>
                <option value="Available">Available</option>
                <option value="Request">Request</option>
                <option value="Not">Not Available</option>
                    </select> */}



                        </div>

                        <div className="space-y-1 flex flex-col">
                            <label className='capitalize font-medium'>purchased date</label>
                            <input
                                type="date"
                                name="Purchaseddate"
                                value={formData.Purchaseddate}
                                onChange={handleChange}
                                className="shadow-sm border-2 rounded-md w-full px-3 py-2"
                                placeholder="purchased"
                                required
                            />
                        </div>

                        <div className="space-y-1 flex flex-col">
                            <label className='capitalize font-medium'>warranty start date</label>
                            <input
                                type="date"
                                name="Warranty"
                                value={formData.Warranty}
                                onChange={handleChange}
                                className="shadow-sm border-2 rounded-md w-full px-3 py-2"
                                placeholder="warranty start date"
                                required
                            />
                        </div>

                        <div className='flex justify-between'>
                            <div className="h-full space-y-1">
                                <div>
                                    <label className='capitalize font-medium'>warranty year</label>
                                </div>
                                <input
                                    type="date"
                                    name="Warranty"
                                    value={formData.Warranty}
                                    onChange={handleChange}
                                    className="shadow-sm border-2 rounded-md w-full px-3 py-2"
                                    placeholder="year"
                                    required
                                />
                            </div>

                            <div className="h-full space-y-1">
                                <div>
                                    <label className='capitalize font-medium'>warranty month</label>
                                </div>
                                <input
                                    type="date"
                                    className="shadow-sm border-2 rounded-md w-full px-3 py-2"
                                    placeholder="month"
                                    required
                                />
                            </div>


                        </div>
                        <div className='h-full  p-2 shadow-2xl flex justify-between'>
                            {[0, 1].map((index) => (
                                <div key={index}>
                                    {/* <p className="text-sm">{`img${index + 1}`}</p> */}
                                    <p className="text-md pl-2 capitalize font-semibold text-lg   ">{index === 0 ? 'Product Picture:' : 'product bill:'}</p>
                                    <label htmlFor={`imageUpload${index}`} className="cursor-pointer">
                                        <div className="relative w-40 h-28 rounded-md border border-double border-gray-300 flex items-center justify-center  overflow-hidden">
                                            {selectedImages[index] ? (
                                                <img
                                                    src={selectedImages[index]}
                                                    alt="Preview"
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                            ) : (
                                                <CloudUploadIcon className="w-24 h-24 text-gray-400" />
                                            )}
                                        </div>
                                    </label>
                                    <input
                                        id={`imageUpload${index}`}
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => handleImageChange(index, e)}
                                    />
                                    {/* <p className="text-sm">{`img${index + 1}`}</p> */}
                                    {imageNames[index] && <p className="text-sm">{imageNames[index]}</p>}
                                </div>
                            ))}
                        </div>

                        <button type='submit' onClick={() => console.log("Add button clicked")} className='rounded mt-4 w-full h-10 bg-[#2e2159] uppercase text-white text-xl font-semibold' >Add</button>
                    </form>
                </div>


            </div>
        </>
    );
}

export default Adddevice;

