import React from 'react';


const FilmeGhibli = (props) => {
    const { filmes } = props;
    if (!filmes || filmes.length === 0) return <p>Carregando ...</p>;
    return (
        <TabelaDeProdutos listaDeProdutos={filmes}/>
    );
};

class Linha extends React.Component {
    render() {
        const filmes = this.props.filmes;

        return (
            <tr>
                <td>{filmes.id}</td>
                <td>{filmes.title}</td>
                <td>{filmes.original_title}</td>
                <td>{filmes.original_title_romanised}</td>
                <td>{filmes.description}</td>
                <td>{filmes.director}</td>
                <td>{filmes.producer}</td>
                <td>{filmes.release_date}</td>
                <td>{filmes.running_time}</td>
                <td>{filmes.rt_score}</td>                
            </tr>
        );
    }
}

class TabelaDeProdutos extends React.Component {
    render() {
        const linhas = [];

        this.props.listaDeProdutos.forEach(
            (filme) => {
                linhas.push(
                    <Linha filmes={filme} />
                );
            }
        );

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Título original</th>
                        <th>Título original2</th>
                        <th>Descrição</th>
                        <th>Diretor</th>
                        <th>Produtor</th>
                        <th>Data de Lançamento</th>
                        <th>Tempo de filme</th>
                        <th>Nota</th>                       
                    </tr>
                </thead>
                <tbody>{linhas}</tbody>
            </table>
        );
    }
}


export default FilmeGhibli;