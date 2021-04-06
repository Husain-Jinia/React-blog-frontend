import React,{useState, useEffect} from 'react'
import Card from '../UI/Card'
import './style.css'
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom';

function Sidebar(props) {

    const[posts, setPosts] = useState([]);
    
    useEffect(() => {
    const posts = blogPost.data
    setPosts(posts);
    },posts);

    return (
        <div className="sidebarContainer">
            <Card style={{marginBottom:"20px", padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>About US</span>
                    <div className="profileImageContainer">
                        <img src={require("../../blogPostImages/memories-from.jpg")} alt="sidebar-image" />
                    </div>
                    <div className="cardBody">
                        <p className="personalBio">My name is Husain Jinia. I am a software developer....:)</p>
                    </div>
                </div>
            </Card>

            <Card style={{marginBottom:"20px", padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{marginBottom:"20px", padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(posts =>{
                            return(
                                <NavLink to={`/post/${posts.id}`}>
                                    <div className="recentPost">
                                        <h3>{posts.blogTitle}</h3>
                                        <span>{posts.postedOn}</span>
                                    </div>
                                </NavLink>
                            );
                        })
                    }

                </div>
            </Card>
        </div>
     
    
    
    )
}

export default Sidebar
