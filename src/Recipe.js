import React from 'react'
import style from './recipe.module.css'

function Recipe({title,calories,image,ingredient}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredient.map(ingre => (
                    <li>{ingre.text}</li>
                ))}
            </ol>
            <p>Calories : {calories}</p>
            <img className={style.image} src={image} alt={title} />
        </div>
    )
}

export default Recipe
