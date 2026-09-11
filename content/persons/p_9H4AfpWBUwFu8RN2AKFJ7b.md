---
schema: wang-person/v1
id: p_9H4AfpWBUwFu8RN2AKFJ7b
status: active
merged_into: null
display_name: 王夢燕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dg3HWmiRAsSsVRLt9R5CsL
        subject_person_id: p_9H4AfpWBUwFu8RN2AKFJ7b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢燕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BrLputk8TQvXgngEiZz7Fg
          claim_id: c_Dg3HWmiRAsSsVRLt9R5CsL
          source_id: s_RUyEPLjzk6UzbQemoECyDF
          stance: supports
          locator: CBDB:636872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636872）
          source: &a1
            id: s_RUyEPLjzk6UzbQemoECyDF
            source_type: api_record
            title: 中国历代人物传记资料库：王夢燕（CBDB 636872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636872&o=json
            external_identifier: CBDB:636872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.134Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yj6M57y5p9K5N5HVVZz3uM
        subject_person_id: p_9H4AfpWBUwFu8RN2AKFJ7b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢燕，清人物。籍贯宛平，曾任典史。（中国历代人物传记资料库 CBDB 636872）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YkF1DsSvu4RfOIqmoUYbHs
          claim_id: c_yj6M57y5p9K5N5HVVZz3uM
          source_id: s_RUyEPLjzk6UzbQemoECyDF
          stance: supports
          locator: CBDB:636872
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

# 王夢燕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢燕 | accepted |
| bio.summary | 王夢燕，清人物。籍贯宛平，曾任典史。（中国历代人物传记资料库 CBDB 636872） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢燕（CBDB 636872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636872&o=json)
