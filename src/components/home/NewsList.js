import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../store/newsSlice';
import './news.css'

export default function NewsList() {

    const dispatch = useDispatch();
    const [section, setSection] = useState([])
    const [totalnews, setTotalnews] = useState([])

    const news = useSelector(state => state.news.newsdata)
    const status = useSelector(state => state.news.status)

    useEffect(() => {
        dispatch(fetchNews())

    }, [])
    useEffect(() => {
        const set = new Set()
        news.map(item => {
            set.add(item.section)
        })
        let array = Array.from(set);
        setSection(array);
        setTotalnews(news)
    }, [news])

    const handleSection = async (item) => {
        let sections = news.filter(newss => {
            return newss.section == item
        })
        setTotalnews(sections)
    }

    return (
        <div className="row">
            <div className="col-lg-3">
                {
                    status == "success"?
                    <>
                        {
                            section.map(item => {
                                return (
                                    <div class="panel panel-default panel-div" key={item}>
                                        <div class="panel-body" onClick={()=>{handleSection(item)}}>{item}</div>
                                    </div>
                                )
                            })
                        }
                    </>
                    :
                    <p>Loading...</p>
                }
            </div>
            <div className="col-lg-9">
                {
                    status == "success" ? 
                    <>
                    {
                        totalnews.map(item => {
                            return <DisplayData item={item}/>
                        })
                    }
                    
                    </>
                    : "Loading..."
                }
            </div>
        </div>
    )
}

const DisplayData = (props) => {
    
    const item = props.item;
    return(
        <div className="row news-div">
            <div className="col-lg-2">
                <img src={item.thumbnail_standard}/>
            </div>
            <div className="col-lg-10">
                <h3>{item.title}</h3>
                <i>Source : {item.source}, by {item.byline}</i>
                <p>{item.abstract}</p>
            </div>
        </div>
    )
}
