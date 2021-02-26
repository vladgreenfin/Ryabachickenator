const varNode1 = $('.j-var1');
const varNode2 = $('.j-var2');
const varNode3 = $('.j-var3');
const varNode4 = $('.j-var4');
const varNode5 = $('.j-var5');
const varNode6 = $('.j-var6');
const speachNode = $('.j-speach');


const btnCreate = $('.j-btn-create');
const textNode = $('.j-text');
const btnReplace = $('.j-btn-replace');


const startObj = {
  "text":[
  "Жили-были {var1} да {var2}",
  ". Была у них {var3}",
  ". Снесла {var3} {var4}, не простое - золотое",
  ". {var1} бил, бил - не разбил",
  ", {var2} била, била - не разбила",
  ". {var5} бежала, {var6} задела, {var4} упало и разбилось. ",
  "{var1} плачет, {var2} плачет, а {var3} кудахчет: ",
  "{speach}"
  ]
};


btnCreate.click(function() {
  textNode.html(startObj.text);
})

btnReplace.click(function() {
  const var1 = varNode1.val();
  const var2 = varNode2.val();
  const var3 = varNode3.val();
  const var4 = varNode4.val();
  const var5 = varNode5.val();
  const var6 = varNode6.val();
  const speach = speachNode.val();
  

  const newObj = {
   "text":[
     `Жили-были ${var1} да ${var2}`,
     `. Была у них ${var3}`,
     `. Снесла ${var3} ${var4}, не простое - золотое`,
     `. ${var1} бил, бил - не разбил`,
     `, ${var2} била, била - не разбила`,
     `. ${var5} бежала, ${var6} задела, ${var4} упало и разбилось. `,
     `${var1} плачет, ${var2} плачет, а ${var3} кудахчет: `,
     `${speach}`,
  ]
};


textNode.html(newObj.text);
})
