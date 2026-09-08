---
schema: wang-person/v1
id: p_1DSkEqAMDf7jsc58Z1ASTM
status: active
merged_into: null
display_name: 王继韬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PJWjMMxQNfFiMjs1DZCDCq
        subject_person_id: p_1DSkEqAMDf7jsc58Z1ASTM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王继韬
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1GBib3HFhyr2FBFW695C67
          claim_id: c_PJWjMMxQNfFiMjs1DZCDCq
          source_id: s_HKtEEHEEe3bCZx259B5jFZ
          stance: supports
          locator: Q16077417
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_HKtEEHEEe3bCZx259B5jFZ
            source_type: api_record
            title: 维基数据：王继韬（Q16077417）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077417
            external_identifier: Q16077417
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%A7%E9%9F%AC
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rd4gYeVZoymy1ztCRgit3C
        subject_person_id: p_BXK4dNohPJQTYjtEjv756p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1DSkEqAMDf7jsc58Z1ASTM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bKPmo1AyffGrhu477N3ooo
          claim_id: c_rd4gYeVZoymy1ztCRgit3C
          source_id: s_jXmk1TLmajvZF3VibGyjd5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jXmk1TLmajvZF3VibGyjd5
            source_type: api_record
            title: 维基数据：王延钧（Q2109927）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2109927
            external_identifier: Q2109927
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:00.764Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E9%88%9E
        - id: cs_RwYarBo3NhNFktX62ah7ky
          claim_id: c_rd4gYeVZoymy1ztCRgit3C
          source_id: s_HKtEEHEEe3bCZx259B5jFZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_BXK4dNohPJQTYjtEjv756p
        status: active
        display_name: 王延钧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王继韬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王继韬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BXK4dNohPJQTYjtEjv756p | 王延钧 | accepted |

## 外部来源

- [维基数据：王继韬（Q16077417）](https://www.wikidata.org/wiki/Q16077417)
- [维基数据：王延钧（Q2109927）](https://www.wikidata.org/wiki/Q2109927)
