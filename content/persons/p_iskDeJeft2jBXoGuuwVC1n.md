---
schema: wang-person/v1
id: p_iskDeJeft2jBXoGuuwVC1n
status: active
merged_into: null
display_name: 王道行
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vKzJsmp18PxK78pQsLe2vY
        subject_person_id: p_iskDeJeft2jBXoGuuwVC1n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5MR1KqCCCGj2dxoDwyNg79
          claim_id: c_vKzJsmp18PxK78pQsLe2vY
          source_id: s_moRZ6MsrTaSg8P7xMCyimd
          stance: supports
          locator: CBDB:233003
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233003）
          source: &a1
            id: s_moRZ6MsrTaSg8P7xMCyimd
            source_type: api_record
            title: 中国历代人物传记资料库：王道行（CBDB 233003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233003&o=json
            external_identifier: CBDB:233003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.713Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TqZzaxowdsLhtYDh5cqGiP
        subject_person_id: p_iskDeJeft2jBXoGuuwVC1n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道行，明人物。籍贯通許。（中国历代人物传记资料库 CBDB 233003）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XE4GzpO_2s0dtz6RJlvSX4
          claim_id: c_TqZzaxowdsLhtYDh5cqGiP
          source_id: s_moRZ6MsrTaSg8P7xMCyimd
          stance: supports
          locator: CBDB:233003
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ypGjgcEW708fNZSHLymNFD
        subject_person_id: p_XR5LUae2NCUcyYpQzrdDhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iskDeJeft2jBXoGuuwVC1n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J0ZUVFkA006PxU4oRABurD
          claim_id: c_ypGjgcEW708fNZSHLymNFD
          source_id: s_ehgI0kOEVgdkmX4onqAJoN
          stance: supports
          locator: CBDB：兄弟 王順行（207643）之父／母 王希樂
          quotation: null
          interpretation_note: 由兄弟关系推断：王道行 与 王順行 为同胞（CBDB 记「兄」），王順行 之父／母即 王道行 之父／母。
          source:
            id: s_ehgI0kOEVgdkmX4onqAJoN
            source_type: api_record
            title: 中国历代人物传记资料库：王道行（CBDB 233003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233003&o=json
            external_identifier: CBDB:233003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XR5LUae2NCUcyYpQzrdDhk
        status: active
        display_name: 王希樂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wzYgSI5zpc9TFsaiU1HQkI
        subject_person_id: p_iskDeJeft2jBXoGuuwVC1n
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xFXiQ1xtVHC3hhy55VEnSX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2A4R10xuQ8zE5_Bl5CkDxf
          claim_id: c_wzYgSI5zpc9TFsaiU1HQkI
          source_id: s_ehgI0kOEVgdkmX4onqAJoN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207643 王順行）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ehgI0kOEVgdkmX4onqAJoN
            source_type: api_record
            title: 中国历代人物传记资料库：王道行（CBDB 233003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233003&o=json
            external_identifier: CBDB:233003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xFXiQ1xtVHC3hhy55VEnSX
        status: active
        display_name: 王順行
        merged_into_person_id: null
---

# 王道行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道行 | accepted |
| bio.summary | 王道行，明人物。籍贯通許。（中国历代人物传记资料库 CBDB 233003） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XR5LUae2NCUcyYpQzrdDhk | 王希樂 | accepted |
| other | p_xFXiQ1xtVHC3hhy55VEnSX | 王順行 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道行（CBDB 233003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233003&o=json)
