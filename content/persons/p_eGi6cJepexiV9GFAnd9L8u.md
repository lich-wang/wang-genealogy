---
schema: wang-person/v1
id: p_eGi6cJepexiV9GFAnd9L8u
status: active
merged_into: null
display_name: 王混
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YZ3tdeLySHC4wAsTwPj63s
        subject_person_id: p_eGi6cJepexiV9GFAnd9L8u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王混，东晋大臣。维基数据以独立条目 Q18118174 收录该人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_8aSpLWqbbI1ZG-Q04RUzKL
          claim_id: c_YZ3tdeLySHC4wAsTwPj63s
          source_id: s_eCfut1gTfg2DFbQLvfxPSL
          stance: supports
          locator: Q18118174
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_eCfut1gTfg2DFbQLvfxPSL
            source_type: api_record
            title: 维基数据：王混（Q18118174）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118174
            external_identifier: Q18118174
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:01.492Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B7%B7
      object_person: null
    alternatives: []
  - predicate: historical.period
    recommended:
      claim:
        id: c_YsMRFWAHhSYRWunng82GLT
        subject_person_id: p_eGi6cJepexiV9GFAnd9L8u
        claim_kind: property
        predicate: historical.period
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 东晋
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2yhDZ1rX29tQ3hRbVAC5pi
          claim_id: c_YsMRFWAHhSYRWunng82GLT
          source_id: s_eCfut1gTfg2DFbQLvfxPSL
          stance: supports
          locator: 人物简介中的朝代／时期表述
          quotation: null
          interpretation_note: 从同一来源支持的简介摘取：东晋大臣
          source:
            id: s_eCfut1gTfg2DFbQLvfxPSL
            source_type: api_record
            title: 维基数据：王混（Q18118174）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118174
            external_identifier: Q18118174
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:01.492Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B7%B7
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aCRCYe2PA2WeeVPSzoxS8d
        subject_person_id: p_eGi6cJepexiV9GFAnd9L8u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王混
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6Nhosqz8h7H87RDvDQnua1
          claim_id: c_aCRCYe2PA2WeeVPSzoxS8d
          source_id: s_eCfut1gTfg2DFbQLvfxPSL
          stance: supports
          locator: Q18118174
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_veRM32UBEMJwbS283E4c8p
        subject_person_id: p_H7xedNgXo2vDg7amAnfbo9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eGi6cJepexiV9GFAnd9L8u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FZvbUrAaKDHSfSENUipGVf
          claim_id: c_veRM32UBEMJwbS283E4c8p
          source_id: s_2FafAvni6gBSLVweT5oH5V
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_2FafAvni6gBSLVweT5oH5V
            source_type: api_record
            title: 維基數據：王恬（Q15927256）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15927256
            external_identifier: Q15927256
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:06.973Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AC
        - id: cs_Y4KGWgzicQBp497VL6igks
          claim_id: c_veRM32UBEMJwbS283E4c8p
          source_id: s_eCfut1gTfg2DFbQLvfxPSL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eCfut1gTfg2DFbQLvfxPSL
            source_type: api_record
            title: 维基数据：王混（Q18118174）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118174
            external_identifier: Q18118174
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:01.492Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B7%B7
        - id: cs_2cMs9wn9ZVftSmtXjiKtEc
          claim_id: c_veRM32UBEMJwbS283E4c8p
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王恬 → 王混
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
        - id: cs_3iKuTTzZtHwy49jakaHZrQ
          claim_id: c_veRM32UBEMJwbS283E4c8p
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王恬 → 王混
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
        id: p_H7xedNgXo2vDg7amAnfbo9
        status: active
        display_name: 王恬
        merged_into_person_id: null
  children:
    - claim:
        id: c_WBhqzDNm5dJm1B8MLi3hhQ
        subject_person_id: p_eGi6cJepexiV9GFAnd9L8u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R68KiP1SJxRS53Ad6ypgqE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_vk7PFaKtqtybi5iPA2FdWG
          claim_id: c_WBhqzDNm5dJm1B8MLi3hhQ
          source_id: s_eCfut1gTfg2DFbQLvfxPSL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eCfut1gTfg2DFbQLvfxPSL
            source_type: api_record
            title: 维基数据：王混（Q18118174）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118174
            external_identifier: Q18118174
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:01.492Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B7%B7
        - id: cs_d2xGdtiSQSqJTrHE3QGtyU
          claim_id: c_WBhqzDNm5dJm1B8MLi3hhQ
          source_id: s_iD5eyt544b8AA8BRC2HiW9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iD5eyt544b8AA8BRC2HiW9
            source_type: api_record
            title: 维基数据：王誕（Q11573207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573207
            external_identifier: Q11573207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:47.180Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AA%95
        - id: cs_GcApduREHob8Jf314dKtjB
          claim_id: c_WBhqzDNm5dJm1B8MLi3hhQ
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王混 → 王诞
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
        - id: cs_sXnBppGJshJaj5xFDaNgR3
          claim_id: c_WBhqzDNm5dJm1B8MLi3hhQ
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王混 → 王诞
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
        id: p_R68KiP1SJxRS53Ad6ypgqE
        status: active
        display_name: 王誕
        merged_into_person_id: null
    - claim:
        id: c_zJaCcpL5ZembcJUjYP3vCC
        subject_person_id: p_eGi6cJepexiV9GFAnd9L8u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RhUjZsZ1qknHMkKvcSu7Pr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PK3NwpKKCL2rB7BbwSogrx
          claim_id: c_zJaCcpL5ZembcJUjYP3vCC
          source_id: s_eCfut1gTfg2DFbQLvfxPSL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eCfut1gTfg2DFbQLvfxPSL
            source_type: api_record
            title: 维基数据：王混（Q18118174）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118174
            external_identifier: Q18118174
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:01.492Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B7%B7
        - id: cs_VUbDbSFtP9XG7V5FQG5BYP
          claim_id: c_zJaCcpL5ZembcJUjYP3vCC
          source_id: s_WmuRV1fsqQo64BrHaRUPiR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_WmuRV1fsqQo64BrHaRUPiR
            source_type: api_record
            title: 维基数据：王嘏（Q18118172）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118172
            external_identifier: Q18118172
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:53.246Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%98%8F
        - id: cs_BBDtWaU6FBEA7L624iqsy8
          claim_id: c_zJaCcpL5ZembcJUjYP3vCC
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王混 → 王嘏
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
        - id: cs_6TAq3mHVcDJDvqzQK51NYq
          claim_id: c_zJaCcpL5ZembcJUjYP3vCC
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王混 → 王嘏
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
        id: p_RhUjZsZ1qknHMkKvcSu7Pr
        status: active
        display_name: 王嘏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王混

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王混，东晋大臣。维基数据以独立条目 Q18118174 收录该人物。 | accepted |
| historical.period | 东晋 | accepted |
| name.primary | 王混 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H7xedNgXo2vDg7amAnfbo9 | 王恬 | accepted |
| children | p_R68KiP1SJxRS53Ad6ypgqE | 王誕 | accepted |
| children | p_RhUjZsZ1qknHMkKvcSu7Pr | 王嘏 | accepted |

## 外部来源

- [维基数据：王誕（Q11573207）](https://www.wikidata.org/wiki/Q11573207)
- [维基数据：王嘏（Q18118172）](https://www.wikidata.org/wiki/Q18118172)
- [维基数据：王混（Q18118174）](https://www.wikidata.org/wiki/Q18118174)
- [維基數據：王恬（Q15927256）](https://www.wikidata.org/wiki/Q15927256)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
