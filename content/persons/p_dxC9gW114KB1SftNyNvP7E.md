---
schema: wang-person/v1
id: p_dxC9gW114KB1SftNyNvP7E
status: active
merged_into: null
display_name: 王炳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PoMhxUDQ8mViKGdKMAxPLe
        subject_person_id: p_dxC9gW114KB1SftNyNvP7E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5QVAZwqrFBZ2ZtBNEA3EYc
          claim_id: c_PoMhxUDQ8mViKGdKMAxPLe
          source_id: s_SoV2wTgvPJPXsDdjRmeWjo
          stance: supports
          locator: CBDB:694158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694158）
          source: &a1
            id: s_SoV2wTgvPJPXsDdjRmeWjo
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 694158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694158&o=json
            external_identifier: CBDB:694158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BhD5nB1rB2pSiBcsJm7o1L
        subject_person_id: p_dxC9gW114KB1SftNyNvP7E
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
        - id: cs_ii2ePNAmHZTJ7M7BADkAMx
          claim_id: c_BhD5nB1rB2pSiBcsJm7o1L
          source_id: s_SoV2wTgvPJPXsDdjRmeWjo
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
  descendants:
    - claim:
        id: c_BzjRJHPJ6S5YyZMj4N75Ic
        subject_person_id: p_dxC9gW114KB1SftNyNvP7E
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9LsPM3mmRVTyWXbn76ZdBS
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wmj2pCEZe-ypdXrJuYP2vG
          claim_id: c_BzjRJHPJ6S5YyZMj4N75Ic
          source_id: s_K5SVxd8rNhNDGSsPDGw7bC
          stance: supports
          locator: 鄞縣志，lgid=243606：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K5SVxd8rNhNDGSsPDGw7bC
            source_type: api_record
            title: 中国历代人物传记资料库：王梓材（CBDB 71995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71995&o=json
            external_identifier: CBDB:71995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9LsPM3mmRVTyWXbn76ZdBS
        status: active
        display_name: 王梓材
        merged_into_person_id: null
  other: []
---

# 王炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_9LsPM3mmRVTyWXbn76ZdBS | 王梓材 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炳（CBDB 694158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694158&o=json)
- [中国历代人物传记资料库：王梓材（CBDB 71995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71995&o=json)
