// export default function Home(props){
//     return(
//         <div>
//             {props.x}
//         </div>
//     )
// }

function Home(props){
    return (
        <div className="container" >
            <div className="row row-cols-4">
                {props.x.map((student) =>(
                    <div className="col mb-3" key ={student.id}>
                        <div className="card">
                        <img src={student.image} className="card-img-top" alt={student.name}/>
                        <div className="card-body">
                            <h3 className="card-title">{student.name}</h3>
                            <p className="card-text">Age:{student.age}</p>
                            <p className="card-text">Course:{student.course}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home;