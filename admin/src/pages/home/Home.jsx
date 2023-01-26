import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Profile from "../../crud/component/profile/Profile";




const Home = () => {
  
  return (
    <div>
      <Navbar />
      <div className="home">
      <Sidebar />
      <div className="homeContainer">
        

        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;