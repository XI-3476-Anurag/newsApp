import News from '../news/News';
import "./Home.scss"
// import {useDispatch} from "react-redux"

function Home(props) {
    const newsArr = props.getNewsArr;

  return (
    <div className='Home'>
        <div className="container">
            <div className="small-container">
                <div className="news-container">
                    {
                        newsArr?.map((singleNews)=>{
                            return <News key={singleNews.id} news={singleNews}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
