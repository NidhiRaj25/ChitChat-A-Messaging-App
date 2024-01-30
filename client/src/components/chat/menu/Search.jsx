import { Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase,styled } from '@mui/material';


const Component= styled(Box)`
    background-color:#F9F5EB;
    height:45px;
    border-bottom: 1px solid #bba391;
    display:flex;
    align-items : center;  
`
const Wrapper = styled(Box)`
    background-color: #ccbeb3;
    position: relative; 
    margin: 4px 5px;
    width:100%;
    border-radius:10px;
`
const Icon = styled(Box)`
    position: absolute;
    height:100%;
    padding: 6.5px 10px;
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    padding-left:10px;
    height: 15px;
    font-size: 14px; 
`

const Search =  ({setText}) => {
  return (
    <Component>
      <Wrapper>
        <Icon>
        <SearchIcon fontSize='small'/>
        </Icon>
        <InputField 
        placeholder='Search or start new chat'
        onChange={(e) => setText(e.target.value)}/>
      </Wrapper>
    </Component>
  )
}

export default Search
