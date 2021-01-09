import { useState } from 'react'
import styled from 'styled-components';

const SearchWrapper = styled.div`
    text-align: center,
`

const Form = styled.form`
    margin: 10px;
`

const SearchInput = styled.input`
    padding: 15px;
    width: 500px;
    border: none;
    font-size: 15px;
    font-weight: 600;
    font-family: 'Kufam', cursive;

    :focus {
        outline: none;
    }

    @media screen and (max-width:790px) {
        width: 300px;
    }
`

const Button = styled.button`
    padding: 20px 30px;
    margin: 10px;
    border: none;
    background: #ff1057;
    color: white;
    font-size: 15px;
    font-weight: 600;

    :focus {
        outline: none;
    }

`

const SearchBox = ({ setQuery }) => {

    const [search, setSearch] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return (
        <SearchWrapper>
            <Form onSubmit={submitHandler}>
                <SearchInput type='text' value={search} onChange={e => setSearch(e.target.value)} placeholder='Enter Artist Name...' />
                <Button type="submit"><i className="fas fa-search"></i>  Search</Button>
            </Form>
        </SearchWrapper>
    )
}

export default SearchBox
