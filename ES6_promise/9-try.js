/* 9. Throw an error
Write a function named guardrail that will accept one argument mathFunction (Function).
This function should create and return an array named queue.
When the mathFunction function is executed, the value returned by the function
should be appended to the queue. If this function throws an error,
the error message should be appended to the queue.
In every case, the message Guardrail was processed should be added to the queue.
*/

const guardrail = (mathFunction) => {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
};

export default guardrail;
