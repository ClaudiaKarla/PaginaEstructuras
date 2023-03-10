const router =createBrowserRouter([
{
    path:"/",
    children: [
                { 
                    path:'/'
            },
            {
                path:'create-archivo'
            },
            {
                path:'create-proyecto'
            },
            {
                path:'archivo:/:id'
            },
            {
                path:'proyecto/id'
            }
        ]
    }
])
export default router