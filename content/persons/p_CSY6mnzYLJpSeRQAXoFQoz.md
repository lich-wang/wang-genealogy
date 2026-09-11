---
schema: wang-person/v1
id: p_CSY6mnzYLJpSeRQAXoFQoz
status: active
merged_into: null
display_name: 王受愷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f2KC2DYxPbccfysbHTPnfV
        subject_person_id: p_CSY6mnzYLJpSeRQAXoFQoz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王受愷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3L6PEzFHAZJRk79eEkeHW5
          claim_id: c_f2KC2DYxPbccfysbHTPnfV
          source_id: s_i93fSU9PZfBgTdi8MqSAQY
          stance: supports
          locator: CBDB:636468
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636468）
          source: &a1
            id: s_i93fSU9PZfBgTdi8MqSAQY
            source_type: api_record
            title: 中国历代人物传记资料库：王受愷（CBDB 636468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636468&o=json
            external_identifier: CBDB:636468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RC7n6Ad1bU4i8N3N1iStNW
        subject_person_id: p_CSY6mnzYLJpSeRQAXoFQoz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王受愷，清人物。籍贯福山，曾任典史。（中国历代人物传记资料库 CBDB 636468）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WO4dsOB2pkEsKVtyEvC1RJ
          claim_id: c_RC7n6Ad1bU4i8N3N1iStNW
          source_id: s_i93fSU9PZfBgTdi8MqSAQY
          stance: supports
          locator: CBDB:636468
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

# 王受愷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王受愷 | accepted |
| bio.summary | 王受愷，清人物。籍贯福山，曾任典史。（中国历代人物传记资料库 CBDB 636468） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王受愷（CBDB 636468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636468&o=json)
