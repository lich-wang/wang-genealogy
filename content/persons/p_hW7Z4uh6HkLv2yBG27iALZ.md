---
schema: wang-person/v1
id: p_hW7Z4uh6HkLv2yBG27iALZ
status: active
merged_into: null
display_name: 王大渲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KxVKP8sRxRrJkQiJjdVr8f
        subject_person_id: p_hW7Z4uh6HkLv2yBG27iALZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大渲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mexNbRZzDE9MhggEgB1XRN
          claim_id: c_KxVKP8sRxRrJkQiJjdVr8f
          source_id: s_XgXnUakZTQmyPLDKwxEN8T
          stance: supports
          locator: CBDB:636904
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636904）
          source: &a1
            id: s_XgXnUakZTQmyPLDKwxEN8T
            source_type: api_record
            title: 中国历代人物传记资料库：王大渲（CBDB 636904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636904&o=json
            external_identifier: CBDB:636904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.143Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dTBBV5JWbcw8MzwEMbZ2Eo
        subject_person_id: p_hW7Z4uh6HkLv2yBG27iALZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R9vLsxbN2ib6zb2f1ZHiGp
          claim_id: c_dTBBV5JWbcw8MzwEMbZ2Eo
          source_id: s_XgXnUakZTQmyPLDKwxEN8T
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王大渲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大渲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大渲（CBDB 636904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636904&o=json)
