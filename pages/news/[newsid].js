import {useRouter} from "next/router";
function Detailpage(params) {
    const router=useRouter();
    const news=router.query.newsid;
    return <h1>This is {news} page</h1>;
  }
  export default Detailpage;
  