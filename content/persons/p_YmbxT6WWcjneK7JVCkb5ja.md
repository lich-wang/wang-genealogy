---
schema: wang-person/v1
id: p_YmbxT6WWcjneK7JVCkb5ja
status: active
merged_into: null
display_name: 王榮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xBhzQHd5hLRogicRJX5bE8
        subject_person_id: p_YmbxT6WWcjneK7JVCkb5ja
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pUp3cwLN2J5g3n3MvWZhLi
          claim_id: c_xBhzQHd5hLRogicRJX5bE8
          source_id: s_dxVeECoKwp5FqKfz5JsFTP
          stance: supports
          locator: CBDB:147461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147461）
          source: &a1
            id: s_dxVeECoKwp5FqKfz5JsFTP
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 147461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147461&o=json
            external_identifier: CBDB:147461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.738Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PTkRRAbf4tLhnnQZ7aBQmN
        subject_person_id: p_YmbxT6WWcjneK7JVCkb5ja
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
        - id: cs_4PHAfmAJTvSgb1tWHmfX1Z
          claim_id: c_PTkRRAbf4tLhnnQZ7aBQmN
          source_id: s_dxVeECoKwp5FqKfz5JsFTP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_gIKFuQYUiREKAy0EbIe-9u
        subject_person_id: p_YmbxT6WWcjneK7JVCkb5ja
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uP1bD9Zx7E65bhCATKc6Cp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_95mLbO_En--Qc5Q5WyjTBq
          claim_id: c_gIKFuQYUiREKAy0EbIe-9u
          source_id: s_35E6sF9z3gVL8xnu3DgEXs
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 74：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_35E6sF9z3gVL8xnu3DgEXs
            source_type: api_record
            title: 中国历代人物传记资料库：王媛（CBDB 139140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139140&o=json
            external_identifier: CBDB:139140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.389Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uP1bD9Zx7E65bhCATKc6Cp
        status: active
        display_name: 王媛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_uP1bD9Zx7E65bhCATKc6Cp | 王媛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 147461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147461&o=json)
- [中国历代人物传记资料库：王媛（CBDB 139140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139140&o=json)
