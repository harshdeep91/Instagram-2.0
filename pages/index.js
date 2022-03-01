import Header from "../components/Header";
import Feed from "../components/Feed";
function Homepage(params) {
  return (
      <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Header />
      <Feed/>
      </div>
    );
}
export default Homepage;
