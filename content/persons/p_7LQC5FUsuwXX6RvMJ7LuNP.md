---
schema: wang-person/v1
id: p_7LQC5FUsuwXX6RvMJ7LuNP
status: active
merged_into: null
display_name: 王勳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QAXEhxkm1uZu1WHXb7oMNn
        subject_person_id: p_7LQC5FUsuwXX6RvMJ7LuNP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GQDAxhbhniveiijuoQXSz8
          claim_id: c_QAXEhxkm1uZu1WHXb7oMNn
          source_id: s_eSMZQLABmCoqDHASB9KBXM
          stance: supports
          locator: CBDB:126837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126837）
          source: &a1
            id: s_eSMZQLABmCoqDHASB9KBXM
            source_type: api_record
            title: 中国历代人物传记资料库：王勳（CBDB 126837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126837&o=json
            external_identifier: CBDB:126837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.251Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fcrrgtWFMvisuaoJyC6z7K
        subject_person_id: p_7LQC5FUsuwXX6RvMJ7LuNP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勳，明人物。身份为良吏;循吏，曾任知縣、知州。（中国历代人物传记资料库 CBDB 126837）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yE-VFlP4q3DDQj-cz7iP4e
          claim_id: c_fcrrgtWFMvisuaoJyC6z7K
          source_id: s_eSMZQLABmCoqDHASB9KBXM
          stance: supports
          locator: CBDB:126837
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

# 王勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勳 | accepted |
| bio.summary | 王勳，明人物。身份为良吏;循吏，曾任知縣、知州。（中国历代人物传记资料库 CBDB 126837） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勳（CBDB 126837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126837&o=json)
