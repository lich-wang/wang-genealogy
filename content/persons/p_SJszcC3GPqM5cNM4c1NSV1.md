---
schema: wang-person/v1
id: p_SJszcC3GPqM5cNM4c1NSV1
status: active
merged_into: null
display_name: 王山立
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d8oRVN3dKFawQxsEmypW3c
        subject_person_id: p_SJszcC3GPqM5cNM4c1NSV1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王山立
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WckxLwRTLCfy6ZcKuj8GKj
          claim_id: c_d8oRVN3dKFawQxsEmypW3c
          source_id: s_UDginCNHsagCxU65FeUh3Y
          stance: supports
          locator: Q16075287
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_UDginCNHsagCxU65FeUh3Y
            source_type: api_record
            title: 维基数据：王山立（Q16075287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075287
            external_identifier: Q16075287
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B1%B1%E7%AB%8B
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HhDvnz39PiiwwCtKs2rTMG
        subject_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SJszcC3GPqM5cNM4c1NSV1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LsmhUQmdiBY16snVoeGETi
          claim_id: c_HhDvnz39PiiwwCtKs2rTMG
          source_id: s_Y1XjPJB2E3sdU1bzkZCXWH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Y1XjPJB2E3sdU1bzkZCXWH
            source_type: api_record
            title: 维基数据：王象春（Q16260916）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260916
            external_identifier: Q16260916
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:52.050Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B1%A1%E6%98%A5
        - id: cs_ZRx26nGq5Pn7wMrJqKSGf3
          claim_id: c_HhDvnz39PiiwwCtKs2rTMG
          source_id: s_UDginCNHsagCxU65FeUh3Y
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王山立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王山立 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |

## 外部来源

- [维基数据：王山立（Q16075287）](https://www.wikidata.org/wiki/Q16075287)
- [维基数据：王象春（Q16260916）](https://www.wikidata.org/wiki/Q16260916)
