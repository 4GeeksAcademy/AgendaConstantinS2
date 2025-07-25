export const initialStore=()=>{
  return{
    
    newIn: []
  }
}



export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'addNewIn':

      const { id } = action.payload

      return {
        ...store,
        newIn: [...newIn[{id}
        ]]
      };
    default:
      throw Error('Unknown action.');
  }    
}
