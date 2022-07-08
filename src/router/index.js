
 import Router from 'vue-router'

const ScheduleDetail =()=>import('../pages/ScheduleDetail')
import login from '../pages/login'
import Register from '../pages/Register'

import infos from '../pages/Infromation'
import SheduleLists from '../pages/SheduleLists'

const AccountInfo = () => import('../pages/AccountInfo')
const Edit=()=>import('../pages/edit')
const FilmEdit=()=>import('../pages/FilmEdit')
const FilmToEdit=()=>import('../pages/FilmToEdit')

const ScheduleEdit=()=>import('../pages/ScheduleEdit')
const Record=()=>import('../pages/Record');

const RecordDetail=()=>import('../pages/RecordDetail')



console.log('rt');


export const constantRoutes=[
{

	path:'/SheduleLists',
 component:SheduleLists,
 meta:{
 	icon:'el-icon-s-ticket',
 	name:'购票'
 },
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
  meta:{
 	icon:'el-icon-user',
 	name:'用户'
 },
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
}
,
{	path:'/Record',
	name:'Record',
	component:Record,
	 meta:{
 	icon:'el-icon-s-comment',
 	name:'评价'
 },

},
{	path:'/RecordDetail',
	name:'RecordDetail',
	component:RecordDetail,
	meta:{hide:true}

},


{

	path: '/',
    redirect: '/SheduleLists',
    meta:{hide:true}
},{

	path: '*',
    redirect: '/SheduleLists',
    meta:{hide:true}
}
]


export const dynamicRoutes=[

{

	path:'/Edit',
	name:'Edit',
	 meta:{
 	icon:'el-icon-edit',
 		level:5,
 	name:'编辑',
 },
	component:Edit,
	redirect:'/Edit/FilmToEdit',
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
}]

 export default new Router({
 routes: constantRoutes,


 })