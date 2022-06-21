
 import Router from 'vue-router'

const ScheduleDetail =()=>import('../pages/ScheduleDetail.mb')
import login from '../pages/login.mb'
import Register from '../pages/Register.mb'

import infos from '../pages/Infromation.mb'
import SheduleLists from '../pages/SheduleLists.mb'

const AccountInfo = () => import('../pages/AccountInfo.mb')
const Edit=()=>import('../pages/edit.mb')
const FilmEdit=()=>import('../pages/FilmEdit.mb')
const FilmToEdit=()=>import('../pages/FilmToEdit.mb')

const ScheduleEdit=()=>import('../pages/ScheduleEdit.mb')
const Record=()=>import('../pages/Record.mb');

const RecordDetail=()=>import('../pages/RecordDetail.mb')



console.log('rt');



 export default new Router({
routes:[

{

	path:'/SheduleLists',
 component:SheduleLists,
 children:[
			{
   name:'ScheduleDetail',
	path:'ScheduleDetail',
	component:ScheduleDetail
				}


 ]

},
{
path:'/AccountInfo',
 component:AccountInfo,
 children:[
			{
   name:'login',
	path:'login',
	component:login
				},
				{
   name:'Register',
	path:'Register',
	component:Register
				},
							{
   name:'infos',
	path:'infos',
	component:infos
				}



 ]
},
{

	path:'/Edit',
	name:'Edit',
	component:Edit,
	children:[
    {
    	path:'FilmToEdit',
    	name:'FilmToEdit',
    	component:FilmToEdit,
    	
    
    },     {path:'FilmEdit',
    	name:'FilmEdit',
    	component:FilmEdit,},

{path:'ScheduleEdit',
    	name:'ScheduleEdit',
    	component:ScheduleEdit,}
	]
}
,
{	path:'/Record',
	name:'Record',
	component:Record,

},
{	path:'/RecordDetail',
	name:'RecordDetail',
	component:RecordDetail,

},


{

	path: '/',
    redirect: '/SheduleLists'
},{

	path: '*',
    redirect: '/SheduleLists'
}



]



 })