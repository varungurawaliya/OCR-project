const cardConfig = {
  AADHAAR: /\d{4}\s?\d{4}\s?\d{4}/,
  PAN: /(INCOME\s?TAX\s?DEPARTMENT)/i,
  VOTERID: /(ELECTION\s?COMMISION)/i,
}

const detailsConfig = {
  PAN: {
    ID: /[A-Z]{5}[0-9]{4}[A-Z]{1}/,
    DOB: /(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}/,
    NAME: /(?<=INCOMETAXDEPARWENT.*\n.*|INCOME.*\n.*|TAX.*\n.*|GOW.*\n.*|GOVT.*\n.*|GOVERNMENT.*\n.*|OVERNMENT.*\n.*|VERNMENT.*\n.*|DEPARTMENT.*\n.*|EPARTMENT.*\n.*|PARTMENT.*\n.*|ARTMENT.*\n.*|INDIA.*\n.*|NDIA.*\n.*)[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})/,
    FATHERNAME:
      /(?<=INCOMETAXDEPARWENT.*\n.*[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?.*\n.*|INCOME.*\n.*[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?.*\n.*|TAX.*\n.*[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?.*\n.*|GOW.*\n.*[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?.*\n.*|GOVT.*\n.*[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?.*\n.*|GOVERNMENT.*\n.*[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?.*\n.*|OVERNMENT.*\n.*[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?.*\n.*|VERNMENT.*\n.*[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?.*\n.*|DEPARTMENT.*\n.*[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?.*\n.*|EPARTMENT.*\n.*[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?.*\n.*|PARTMENT.*\n.*[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?.*\n.*|ARTMENT.*\n.*[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?.*\n.*|INDIA.*\n.*[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?.*\n.*|NDIA.*\n.*[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?.*\n.*)[A-Z]{3,8}(\s{1,2}[A-Z]{0,13})?/,
  },
  AADHAAR: {
    ID: /\d{4}\s?\d{4}\s?\d{4}/,
    GENDER: /(MALE|FEMALE)/i,
    NAME: /[A-Z][a-z]{3,8}(\s[A-Z][a-z]{0,13})?/,
    DOB: /(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}/,
    ADDRESS: /(?<=s\/o.*|c\/o.*|d\/o.*|w\/o.*|address.*)(?<=,).*.\n?.*.\n?.*./i,
    FATHERNAME: /(?<=s\/o|c\/o|d\/o|w\/o)[^,]+/i,
  },
}

export { cardConfig, detailsConfig }
