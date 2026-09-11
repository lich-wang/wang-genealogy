---
schema: wang-person/v1
id: p_NnmTzkaYFLL6RtwALfNoWq
status: active
merged_into: null
display_name: 王榮琯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qsk3UKQB1jpCax9cnApAii
        subject_person_id: p_NnmTzkaYFLL6RtwALfNoWq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮琯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9M7xLFsv7JJdEoC7CdpLTC
          claim_id: c_qsk3UKQB1jpCax9cnApAii
          source_id: s_LZnf9CPwK6ZNNQuij9ak8h
          stance: supports
          locator: CBDB:71855
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71855）
          source: &a1
            id: s_LZnf9CPwK6ZNNQuij9ak8h
            source_type: api_record
            title: 中国历代人物传记资料库：王榮琯（CBDB 71855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71855&o=json
            external_identifier: CBDB:71855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3d4mhFSaKHoLxunDDcSNF5
        subject_person_id: p_NnmTzkaYFLL6RtwALfNoWq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1828年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zxfGQ9YrsDHqxFptmt7LB2
          claim_id: c_3d4mhFSaKHoLxunDDcSNF5
          source_id: s_LZnf9CPwK6ZNNQuij9ak8h
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_suZn6GBALZgDsNJHgua2Fg
        subject_person_id: p_NnmTzkaYFLL6RtwALfNoWq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮琯（生于1828年），清人物。籍贯樂陵。（中国历代人物传记资料库 CBDB 71855）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s4pHN7-N-sXTa-GV9ETI3P
          claim_id: c_suZn6GBALZgDsNJHgua2Fg
          source_id: s_LZnf9CPwK6ZNNQuij9ak8h
          stance: supports
          locator: CBDB:71855
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王榮琯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮琯 | accepted |
| birth.date | 1828年 | accepted |
| bio.summary | 王榮琯（生于1828年），清人物。籍贯樂陵。（中国历代人物传记资料库 CBDB 71855） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮琯（CBDB 71855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71855&o=json)
