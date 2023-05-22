import iconeCerto from "../assets/icone_certo.png";
import iconeQuase from "../assets/icone_quase.png";
import iconeErro from "../assets/icone_erro.png";

export default function AnswerImage(props) {
    const imagens = [iconeErro, iconeQuase, iconeCerto]
    const {geraDataTest, status} = props;

    return (
        <img data-test={geraDataTest(status)} src={imagens[status - 1]} />
    );
}