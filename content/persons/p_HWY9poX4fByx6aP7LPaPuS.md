---
schema: wang-person/v1
id: p_HWY9poX4fByx6aP7LPaPuS
status: active
merged_into: null
display_name: 王國瑞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PAQNAb75rwXEqieG4cr4oj
        subject_person_id: p_HWY9poX4fByx6aP7LPaPuS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_11NDxZgVoBQvNoRj9aL4U6
          claim_id: c_PAQNAb75rwXEqieG4cr4oj
          source_id: s_Wmf6LbPfUPfCMPBXUBvH5u
          stance: supports
          locator: CBDB:10112
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10112）
          source: &a1
            id: s_Wmf6LbPfUPfCMPBXUBvH5u
            source_type: api_record
            title: 中国历代人物传记资料库：王國瑞（CBDB 10112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10112&o=json
            external_identifier: CBDB:10112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KYRQseU1uXz4PYRbTVJL9z
        subject_person_id: p_HWY9poX4fByx6aP7LPaPuS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國瑞，元人物。籍贯婺源州，身份为行醫。（中国历代人物传记资料库 CBDB 10112）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LPlcyAxn-nR4R832wXsUkt
          claim_id: c_KYRQseU1uXz4PYRbTVJL9z
          source_id: s_Wmf6LbPfUPfCMPBXUBvH5u
          stance: supports
          locator: CBDB:10112
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HWiP6VS87lnIcEoOv0i0Py
        subject_person_id: p_tykLYJfa29uHdD7zT9FGfy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HWY9poX4fByx6aP7LPaPuS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QjsmC65NhNTT5hzChy9ouZ
          claim_id: c_HWiP6VS87lnIcEoOv0i0Py
          source_id: s_Wmf6LbPfUPfCMPBXUBvH5u
          stance: supports
          locator: 蘭溪縣志，13：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tykLYJfa29uHdD7zT9FGfy
        status: active
        display_name: 王開
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國瑞 | accepted |
| bio.summary | 王國瑞，元人物。籍贯婺源州，身份为行醫。（中国历代人物传记资料库 CBDB 10112） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tykLYJfa29uHdD7zT9FGfy | 王開 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國瑞（CBDB 10112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10112&o=json)
