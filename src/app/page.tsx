import { Main } from "@/components/Main";
import { SecaoMaisConexao } from "@/components/SecaoMaisConexao";
import { SecaoBeneficios } from "@/components/SecaoBeneficios";
import { SecaoDuplaConexao } from "@/components/SecaoDuplaConexao";
import { SecaoEscolherUmPlano } from "@/components/SecaoEscolherUmPlano";
import { AtendimentoPage } from "@/components/Atendimento";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Main />
      <SecaoMaisConexao />
      <SecaoBeneficios />
      <SecaoDuplaConexao />
      <SecaoEscolherUmPlano />
      <AtendimentoPage />
      <CTA />
    </>
  );
}
