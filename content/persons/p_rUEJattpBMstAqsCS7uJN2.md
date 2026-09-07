---
schema: wang-person/v1
id: p_rUEJattpBMstAqsCS7uJN2
status: active
merged_into: null
display_name: 王茂璋
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bU3noOD0Cqafa8xXunSrNF
        subject_person_id: p_rUEJattpBMstAqsCS7uJN2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂璋（生于5世纪），史料所见人物。本项目依据《王茂璋》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Jl1W7bDw4lWiZ5C0qNVa5Z
          claim_id: c_bU3noOD0Cqafa8xXunSrNF
          source_id: s_7om5PA77tGaukCepGe5FMQ
          stance: supports
          locator: Q16906201
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7om5PA77tGaukCepGe5FMQ
            source_type: api_record
            title: 维基数据：王茂璋（Q16906201）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906201
            external_identifier: Q16906201
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:34.297Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8C%82%E7%92%8B
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sQKVndMA8cZQTqwx4fi8FZ
        subject_person_id: p_rUEJattpBMstAqsCS7uJN2
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
        - id: cs_f8EUPLaUeMNKd8YT7LUhnv
          claim_id: c_sQKVndMA8cZQTqwx4fi8FZ
          source_id: s_7om5PA77tGaukCepGe5FMQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7om5PA77tGaukCepGe5FMQ
            source_type: api_record
            title: 维基数据：王茂璋（Q16906201）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906201
            external_identifier: Q16906201
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:34.297Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8C%82%E7%92%8B
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mzbopX64RDg4UazWin4Ucq
        subject_person_id: p_rUEJattpBMstAqsCS7uJN2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂璋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_c7yNNz9euG1vG1eUyyNMvE
          claim_id: c_mzbopX64RDg4UazWin4Ucq
          source_id: s_7om5PA77tGaukCepGe5FMQ
          stance: supports
          locator: Q16906201
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ycAsyJVe2fVNyCehBenkCF
        subject_person_id: p_MZZjMah11dpZSqww6KpUSA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rUEJattpBMstAqsCS7uJN2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LdyGaY12wZoBDBzhYmr2SJ
          claim_id: c_ycAsyJVe2fVNyCehBenkCF
          source_id: s_tEUTAG2jCUWNyqv8tTJMUe
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tEUTAG2jCUWNyqv8tTJMUe
            source_type: api_record
            title: 维基数据：王僧衍（Q16905835）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16905835
            external_identifier: Q16905835
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:12.733Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E8%A1%8D
        - id: cs_eDQtRFK188ZMGkfovURB13
          claim_id: c_ycAsyJVe2fVNyCehBenkCF
          source_id: s_7om5PA77tGaukCepGe5FMQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7om5PA77tGaukCepGe5FMQ
            source_type: api_record
            title: 维基数据：王茂璋（Q16906201）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906201
            external_identifier: Q16906201
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:34.297Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8C%82%E7%92%8B
        - id: cs_NE6GH56r6zHjJgm6nemNjh
          claim_id: c_ycAsyJVe2fVNyCehBenkCF
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王僧衍 → 王茂璋
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
        - id: cs_WJ1CoCYQ6BsyMf1BYYPx8w
          claim_id: c_ycAsyJVe2fVNyCehBenkCF
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王僧衍 → 王茂璋
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
        id: p_MZZjMah11dpZSqww6KpUSA
        status: active
        display_name: 王僧衍
        merged_into_person_id: null
  children:
    - claim:
        id: c_asieF4NW2n9qLaZp8A3wJN
        subject_person_id: p_rUEJattpBMstAqsCS7uJN2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1yyJgULJScCP8bYcGrpFnn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tpbR6BFjS62UpVST7VZZcv
          claim_id: c_asieF4NW2n9qLaZp8A3wJN
          source_id: s_7om5PA77tGaukCepGe5FMQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7om5PA77tGaukCepGe5FMQ
            source_type: api_record
            title: 维基数据：王茂璋（Q16906201）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906201
            external_identifier: Q16906201
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:34.297Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8C%82%E7%92%8B
        - id: cs_9rodWBi6UStx6TxqNyuV4W
          claim_id: c_asieF4NW2n9qLaZp8A3wJN
          source_id: s_rNebVCB1MbWJF2B7KxDAkM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_rNebVCB1MbWJF2B7KxDAkM
            source_type: api_record
            title: 维基数据：王冲（Q11573148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573148
            external_identifier: Q11573148
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:48.939Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%86%B2_(%E5%8D%97%E6%9C%9D)
        - id: cs_X2DF6dk8S4x5Ezz98gjoWv
          claim_id: c_asieF4NW2n9qLaZp8A3wJN
          source_id: s_FZuP1nRVaATy5u3R2KZ74M
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父茂璋，梁給事黃門侍郎
          interpretation_note: null
          source:
            id: s_FZuP1nRVaATy5u3R2KZ74M
            source_type: book
            title: 中文维基文库：陳書/卷17
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E9%99%B3%E6%9B%B8%2F%E5%8D%B717
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:56.989Z
            metadata_json: null
        - id: cs_vJMSEdbUeWCKP8iENxBKLx
          claim_id: c_asieF4NW2n9qLaZp8A3wJN
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王茂璋 → 王冲
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
        - id: cs_S2iAR72V8JM9njweh7n4pD
          claim_id: c_asieF4NW2n9qLaZp8A3wJN
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王茂璋 → 王冲
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
        - id: cs_L9NmbKqawLaaH5DA3Ecz7F
          claim_id: c_asieF4NW2n9qLaZp8A3wJN
          source_id: s_ZVxhBeTzwCx7GXcsJi6vs3
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父茂璋，梁給事黃門侍郎。
          interpretation_note: null
          source:
            id: s_ZVxhBeTzwCx7GXcsJi6vs3
            source_type: book
            title: 中文维基文库：陳書/卷17
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E9%99%B3%E6%9B%B8%2F%E5%8D%B717
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:05.987Z
            metadata_json: null
      object_person:
        id: p_1yyJgULJScCP8bYcGrpFnn
        status: active
        display_name: 王冲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_95B8oqGbcSXk8FYv4N4mVL
        subject_person_id: p_4qHvMbDQ9EHGbQyMBsF3tu
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rUEJattpBMstAqsCS7uJN2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_HKgH5jkdqKZ4oDSBcXoQT7
          claim_id: c_95B8oqGbcSXk8FYv4N4mVL
          source_id: s_7om5PA77tGaukCepGe5FMQ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_7om5PA77tGaukCepGe5FMQ
            source_type: api_record
            title: 维基数据：王茂璋（Q16906201）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906201
            external_identifier: Q16906201
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:34.297Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8C%82%E7%92%8B
        - id: cs_CCi5vagQwWUcvA5MfpiHGC
          claim_id: c_95B8oqGbcSXk8FYv4N4mVL
          source_id: s_rWWhxEeN4eFtDMhhXLwnvf
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_rWWhxEeN4eFtDMhhXLwnvf
            source_type: api_record
            title: 维基数据：新安穆公主（Q16603434）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603434
            external_identifier: Q16603434
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:50.786Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%96%B0%E5%AE%89%E7%A9%86%E5%85%AC%E4%B8%BB
        - id: cs_rnn4DeUB97nYwZ63Agchq5
          claim_id: c_95B8oqGbcSXk8FYv4N4mVL
          source_id: s_hkFMABE35zo1C8WVmgsWo3
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王茂璋
          interpretation_note: null
          source:
            id: s_hkFMABE35zo1C8WVmgsWo3
            source_type: website
            title: 中文维基百科：新安穆公主
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E6%96%B0%E5%AE%89%E7%A9%86%E5%85%AC%E4%B8%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:10.420Z
            metadata_json: null
        - id: cs_zix15iAwQR21NKgE4p1kq8
          claim_id: c_95B8oqGbcSXk8FYv4N4mVL
          source_id: s_Q6qkxGPxMVTa25XEiKCtYq
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王茂璋
          interpretation_note: null
          source:
            id: s_Q6qkxGPxMVTa25XEiKCtYq
            source_type: website
            title: 中文维基百科：新安穆公主
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E6%96%B0%E5%AE%89%E7%A9%86%E5%85%AC%E4%B8%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:39.321Z
            metadata_json: null
        - id: cs_giaWwFLGhhzHCw1gZ9EioK
          claim_id: c_95B8oqGbcSXk8FYv4N4mVL
          source_id: s_YLz6vztVncacReib6qUTg3
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王茂璋
          interpretation_note: null
          source:
            id: s_YLz6vztVncacReib6qUTg3
            source_type: website
            title: 中文维基百科：新安穆公主
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E6%96%B0%E5%AE%89%E7%A9%86%E5%85%AC%E4%B8%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:39.022Z
            metadata_json: null
        - id: cs_uMDaqGuci9hoKKo3AK4X1L
          claim_id: c_95B8oqGbcSXk8FYv4N4mVL
          source_id: s_wRUEEANuf6j5ZU44AzDfxg
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王茂璋
          interpretation_note: null
          source:
            id: s_wRUEEANuf6j5ZU44AzDfxg
            source_type: website
            title: 中文维基百科：新安穆公主
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E6%96%B0%E5%AE%89%E7%A9%86%E5%85%AC%E4%B8%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:24.445Z
            metadata_json: null
        - id: cs_Xm5P8xh9EYJMyVoAfmwa65
          claim_id: c_95B8oqGbcSXk8FYv4N4mVL
          source_id: s_DgUAFkBY3WKTeJhySpSRvD
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王茂璋
          interpretation_note: null
          source:
            id: s_DgUAFkBY3WKTeJhySpSRvD
            source_type: website
            title: 中文维基百科：新安穆公主
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E6%96%B0%E5%AE%89%E7%A9%86%E5%85%AC%E4%B8%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:49.216Z
            metadata_json: null
      object_person:
        id: p_4qHvMbDQ9EHGbQyMBsF3tu
        status: active
        display_name: 新安穆公主
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王茂璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王茂璋（生于5世纪），史料所见人物。本项目依据《王茂璋》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 5世纪 | accepted |
| name.primary | 王茂璋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MZZjMah11dpZSqww6KpUSA | 王僧衍 | accepted |
| children | p_1yyJgULJScCP8bYcGrpFnn | 王冲 | accepted |
| spouses | p_4qHvMbDQ9EHGbQyMBsF3tu | 新安穆公主 | accepted |

## 外部来源

- [维基数据：王冲（Q11573148）](https://www.wikidata.org/wiki/Q11573148)
- [维基数据：王茂璋（Q16906201）](https://www.wikidata.org/wiki/Q16906201)
- [维基数据：王僧衍（Q16905835）](https://www.wikidata.org/wiki/Q16905835)
- [维基数据：新安穆公主（Q16603434）](https://www.wikidata.org/wiki/Q16603434)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：新安穆公主](https://zh.wikipedia.org/wiki/%E6%96%B0%E5%AE%89%E7%A9%86%E5%85%AC%E4%B8%BB)
- [中文维基文库：陳書/卷17](https://zh.wikisource.org/wiki/%E9%99%B3%E6%9B%B8%2F%E5%8D%B717)
