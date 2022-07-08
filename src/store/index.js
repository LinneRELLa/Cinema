
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)




const actions={
   setRouter(mstore,router){
mstore.commit('setRouter',router)
   },

   allFilms(mstore,data){
mstore.commit('AllFilms',data.data);
   },
   method(mstore,data){

mstore.commit('METHOD',data);

   },
   ac(mstore,data){

   	mstore.commit('AC',data)
   },
   record(mstore,data){
   	mstore.commit('Record',data)
   },
   update(mstore,data){
      mstore.commit('UpdateFilms',data)
      
   },
   addrecord(mstore,data){
      mstore.commit('AddRecord',data)
   }


}
const mutations={
   setRouter(state,router){
state.router=router
   },


AllFilms(state,data){
state.data=data;
},
METHOD(state,data){
	state.METHOD=data;
},
AC(state,data){
	state.AC=data;

},
Record(state,data){
	state.Record=data;
},
UpdateFilms(state,data){
state.data.data=data;
},
AddRecord(state,data){
state.Record.push(data);

}
}
const state={

data:[],
METHOD:{},
AC:{status:0},
Record:[],
router:[]

}


const store =new Vuex.Store({
actions,
mutations,
state,



})
export default store;








