/*
Passo 1 - Crie uma Classe Aluno que tenha como atributos: nome (string), 
quantidade de faltas (number) e notas (array de números). 
*/
class Aluno {
    constructor(nome, quantidadeDeFaltas, notas) {
        this.nome = nome;
        this.quantidadeDeFaltas = quantidadeDeFaltas;
        this.notas = notas;

    }
    /*Passo 2 - Na Classe Aluno crie o método calcularMedia que retorna a média 
    de suas notas.
    */
    calcularMedia() {
        let soma = 0;
        for (const nota of this.notas) {
            soma += nota;
        }
        return soma / this.notas.length;
    }

    /* Também terá um método chamado faltas, que simplesmente aumenta o número 
    de faltas em 1.
    */
    faltas() {
        this.quantidadeDeFaltas++;
    }
}

// Crie alguns alunos para testar a sua Classe.

const novoAluno = new Aluno('Arthur', 0, [7, 8, 9]);
console.table(novoAluno);

const alunos = {
    estudantes: [],
    adicionarAluno(nome, quantidadeDeFaltas, notas) {
        const adAluno = new Aluno(nome, quantidadeDeFaltas, notas);
        this.estudantes.push(adAluno);
    },
};

alunos.adicionarAluno("Pedro", 2, [6, 7, 8]);
alunos.adicionarAluno("Joao", 1, [7, 8, 9]);
alunos.adicionarAluno("Carlos", 3, [10, 6, 7]);
console.table(alunos.estudantes);

/*
Passo 3 - Crie o objeto literal curso que tem como atributos: nome do curso 
(string), nota de aprovação (number), faltas máximas (number) e uma lista de 
estudantes (um array composto pelos alunos criados no passo 2).
*/
const curso = {
    nomeDoCurso: " ",
    notaDeAprovacao: 7,
    faltaMaxima: 10,
    listaDeEstudante: [aluno1, aluno2, aluno3],

    console.table(curso.listaDeEstudante),
    /*
    Passo 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, 
    quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a 
    mais na propriedade lista de estudantes do objeto curso.
    */
    adicionarAluno(nome, quantidadeDeFaltas, notas) {
        const adAluno = new Aluno(nome, quantidadeDeFaltas, notas);
        this.listaEstudantes.push(adAluno);
    }
}


/*
Passo 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro)
e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser 
aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e 
ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 
10% acima da nota de aprovação.
*/
const curso = {
    nomeCurso: "dh",
    notaAprovacao: 7,
    faltasMax: 10,
    listaEstudantes: [aluno1, aluno2, aluno3],
    adicionarAluno(nome, quantidadeDefaltas, notas) {
        const adAluno = new Aluno(nome, quantidadeDefaltas, notas);
        this.listaEstudantes.push(adAluno);
    },

    consultarAluno(alunoConsultado) {
        for (const aluno of this.listaEstudantes) {
            if (aluno.nome === alunoaSerConsultado) {
                return aluno;
            }
            return null;
        }
        if (calcularMedia >= this.notaAprovacao && Aluno.quantidadeDeFaltas < this.faltasMax) {
            return true;
        }
        else if (Aluno.quantidadeDeFaltas = this.faltasMax && this.notaAprovacao * 0.1 > this.notaAprovacao) {
            return true;
        } else {
            return false;
        }
    }
}
/*
Passo 6 - Crie um método para o objeto curso que percorra a lista de estudantes e
 retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 
*/
aprovacaoDeAlunos: function () {
    for (const aluno of this.listaDeEstudante) {
        console.log("O " + aluno.nome + " Foi aprovado?" + curso.alunoAprovado(aluno));

    }

}
// adicionando alunos
alunos.adicionarAluno("Antonio", 4, [6, 7, 8]);
alunos.adicionarAluno("Ivo", 3, [7, 8, 9]);
alunos.adicionarAluno("Alex", 0, [10, 6, 7]);



// lista com novos alunos
for (const aluno of listaDeEstudante) {
    console.log(aluno.nome);
}

console.log("")

// verificar se o aluno foi aprovado
console.log("O aluno " + aluno4.nome + " foi aprovado ?", curso.alunoAprovado(aluno4));
console.log("")

// listar todos os alunos aprovados ou não aprovados
curso.aprovacaoDeAlunos();