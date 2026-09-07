---
schema: wang-person/v1
id: p_bnnhZdLTE5438ztJGTYQ7C
status: active
merged_into: null
display_name: 王崇
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s1QYgB_NX5mw1BU56TgN0T
        subject_person_id: p_bnnhZdLTE5438ztJGTYQ7C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇（前1世纪—前31年），字少子，西汉外戚，东平陵（今山东省济南市东）迁居魏郡元城县委粟里。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_eOarUwQEYe5t524fU6pTdB
          claim_id: c_s1QYgB_NX5mw1BU56TgN0T
          source_id: s_3WjvcWsJjiXZjaBscTTDV3
          stance: supports
          locator: 导言
          quotation: 王崇（前1世纪—前31年），字少子，西汉外戚，东平陵（今山东省济
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_3WjvcWsJjiXZjaBscTTDV3
            source_type: website
            title: 中文维基百科：王崇 (安成侯)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B4%87_(%E5%AE%89%E6%88%90%E4%BE%AF)
            external_identifier: Q16260058
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_94MxbQTYD3jQjDPBYDV74b
        subject_person_id: p_bnnhZdLTE5438ztJGTYQ7C
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前1世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: -0100-01-01
            latest: -0001-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6UYMdSEHJdQZarjjCT37iJ
          claim_id: c_94MxbQTYD3jQjDPBYDV74b
          source_id: s_u1pKy2o2wetHE5y5nJ9Zat
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_u1pKy2o2wetHE5y5nJ9Zat
            source_type: api_record
            title: 维基数据：王崇（Q16260058）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260058
            external_identifier: Q16260058
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:52.810Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B4%87_(%E5%AE%89%E6%88%90%E4%BE%AF)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fKKDWGsNgVWUpPyYs2MuHV
        subject_person_id: p_bnnhZdLTE5438ztJGTYQ7C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MnpEMrwAvHUn6TDUBPMvMj
          claim_id: c_fKKDWGsNgVWUpPyYs2MuHV
          source_id: s_u1pKy2o2wetHE5y5nJ9Zat
          stance: supports
          locator: Q16260058
          quotation: null
          interpretation_note: null
          source:
            id: s_u1pKy2o2wetHE5y5nJ9Zat
            source_type: api_record
            title: 维基数据：王崇（Q16260058）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260058
            external_identifier: Q16260058
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:52.810Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B4%87_(%E5%AE%89%E6%88%90%E4%BE%AF)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_t9tWkqN4dYvG9PvBVEgGY5
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bnnhZdLTE5438ztJGTYQ7C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TBT3GiVgYJZbvHMw8RBDLs
          claim_id: c_t9tWkqN4dYvG9PvBVEgGY5
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
        - id: cs_AWnbH4qjw5wQAVKDpti3en
          claim_id: c_t9tWkqN4dYvG9PvBVEgGY5
          source_id: s_u1pKy2o2wetHE5y5nJ9Zat
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_u1pKy2o2wetHE5y5nJ9Zat
            source_type: api_record
            title: 维基数据：王崇（Q16260058）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260058
            external_identifier: Q16260058
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:52.810Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B4%87_(%E5%AE%89%E6%88%90%E4%BE%AF)
      object_person:
        id: p_xN7tAHKk6W68mdWgNxHCZz
        status: active
        display_name: 王禁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇（前1世纪—前31年），字少子，西汉外戚，东平陵（今山东省济南市东）迁居魏郡元城县委粟里。 | accepted |
| birth.date | 前1世纪 | accepted |
| name.primary | 王崇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xN7tAHKk6W68mdWgNxHCZz | 王禁 | accepted |

## 外部来源

- [维基数据：王崇（Q16260058）](https://www.wikidata.org/wiki/Q16260058)
- [維基數據：王禁（Q2979420）](https://www.wikidata.org/wiki/Q2979420)
- [中文维基百科：王崇 (安成侯)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B4%87_(%E5%AE%89%E6%88%90%E4%BE%AF))
