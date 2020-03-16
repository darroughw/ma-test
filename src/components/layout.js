/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Hero from './hero';
import ScoreBreakdown from './scoreBreakdown'
import MattressSale from './mattressSale'
import Testimonials from './testimonials'
import "./layout.scss"

import User1 from '../images/person1.png'
import User2 from '../images/person2.png'
import User3 from '../images/person3.png'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let headerInfo = {
    best: 'Best Value Mattress:',
    brand: '../images/nectar-sleep-logo-vector.svg',
    headline: 'We compared, tested and rated more than 50 foam mattresses.',
    headlineSub: 'Nectar is the best-value foam mattress on the market.',
    headlineBg: '../images/leesa-legend-hero.png'
  }


  let testimonials = [
    {
      copy: '“After months of research into a new mattress an intro to nectar popped up. I took several weeks comparing my choices to nectar and with help from their customer service (2 thumbs up for them) I chose nectar. I have no regrets. My husband and I have the best night’s sleep, the mattress is plush and extremely comfortable and stays cool throughout the night.”',
      image: User1,
      user: '– Sarah Jones • Charlotte, NC.'
    },
    {
      copy: 'I was very hesitant to buy a mattress without trying it out first, but I did a lot of research and decided to take the risk. I tried several different styles of memory foam mattresses and I’d say this falls right in the middle. It’s not too hard, and not too soft. I sink in just enough to feel supported, but not so much that it’s difficult to move. I was stiff in different places, but after a month, I sleep much more soundly."',
      image: User2,
      user: '– Weston Rodgers • Hilton Head, SC.'
    },
    {
      copy: 'I’ve owned the Nectar Mattress for about 8 months now and it’s the best purchase I’ve made for my back. On my last few mattresses, I\'d sleep well for about 5.5-6 hrs and then the backache would kick in. With Nectar, I simply don’t want to get up!! I sleep the whole night. I’ve actually changed my sleeping habits, go to bed earlier to get more rest and wake up rejuvenated."',
      image: User3,
      user: '– Paul H. • Atlanta, GA.'
    }
  ]

  return (
    <>
      <Header />
      <div className="mattress-advisor-containter">
        <Hero {...headerInfo} />
        <ScoreBreakdown />
        <MattressSale />
        <Testimonials messages={testimonials}/>
      </div>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
