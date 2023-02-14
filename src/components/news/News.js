import React from 'react'
import "./News.scss";

function News({news}) {
    console.log("Thus is singleNews");
    console.log(news);

  return (
    <div className="News">
        <div className="news-box">
            <div className="image">
                <a href={news?.readMoreUrl} target="_blank" rel="noreferrer">
                    <img src={news?.imageUrl} alt="news" />
                </a>
            </div>
            <div className="body">
                <div className="title">
                    <h6>{news?.title}</h6>
                </div>
                <div className="paragraph">
                    <h6>{news?.content}</h6>
                </div>
            </div>
            <div className="footer">
                <div className="left">
                    <h6 className='time'>{news?.time}</h6>
                    <h5 className='date'>{news?.date}</h5>
                </div>
                <div className="right">
                    <h6>By {news?.author}</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News
