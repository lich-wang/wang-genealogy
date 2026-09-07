---
schema: wang-person/v1
id: p_HEAZUpK6B8392UvpQkxb4J
status: active
merged_into: null
display_name: 王音
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3dVxEvBBZAfVwIi6SFQZGy
        subject_person_id: p_HEAZUpK6B8392UvpQkxb4J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王音，史料所见人物。本项目依据《王音》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y-EYvDmgfaqYEerxUt1u4u
          claim_id: c_3dVxEvBBZAfVwIi6SFQZGy
          source_id: s_jdcBv1F9fzN33tMfhQxUMK
          stance: supports
          locator: Q108167711
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_jdcBv1F9fzN33tMfhQxUMK
            source_type: api_record
            title: 维基数据：王音（Q108167711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q108167711
            external_identifier: Q108167711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:17.813Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rP8QSQGHW34ZT4BgHsw8VK
        subject_person_id: p_HEAZUpK6B8392UvpQkxb4J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王音
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8wzvHqdTKKtPEZmHJjazao
          claim_id: c_rP8QSQGHW34ZT4BgHsw8VK
          source_id: s_jdcBv1F9fzN33tMfhQxUMK
          stance: supports
          locator: Q108167711
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8D8wrUBGE1Q5xNKXrRZVGk
        subject_person_id: p_1FJdZ15XyXMCC5RwrJYVuD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HEAZUpK6B8392UvpQkxb4J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_quHbbYPqBkZMqWmnd4z6A4
          claim_id: c_8D8wrUBGE1Q5xNKXrRZVGk
          source_id: s_jdcBv1F9fzN33tMfhQxUMK
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jdcBv1F9fzN33tMfhQxUMK
            source_type: api_record
            title: 维基数据：王音（Q108167711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q108167711
            external_identifier: Q108167711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:17.813Z
            metadata_json: null
        - id: cs_7a4wcdNqQXtCNKYNWnxwdC
          claim_id: c_8D8wrUBGE1Q5xNKXrRZVGk
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 生二子：旹、音。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_1FJdZ15XyXMCC5RwrJYVuD
        status: active
        display_name: 王遵
        merged_into_person_id: null
  children:
    - claim:
        id: c_5Cc3FsKXofMbzUTveRrfUa
        subject_person_id: p_HEAZUpK6B8392UvpQkxb4J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xf9mHYCEP9VyeEbrAsuExM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ATM2UothvXdYWKBKAQiGDZ
          claim_id: c_5Cc3FsKXofMbzUTveRrfUa
          source_id: s_E62U81cbJT7dBHVFDDwfqd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_E62U81cbJT7dBHVFDDwfqd
            source_type: api_record
            title: 维基数据：王仁（Q22814785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814785
            external_identifier: Q22814785
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:59.387Z
            metadata_json: null
        - id: cs_AUEYZ8Y4ZB8D6wjqGNgUsp
          claim_id: c_5Cc3FsKXofMbzUTveRrfUa
          source_id: s_jdcBv1F9fzN33tMfhQxUMK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jdcBv1F9fzN33tMfhQxUMK
            source_type: api_record
            title: 维基数据：王音（Q108167711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q108167711
            external_identifier: Q108167711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:17.813Z
            metadata_json: null
      object_person:
        id: p_xf9mHYCEP9VyeEbrAsuExM
        status: active
        display_name: 王仁
        merged_into_person_id: null
    - claim:
        id: c_y7E8hTafMgWVTxC9wt2rss
        subject_person_id: p_HEAZUpK6B8392UvpQkxb4J
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_vmBV1uQSC3WNCsyT7DEMtB
        generation_count: null
        parent_role: null
        value_json: null
        status: disputed
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_q7474C2ZFCvqW9Z5wR4D9V
          claim_id: c_y7E8hTafMgWVTxC9wt2rss
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 四子：誼、叡、典、融。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_vmBV1uQSC3WNCsyT7DEMtB
        status: active
        display_name: 王叡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王音

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王音，史料所见人物。本项目依据《王音》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王音 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1FJdZ15XyXMCC5RwrJYVuD | 王遵 | accepted |
| children | p_xf9mHYCEP9VyeEbrAsuExM | 王仁 | accepted |
| children | p_vmBV1uQSC3WNCsyT7DEMtB | 王叡 | disputed |

## 外部来源

- [维基数据：王仁（Q22814785）](https://www.wikidata.org/wiki/Q22814785)
- [维基数据：王音（Q108167711）](https://www.wikidata.org/wiki/Q108167711)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
