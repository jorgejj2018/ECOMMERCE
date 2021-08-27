import {firebase , db} from '../firebase/firebaseConfig'

export const getProductAll = () => async (dispatch) => {
   db.collection('Productos').get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const dataDocument = doc.data();
          return { ...dataDocument, id: doc.id };
        });
        console.log(data)
        dispatch({ type: 'getProduct', payload: data });
    });
  };

  export const getProductMen = () => async (dispatch) => {
    db.collection('Productos').where('categoria', '==', 'hombre').get()
       .then((snapshot) => {
         const data = snapshot.docs.map((doc) => {
           const dataDocument = doc.data();
           return { ...dataDocument, id: doc.id };
         });
         console.log(data)
         dispatch({ type: 'getProductMen', payload: data });
     });
   };

     export const getProductWoman = () => async (dispatch) => {
    db.collection('Productos').where('categoria', '==', 'mujer').get()
       .then((snapshot) => {
         const data = snapshot.docs.map((doc) => {
           const dataDocument = doc.data();
           return { ...dataDocument, id: doc.id };
         });
         console.log(data)
         dispatch({ type: 'getProductWoman', payload: data });
     });
   };

   export const getProductDetail = (id) => async (dispatch)=>{
     const res = await db.collection("Productos").doc(id).get()
     const data = await res.data()
     console.log(data)
     dispatch({ type: 'getProductDetail', payload: data });
   }

   