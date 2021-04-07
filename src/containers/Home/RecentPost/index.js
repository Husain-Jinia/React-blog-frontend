import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card'

export default function RecentPosts() {
    return (
            
            <div style={{width:'70%'}}>
                <Card style={{marginBottom:'20px '}}>
                    <div className="postImageWrapper">
                        <img src="https://unsplash.com/photos/sf_1ZDA1YFw" alt=""/>
                    </div>

                    <div style={{textAlign:'center'}}>
                        <span>Featured</span>
                        <h2>Fitness mantra to live fit life</h2>
                        <span>posted on 21st july 2016 by Blogging Tips</span>
                        <p>lorem ipsumedjkd,m vdso;gm;sldgd,v'sdv.'s;b,;sbmlkshfsgksfb smfh</p>
                        
                        <button>Read More</button>
                    </div>

                

                </Card>
            </div>
        
    )
}
