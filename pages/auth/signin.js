// import { async } from "@firebase/util"
import {getProviders,signIn} from "next-auth/react"
import Header from "../../components/Header";
   
const signin = ({providers}) => {
  return    (
      <div>
          <Header/>
    {   Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button className="p-3 rounded-lg bg-blue-400 text-white" onClick={() => signIn(provider.id)}>
          Sign in with {provider.name}
        </button>
      </div>
    ))     }
      </div>
          );
};
 export async function getServerSideProps(){
     const providers = await getProviders();
     return {
         props: {
             providers,
         }
     }
 }
export default signin