import { getImageUrl } from '../utils.js';
import Children from '../children/index.js';
export default function Gallery() {
    // const profile = {
    //     border: '1px solid',
    //     padding:'10px',
    //     margin:'10px'
    // }
    const person =[
        {
            name:'Maria Skłodowska-Curie',
            h2text:'Maria Skłodowska-Curie',
            url:getImageUrl('szV5sdG'),
            Profession:'physicist and chemist',
            Awards:['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
            Discovered:'polonium (chemical element)'
        },
        {
            name:'Katsuko Saruhashi',
            h2text:'Katsuko Saruhashi',
            url:getImageUrl('YfeOqp2'),
            Profession:'geochemist',
            Awards:['Miyake Prize for geochemistry','Tanaka Prize' ],
            Discovered:'a method for measuring carbon dioxide in seawater'
        }
    ]
    const ListItem =()=> person.map(item=>{
        return <Children person={item} key={item.name}></Children>
    })
  return (
    <div>
      <h1>Notable Scientists</h1>
      {/* <section style={profile}>
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className='avatar'
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section> */}
    <ListItem></ListItem>
      {/* <Children person={person[0]}></Children>
      <Children person={person[1]}></Children> */}
      {/* <section style={profile}>
        <h2>Katsuko Saruhashi</h2>
        <img
          className='avatar'
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section> */}
    </div>
  );
}