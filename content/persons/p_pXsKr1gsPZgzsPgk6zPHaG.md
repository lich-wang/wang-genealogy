---
schema: wang-person/v1
id: p_pXsKr1gsPZgzsPgk6zPHaG
status: active
merged_into: null
display_name: 王氏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Uf4C88MAS9S5Lp6VDLY2L2
        subject_person_id: p_pXsKr1gsPZgzsPgk6zPHaG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t1zCPi5PmFREjcZhhJDAhQ
          claim_id: c_Uf4C88MAS9S5Lp6VDLY2L2
          source_id: s_KHDVRBnd6rhHFqH8m6vHSt
          stance: supports
          locator: Q13688131
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_KHDVRBnd6rhHFqH8m6vHSt
            source_type: api_record
            title: 维基数据：王氏（Q13688131）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688131
            external_identifier: Q13688131
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HDmHfWVzz6MEFc7EZ1V2W1
        subject_person_id: p_7ZLkhM6fzxrjvBYHUXQTJQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pXsKr1gsPZgzsPgk6zPHaG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cDcFcCgsN9aA1zD9dRF9pk
          claim_id: c_HDmHfWVzz6MEFc7EZ1V2W1
          source_id: s_bLgFFJHnegm1L7AxEbYBqC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bLgFFJHnegm1L7AxEbYBqC
            source_type: api_record
            title: 维基数据：王念孙（Q697757）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q697757
            external_identifier: Q697757
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:20.290Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BF%B5%E5%AD%99
        - id: cs_ucJTmN6VnxreyBMJ4H2QAA
          claim_id: c_HDmHfWVzz6MEFc7EZ1V2W1
          source_id: s_KHDVRBnd6rhHFqH8m6vHSt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_7ZLkhM6fzxrjvBYHUXQTJQ
        status: active
        display_name: 王念孙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7ZLkhM6fzxrjvBYHUXQTJQ | 王念孙 | accepted |

## 外部来源

- [维基数据：王念孙（Q697757）](https://www.wikidata.org/wiki/Q697757)
- [维基数据：王氏（Q13688131）](https://www.wikidata.org/wiki/Q13688131)
