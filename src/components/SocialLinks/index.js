import React from 'react'

import Icons from './Icons'
import links from './content'

import {
  SocialLinksWrapper,
  SocialLinksList,
  SocialLinksItem,
  SocialLinksLink,
  IconWrapper,
} from './styles'

const SocialLinkss = () => {
  return (
    <SocialLinksWrapper>
      <SocialLinksList>
        {links.map((link, index) => {
          const Icon = Icons[link.label]

          return (
            <SocialLinksItem key={index}>
              <SocialLinksLink
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper>
                  <Icon />
                </IconWrapper>
              </SocialLinksLink>
            </SocialLinksItem>
          )
        })}
      </SocialLinksList>
    </SocialLinksWrapper>
  )
}

export default SocialLinkss
