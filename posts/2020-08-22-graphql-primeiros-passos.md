---
date: 2020-08-29 03:32:19
title: 'Graphql: Primeiros passos'
description: Comece ainda hj a utilizar o graphql
category: JS
background: '#7AAB13'
---

# Lorem ipsum

Proin suscipit luctus orci placerat fringilla. Donec hendrerit laoreet risus eget adipiscing. Suspendisse in urna ligula, a volutpat mauris. Sed enim mi, [adipiscing](http://google.com) eu pulvinar vel, sodales vitae dui. :thumbsup: :smile: :sparkler:

![Desert](/assets/images/desert.jpg)

```jsx
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Logo from '../Logo'

import {
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription,
} from './styles'

const Profile = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `)

  const {
    siteMetadata: { title, description, position },
  } = site

  return (
    <ProfileWrapper>
      <ProfileLink to="/">
        <Logo />
        <ProfileAuthor>
          {title}
          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor>
      </ProfileLink>

      <ProfileDescription>{description}</ProfileDescription>
    </ProfileWrapper>
  )
}

export default Profile
```

## Fusce a metus eu

Pellentesque `sed` sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.

> Proin ornare ligula eu tellus tempus elementum. Aenean bibendum iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Ut vel arcu ac tortor adipiscing hendrerit vel sed massa. Fusce sem libero, lacinia vulputate interdum non, porttitor non quam. Aliquam sed felis ligula. Duis non nulla magna.
> Nullam eros mi, mollis in sollicitudin non, tincidunt sed enim. Sed et felis metus, rhoncus ornare nibh. Ut at magna leo. Suspendisse egestas est ac dolor imperdiet pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, erat sit amet venenatis luctus, augue libero ultrices quam, ut congue nisi risus eu purus. Cras semper consectetur elementum.

### Cras semper consectetur elementum

Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.

Proin suscipit luctus orci placerat fringilla. Donec hendrerit laoreet risus eget adipiscing. Suspendisse in urna ligula, a volutpat mauris. Sed enim mi, bibendum eu pulvinar vel, sodales vitae dui. Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.

#### Proin suscipit luctus

Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.

- Lorem
- Ipsum
- Dolor
- Sit
- amet

```Delphi
procedure TSPEDContribuicoes.ProcessarRegistros;
begin
   with FComponenteSPED do
   begin
      DT_INI := FDataInicial;
      DT_FIN := FDataFinal;

      FBloco0.SPEDPisCofins(FComponenteSPED).GeraBloco_0;
      FBlocoA.SPEDPisCofins(FComponenteSPED).GeraBloco_A;
      FBlocoC.SPEDPisCofins(FComponenteSPED).GeraBloco_C;
      FBlocoD.SPEDPisCofins(FComponenteSPED).GeraBloco_D;
      FBlocoF.SPEDPisCofins(FComponenteSPED).GeraBloco_F;
      FBlocoI.SPEDPisCofins(FComponenteSPED).GeraBloco_I;
      FBlocoM.SPEDPisCofins(FComponenteSPED).GeraBloco_M;
      FBlocoP.SPEDPisCofins(FComponenteSPED).GeraBloco_P;
      FBloco1.SPEDPisCofins(FComponenteSPED).GeraBloco_1;


      Path    := FParametros.Diretorio;
      Arquivo := 'SPED_Contrib_' + FormatFloat('00', MonthOf(FDataInicial)) +
        FormatFloat('0000', YearOf(FDataInicial)) + '.txt';

      SaveFileTXT;
   end;
end;
```

#### Sed enim mi

Proin suscipit luctus orci placerat fringilla. Donec hendrerit laoreet risus eget adipiscing. Suspendisse in urna ligula, a volutpat mauris. Sed enim mi, bibendum eu pulvinar vel, sodales vitae dui. Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.
44 posts/2015-01-05-lorem-lorem-ipsum.md
@@ -0,0 +1,44 @@
