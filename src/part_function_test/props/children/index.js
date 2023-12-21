export default function Children(props){
    const profile = {
        border: '1px solid',
        padding:'10px',
        margin:'10px'
    }
    console.log(props.person,'props')
    return (
        <section style={profile}>
        <h2>{props.person.h2text}</h2>
        <img
          className='avatar'
          src={props.person.url}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {props.person.Profession}
          </li>
          <li>
            <b>Awards: {props.person.Awards.length}</b> 
            {props.person.Awards.join()}
          </li>
          <li>
            <b>Discovered: </b>
            {props.person.Discovered}
          </li>
        </ul>
      </section>
    )
} 