---
schema: wang-person/v1
id: p_rDLCqXC8sFot2X9WGy3gyb
status: active
merged_into: null
display_name: 王百朋
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dCj2B8LsRBaqVQSE23ijr5
        subject_person_id: p_rDLCqXC8sFot2X9WGy3gyb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王百朋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b5KmUdnzc7M17ZtwTChfA2
          claim_id: c_dCj2B8LsRBaqVQSE23ijr5
          source_id: s_ckMkYT7A2dXKfaQfPQVZ3y
          stance: supports
          locator: CBDB:37341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37341）
          source: &a1
            id: s_ckMkYT7A2dXKfaQfPQVZ3y
            source_type: api_record
            title: 中国历代人物传记资料库：王百朋（CBDB 37341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37341&o=json
            external_identifier: CBDB:37341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.200Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4dH4LZK7uQtmdEjTqpcDZs
        subject_person_id: p_rDLCqXC8sFot2X9WGy3gyb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王百朋，宋人物。籍贯樂清，身份为處士。（中国历代人物传记资料库 CBDB 37341）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I3Stdp9yrSIf6UaNyaie3Y
          claim_id: c_4dH4LZK7uQtmdEjTqpcDZs
          source_id: s_ckMkYT7A2dXKfaQfPQVZ3y
          stance: supports
          locator: CBDB:37341
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rbgEksldaBoWLOQIzye97u
        subject_person_id: p_k7FueQ7UqubgKGSwoNs5mw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rDLCqXC8sFot2X9WGy3gyb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K-WsEKeDlC74yl666SMtfG
          claim_id: c_rbgEksldaBoWLOQIzye97u
          source_id: s_m9AkuXL52Y3JTiCItyIr7P
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10597）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_m9AkuXL52Y3JTiCItyIr7P
            source_type: api_record
            title: 中国历代人物传记资料库：王百朋（CBDB 37341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37341&o=json
            external_identifier: CBDB:37341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k7FueQ7UqubgKGSwoNs5mw
        status: active
        display_name: 王輔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0T6xobmA55HTFyhybB-jus
        subject_person_id: p_rDLCqXC8sFot2X9WGy3gyb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tcnc9U56UzCEYQHcMawuE4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cExDsA8Q65KFl6xJNnLX8P
          claim_id: c_0T6xobmA55HTFyhybB-jus
          source_id: s_m9AkuXL52Y3JTiCItyIr7P
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 10598 王十朋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_m9AkuXL52Y3JTiCItyIr7P
            source_type: api_record
            title: 中国历代人物传记资料库：王百朋（CBDB 37341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37341&o=json
            external_identifier: CBDB:37341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tcnc9U56UzCEYQHcMawuE4
        status: active
        display_name: 王十朋
        merged_into_person_id: null
---

# 王百朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王百朋 | accepted |
| bio.summary | 王百朋，宋人物。籍贯樂清，身份为處士。（中国历代人物传记资料库 CBDB 37341） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_k7FueQ7UqubgKGSwoNs5mw | 王輔 | accepted |
| other | p_tcnc9U56UzCEYQHcMawuE4 | 王十朋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王百朋（CBDB 37341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37341&o=json)
