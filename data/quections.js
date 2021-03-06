var data = {
  '10001': ['4.32', '..14', '12.3', '3.21​'],
  '10002': ['2143', '....', '123.', '341.'],
  '10003': ['12..', '.412', '2..3', '.321​'],
  '10004': ['2.34', '.4.2', '4.2.', '1..3​'],
  '10005': ['2.43', '..2.', '12..', '3.1.​'],
  '10006': ['413.', '2...', '.2.3', '34..​'],
  '10007': ['2134', '...2', '4..1', '124.​'],
  '10008': ['34..', '..34', '4.2.', '21..​'],
  '10009': ['4.2.', '.1..', '.4.2', '..3.​'],
  '10010': ['.14.', '43.1', '1..4', '3.12​'],
  '10011': ['4.32', '3.41', '.42.', '2...​'],
  '10012': ['43.1', '2143', '....', '12..​'],
  '10013': ['1432', '3.14', '.1..', '2...​'],
  '10014': ['213.', '3421', '..43', '....​'],
  '10015': ['4231', '.142', '....', '..24​'],
  '10016': ['1324', '241.', '....', '.23.​'],
  '10017': ['43.1', '2143', '....', '1..4​'],
  '10018': ['2.43', '.321', '.2..', '3.1.​'],
  '10019': ['413.', '2...', '.2.3', '34..​'],
  '10020': ['43.1', '.14.', '.4.2', '1..4'],
  '10021': ['3.1.', '1.34', '.32.', '2..3'],
  '10022': ['..3.', '3412', '.1.3', '432.'],
  '10023': ['..43', '432.', '1...', '.412​'],
  '10024': ['.42.', '.21.', '4..2', '2..1'],
  '10025': ['42..', '..24', '31..', '..13'],
  '10026': ['4...', '3214', '2...', '1.2.'],
  '10027': ['...2', '.4.3', '.3.4', '..31'],
  '10028': ['.1.4', '....', '1...', '3.1.'],
  '10029': ['2431', '....', '.12.', '....'],
  '10030': ['....', '.1..', '2..1', '...4'],
  '10031': ['.1.2', '..1.', '42..', '....'],
  '10032': ['.21.', '3...', '...4', '....'],
  '10033': ['2.1.', '....', '4..3', '....'],
  '10034': ['4...', '....', '1.4.', '...2'],
  '10035': ['.3..', '..1.', '....', '..32'],
  '10036': ['.4..', '...1', '2...', '...3'],
  '10037': ['..21', '..3.', '2...', '.1..'],
  '10038': ['1..4', '...3', '4...', '.1..'],
  '10039': ['...2', '....', '.4.1', '2.4.'],
  '10040': ['.2..', '..3.', '...4', '1...'],
  '10041': ['13..', '.4..', '....', '.1.3'],
  '10042': ['1.4.', '...2', '.3..', '....'],
  '10043': ['....', '.14.', '2..3', '....'],
  '10044': ['..1.', '4...', '...2', '.3..'],
  '10045': ['3..2', '....', '....', '.4.1'],
  '10046': ['4..2', '..3.', '....', '.1..'],
  '10047': ['3.1.', '2...', '....', '...3'],
  '10048': ['....', '13..', '....', '..12'],
  '10049': ['....', '..1.', '.3..', '1.2.'],
  '10050': ['.4..', '....', '...3', '.14.'],
  '10051': ['....', '.4..', '2..3', '...2'],
  '10052': ['....', '1...', '...2', '.2.4'],
  '10053': ['4.1.', '...2', '1...', '....'],
  // book 6
  '10054': ['....', '3..2', '.14.', '....'],
  '10055': ['....', '.4.1', '23..', '....'],
  '10056': ['..3.', '...2', '2.4.', '.3..'],
  '10057': ['...2', '.24.', '.4..', '..3.'],
  '10058': ['..1.', '3...', '2...', '..3.'],
  '10059': ['3...', '...2', '.4..', '..1.'],
  '10060': ['.4.1', '....', '....', '3.4.'],
  '10061': ['.4..', '..4.', '...2', '1...'],
  // book 7
  '10062': ['2...', '..1.', '...4', '.3..'],
  '10063': ['.2..', '1...', '....', '4..1'],
  '10064': ['.2..', '...4', '..3.', '2...'],
  '10065': ['....', '.12.', '..34', '....'],
  '10066': ['..1.', '.2..', '.3..', '2..3'],
  '10067': ['2...', '.1..', '....', '.4.1'],
  '10068': ['....', '2..4', '4..2', '...1'],
  '10069': ['....', '..43', '.2.1', '....'],
  '10070': ['.13.', '2...', '...3', '.21.'],
  '10071': ['4132', '..1.', '..4.', '34.1​'],
  '10072': ['.34.', '4..2', '1..3', '.21.'],
  '10073': ['..4.', '4.3.', '.4.3', '.1..'],
  '10074': ['..1.', '4...', '...2', '.3..'],
  '10075': ['2...', '..3.', '.4..', '...1'],
  '10076': ['1.4.', '....', '....', '.1.2'],
  '10077': ['...3', '324.', '.432', '2...'],
  '10078': ['341.', '.2..', '..2.', '.143'],
  '10079': ['...2', '2..1', '.4..', '....'],
  '10080': ['....', '2.1.', '...3', '..2.'],
  '10081': ['....', '3...', '..4.', '.23.​'],
  '10082': ['.1..', '3.12', '.32.', '1.43​'],
  '10083': ['.1..', '234.', '.4.3', '.2..​'],
  '10084': ['.13.', '2.41', '1.2.', '3..4'],
  '10085': ['3.42', '....', '....', '2..3'],
  '10086': ['...1', '2...', '...4', '3...'],
  '10087': ['..4.', '1...', '..1.', '3...'],
  '10088': ['...2', '..3.', '.2.3', '.1..'],
  '10089': ['2...', '....', '...4', '1..3'],
  '10090': ['4...', '.2..', '...4', '..32'],
  '10091': ['1...', '2..1', '....', '3..2'],
  '10092': ['3...', '.4..', '..23', '...1'],
  '10093': ['.4..', '....', '...3', '.14.'],
  '10094': ['....', '.4..', '2..3', '...2'],
  '10095': ['....', '1...', '...2', '.2.4'],
  '10096': ['4.1.', '...2', '1...', '....'],
  '10097': ['...4', '..3.', '3...', '24..'],
  '10098': ['2...', '....', '...3', '4.2.'],
  '10099': ['.2.4', '....', '2.1.', '....'],
  '10100': ['3...', '2...', '...4', '...2'],
  // book 8
}

module.exports = {
  data
}
