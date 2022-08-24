import React from 'react'
import ReactMarkdown from 'react-markdown'

const About = () =>{
  return(
    <div className='container'>
        <ReactMarkdown>![gianistatie's LeetCode Stats](https://leetcode-stats.vercel.app/api?username=gianistatie&theme=Light)
            {/* [test](https://github.com/JeremyTsaii/leetcode-stats) */}
        </ReactMarkdown>
        <ReactMarkdown>![anniebanannie's LeetCode Stats](https://leetcode-stats.vercel.app/api?username=anniebanannie&theme=Light)
            {/* [test](https://github.com/JeremyTsaii/leetcode-stats) */}
        </ReactMarkdown>
    </div>
  )
}

export default About;