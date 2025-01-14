fetch('person.json')
    .then(response => response.json())
    .then(person => {
        const anoAtual = new Date().getFullYear();

        let queryPersonName = document.querySelectorAll('[data-person-name]');

        queryPersonName.forEach(element => {
            let nameSplit = person.nome.trim().split(" ");
            element.append(`${nameSplit[0]} ${nameSplit[3]}`);
        });

        let queryPersonUltimoNome = document.querySelectorAll('[data-person-last-name]');

        queryPersonUltimoNome.forEach(element => {
            let nameSplit = person.nome.trim().split(" ");
            element.append(`${nameSplit[3]}`);
        });

        person.social.forEach(element => {
            let querySeletor = document.querySelectorAll(`[data-person-social-${element.name}]`);

            querySeletor.forEach(elem => {
                elem.href = element.value;
            });
        });

        person.atributos.forEach(element => {
            
            let querySeletor = document.querySelector(`[data-person-attr-${element.id}]`);
            let querySeletorText = document.querySelector(`[data-person-attr-${element.id}-text]`);

            if (querySeletor){
                querySeletor.append(element.name);
                querySeletorText.append(element.text);
            }
        });

        let queryPersonNameTheme = document.querySelector('[data-person-name-theme]');

        if (queryPersonNameTheme){
            let nameSplit = person.nome.trim().split(" ");
            queryPersonNameTheme.append(`${nameSplit[0]}`);
        }

        let queryPersonTitulo = document.querySelectorAll('[data-person-titulo]');

        queryPersonTitulo.forEach(element => {
            element.append(`${person.titulo}`);
        });

        let queryPersonIdade = document.querySelectorAll('[data-person-idade]');

        queryPersonIdade.forEach(element => {
            let idade = calcularIdade(new Date(person.dataNascimento));
            element.append(`${idade} Anos`);
        });

        let queryPersonSite = document.querySelectorAll('[data-person-site]');
        let queryPersonCelular = document.querySelectorAll('[data-person-celular]');
        let queryPersonEmail = document.querySelectorAll('[data-person-email]');
        let queryPersonWhatsapp = document.querySelectorAll('[data-person-whatsapp]');

        queryPersonSite.forEach(element => { element.append(person.contatos.find(x => x.name === "site").format); });
        queryPersonCelular.forEach(element => { element.append(person.contatos.find(x => x.name === "celular").format); });
        queryPersonEmail.forEach(element => { element.append(person.contatos.find(x => x.name === "email").value); });
        queryPersonWhatsapp.forEach(element => { element.href = person.contatos.find(x => x.name === "whatsapp").link; });

        let queryPersonNacionalidade = document.querySelectorAll('[data-person-nacionalidade]');

        queryPersonNacionalidade.forEach(element => {
            element.append(person.nacionalidade);
        });
        
        let queryPersonMarketing1 = document.querySelectorAll('[data-person-marketing-1]');
        let queryPersonMarketing2 = document.querySelectorAll('[data-person-marketing-2]');

        queryPersonMarketing1.forEach(element => {
            element.append(person.marketing[0]);
        });
        queryPersonMarketing2.forEach(element => {
            element.append(person.marketing[1]);
        });

        let queryPersonEnderecoCep = document.querySelectorAll('[data-person-endereco-cep]');
        let queryPersonEnderecoRua = document.querySelectorAll('[data-person-endereco-rua]');
        let queryPersonEnderecoNumero = document.querySelectorAll('[data-person-endereco-numero]');
        let queryPersonEnderecoBairro = document.querySelectorAll('[data-person-endereco-bairro]');
        let queryPersonEnderecoComplemento = document.querySelectorAll('[data-person-endereco-complemento]');
        let queryPersonEnderecoCidade = document.querySelectorAll('[data-person-endereco-cidade]');
        let queryPersonEnderecoUF = document.querySelectorAll('[data-person-endereco-uf]');

        queryPersonEnderecoCep.forEach(element => { element.append(person.endereco.cep); });
        queryPersonEnderecoRua.forEach(element => { element.append(person.endereco.rua); });
        queryPersonEnderecoNumero.forEach(element => { element.append(person.endereco.numero); });
        queryPersonEnderecoBairro.forEach(element => { element.append(person.endereco.bairro); });
        queryPersonEnderecoComplemento.forEach(element => { element.append(person.endereco.complemento); });
        queryPersonEnderecoCidade.forEach(element => { element.append(person.endereco.cidade); });
        queryPersonEnderecoUF.forEach(element => { element.append(person.endereco.uf); });

        person.workers.forEach(element => {
            debugger;
            let querySeletorFuncao = document.querySelectorAll(`[data-person-work-${element.id}-funcao]`);
            let querySeletorNome = document.querySelectorAll(`[data-person-work-${element.id}-nome]`);
            let querySeletorDescricao = document.querySelectorAll(`[data-person-work-${element.id}-descricao]`);
            let querySeletorImagem = document.querySelectorAll(`[data-person-work-${element.id}-imagem]`);

            let querySeletorDataIni = document.querySelectorAll(`[data-person-work-${element.id}-dtinicio]`);
            let querySeletorDataFim = document.querySelectorAll(`[data-person-work-${element.id}-dtfim]`);
            let querySeletorDuracao = document.querySelectorAll(`[data-person-work-${element.id}-duracao]`);
            let querySeletorUrl = document.querySelectorAll(`[data-person-work-${element.id}-url]`);

            querySeletorFuncao.forEach(elem => {
                elem.append(element.funcao);
            });
            querySeletorNome.forEach(elem => {
                elem.append(element.nome);
            });
            querySeletorDescricao.forEach(elem => {
                elem.insertAdjacentHTML('beforeend', element.descricao);
            });
            querySeletorImagem.forEach(elem => {
                elem.src = element.imagem;
            });

            querySeletorDataIni.forEach(elem => {
                elem.append(element.dataInicio);
            });
            querySeletorDataFim.forEach(elem => {
                elem.append(element.dataFim);
            });
            querySeletorDuracao.forEach(elem => {
                elem.append(element.duracao);
            });
            querySeletorUrl.forEach(elem => {
                elem.href = element.url;
            });
        });

        person.certificados.forEach(element => {
            
            let querySeletor = document.querySelectorAll(`[data-person-certificado-${element.id}-descricao]`);
            let querySeletorEmissora = document.querySelectorAll(`[data-person-certificado-${element.id}-emissora]`);

            querySeletor.forEach(elem => {
                elem.append(element.descricao);
            });
            querySeletorEmissora.forEach(elem => {
                elem.prepend(element.emissora);
            });
        });

        person.educacao.forEach(element => {
            
            let querySeletor = document.querySelectorAll(`[data-person-escolaridade-${element.id}-descricao]`);
            let querySeletorInstituicao = document.querySelectorAll(`[data-person-escolaridade-${element.id}-instituicao]`);

            querySeletor.forEach(elem => {
                elem.append(element.descricao);
            });
            querySeletorInstituicao.forEach(elem => {
                elem.prepend(element.instituicao);
            });
        });

        let queryPersonCuriosidadeTempoTrabalho = document.querySelectorAll('[data-person-curiosidade-anos-trabalhando]');
        let queryPersonCuriosidadeTempoDev = document.querySelectorAll('[data-person-curiosidade-anos-dev]');
        let queryPersonCuriosidadeXicaras = document.querySelectorAll('[data-person-curiosidade-xicaras]');
        let queryPersonCuriosidadeJavaDetox = document.querySelectorAll('[data-person-curiosidade-detox]');

        queryPersonCuriosidadeTempoTrabalho.forEach(elem => {
            const anoInicio = person.curiosidade.anoComecouTrabalhar;
            const anosTrabalhando = anoAtual - anoInicio;

            elem.insertAdjacentHTML('beforeend', `<span class="theme-color d-inline-block counter">${anosTrabalhando}</span>`);
        });
        queryPersonCuriosidadeTempoDev.forEach(elem => {
            const anoInicio = person.curiosidade.anoComecouDev;
            const anosTrabalhandoDev = anoAtual - anoInicio;

            elem.insertAdjacentHTML('beforeend', `<span class="theme-color d-inline-block counter">${anosTrabalhandoDev}</span>`);
        });
        queryPersonCuriosidadeXicaras.forEach(elem => {
            const dataAtual = new Date();
            const dataInicio = new Date(person.curiosidade.anoComecouDev, 1, 1);

            let diasUteis = 0;

            const aniversarioEsteAno = new Date(dataAtual.getFullYear(), dataInicio.getMonth(), dataInicio.getDate());

            if (aniversarioEsteAno > dataAtual) {
                aniversarioEsteAno.setFullYear(dataAtual.getFullYear() - 1);
            }

            for (let d = aniversarioEsteAno; d <= dataAtual; d.setDate(d.getDate() + 1)) {
                const diaSemana = d.getDay();
                if (diaSemana !== 0 && diaSemana !== 6) {
                    diasUteis++;
                }
            }

            let xicarasCafe = diasUteis * person.curiosidade.xicarasCafeDia;

            let partialHTML;

            if(xicarasCafe > 1000){
                partialHTML = `<span class="theme-color d-inline-block counter">${(xicarasCafe/1000).toFixed(1)}</span>`;
                partialHTML = partialHTML + `<span class="per d-inline-block theme-color">K</span>`;
            } 
            else {
                partialHTML = `<span class="theme-color d-inline-block counter">${xicarasCafe}</span>`;
            }

            elem.insertAdjacentHTML('beforeend', partialHTML);
        });
        queryPersonCuriosidadeJavaDetox.forEach(elem => {
            
            const milissegundosPorDia = 1000 * 60 * 60 * 24;
            const dataFinal = new Date(person.curiosidade.dataParouJava);
            const dataAtual = new Date();
            
            const diferencaMilissegundos = dataAtual - dataFinal;

            const diferencaDias = Math.floor(diferencaMilissegundos / milissegundosPorDia);

            elem.insertAdjacentHTML('beforeend', `<span class="theme-color d-inline-block counter">${diferencaDias}</span>`);
        });

        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });

    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));

    function calcularIdade(dataNascimento) {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
      
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mesAtual = hoje.getMonth();
        const mesNascimento = nascimento.getMonth();
      
        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
          idade--;
        }
      
        return idade;
    }