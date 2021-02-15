const initState = {
    companyName: '',
    allPersons: [],
    selectedCompany: {}
}
  
  
  const Reducer = (state=initState,action) => {

    switch (action.type){

      case "SET_PERSONS":
        return {
          ...state,
          allPersons: action. allPersons
        }

      
      case "SET_COMPANY":
        return {
          ...state,
          companyName: action.companyName
        }

        case "SET_SELECTED-COMPANY":
          return {
          ...state,
          companyName: action.selectedCompany
        }


      
   
      // you can have as many case statements as you need
     
      default: 
      
        return state
    
    }//swtich action typess
  }// const Reducer

 

  export default Reducer