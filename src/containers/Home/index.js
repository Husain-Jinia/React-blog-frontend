import React from'react';
import Card from '../../components/UI/Card';
import './style.css';
import Sidebar from '../../components/Sidebar'
import RecentPosts from './RecentPost';
import blogData from '../../data/blog.json'
import Layout from '../../components/Layout';

    const Sideimage= props => {
        return(
        <div style={{height: `${props.sideImageHeight}px`}}>
            <img src={props.src} alt=""/>
        </div>
        )
    }

    const imageGallery = props => (<div className="galleryPost" style={props.galleryStyle}>
                    
    <section style={{width: props.largeWidth}}>
       <div className="mainImageWrapper">
            <img src={require('../../blogPostImages/'+ props.imagesArray[2])} alt=""/>
       </div>

    </section>
    <section className="sideImageWrapper" style={{width: props.smallWidth}}>
        {
            props.imagesArray.map(image =>
                <Sideimage 
                    height={props.sideImageHeight}
                    src={require('../../blogPostImages/'+ image)}
                    alt=""
                />
                )
        }
        
        
    </section>
</div>);

    const Home = props => {

        const galleryHeight = 450;
        const galleryStyle={
            height: galleryHeight+'px',
            overflow:'hidden'

        }

    const sideImageHeight = galleryHeight/3

    const imgAr = blogData.data.map(post => post.blogImage) 
    console.log(blogData)
    return(
        <div>
            <Card >

                <imageGallery
                    largeWidth="70%"
                    smallWidth="30%"
                    sideImageHeight = {sideImageHeight}
                    galleryStyle = {galleryStyle}
                    imagesArray= {imgAr}
                    />
            
            </Card>

                <Layout>
                    <RecentPosts />
                </Layout>
             
        </div>


    );
}

export default Home;