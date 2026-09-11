---
schema: wang-person/v1
id: p_JWBQhCTmKCJJLPu2N4paD1
status: active
merged_into: null
display_name: 王愛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2XTsPnQ4pFAZCpYwwa6yYz
        subject_person_id: p_JWBQhCTmKCJJLPu2N4paD1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JzG8HwXWR6mSAJibCaD113
          claim_id: c_2XTsPnQ4pFAZCpYwwa6yYz
          source_id: s_CmFTvNs7aDZ2LVEcvzwrko
          stance: supports
          locator: CBDB:139691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139691）
          source: &a1
            id: s_CmFTvNs7aDZ2LVEcvzwrko
            source_type: api_record
            title: 中国历代人物传记资料库：王愛（CBDB 139691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139691&o=json
            external_identifier: CBDB:139691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.441Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_A9e7op1pqWxzMkrpEjUBjS
        subject_person_id: p_JWBQhCTmKCJJLPu2N4paD1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 610年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H2HxAvc1FTq4yC4zQ8QrrT
          claim_id: c_A9e7op1pqWxzMkrpEjUBjS
          source_id: s_CmFTvNs7aDZ2LVEcvzwrko
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3X2M3KuAYFkKmpxLMvVSvD
        subject_person_id: p_JWBQhCTmKCJJLPu2N4paD1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 673年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uNLzahXa1S5Szop1CcRLhP
          claim_id: c_3X2M3KuAYFkKmpxLMvVSvD
          source_id: s_CmFTvNs7aDZ2LVEcvzwrko
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_18wYrnmXbRYNt92D4xDP5Y
        subject_person_id: p_JWBQhCTmKCJJLPu2N4paD1
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
        - id: cs_1uYyxX6MQfQ25YsXCkqqZ1
          claim_id: c_18wYrnmXbRYNt92D4xDP5Y
          source_id: s_CmFTvNs7aDZ2LVEcvzwrko
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
        id: c_cI1Z3O47Zz7DniDJpwfSkW
        subject_person_id: p_tbGBYXzMYfhsPGnQ7Nwsak
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JWBQhCTmKCJJLPu2N4paD1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vHfgy84Mxi2cQcxpMr74x2
          claim_id: c_cI1Z3O47Zz7DniDJpwfSkW
          source_id: s_CmFTvNs7aDZ2LVEcvzwrko
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 1：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tbGBYXzMYfhsPGnQ7Nwsak
        status: active
        display_name: 王秀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_i_f7PyAXRglWlv0FWpZ536
        subject_person_id: p_JWBQhCTmKCJJLPu2N4paD1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4brE8MTZZmEbrQb1PPv8ss
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_le3xK4WNX-4OjbFgnGQF6r
          claim_id: c_i_f7PyAXRglWlv0FWpZ536
          source_id: s_6JLTPL4QrjfFN7W2dbsA2g
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 1：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6JLTPL4QrjfFN7W2dbsA2g
            source_type: api_record
            title: 中国历代人物传记资料库：范某(王愛夫)（CBDB 148778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148778&o=json
            external_identifier: CBDB:148778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4brE8MTZZmEbrQb1PPv8ss
        status: active
        display_name: 范某
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王愛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愛 | accepted |
| birth.date | 610年 | accepted |
| death.date | 673年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tbGBYXzMYfhsPGnQ7Nwsak | 王秀 | accepted |
| spouses | p_4brE8MTZZmEbrQb1PPv8ss | 范某 | accepted |

## 外部来源

- [中国历代人物传记资料库：范某(王愛夫)（CBDB 148778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148778&o=json)
- [中国历代人物传记资料库：王愛（CBDB 139691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139691&o=json)
