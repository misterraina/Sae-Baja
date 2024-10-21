import React from 'react'
import imag from '../assets/team.jpg'

export default function Team() {
  return (
    <div className="p-4">
      {/* Image Section */}
      <img src={imag} alt="Team pic" className="w-full h-screen mb-4 object-cover" />
      
      {/* Description Section */}
      <p className="text-gray-700 text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sint sapiente sequi ipsum omnis at 
        labore vel ad facilis quo laboriosam placeat explicabo ducimus est, expedita ratione odit eos quibusdam 
        quod nobis qui id vitae. Aliquid delectus veritatis, incidunt ullam recusandae qui. Incidunt veritatis 
        nam cupiditate ea eius debitis necessitatibus exercitationem tenetur! Quaerat repellat dolorem ullam, 
        minus veniam odio quas alias debitis id deleniti ad accusantium voluptatibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint corporis repellendus, libero dolores accusamus, doloremque reiciendis perferendis voluptas adipisci reprehenderit perspiciatis minus molestiae possimus qui maxime aspernatur nesciunt, consequatur corrupti quam asperiores! Ullam dolorum quae repellat dolore eaque. Recusandae corporis at, nisi voluptatem est voluptas odit ipsum accusamus vel quasi itaque assumenda minus beatae molestias esse! Molestiae sint aspernatur fuga consequatur hic. Nam, dolorem culpa placeat qui est quos similique debitis quae quasi consequuntur asperiores veniam! Velit fuga a accusamus, atque, doloremque porro iure libero aspernatur perspiciatis, sequi placeat.
      </p>
    </div>
  )
}
