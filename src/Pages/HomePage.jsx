import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import BlogList from '../Component/BlogList';
import { latestPost } from '../APIRequest/APIRequest';
import Loader from '../Component/Loader';

const HomePage = () => {


    let [list,setList]= useState(null);


    useEffect(()=>{

        (async()=>{
            let result=await latestPost();
            setList(result)
        })()
    },[])


    return (
        <Layout>
            {list===null?<Loader/>:<BlogList list={list}/>}
        </Layout>
    );
};

export default HomePage;