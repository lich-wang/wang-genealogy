---
schema: wang-person/v1
id: p_XXLQ6CceCpx6W9DLZVXBCu
status: active
merged_into: null
display_name: 王恭瑛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P3xsQLU741m3PvT4A614bq
        subject_person_id: p_XXLQ6CceCpx6W9DLZVXBCu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭瑛
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m2qajNdeL9jPJUdNYhsFtH
          claim_id: c_P3xsQLU741m3PvT4A614bq
          source_id: s_kn9qGQ2yeVCSJ5fQVNcBtB
          stance: supports
          locator: Q112689610
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_kn9qGQ2yeVCSJ5fQVNcBtB
            source_type: api_record
            title: 维基数据：王恭瑛（Q112689610）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112689610
            external_identifier: Q112689610
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ny5LpJYzRA9aLks2NghVV1
        subject_person_id: p_XXLQ6CceCpx6W9DLZVXBCu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1912年
            calendar_note: 维基数据 P569 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SMWio4Y8DXcaq3DM5Fen7z
          claim_id: c_Ny5LpJYzRA9aLks2NghVV1
          source_id: s_kn9qGQ2yeVCSJ5fQVNcBtB
          stance: supports
          locator: P569（出生日期）
          quotation: null
          interpretation_note: 维基数据 P569
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UAU4PKaaY31sd51Ne7w3bv
        subject_person_id: p_XXLQ6CceCpx6W9DLZVXBCu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1966年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YLC11TNxsqhpmqPZDTwDBm
          claim_id: c_UAU4PKaaY31sd51Ne7w3bv
          source_id: s_kn9qGQ2yeVCSJ5fQVNcBtB
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Hfh9BzEMyac4VRVCqWWWTs
        subject_person_id: p_RM3cVqPfxibJdrESfP6QB2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XXLQ6CceCpx6W9DLZVXBCu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wCqkFs2rDfgniUJyYcE3ve
          claim_id: c_Hfh9BzEMyac4VRVCqWWWTs
          source_id: s_EGoLNKkwS4h1c5PFs6DWdp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_EGoLNKkwS4h1c5PFs6DWdp
            source_type: api_record
            title: 维基数据：王正廷（Q6127766）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q6127766
            external_identifier: Q6127766
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:03.014Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E5%BB%B7
        - id: cs_enNBZB8YD2ZQr1t7y5EeR3
          claim_id: c_Hfh9BzEMyac4VRVCqWWWTs
          source_id: s_kn9qGQ2yeVCSJ5fQVNcBtB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_RM3cVqPfxibJdrESfP6QB2
        status: active
        display_name: 王正廷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恭瑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭瑛 | accepted |
| birth.date | 1912年 | accepted |
| death.date | 1966年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RM3cVqPfxibJdrESfP6QB2 | 王正廷 | accepted |

## 外部来源

- [维基数据：王恭瑛（Q112689610）](https://www.wikidata.org/wiki/Q112689610)
- [维基数据：王正廷（Q6127766）](https://www.wikidata.org/wiki/Q6127766)
