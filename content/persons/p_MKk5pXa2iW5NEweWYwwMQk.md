---
schema: wang-person/v1
id: p_MKk5pXa2iW5NEweWYwwMQk
status: active
merged_into: null
display_name: 王宇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xw9Z5kwbif99xyYBd3nWCa
        subject_person_id: p_MKk5pXa2iW5NEweWYwwMQk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T77KrZKwmWhsMFGXgDCMZz
          claim_id: c_xw9Z5kwbif99xyYBd3nWCa
          source_id: s_7kMQWe7f1W6MNziARLzJSC
          stance: supports
          locator: CBDB:455852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（455852）
          source: &a1
            id: s_7kMQWe7f1W6MNziARLzJSC
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 455852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455852&o=json
            external_identifier: CBDB:455852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8DLrHN6X3wk8v113rtRYuv
        subject_person_id: p_MKk5pXa2iW5NEweWYwwMQk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 455852）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qWUOqBLZlgNIUzpUp-b6dl
          claim_id: c_8DLrHN6X3wk8v113rtRYuv
          source_id: s_7kMQWe7f1W6MNziARLzJSC
          stance: supports
          locator: CBDB:455852
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

# 王宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宇 | accepted |
| bio.summary | 王宇，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 455852） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宇（CBDB 455852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455852&o=json)
