---
schema: wang-person/v1
id: p_iso1KUXYT38rBZHG664iRi
status: active
merged_into: null
display_name: 王賓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5amGmJnBSj8XEWC2TvREpm
        subject_person_id: p_iso1KUXYT38rBZHG664iRi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nFkrhrwjrs9tST6BC7iNHm
          claim_id: c_5amGmJnBSj8XEWC2TvREpm
          source_id: s_j5P9VKP6sUjhhzHSYh81GR
          stance: supports
          locator: CBDB:703039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703039）
          source: &a1
            id: s_j5P9VKP6sUjhhzHSYh81GR
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 703039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703039&o=json
            external_identifier: CBDB:703039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bPXVy5KA9L1y6LsWvjEqcx
        subject_person_id: p_iso1KUXYT38rBZHG664iRi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gytH7Jt6AQWJa7hWRjJGa6
          claim_id: c_bPXVy5KA9L1y6LsWvjEqcx
          source_id: s_j5P9VKP6sUjhhzHSYh81GR
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
        id: c_FQIPGxBvxQoCV08KgvJVoJ
        subject_person_id: p_iso1KUXYT38rBZHG664iRi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jzfdf829ZbzECoyidLGEV4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zX0zTJO4muTHhre1vk_hii
          claim_id: c_FQIPGxBvxQoCV08KgvJVoJ
          source_id: s_j5P9VKP6sUjhhzHSYh81GR
          stance: supports
          locator: 寧波府志:三十六卷，lgid=240567：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Jzfdf829ZbzECoyidLGEV4
        status: active
        display_name: 王彥修
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Jzfdf829ZbzECoyidLGEV4 | 王彥修 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 703039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703039&o=json)
