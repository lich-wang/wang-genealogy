---
schema: wang-person/v1
id: p_GdR8Xk8MA6uyw3SEmMRLpB
status: active
merged_into: null
display_name: 王继沂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qc8ip72iDFNsEJmfV25VL8
        subject_person_id: p_GdR8Xk8MA6uyw3SEmMRLpB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王继沂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2k2sdD4329dXGRhWqE9zN2
          claim_id: c_qc8ip72iDFNsEJmfV25VL8
          source_id: s_RNftsmftEDKBTmG4LmWxGj
          stance: supports
          locator: Q16260253
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_RNftsmftEDKBTmG4LmWxGj
            source_type: api_record
            title: 维基数据：王继沂（Q16260253）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260253
            external_identifier: Q16260253
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%A7%E6%B2%82
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EbWTcHbuptZNFD2CUbiewE
        subject_person_id: p_GdR8Xk8MA6uyw3SEmMRLpB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Chinese politician
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CmoND48FEAqmbxXrFFsknU
          claim_id: c_EbWTcHbuptZNFD2CUbiewE
          source_id: s_RNftsmftEDKBTmG4LmWxGj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HfqMAd2JBNDefKRrNpsoGh
        subject_person_id: p_2BLYj53xGBLVXEoVxHh8Ws
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GdR8Xk8MA6uyw3SEmMRLpB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qdCYUqMgQJyoVUPAZrx3Vb
          claim_id: c_HfqMAd2JBNDefKRrNpsoGh
          source_id: s_gZ4uY8cJU9Kz276s8a6nyy
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_gZ4uY8cJU9Kz276s8a6nyy
            source_type: api_record
            title: 维基数据：王延政（Q8012995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8012995
            external_identifier: Q8012995
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:03.014Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E6%94%BF
        - id: cs_6SEaheZ5CExGCS6jrWH7GM
          claim_id: c_HfqMAd2JBNDefKRrNpsoGh
          source_id: s_RNftsmftEDKBTmG4LmWxGj
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_2BLYj53xGBLVXEoVxHh8Ws
        status: active
        display_name: 王延政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王继沂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王继沂 | accepted |
| bio.summary | Chinese politician | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2BLYj53xGBLVXEoVxHh8Ws | 王延政 | accepted |

## 外部来源

- [维基数据：王继沂（Q16260253）](https://www.wikidata.org/wiki/Q16260253)
- [维基数据：王延政（Q8012995）](https://www.wikidata.org/wiki/Q8012995)
