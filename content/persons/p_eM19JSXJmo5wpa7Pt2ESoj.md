---
schema: wang-person/v1
id: p_eM19JSXJmo5wpa7Pt2ESoj
status: active
merged_into: null
display_name: 王玄之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b2h6X5YycqXcQFVaUfC1Q3
        subject_person_id: p_eM19JSXJmo5wpa7Pt2ESoj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄之（生于326年），史料所见人物。本项目依据《維基數據：王玄之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_VLpU97vhqo4uiJH1yYsWoY
          claim_id: c_b2h6X5YycqXcQFVaUfC1Q3
          source_id: s_MxvzFWtBwwLm7du9qJ2Nxv
          stance: supports
          locator: Q47182758
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MxvzFWtBwwLm7du9qJ2Nxv
            source_type: api_record
            title: 維基數據：王玄之（Q47182758）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q47182758
            external_identifier: Q47182758
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:17.360Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8E%84%E4%B9%8B
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XQP5x8FCLCAsBw8vBHrnu4
        subject_person_id: p_eM19JSXJmo5wpa7Pt2ESoj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 326年
            calendar_note: 維基數據 P569 結構化日期，精度：年
            earliest: 0326-01-01
            latest: 0326-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZVHeo81W6QWSuAL5EWPmme
          claim_id: c_XQP5x8FCLCAsBw8vBHrnu4
          source_id: s_MxvzFWtBwwLm7du9qJ2Nxv
          stance: supports
          locator: Q47182758
          quotation: null
          interpretation_note: null
          source:
            id: s_MxvzFWtBwwLm7du9qJ2Nxv
            source_type: api_record
            title: 維基數據：王玄之（Q47182758）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q47182758
            external_identifier: Q47182758
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:17.360Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8E%84%E4%B9%8B
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xuTwwr8ktdAiCSceUfLe35
        subject_person_id: p_eM19JSXJmo5wpa7Pt2ESoj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YrdjEVb7QUjhwdBcrxT7d2
          claim_id: c_xuTwwr8ktdAiCSceUfLe35
          source_id: s_MxvzFWtBwwLm7du9qJ2Nxv
          stance: supports
          locator: Q47182758
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W4KKoq2cKvfv1Q3hs5NnVg
        subject_person_id: p_CDzewbvc57C3MHsFxzq2nG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eM19JSXJmo5wpa7Pt2ESoj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_moBeY3owzkvEyQ13KuyxHs
          claim_id: c_W4KKoq2cKvfv1Q3hs5NnVg
          source_id: s_U3ygJC89TMNzm9Wt2sMRb4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_U3ygJC89TMNzm9Wt2sMRb4
            source_type: website
            title: 中文维基百科：王羲之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王羲之
            external_identifier: Q378564
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_LipE3g6yxdy3M3bA8ewrmu
          claim_id: c_W4KKoq2cKvfv1Q3hs5NnVg
          source_id: s_drh2iw4DqLNxZsshh35unL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_drh2iw4DqLNxZsshh35unL
            source_type: api_record
            title: 維基數據：王羲之（Q378564）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q378564
            external_identifier: Q378564
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:36.856Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BE%B2%E4%B9%8B
        - id: cs_JU4FAHPVq5AQq8PcD7i7wP
          claim_id: c_W4KKoq2cKvfv1Q3hs5NnVg
          source_id: s_MxvzFWtBwwLm7du9qJ2Nxv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MxvzFWtBwwLm7du9qJ2Nxv
            source_type: api_record
            title: 維基數據：王玄之（Q47182758）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q47182758
            external_identifier: Q47182758
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:17.360Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8E%84%E4%B9%8B
        - id: cs_u9WDF5LrVZnNV9EwFsmc48
          claim_id: c_W4KKoq2cKvfv1Q3hs5NnVg
          source_id: s_em2Ve68RuaqtB9qnBt9r8f
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 東晉書法家王羲之長子
          interpretation_note: null
          source:
            id: s_em2Ve68RuaqtB9qnBt9r8f
            source_type: website
            title: 中文维基百科：王玄之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8E%84%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:18.047Z
            metadata_json: null
        - id: cs_Ughk9v2ran7QX7Jrfg2KeH
          claim_id: c_W4KKoq2cKvfv1Q3hs5NnVg
          source_id: s_9M8a6WLDE9DdMBjd4t59JB
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 東晉書法家王羲之長子
          interpretation_note: null
          source:
            id: s_9M8a6WLDE9DdMBjd4t59JB
            source_type: website
            title: 中文维基百科：王玄之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8E%84%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:41.566Z
            metadata_json: null
      object_person:
        id: p_CDzewbvc57C3MHsFxzq2nG
        status: active
        display_name: 王羲之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玄之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玄之（生于326年），史料所见人物。本项目依据《維基數據：王玄之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 326年 | accepted |
| name.primary | 王玄之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CDzewbvc57C3MHsFxzq2nG | 王羲之 | accepted |

## 外部来源

- [維基數據：王羲之（Q378564）](https://www.wikidata.org/wiki/Q378564)
- [維基數據：王玄之（Q47182758）](https://www.wikidata.org/wiki/Q47182758)
- [中文维基百科：王羲之](https://zh.wikipedia.org/wiki/王羲之)
- [中文维基百科：王玄之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8E%84%E4%B9%8B)
