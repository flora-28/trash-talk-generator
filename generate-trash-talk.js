function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashTalk(options) {
  const target = [
    '工程師', '設計師', '創業家']
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let collection = []
  if (options.target === '工程師') {
    collection = collection.concat(task.engineer)
  }
  if (options.target === '設計師') {
    collection = collection.concat(task.designer)
  }
  if (options.target === '創業家') {
    collection = collection.concat(task.entrepreneur)
  }

  if (collection.length === 0) {
    return `你還沒選擇要跟 " 誰 " 說幹話哦!`
  }

  let trashTalk = `身為一個${options.target}，${sample(collection)}，${sample(phrase)}吧!`
  return trashTalk
}

// export generateTrashTalk function for other files to use
module.exports = generateTrashTalk