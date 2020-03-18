module.exports = {
  Query: {
    test: async(context,request,data) => {
      console.log('CONTEXT::: ', context);
      console.log('REQUEST::: ', request);
      console.log('DATA::: ', data);
      return ({id: 1234, email:'testing@email', comment:'generic comment' })
    }
  }
}