class Features {
  constructor(queryFields, query) {
    (this.queryFields = queryFields), (this.query = query);
  }

  filter() {
    const { page, limit, sort, fields, ...rest } = this.queryFields;
    let queryString = JSON.stringify(rest);
    queryString = queryString.replace(
      /\b(gte|lte|lt|gt|eq)\b/gi,
      (match) => `$${match}`
    );

    this.query.find(JSON.parse(queryString));
    return this;
  }

  sort() {
    const { sort } = this.queryFields;
    if (sort) this.query.sort(sort.split(",").join(" "));
    return this;
  }
  fields() {
    const { fields } = this.queryFields;
    if (fields) this.query.select(fields.split(",").join(" "));
    return this;
  }
  paginate() {
    const { page, limit } = this.queryFields;
    let pg = page * 1 || 1;
    let lmt = limit || 10;
    let skp = pg * lmt - lmt;

    this.query.skip(skp).limit(lmt);
    return this;
  }
}

module.exports = Features;
