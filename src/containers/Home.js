import React,{Component} from 'react'
import Navbar from "../components/Navbar";
import Entity from "./Entity";

export default class Home extends Component{
    render() {
        return (
            <div className="home">
                <Navbar/>
            </div>
        )
    }
}