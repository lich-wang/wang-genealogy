---
schema: wang-person/v1
id: p_g1G7CMpe8j9KM1MarWKQLw
status: active
merged_into: null
display_name: 王凤
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KXN5PhMEk5735Kp2wTwP1L
        subject_person_id: p_g1G7CMpe8j9KM1MarWKQLw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凤（卒于前21年），西汉大司马。维基数据以独立条目 Q1930926 收录该人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_RlWlMkgFF7FAIUD93iAvw_
          claim_id: c_KXN5PhMEk5735Kp2wTwP1L
          source_id: s_F3ku7nmjt4aZ7fozGVxGqz
          stance: supports
          locator: Q1930926
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_F3ku7nmjt4aZ7fozGVxGqz
            source_type: api_record
            title: 维基数据：王凤（Q1930926）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1930926
            external_identifier: Q1930926
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:38.848Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%87%A4
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_z28JuwhPdf14z5RBnnbYaq
        subject_person_id: p_g1G7CMpe8j9KM1MarWKQLw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前21年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: -0021-01-01
            latest: -0021-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iZq3s2CbtGgax4YKXDj7PG
          claim_id: c_z28JuwhPdf14z5RBnnbYaq
          source_id: s_F3ku7nmjt4aZ7fozGVxGqz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_F3ku7nmjt4aZ7fozGVxGqz
            source_type: api_record
            title: 维基数据：王凤（Q1930926）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1930926
            external_identifier: Q1930926
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:38.848Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%87%A4
      object_person: null
    alternatives: []
  - predicate: historical.period
    recommended:
      claim:
        id: c_m9uFnpsHnZMq9aqs4Nkoeq
        subject_person_id: p_g1G7CMpe8j9KM1MarWKQLw
        claim_kind: property
        predicate: historical.period
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 西汉
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XwTd1DsBv7uAY5Yv1pL8AL
          claim_id: c_m9uFnpsHnZMq9aqs4Nkoeq
          source_id: s_F3ku7nmjt4aZ7fozGVxGqz
          stance: supports
          locator: 人物简介中的朝代／时期表述
          quotation: null
          interpretation_note: 从同一来源支持的简介摘取：西汉大司马
          source:
            id: s_F3ku7nmjt4aZ7fozGVxGqz
            source_type: api_record
            title: 维基数据：王凤（Q1930926）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1930926
            external_identifier: Q1930926
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:38.848Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%87%A4
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aS6AoKvhoxMAByaFBhD27q
        subject_person_id: p_g1G7CMpe8j9KM1MarWKQLw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凤
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FsThxMkLCDzPZRewjjtMzu
          claim_id: c_aS6AoKvhoxMAByaFBhD27q
          source_id: s_F3ku7nmjt4aZ7fozGVxGqz
          stance: supports
          locator: Q1930926
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pPw9oeGpBKg165V3aUKg9L
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g1G7CMpe8j9KM1MarWKQLw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fqvpjS4KE82UA86rNFQikm
          claim_id: c_pPw9oeGpBKg165V3aUKg9L
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_beAhFALZ5S1RheamgPZ3W3
          claim_id: c_pPw9oeGpBKg165V3aUKg9L
          source_id: s_F3ku7nmjt4aZ7fozGVxGqz
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_F3ku7nmjt4aZ7fozGVxGqz
            source_type: api_record
            title: 维基数据：王凤（Q1930926）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1930926
            external_identifier: Q1930926
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:38.848Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%87%A4
        - id: cs_G8Ldjn2PNJMD8RFNBfX9eF
          claim_id: c_pPw9oeGpBKg165V3aUKg9L
          source_id: s_FG2zNqr2EsU3iQKfnSbLgE
          stance: supports
          locator: 条文：之子/之女
          quotation: 濟北王田安之後裔，王禁之子，汉成帝時外戚、大臣
          interpretation_note: null
          source:
            id: s_FG2zNqr2EsU3iQKfnSbLgE
            source_type: website
            title: 中文维基百科：王凤
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%87%A4
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:35.340Z
            metadata_json: null
        - id: cs_QCbzeU18fSKXiV1zJ3ahGF
          claim_id: c_pPw9oeGpBKg165V3aUKg9L
          source_id: s_mfg1hfK3E7o3bd2KGPMJAj
          stance: supports
          locator: 条文：之子/之女
          quotation: 濟北王田安之後裔，王禁之子，汉成帝時外戚、大臣
          interpretation_note: null
          source:
            id: s_mfg1hfK3E7o3bd2KGPMJAj
            source_type: website
            title: 中文维基百科：王凤
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%87%A4
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:00.730Z
            metadata_json: null
      object_person:
        id: p_xN7tAHKk6W68mdWgNxHCZz
        status: active
        display_name: 王禁
        merged_into_person_id: null
  children:
    - claim:
        id: c_uRWLDKQGXcgXUH8ij7GJAs
        subject_person_id: p_g1G7CMpe8j9KM1MarWKQLw
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Aa9sWB9iaGiu68d45KpPjg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aK1q6u1Qi3fGYG8CL2K6As
          claim_id: c_uRWLDKQGXcgXUH8ij7GJAs
          source_id: s_rQzJN9JbtepbR6PYXUfYuD
          stance: supports
          locator: 王凤传末
          quotation: 鳳薨……謚曰敬成侯。子襄嗣侯，為衛尉。
          interpretation_note: null
          source:
            id: s_rQzJN9JbtepbR6PYXUfYuD
            source_type: book
            title: 中文维基文库：《汉书》卷九十八
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E6%BC%A2%E6%9B%B8/%E5%8D%B7098
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:52.385Z
            metadata_json: null
      object_person:
        id: p_Aa9sWB9iaGiu68d45KpPjg
        status: active
        display_name: 王襄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王凤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王凤（卒于前21年），西汉大司马。维基数据以独立条目 Q1930926 收录该人物。 | accepted |
| death.date | 前21年 | accepted |
| historical.period | 西汉 | accepted |
| name.primary | 王凤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xN7tAHKk6W68mdWgNxHCZz | 王禁 | accepted |
| children | p_Aa9sWB9iaGiu68d45KpPjg | 王襄 | accepted |

## 外部来源

- [维基数据：王凤（Q1930926）](https://www.wikidata.org/wiki/Q1930926)
- [維基數據：王禁（Q2979420）](https://www.wikidata.org/wiki/Q2979420)
- [中文维基百科：王凤](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%87%A4)
- [中文维基文库：《汉书》卷九十八](https://zh.wikisource.org/zh-hant/%E6%BC%A2%E6%9B%B8/%E5%8D%B7098)
