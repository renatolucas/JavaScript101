//mini project 4
const tasks = [];

function isValidPriority(priority) {
  return priority === "low" || priority === "medium" || priority === "high";
}

function addTask(title, priority) {
  const isValidTitle = typeof title === "string" && title.length > 0;
  const isPriorityValid = isValidPriority(priority);

  if (!isValidTitle || !isPriorityValid) {
    console.log("Invalid task.");
    return;
  }

  const task = {
    title,
    priority,
    finished: false
  };

  tasks.push(task);

  console.log(`Task "${title}" added successfully.`);
}

function addTask(title, priority){
    const isValidTitle = typeof title === "string" && title.length > 0;
    const isPriorityValid = isValidPriority(priority);
    if (title.length !== 0 && priority.length !== 0){
        const finished = false;
        const task = {title, priority, finished};
        tasks.push(task);
    }

}

function finishTask(title){
    for(const task of tasks){
        if(task.title === title){
            task.finished = true;
        }
    }
}

function listTasks(){
    console.log("Tasks:")
    for(const task of tasks){
        console.log(task.title);
        console.log(task.priority);
        if (task.finished){
            console.log("Finished")
        }else {
            console.log("Pending")
        }
    }
}

function listPendingTasks(){
    console.log("Pending Tasks:");
    for(const task of tasks){
        if (!task.finished){
            console.log(task.title);
            console.log(task.priority);
            console.log("Pending");
        }
    }
}

addTask("Learn JS", "High");
addTask("Drink Water", "High");
addTask("Brush teeth", "High");
addTask("Walking dog", "Medium");
addTask("Gym", "Low");
addTask("Wash car", "Low");

finishTask("Learn JS");
finishTask("Brush teeth");

listTasks();
listPendingTasks

/*
Muito bom. A estrutura geral do mini-projeto está correta, mas aqui apareceu um bug importante de consistência de nomes.

Você criou a propriedade:

finished

Mas depois tentou acessar:

task.status

Como status não existe no objeto, ele retorna undefined.

E como undefined é tratado como false, este trecho:

if (task.status) {
  console.log("Finished");
} else {
  console.log("Pending");
}

sempre cai no else.

Ou seja: mesmo tarefas finalizadas aparecem como pendentes.

O bug principal

Na função addTask, você cria:

const finished = false;
const task = { title, priority, finished };

Então cada tarefa tem este formato:

{
  title: "Learn JS",
  priority: "High",
  finished: false
}

Na função finishTask, você altera corretamente:

task.finished = true;

Mas em listTasks, você verifica errado:

if (task.status)

O correto é:

if (task.finished)

Mesma coisa aqui:

if (!task.status)

deveria ser:

if (!task.finished)
Versão corrigida mínima
const tasks = [];

function addTask(title, priority) {
  if (title.length !== 0 && priority.length !== 0) {
    const finished = false;
    const task = { title, priority, finished };
    tasks.push(task);
  }
}

function finishTask(title) {
  for (const task of tasks) {
    if (task.title === title) {
      task.finished = true;
    }
  }
}

function listTasks() {
  console.log("Tasks:");

  for (const task of tasks) {
    console.log(task.title);
    console.log(task.priority);

    if (task.finished) {
      console.log("Finished");
    } else {
      console.log("Pending");
    }

    console.log("----------------");
  }
}

function listPendingTasks() {
  console.log("Pending Tasks:");

  for (const task of tasks) {
    if (!task.finished) {
      console.log(task.title);
      console.log(task.priority);
      console.log("Pending");
      console.log("----------------");
    }
  }
}

addTask("Learn JS", "High");
addTask("Drink Water", "High");
addTask("Brush teeth", "High");
addTask("Walking dog", "Medium");
addTask("Gym", "Low");
addTask("Wash car", "Low");

finishTask("Learn JS");
finishTask("Brush teeth");

listTasks();
listPendingTasks();
Melhorando conforme o enunciado

O enunciado dizia que a prioridade deveria ser:

"baixa", "media" ou "alta"

Como você está usando inglês, podemos adaptar para:

"low", "medium" ou "high"

Hoje sua função aceita qualquer coisa:

addTask("Learn JS", "Very urgent");
addTask("Test", "banana");
addTask("Other", "123");

Todos seriam cadastrados se priority.length !== 0.

Melhor validar assim:

function isValidPriority(priority) {
  return priority === "low" || priority === "medium" || priority === "high";
}
Versão mais profissional
const tasks = [];

function isValidPriority(priority) {
  return priority === "low" || priority === "medium" || priority === "high";
}

function addTask(title, priority) {
  const isValidTitle = typeof title === "string" && title.length > 0;
  const isPriorityValid = isValidPriority(priority);

  if (!isValidTitle || !isPriorityValid) {
    console.log("Invalid task.");
    return;
  }

  const task = {
    title,
    priority,
    finished: false
  };

  tasks.push(task);

  console.log(`Task "${title}" added successfully.`);
}

function finishTask(title) {
  for (const task of tasks) {
    if (task.title === title) {
      task.finished = true;
      console.log(`Task "${title}" finished.`);
      return;
    }
  }

  console.log(`Task "${title}" not found.`);
}

function listTasks() {
  console.log("Tasks:");

  for (const task of tasks) {
    const status = task.finished ? "Finished" : "Pending";

    console.log(`Title: ${task.title}`);
    console.log(`Priority: ${task.priority}`);
    console.log(`Status: ${status}`);
    console.log("----------------");
  }
}

function listPendingTasks() {
  console.log("Pending Tasks:");

  for (const task of tasks) {
    if (!task.finished) {
      console.log(`Title: ${task.title}`);
      console.log(`Priority: ${task.priority}`);
      console.log("Status: Pending");
      console.log("----------------");
    }
  }
}

addTask("Learn JS", "high");
addTask("Drink Water", "high");
addTask("Brush teeth", "high");
addTask("Walking dog", "medium");
addTask("Gym", "low");
addTask("Wash car", "low");

finishTask("Learn JS");
finishTask("Brush teeth");

listTasks();
listPendingTasks();
Comentários importantes
1. finished está correto, mas completed seria mais natural

Em inglês, para tarefas, é muito comum usar:

completed: false

Então:

task.completed = true;

E a função poderia ser:

completeTask(title)

Ficaria mais natural do que:

finishTask(title)

Ambos funcionam, mas completed/completeTask é mais comum para sistemas de tarefas.

2. Cuidado com maiúsculas e minúsculas

Você usou:

"High"
"Medium"
"Low"

Se for validar com:

priority === "high"

então "High" não passa.

JavaScript diferencia maiúsculas de minúsculas:

"High" === "high" // false

Você pode escolher um padrão. Eu recomendo salvar tudo em minúsculo:

"high"
"medium"
"low"
3. Boa evolução no design das funções

Seu mini-projeto já está bem próximo de uma lógica real de back-end:

adicionar registro
alterar registro
listar registros
filtrar registros
validar entrada

Isso é exatamente o tipo de raciocínio que aparece depois em APIs com Express e Nest.

Avaliação
Mini Project 4: quase correto
Bug principal: usou task.status, mas a propriedade criada foi task.finished
Cadastro: correto
Conclusão de tarefa: correto
Listagem: com bug por causa do nome da propriedade
Pendentes: com bug pelo mesmo motivo
Melhoria importante: validar prioridade como low, medium ou high
*/
