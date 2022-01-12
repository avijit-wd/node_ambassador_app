#### To throw an error manually use

res.status(400);
throw new Error("Throwing error manually!");

#### use asyncHandler before every controller function as it will handle the errors, not need to add try catch block.
