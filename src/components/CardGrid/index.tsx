import { CardNote } from "../CardNote";
import * as S from "./styles";
export interface CardNoteProps {
  tag: string;
  title: string;
  content: string;
  date: string;
}
const data: CardNoteProps[] = [
  {
    tag: "Web design",
    title: "Desenvolvimento - Projeto",
    content: "Desenvolvimento - Projeto utilizando React e TypeScript",
    date: "19 Junho 2023",
  },
  {
    tag: "Projeto",
    title: "Projeto em andamento",
    content: "Conteudo do card para pequenos testes",
    date: "20 Junho 2023",
  },
  {
    tag: "React",
    title: "Estudar React js ",
    content: "Estudar conceito de componentes e propriedades",
    date: "21 Junho 2023",
  },
];

export const CardGrid = () => {
  return (
    <S.Wrapper>
      {data.map((card, index: number) => {
        return <CardNote key={index} card={card} />;
      })}
    </S.Wrapper>
  );
};
