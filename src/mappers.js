import * as t from "babel-types";

export function put(result, libDb, connStr) {
  return {
    LIB_DB: libDb,
    CONN_STR: connStr,
    DATA: result.itemsNode
  };
}

export function get(result, libDb, connStr) {
  return {
    LIB_DB: libDb,
    CONN_STR: connStr,
    DATA: result.keyNode
  };
}

export function del(result, libDb, connStr) {
  return {
    LIB_DB: libDb,
    CONN_STR: connStr,
    DATA: result.keyNode
  };
}

export function update(result, libDb, connStr) {
  return {};
}
