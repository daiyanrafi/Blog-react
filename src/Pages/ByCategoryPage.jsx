import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import BlogList from './../Component/BlogList';
import Loader from '../Component/Loader';
import { postByCategory } from '../APIRequest/APIRequest';

const ByCategoryPage = () => {


    let{categoryID}=useParams();
    // alert(categoryID)

    let [list,setList]=useState(null);

    useEffect(()=>{

        (async()=>{
            let result= await postByCategory(categoryID);
            setList(result)
        })()
         
    },[categoryID])


    return (
        <Layout>
           {list===null?<Loader/>:<BlogList list={list}/>}
        </Layout>
    );
};

export default ByCategoryPage;