import styled from 'styled-components';

export const Container = styled.section`
    max-width: 960px;
    margin: 20px auto;
    box-shadow: 0 0 1em #6c757d;
    padding: 20px;
    border-radius: 5px;
`;
export const ContentTitle = styled.section`
    display: flex;
    justify-content: space-between;
`;
export const ButtonAction = styled.section`
    margin: 20px 0px;
`;

export const ButtonSubmit = styled.button`
    background-color: 'white';
    color: #198754;
    padding: 8px 12px;
    border: 1px solid #198754;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    :hover{
        transition: ease-out .3s;
        background-color: #157347;
        color: #fff;
    }
`;

export const Title = styled.h1`
    color: #3e3e3e;
    font-size: 23px;
`;

export const Table = styled.table`
    width: 100%;
    th{
        background-color: #ffd219;
        color: #3e3e3e;
        padding: 10px;
    }
    td{
        background-color: #f6f6f6;
        color: #3e3e3e;
        padding: 8px;
    }
`;