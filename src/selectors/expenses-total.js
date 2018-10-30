export default (expenses) => {
  if(expenses.length === 0){
		return 0;
	} else{
		return expenses.reduce((a,b) => a+b.amount, 0);
	}
};