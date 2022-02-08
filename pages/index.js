import {Fragment} from "react";
import Link from 'next/link'
function Homepage(params) {
  return (
      <Fragment>
      
         <h1>This is Homepage</h1>
         <ul>
           <li><Link href="/news"> This is news</Link></li>
           <li><Link href="/news/random">This is random</Link></li>
         </ul>
         
         </Fragment>
    );
}
export default Homepage;
