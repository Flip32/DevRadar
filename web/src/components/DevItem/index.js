import React from "react";
import './styless.css'

function DevItem( { dev } ) {
    //const { dev } = props; e deixa props no parametro
    return (
        <li className="dev-item">
            <header>
                <img src={ dev.avatar_url } alt={ dev.name } />
                <div className="user-info">
                    <strong> { dev.name } </strong>
                    <span> { dev.techs.join(', ') } </span>
                </div>
            </header>
            <p> { dev.bio } </p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no GitHub</a>
        </li>
    )
}

export default DevItem
