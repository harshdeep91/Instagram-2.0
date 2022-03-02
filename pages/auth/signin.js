// import { async } from "@firebase/util"
import {getProviders,signIn} from "next-auth/react"
import Header from "../../components/Header";
   
const signin = ({providers}) => {
  return    (
      <div>
          <Header /> 
          <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 px-14 text-center">
              <img className="w-80"
                  src="https://links.papareact.com/ocw" alt="instagram" />
              <p className=" font-xs italic">This is a Clone App</p>
                <div className="mt-40">
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                <button className="p-3 rounded-lg bg-blue-400 text-white" onClick={() => signIn(provider.id,{callbackUrl:'/'})}>
                Sign in with {provider.name}
                </button>
                    </div>
                ))}
              </div>
              </div>
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