export type CsvRow = Record<string, string>

export interface ParsedCsvFile {
  fileName: string
  headers: string[]
  rows: CsvRow[]
  warnings: string[]
}

export const expectedColumns = [
  'timestamp_utc',
  'completion_title',
  'distance',
  'elapsed_s',
  'avg_speed_mps',
  'pace_s_per',
  'on_course_percent',
  'off_course',
  'drift_avg',
  'drift_max',
  'app_version',
  'unity_version',
  'device_model',
]
