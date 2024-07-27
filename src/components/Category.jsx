import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../store/categoryReducer';

export default function Category() {
    const dispatch = useDispatch();
    const categoryArr = ["усе", "собака", "собака1", "собака2"];
    const category = useSelector(state => state.category.category); // Отримуємо поточне значення cash з Redux

    console.log(category);
    const fun = (category) => {
        console.log(category);
        dispatch(changeCategory(category));
    }
  return (
    <div>
        {categoryArr.map(category => 
            <p onClick={()=> fun(category)}>{category}</p>
        )}
        ;;;{category}
    </div>
  )
}


