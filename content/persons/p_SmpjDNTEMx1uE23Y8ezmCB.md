---
schema: wang-person/v1
id: p_SmpjDNTEMx1uE23Y8ezmCB
status: active
merged_into: null
display_name: 王道琰
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WRkMeVRJW2qn3rshr_RuNu
        subject_person_id: p_SmpjDNTEMx1uE23Y8ezmCB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道琰，南朝宋齊琅邪臨沂人，中書令王僧達之子、南齊王融之父，官至廬陵內史。母為謝惠宣女（《南齊書·卷四十七·王融傳》：父道琰，廬陵內史）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Y40jCKwT_NCvqNBRUexsKx
          claim_id: c_WRkMeVRJW2qn3rshr_RuNu
          source_id: s_nFJwPc5lsn60Nr5RuOvy7A
          stance: supports
          locator: 南齊書/卷47·王道琰
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_nFJwPc5lsn60Nr5RuOvy7A
            source_type: website
            title: 维基文库：南齊書/卷47·王道琰
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/南齊書/卷47
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:14:35.000Z
            metadata_json: null
        - id: cs_qwmKxTgNfHIwun_7jzq1Iu
          claim_id: c_WRkMeVRJW2qn3rshr_RuNu
          source_id: s_ZXScUah9a7PnyVbggx2JBz
          stance: supports
          locator: Q16906228
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ZXScUah9a7PnyVbggx2JBz
            source_type: api_record
            title: 维基数据：王道琰（Q16906228）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906228
            external_identifier: Q16906228
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:12.734Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%81%93%E7%90%B0
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_f8ZHPL9wWVqQYgYNjMPjJx
        subject_person_id: p_SmpjDNTEMx1uE23Y8ezmCB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 5世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: 0401-01-01
            latest: 0500-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RFQm7jW4eKgFX1TX4byadk
          claim_id: c_f8ZHPL9wWVqQYgYNjMPjJx
          source_id: s_ZXScUah9a7PnyVbggx2JBz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ZXScUah9a7PnyVbggx2JBz
            source_type: api_record
            title: 维基数据：王道琰（Q16906228）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906228
            external_identifier: Q16906228
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:12.734Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%81%93%E7%90%B0
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_q7LSAcmvLP3wZKm9EHDRX2
        subject_person_id: p_SmpjDNTEMx1uE23Y8ezmCB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道琰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9jLiPvtiGQVKKYUE2CM7z9
          claim_id: c_q7LSAcmvLP3wZKm9EHDRX2
          source_id: s_ZXScUah9a7PnyVbggx2JBz
          stance: supports
          locator: Q16906228
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WfBF5tT8xC7ccnTEto5sY9
        subject_person_id: p_KNRrpyLQgiSxmifNDrDvF1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SmpjDNTEMx1uE23Y8ezmCB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_JLbfegzQHKK7xmx6rC77ix
          claim_id: c_WfBF5tT8xC7ccnTEto5sY9
          source_id: s_vHqh5HoRCLCrreKhjYCLB2
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vHqh5HoRCLCrreKhjYCLB2
            source_type: api_record
            title: 维基数据：王僧达（Q13219054）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13219054
            external_identifier: Q13219054
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:41.839Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E9%81%94
        - id: cs_NBZ3jBqDDnMqwJBLQA9BYn
          claim_id: c_WfBF5tT8xC7ccnTEto5sY9
          source_id: s_ZXScUah9a7PnyVbggx2JBz
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZXScUah9a7PnyVbggx2JBz
            source_type: api_record
            title: 维基数据：王道琰（Q16906228）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906228
            external_identifier: Q16906228
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:12.734Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%81%93%E7%90%B0
      object_person:
        id: p_KNRrpyLQgiSxmifNDrDvF1
        status: active
        display_name: 王僧达
        merged_into_person_id: null
  children:
    - claim:
        id: c_MXLiSYYk7j74xzQvLrhuVp
        subject_person_id: p_SmpjDNTEMx1uE23Y8ezmCB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_irTA1gthdaRFGCsbuP9hX4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Uq9k7hmoZBCY7rvA5D4BDU
          claim_id: c_MXLiSYYk7j74xzQvLrhuVp
          source_id: s_ZXScUah9a7PnyVbggx2JBz
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZXScUah9a7PnyVbggx2JBz
            source_type: api_record
            title: 维基数据：王道琰（Q16906228）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906228
            external_identifier: Q16906228
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:12.734Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%81%93%E7%90%B0
        - id: cs_Dp533w3FNJLRukbQ6qQMWr
          claim_id: c_MXLiSYYk7j74xzQvLrhuVp
          source_id: s_KYTxmt3bGBMnDPKHNK1uFx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KYTxmt3bGBMnDPKHNK1uFx
            source_type: api_record
            title: 维基数据：王融（Q11573204）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573204
            external_identifier: Q11573204
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:44.276Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%9E%8D_(%E4%B8%AD%E4%B9%A6%E9%83%8E)
        - id: cs_kyTEi9VnvrQibMr5Mptdo7
          claim_id: c_MXLiSYYk7j74xzQvLrhuVp
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王道琰 → 王融
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_75vhXCvz17WPADu3b7QTLS
          claim_id: c_MXLiSYYk7j74xzQvLrhuVp
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王道琰 → 王融
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_irTA1gthdaRFGCsbuP9hX4
        status: active
        display_name: 王融
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道琰，南朝宋齊琅邪臨沂人，中書令王僧達之子、南齊王融之父，官至廬陵內史。母為謝惠宣女（《南齊書·卷四十七·王融傳》：父道琰，廬陵內史）。 | accepted |
| birth.date | 5世纪 | accepted |
| name.primary | 王道琰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KNRrpyLQgiSxmifNDrDvF1 | 王僧达 | accepted |
| children | p_irTA1gthdaRFGCsbuP9hX4 | 王融 | accepted |

## 外部来源

- [维基数据：王道琰（Q16906228）](https://www.wikidata.org/wiki/Q16906228)
- [维基数据：王融（Q11573204）](https://www.wikidata.org/wiki/Q11573204)
- [维基数据：王僧达（Q13219054）](https://www.wikidata.org/wiki/Q13219054)
- [维基文库：南齊書/卷47·王道琰](https://zh.wikisource.org/wiki/南齊書/卷47)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
