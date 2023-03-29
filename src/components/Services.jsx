import "../styles/components/services.sass"

const Services = () =>{
    return(
        <div>
            <div id="services">
                <h2>Serviços</h2>
                <br />
                <p>Nossa empresa de tecnologia é especializada em diversas áreas do setor, incluindo <strong>desenvolvimento de páginas</strong>, <strong>criação de bancos de dados</strong>, <strong>manutenção de computadores</strong>, <strong>design e projetos de rede</strong>. Com uma atuação de cinco anos no mercado, temos orgulho de ter construído uma base de cerca de <strong>2000</strong> clientes, resultado de nosso comprometimento com a qualidade do serviço prestado.
                Além disso, entendemos que a satisfação do cliente é essencial para o sucesso de qualquer empresa. Por isso, temos como um de nossos valores a busca pela excelência no atendimento e na prestação de serviços. Buscamos entender as necessidades e expectativas de cada cliente, oferecendo soluções personalizadas e acompanhamento constante ao longo de todo o processo.
                </p>
            </div>
            <div className="servicescontainers">
                <div id="desP">
                    <h2>Desenvolvimento de Páginas</h2>
                    <p>Criação e desenvolvimento de websites e aplicações web personalizadas, com design atraente e intuitivo. Isso inclui o desenvolvimento de interfaces de usuário, navegação, funcionalidades e integrações com outras ferramentas e sistemas. Os desenvolvedores de páginas trabalham em várias linguagens de programação, como HTML, CSS, JavaScript, PHP e outras, para criar sites que sejam rápidos, seguros e responsivos.</p>
                </div>
                <div id="creBD">
                    <h2>Criação de Banco de Dados</h2>
                    <p>Criação e gerenciamento de bancos de dados personalizados, que permitem o armazenamento, organização e recuperação eficiente de informações de uma empresa ou organização. Os especialistas em criação de bancos de dados utilizam diferentes tecnologias, como MySQL, Oracle, MongoDB, entre outras, para projetar e implementar soluções de banco de dados que atendam às necessidades específicas de cada cliente.</p>
                </div>
                <div id="manC">
                    <h2>Manutenção de Computadores</h2>
                    <p>Mnutenção, reparação e suporte técnico de computadores e dispositivos eletrônicos. Isso inclui a solução de problemas de hardware e software, atualização de sistemas operacionais, instalação de software, recuperação de dados, limpeza de vírus, e outras atividades relacionadas à manutenção do desempenho e segurança do computador.</p>
                </div>
                <div id="dgn">
                    <h2>Design</h2>
                    <p>Criação de design gráfico, ilustrações, animações, e outras artes visuais, para empresas e organizações que buscam criar uma imagem forte e consistente. Os designers utilizam ferramentas como Adobe Photoshop, Illustrator e InDesign para criar materiais de marketing, embalagens, logos, banners e outros tipos de peças gráficas personalizadas.</p>
                </div>
                <div id="projR">
                    <h2>Projetos de Rede</h2>
                    <p>Planejamento, implementação e manutenção de redes de computadores para empresas e organizações. Os projetos de rede envolvem a criação de topologias de rede, seleção de equipamentos de rede, configuração de dispositivos de rede, segurança de rede e monitoramento de rede. Os profissionais de projetos de rede trabalham com diferentes tecnologias, como TCP / IP, LAN, WAN, VLAN, VPN, entre outras, para criar redes de computadores confiáveis, escaláveis e seguras.</p>
                </div>
            </div>
        </div>
    )
}
export default Services 