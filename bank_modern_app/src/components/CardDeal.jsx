import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'
import { card } from '../assets'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' /> in a few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fuga, aliquam quaerat ad harum laboriosam voluptatum repellat, pariatur asperiores totam temporibus ratione laudantium accusantium facilis deserunt inventore hic eius iusto!
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>

    </section>
  )


export default CardDeal