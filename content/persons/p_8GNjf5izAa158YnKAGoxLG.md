---
schema: wang-person/v1
id: p_8GNjf5izAa158YnKAGoxLG
status: active
merged_into: null
display_name: 王閏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4FpCV5heBYmaiz9W2MVr4r
        subject_person_id: p_8GNjf5izAa158YnKAGoxLG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LfaNFGfNEQX5RJcLjnCc8w
          claim_id: c_4FpCV5heBYmaiz9W2MVr4r
          source_id: s_ARcm6C9TjKCnfPiPEkDJr3
          stance: supports
          locator: CBDB:167848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（167848）
          source: &a1
            id: s_ARcm6C9TjKCnfPiPEkDJr3
            source_type: api_record
            title: 中国历代人物传记资料库：王閏（CBDB 167848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167848&o=json
            external_identifier: CBDB:167848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_znLCz4EhMA9AdkARxy9y2A
        subject_person_id: p_8GNjf5izAa158YnKAGoxLG
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
        - id: cs_nb9B2c42cN9cJLaXshTHSi
          claim_id: c_znLCz4EhMA9AdkARxy9y2A
          source_id: s_ARcm6C9TjKCnfPiPEkDJr3
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
        id: c_iZBTetvvNi4fZL6mGItOR8
        subject_person_id: p_8GNjf5izAa158YnKAGoxLG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mmQx1J4y8UnZLtQCSav8kF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IBPyFlUSzKla4kex7qHbmy
          claim_id: c_iZBTetvvNi4fZL6mGItOR8
          source_id: s_ARcm6C9TjKCnfPiPEkDJr3
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mmQx1J4y8UnZLtQCSav8kF
        status: active
        display_name: 王倫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王閏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王閏 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mmQx1J4y8UnZLtQCSav8kF | 王倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王閏（CBDB 167848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167848&o=json)
