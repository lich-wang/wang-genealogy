---
schema: wang-person/v1
id: p_GGkE3hWeA36NBdGG81bFDT
status: active
merged_into: null
display_name: 李皇后 (王延羲)
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oPGxvmWk2TZPzBmnMxMnee
        subject_person_id: p_GGkE3hWeA36NBdGG81bFDT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李皇后 (王延羲)
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AqzAfNFVFPJxSsDgvpuzJ7
          claim_id: c_oPGxvmWk2TZPzBmnMxMnee
          source_id: s_nB9BBUmTNGMjKGDpGYS5Qk
          stance: supports
          locator: Q8256425
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_nB9BBUmTNGMjKGDpGYS5Qk
            source_type: api_record
            title: 维基数据：李皇后 (王延羲)（Q8256425）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8256425
            external_identifier: Q8256425
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%9D%8E%E7%9A%87%E5%90%8E_(%E7%8E%8B%E5%BB%B6%E7%BE%B2)
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_9rPPym5WwWNbJApBQxD2TQ
        subject_person_id: p_GGkE3hWeA36NBdGG81bFDT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rv5xppZzZhcU83pgyjtWt7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7hdL77FdFvS5GVhF9D6AJM
          claim_id: c_9rPPym5WwWNbJApBQxD2TQ
          source_id: s_qvWMPq1Ge2Cad7UtqSFQz6
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_qvWMPq1Ge2Cad7UtqSFQz6
            source_type: api_record
            title: 维基数据：王延羲（Q2208402）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2208402
            external_identifier: Q2208402
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:00.765Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E7%BE%B2
        - id: cs_CHV8J63p9bAMBnmFrL2f8B
          claim_id: c_9rPPym5WwWNbJApBQxD2TQ
          source_id: s_nB9BBUmTNGMjKGDpGYS5Qk
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_rv5xppZzZhcU83pgyjtWt7
        status: active
        display_name: 王延羲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李皇后 (王延羲)

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李皇后 (王延羲) | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_rv5xppZzZhcU83pgyjtWt7 | 王延羲 | accepted |

## 外部来源

- [维基数据：李皇后 (王延羲)（Q8256425）](https://www.wikidata.org/wiki/Q8256425)
- [维基数据：王延羲（Q2208402）](https://www.wikidata.org/wiki/Q2208402)
