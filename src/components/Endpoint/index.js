import React from 'react'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import classes from './index.module.scss'

const mappings = {
  PATCH: {
    color: '#50E3C2',
    background: '#161B22',
    border: '#193123',
  },
  POST: {
    color: '#49CC90',
    background: '#161B22',
    border: '#193123',
  },
  GET: {
    color: '#61AFFE',
    background: '#161B22',
    border: '#47476b',
  },
}

const HeaderWrapper = styled.div`
  border: 1px solid ${(props) => mappings[props.method].border};
  background: ${(props) => mappings[props.method].background};
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 24px;
`

const MethodName = styled.h2`
  color: ${(props) => mappings[props.method].color};
  font-weight: 700;
  font-size: 14px;
  margin: 0 10px 0 0;
`

const EndpointUrl = styled.span``

const CopyButton = styled.button`
  color: ${(props) => mappings[props.method].color};
  background: inherit;
  font-size: 14px;
  border: none;
  cursor: pointer;
  height: 45px;
  align-items: center;
  font-weight: 500;
  padding: 0 10px;
  &:hover {
    filter: brightness(0.6);
  }
`

const Header = styled.span`
  padding: 10px 15px;
  display: flex;
  align-items: center;
`

export default function HTTPHeader({ type, path, auth }) {
  const [copied, setCopy] = React.useState(false)
  React.useEffect(() => {
    if (copied) {
      setTimeout(() => setCopy(false), 3000)
    }
  }, [copied])
  const BASE_URL = 'https://catnip.metrobots.xyz'
  const fullUrl = new URL(path, BASE_URL).href
  const url = path
  return (
    <HeaderWrapper method={type}>
      <Header>
        <MethodName method={type}>{type}</MethodName>
        <EndpointUrl
          dangerouslySetInnerHTML={{
            __html: url.replace(/:[a-z_]+/g, '<b>$&</b>'),
          }}
        />
        {auth === 'yes' && <p className={classes.note}>🔒</p>}
      </Header>
      <CopyToClipboard text={fullUrl} onCopy={() => setCopy(true)}>
        <CopyButton method={type}>{copied ? 'Copied!' : 'Copy URL'}</CopyButton>
      </CopyToClipboard>
    </HeaderWrapper>
  )
}
