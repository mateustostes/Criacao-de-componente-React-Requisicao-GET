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
        const filme = this.props.filme;

        return (
            <tr>
                <td>{filme.id}</td>
                <td>{filme.title}</td>
                <td>{filme.original_title}</td>
                <td>{filme.original_title_romanised}</td>
                <td>{filme.description}</td>
                <td>{filme.director}</td>
                <td>{filme.producer}</td>
                <td>{filme.release_date}</td>
                <td>{filme.running_time}</td>
                <td>{filme.rt_score}</td>
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
                    <Linha filme={filme} />
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