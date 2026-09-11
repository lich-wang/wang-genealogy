---
schema: wang-person/v1
id: p_f8cN26yv93K59iwzMciZZw
status: active
merged_into: null
display_name: 王韞徽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Qwb6Vv3N5PdY7MmLLeK42
        subject_person_id: p_f8cN26yv93K59iwzMciZZw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韞徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_12gecbT94Jij5eaH4GevLE
          claim_id: c_8Qwb6Vv3N5PdY7MmLLeK42
          source_id: s_Q2uL4NibyWjECnqQ87DCKY
          stance: supports
          locator: CBDB:568803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568803）
          source: &a1
            id: s_Q2uL4NibyWjECnqQ87DCKY
            source_type: api_record
            title: 中国历代人物传记资料库：王韞徽（CBDB 568803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568803&o=json
            external_identifier: CBDB:568803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u4cJYyYA8GVqMSTAuJSHWL
        subject_person_id: p_f8cN26yv93K59iwzMciZZw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韞徽，清人物。籍贯婁縣。（中国历代人物传记资料库 CBDB 568803）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bPGz9TUED4fZd10KaV4vgK
          claim_id: c_u4cJYyYA8GVqMSTAuJSHWL
          source_id: s_Q2uL4NibyWjECnqQ87DCKY
          stance: supports
          locator: CBDB:568803
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

# 王韞徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韞徽 | accepted |
| bio.summary | 王韞徽，清人物。籍贯婁縣。（中国历代人物传记资料库 CBDB 568803） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王韞徽（CBDB 568803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568803&o=json)
