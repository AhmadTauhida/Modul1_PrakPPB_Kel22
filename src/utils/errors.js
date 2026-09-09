export function friendlyError(err) {
const msg = (err && err.message) || "";
if (err && err.code === "PGRST116") return "Record not found";
if (/invalid input syntax for type uuid/i.test(msg)) return "Invalid ID format";
if (/duplicate key value violates unique constraint/i.test(msg))
return "A record with the same unique value already exists";
if (/violates foreign key constraint/i.test(msg))
return "Cannot delete: this record is still referenced by other data";
if (/violates check constraint|violates not-null constraint|null value in column/i.test(msg))
return "The submitted data violates a database rule";
if (/insufficient stock|not found|invalid quantity|must be a non-empty array/i.test(msg))
return msg;
return "Something went wrong, please try again";
}

export function errorStatus(err, fallback = 500) {
const msg = (err && err.message) || "";
if (err && err.code === "PGRST116") return 404;
if (/invalid input syntax for type uuid/i.test(msg)) return 400;
if (/insufficient stock|not found|invalid quantity|must be a non-empty array/i.test(msg))
return 400;
if (/violates foreign key constraint|duplicate key value|null value in column|violates check constraint/i.test(msg))
return 400;
return fallback;
}