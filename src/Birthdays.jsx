/* eslint-disable react/prop-types */

function Birthdays({ data }) {
    return (
        <ul>
            {data.map((person) => {
                const { id, name, age, image } = person;
                
                return (
                    <li key={id} className="birthdays-item">
                        <img src={image} alt={name} />
                        <div className="birthday-info">
                            <h2>{name}</h2>
                            <h3>{age} years</h3>
                        </div>
                    </li>
                );
            })}
        </ul>
    )
}

export default Birthdays