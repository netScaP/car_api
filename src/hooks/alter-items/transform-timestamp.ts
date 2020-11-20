export default function (r: { [key: string]: any }): any {
  const record = r && r.dataValues ? r.dataValues : r;

  if (!record) {
    return r;
  }

  if (record.date_create && typeof record.date_create === 'number') {
    record.date_create = new Date(record.date_create * 1000).toISOString();
  }

  if (record.date_update && typeof record.date_update === 'number') {
    record.date_update = new Date(record.date_update * 1000).toISOString();
  }

  return r;
}
