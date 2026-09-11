---
schema: wang-person/v1
id: p_hwEjFsDcDtXnEaxF75VjrK
status: active
merged_into: null
display_name: 王釴
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qjDm1oVARpLfsXqF6A5HLK
        subject_person_id: p_hwEjFsDcDtXnEaxF75VjrK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BJVSFVpvfx9oAtG37nvR9t
          claim_id: c_qjDm1oVARpLfsXqF6A5HLK
          source_id: s_ULH7mVt3AftytwwaynEMDP
          stance: supports
          locator: CBDB:156477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（156477）
          source: &a1
            id: s_ULH7mVt3AftytwwaynEMDP
            source_type: api_record
            title: 中国历代人物传记资料库：王釴（CBDB 156477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156477&o=json
            external_identifier: CBDB:156477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UJeZL6LDoy1vJtczQF5Vyq
        subject_person_id: p_hwEjFsDcDtXnEaxF75VjrK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U31KNRD9MM1wPR9jUYYwYP
          claim_id: c_UJeZL6LDoy1vJtczQF5Vyq
          source_id: s_ULH7mVt3AftytwwaynEMDP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6xEUWL3YzY5hcpbld5n3sG
        subject_person_id: p_dsXDbzf3uzBdHwwc8H9ywp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hwEjFsDcDtXnEaxF75VjrK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aiyfI3SEv5domqrNrpvtKC
          claim_id: c_6xEUWL3YzY5hcpbld5n3sG
          source_id: s_8bpLJHLrK1qncEgFRUeePN
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8bpLJHLrK1qncEgFRUeePN
            source_type: api_record
            title: 中国历代人物传记资料库：王渾（CBDB 156469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156469&o=json
            external_identifier: CBDB:156469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dsXDbzf3uzBdHwwc8H9ywp
        status: active
        display_name: 王渾
        merged_into_person_id: null
  children:
    - claim:
        id: c_SzATTV8tl5TuFRs5rFAt34
        subject_person_id: p_hwEjFsDcDtXnEaxF75VjrK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m6q9t8sTP9HXMyKDQb6EY6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tqyyGvDdSrJbz1Nkm2tX4F
          claim_id: c_SzATTV8tl5TuFRs5rFAt34
          source_id: s_bvZ9FdggNvdrhP8XxKQAhD
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bvZ9FdggNvdrhP8XxKQAhD
            source_type: api_record
            title: 中国历代人物传记资料库：王令均（CBDB 156470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156470&o=json
            external_identifier: CBDB:156470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_m6q9t8sTP9HXMyKDQb6EY6
        status: active
        display_name: 王令均
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王釴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釴 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dsXDbzf3uzBdHwwc8H9ywp | 王渾 | accepted |
| children | p_m6q9t8sTP9HXMyKDQb6EY6 | 王令均 | accepted |

## 外部来源

- [中国历代人物传记资料库：王渾（CBDB 156469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156469&o=json)
- [中国历代人物传记资料库：王令均（CBDB 156470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156470&o=json)
- [中国历代人物传记资料库：王釴（CBDB 156477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156477&o=json)
