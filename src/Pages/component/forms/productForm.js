import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

const ProductForm=({onSubmitHandler,onChangeHandler,values,onCategoryChangeHandler,setValues,subs})=>{

    const {
        title,description,price,category,subCategory,quantity,images,
        shipping,color,brand,colors,brands,categories
    }=values;

    // console.log('from ',subs)

    return(
        <form onSubmit={onSubmitHandler}>
                       <div className="form-group">
                           <label className="form-label">Title</label>
                           <input
                           className="form-control"
                           type="text"
                           name="title"
                           value={title}
                        //    onChange={e=>setValues({...values,[e.target.name]:e.target.value})}
                            onChange={onChangeHandler}
                           />
                       </div>
                       <div className="form-group">
                           <label className="form-label">Description</label>
                           <input
                           className="form-control"
                           type="text"
                           name="description"
                           value={description}
                            onChange={onChangeHandler}
                           />
                       </div>
                       <div className="form-group">
                           <label className="form-label">Price</label>
                           <input
                           className="form-control"
                           type="number"
                           name="price"
                           value={price}
                            onChange={onChangeHandler}
                           />
                       </div>
                       <div className="form-group">
                           <label className="form-label">Category</label>
                           <select className="form-control"
                           name="category"
                           onChange={onCategoryChangeHandler}>
                               <option>please select one</option>
                               {categories.map(c=>(
                                   <option key={c._id} value={c._id}>
                                       {c.name}
                                   </option>
                               ))}
                           </select>
                       </div>

                    {subs.length>0?<div className="form-group">
                        <label>sub-category</label>
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                onChange={(value)=>{
                                    setValues({...values,subCategory:value})
                                }}
                                >
                                {
                                    subs.map(sub=>(
                                        <Option key={sub._id} value={sub._id}>{sub.name}</Option>
                                    ))
                                }
                            </Select>
                    </div>:null}
                    <br />

                       <div className="form-group">
                           <label className="form-label">quantity</label>
                           <input
                           className="form-control"
                           type="number"
                           name="quantity"
                           value={quantity}
                            onChange={onChangeHandler}
                           />
                       </div>

                       <div className="form-group">
                           <label className="form-label">Color</label>
                           <select className="form-control"
                           name="color"
                           onChange={onChangeHandler}>
                               <option>please select one</option>
                               {colors.map((c,index)=>(
                                   <option key={index} value={c}>
                                       {c}
                                   </option>
                               ))}
                           </select>
                       </div>

                       <div className="form-group">
                           <label className="form-label">Brand</label>
                           <select className="form-control"
                           name="brand"
                           onChange={onChangeHandler}>
                               <option>please select one</option>
                               {brands.map((c,index)=>(
                                   <option key={index} value={c}>
                                       {c}
                                   </option>
                               ))}
                           </select>
                       </div>

                       <div className="form-group">
                           <label className="form-label">Shipping</label>
                           <select className="form-control"
                           name="shipping"
                           onChange={onChangeHandler}>
                               <option>please select shipping option !</option>
                               <option value="No">No</option>
                               <option value="Yes">Yes</option>
                           </select>
                       </div>

                       <button className="btn btn-outline-info">save</button>
                       
                   </form>
    )
}

export default ProductForm;