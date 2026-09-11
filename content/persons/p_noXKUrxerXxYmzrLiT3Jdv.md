---
schema: wang-person/v1
id: p_noXKUrxerXxYmzrLiT3Jdv
status: active
merged_into: null
display_name: 王世榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5DdAzqwoPcMM5fTdDmxww6
        subject_person_id: p_noXKUrxerXxYmzrLiT3Jdv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ft2t4LNQrKWEJQQb82kWXG
          claim_id: c_5DdAzqwoPcMM5fTdDmxww6
          source_id: s_PCwE5w4X6gpg3w1UxNmJya
          stance: supports
          locator: CBDB:635686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635686）
          source: &a1
            id: s_PCwE5w4X6gpg3w1UxNmJya
            source_type: api_record
            title: 中国历代人物传记资料库：王世榮（CBDB 635686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635686&o=json
            external_identifier: CBDB:635686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3fkXvvThS6QZCsB4WM6EK2
        subject_person_id: p_noXKUrxerXxYmzrLiT3Jdv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世榮，清人物。籍贯永寧，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 635686）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q8DvO7PVLt7WTJ4tFSSaI_
          claim_id: c_3fkXvvThS6QZCsB4WM6EK2
          source_id: s_PCwE5w4X6gpg3w1UxNmJya
          stance: supports
          locator: CBDB:635686
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

# 王世榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世榮 | accepted |
| bio.summary | 王世榮，清人物。籍贯永寧，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 635686） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世榮（CBDB 635686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635686&o=json)
