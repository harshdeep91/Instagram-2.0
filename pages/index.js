import Header from "../components/Header";
import Feed from "../components/Feed";
import Modal from "../components/Modal";
function Homepage(params) {
  return (
      <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
   
      <Header />
      <Feed />
      <Modal/>
    
      </div>
    );
}
export default Homepage;
