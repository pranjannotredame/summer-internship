import { Children, createContext,Text,useState} from "react";


export const FavoriteContext = createContext(
      {
            id:[],
            addFavroiteItem:(id)=>{},
            remFromFav:(id)=>{}
      }
);


const FavoriteContextProvider =({children})=>{
      const [favroiteItem, setFavroiteItem] = useState([]);

      const addFavroiteItem=(id)=>{
            setFavroiteItem((currentFavId)=>[...currentFavId,id]);
      }

      const removeFromFavroiteItem = (id) =>{
            setFavroiteItem((currentFavId)=> currentFavId.filter(currentFavId=>currentFavId !== id))
      }

      const value={
            ids:favroiteItem,
            addFavroiteItem:addFavroiteItem,
            removeFromFavroiteItem: removeFromFavroiteItem
      } 

      return <FavoriteContext.Provider value={value}> {children} </FavoriteContext.Provider>
}

export default FavoriteContextProvider;