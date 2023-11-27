import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import Loader from '../Component/Loader';
import BlogDetails from './../Component/BlogDetails';
import { postDetails } from '../APIRequest/APIRequest';

const DetailsPage = () => {

    let {postID} = useParams();

    let {list,setList}= useState(null);

    useEffect(()=>{

        (async()=>{

            let result = await postDetails(postID);
            setList(result)
        })()

    },[postID])

    return (
        <Layout>
            {list===null?<Loader/>:<BlogDetails list={list}/>}
        </Layout>
    );
};

export default DetailsPage;