import experence from '../../json/experience.json'
export const Experience = (props) => {
  return (
      <>
         <div className={`tab_grid experience resume_box ${props.active  === 1 ? "active" : ""}`}>
            {experence && experence.map((el,id)=>{
               console.log(el,"fdsfsd");
               return(
                  <div className= "tab_item tab_item_all resume_item" key={id}>
                     <h2 className='roboto-regular'>{el.title}</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Iusto repudiandae esse eos explicabo quae
                        assumenda id earum? Nemo, eveniet tempora.
                        </p>
                  </div>
               ) 
            })}
         </div>
      </>
   )
}
