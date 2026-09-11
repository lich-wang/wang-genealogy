---
schema: wang-person/v1
id: p_B9to1GehqMMGj9DRM8CYxJ
status: active
merged_into: null
display_name: 王之道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ihPeBmtzPHiz7qAJPVxAeX
        subject_person_id: p_B9to1GehqMMGj9DRM8CYxJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2xQsfwpUD7AT3h17KUpswz
          claim_id: c_ihPeBmtzPHiz7qAJPVxAeX
          source_id: s_Z9tB1HphEoLRwyRFuGazTE
          stance: supports
          locator: CBDB:464789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（464789）
          source: &a1
            id: s_Z9tB1HphEoLRwyRFuGazTE
            source_type: api_record
            title: 中国历代人物传记资料库：王之道（CBDB 464789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464789&o=json
            external_identifier: CBDB:464789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pBEzk4yeMrnDYE23S2fbqd
        subject_person_id: p_B9to1GehqMMGj9DRM8CYxJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之道，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 464789）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1hKEWr8l9mjFvxch9NT7dR
          claim_id: c_pBEzk4yeMrnDYE23S2fbqd
          source_id: s_Z9tB1HphEoLRwyRFuGazTE
          stance: supports
          locator: CBDB:464789
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

# 王之道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之道 | accepted |
| bio.summary | 王之道，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 464789） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之道（CBDB 464789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464789&o=json)
