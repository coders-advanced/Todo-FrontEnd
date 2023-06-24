import { useState } from "react";
import * as S from "./styled";


export function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <S.Wrapper>
      <ul>
        <li
          onClick={() => handleTabClick(0)}
          className={`${activeTab === 0 ? 'active' : ''}`}
        >
          Tarefas
        </li>
        <li
          onClick={() => handleTabClick(1)}
          className={`${activeTab === 1 ? 'active' : ''}`}
        >
          Fazendo
        </li>
        <li
          onClick={() => handleTabClick(2)}
          className={`${activeTab === 2 ? 'active' : ''}`}
        >
          Feito
        </li>
      </ul>
    </S.Wrapper>
  );
}