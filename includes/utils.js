function auditColumns() {
    return `
        current_timestamp as sys_insert_ts,
        current_timestamp as sys_update_ts
      `;
  }

  module.exports = { auditColumns };