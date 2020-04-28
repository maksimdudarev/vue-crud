export const request = 'http://formulaone-dev.us-west-2.elasticbeanstalk.com:8000/api/travellers'
export const requestCut = 'http://formulaone-dev.us-west-2.elasticbeanstalk.com:8000/api/'
  
export async function getItems(request) {
  let data
  try {
    const response = await fetch(request)
    data = await response.json()
  } catch (error) {
    console.error(error)
  }
  return data
}

export async function getItem(request, id) {
  let data
  try {
    const response = await fetch(`${request}/${id}`)
    data = await response.json()
  } catch (error) {
    console.error(error)
  }
  return data
}

export async function addItem(request, item) {
  try {
    await fetch(request, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
  } catch (error) {
    console.error(error)
  }
}

export async function editItem(request, item) {
  try {
    await fetch(`${request}/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify(item),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
  } catch (error) {
    console.error(error)
  }
}

export async function deleteItem(request, item) {
  try {
    await fetch(`${request}/${item.id}`, {
      method: "DELETE"
    })
  } catch (error) {
    console.error(error)
  }
}

export const item = {
    name: null,
    status: null,
    color: null,
    size: null
}

export function createItem() {
  return {
    name: null,
    status: null,
    color: null,
    size: null
  }
}