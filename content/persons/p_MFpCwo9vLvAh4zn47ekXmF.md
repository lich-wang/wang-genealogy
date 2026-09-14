---
schema: wang-person/v1
id: p_MFpCwo9vLvAh4zn47ekXmF
status: active
merged_into: null
display_name: 王輔臣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mhviPuMxL9HDCQm8pCVWbe
        subject_person_id: p_MFpCwo9vLvAh4zn47ekXmF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9EQQGVNRCPTed92zZAJqEg
          claim_id: c_mhviPuMxL9HDCQm8pCVWbe
          source_id: s_x4WMnU1iV5Rxgid7E36gDe
          stance: supports
          locator: CBDB:235976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235976）
          source: &a1
            id: s_x4WMnU1iV5Rxgid7E36gDe
            source_type: api_record
            title: 中国历代人物传记资料库：王輔臣（CBDB 235976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235976&o=json
            external_identifier: CBDB:235976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.768Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u1TTVdzgSHvd4sJktp9xFC
        subject_person_id: p_MFpCwo9vLvAh4zn47ekXmF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔臣，明人物。籍贯江陰，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 235976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_txPXmjXJhdWdVYsglK36yh
          claim_id: c_u1TTVdzgSHvd4sJktp9xFC
          source_id: s_x4WMnU1iV5Rxgid7E36gDe
          stance: supports
          locator: CBDB:235976
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vCGYpgMYlZF4xsh0XP6WvF
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MFpCwo9vLvAh4zn47ekXmF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9AC5yq8wTZH5swEJvKC6wB
          claim_id: c_vCGYpgMYlZF4xsh0XP6WvF
          source_id: s_cRHK15aaj_JFH21aOrYMkD
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王輔臣 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王輔臣 之父／母。
          source:
            id: s_cRHK15aaj_JFH21aOrYMkD
            source_type: api_record
            title: 中国历代人物传记资料库：王輔臣（CBDB 235976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235976&o=json
            external_identifier: CBDB:235976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fvtdZEELHENMPdwBvRdppk
        status: active
        display_name: 王維城
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_T8QYOfH-Z7cmHRRGPJvb7F
        subject_person_id: p_MFpCwo9vLvAh4zn47ekXmF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eVHArZ5J6eVx7iUV7ybDNl
          claim_id: c_T8QYOfH-Z7cmHRRGPJvb7F
          source_id: s_cRHK15aaj_JFH21aOrYMkD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cRHK15aaj_JFH21aOrYMkD
            source_type: api_record
            title: 中国历代人物传记资料库：王輔臣（CBDB 235976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235976&o=json
            external_identifier: CBDB:235976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fVwHvivQzDYcoN8uZB1uwy
        status: active
        display_name: 王良臣
        merged_into_person_id: null
---

# 王輔臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔臣 | accepted |
| bio.summary | 王輔臣，明人物。籍贯江陰，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 235976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fvtdZEELHENMPdwBvRdppk | 王維城 | accepted |
| other | p_fVwHvivQzDYcoN8uZB1uwy | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔臣（CBDB 235976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235976&o=json)
