import '../../app/globals.css'

export function Parametre() {
    return (
        <div style={{width: '500px', height: 'auto',display:"flex",justifyContent:"space-between"}} className="bg-gray-950 mb-2 " >
          
                <div className=" p-2 text-white-steam-a">
                <h3 className="text-blue-steam mb-2">Style</h3>
                <ul className="text-white-steam-a ">
                    
                    <li className='text-slate-400  '>
                        Sujet&nbsp;: <span className='text-thin text-white'>saison </span> 
                     </li>
                     <li className='text-slate-400  ' >
                        verbe&nbsp;: <span className='text-regular text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi iste nisi incidunt natus unde, quaerat dolores vitae enim expedita maiores voluptate cumque dignissimos! Mollitia suscipit, ipsum doloribus sit rerum quam.</span>
                     </li>
                     <li className='text-slate-400  '>
                        Complément&nbsp;: <span className='text-regular text-white'>saison</span> 
                     </li>
                     <li className='text-slate-400  '>
                        Paramètres&nbsp;: <span className='text-regular text-white'>saison</span> 
                     </li>
                   
                   
                   
                </ul>
                </div>
             
              
            </div>
         
       
    );
}
