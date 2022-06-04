
 import Router from 'vue-router'

const ScheduleDetail =()=>import('../pages/mobile/ScheduleDetail')
import login from '../pages/mobile/login'
import Register from '../pages/mobile/Register'

import infos from '../pages/mobile/Infromation'
import SheduleLists from '../pages/mobile/SheduleLists'

const AccountInfo = () => import('../pages/mobile/AccountInfo')
const Edit=()=>import('../pages/mobile/edit')
const FilmEdit=()=>import('../pages/mobile/FilmEdit')
const FilmToEdit=()=>import('../pages/mobile/FilmToEdit')

const ScheduleEdit=()=>import('../pages/mobile/ScheduleEdit')
const Record=()=>import('../pages/mobile/Record');

const RecordDetail=()=>import('../pages/mobile/RecordDetail')



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