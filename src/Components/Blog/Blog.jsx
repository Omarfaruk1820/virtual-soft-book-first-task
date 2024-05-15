import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import PostCard from "./PostCard/PostCard";
import Footer from "./Footer/Footer";


const Blog = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <PostCard></PostCard>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Blog;