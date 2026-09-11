---
schema: wang-person/v1
id: p_CADCiMh39Awo9U9r9wTBwq
status: active
merged_into: null
display_name: 王天賦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_47i17x4ss8p31rYu84F4Wy
        subject_person_id: p_CADCiMh39Awo9U9r9wTBwq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天賦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VYpGE9b19yYpNqobcibM99
          claim_id: c_47i17x4ss8p31rYu84F4Wy
          source_id: s_x9eGpNVoocsZuZY34z4dr9
          stance: supports
          locator: CBDB:497875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497875）
          source: &a1
            id: s_x9eGpNVoocsZuZY34z4dr9
            source_type: api_record
            title: 中国历代人物传记资料库：王天賦（CBDB 497875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497875&o=json
            external_identifier: CBDB:497875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N8pXyApWYhoVpMBb9pgpJp
        subject_person_id: p_CADCiMh39Awo9U9r9wTBwq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天賦，清人物。曾任守備。（中国历代人物传记资料库 CBDB 497875）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YRZxda-rBbEASRXmsmbwQc
          claim_id: c_N8pXyApWYhoVpMBb9pgpJp
          source_id: s_x9eGpNVoocsZuZY34z4dr9
          stance: supports
          locator: CBDB:497875
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

# 王天賦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天賦 | accepted |
| bio.summary | 王天賦，清人物。曾任守備。（中国历代人物传记资料库 CBDB 497875） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天賦（CBDB 497875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497875&o=json)
