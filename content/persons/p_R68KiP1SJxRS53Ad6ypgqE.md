---
schema: wang-person/v1
id: p_R68KiP1SJxRS53Ad6ypgqE
status: active
merged_into: null
display_name: 王誕
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JcMQX6GgHF-WO7mkxMSt7a
        subject_person_id: p_R68KiP1SJxRS53Ad6ypgqE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誕（生于375年），史料所见人物。本项目依据《王誕》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_YR86PbjTsRHssYruPM4h7P
          claim_id: c_JcMQX6GgHF-WO7mkxMSt7a
          source_id: s_iD5eyt544b8AA8BRC2HiW9
          stance: supports
          locator: Q11573207
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_R1HcNULKVSGQ8WeRv9dQZH
        subject_person_id: p_R68KiP1SJxRS53Ad6ypgqE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 375年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0375-01-01
            latest: 0375-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DmCztN4AUP2BYV55D613sR
          claim_id: c_R1HcNULKVSGQ8WeRv9dQZH
          source_id: s_iD5eyt544b8AA8BRC2HiW9
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BfbGMPgkAGmxa1yCyRu4QD
        subject_person_id: p_R68KiP1SJxRS53Ad6ypgqE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4GCQETjwkny2MLrLuk1B4A
          claim_id: c_BfbGMPgkAGmxa1yCyRu4QD
          source_id: s_iD5eyt544b8AA8BRC2HiW9
          stance: supports
          locator: Q11573207
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_eGi6cJepexiV9GFAnd9L8u
        status: active
        display_name: 王混
        merged_into_person_id: null
  children:
    - claim:
        id: c_67CwzQ3aM6Z4ujyH9BnT1r
        subject_person_id: p_R68KiP1SJxRS53Ad6ypgqE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DhnXcbHu6RURkgDGk1hArD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9vnwGX2rNHqhwhPoFg5XwG
          claim_id: c_67CwzQ3aM6Z4ujyH9BnT1r
          source_id: s_iD5eyt544b8AA8BRC2HiW9
          stance: supports
          locator: P40（子女）
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
        - id: cs_wAM4jojP59ZVp8GV7k4jGU
          claim_id: c_67CwzQ3aM6Z4ujyH9BnT1r
          source_id: s_NAtzVAGgcF7Q1vtnYWC2Z6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NAtzVAGgcF7Q1vtnYWC2Z6
            source_type: api_record
            title: 维基数据：王诩 (宋世子舍人)（Q15894191）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15894191
            external_identifier: Q15894191
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:24.409Z
            metadata_json: null
      object_person:
        id: p_DhnXcbHu6RURkgDGk1hArD
        status: active
        display_name: 王诩 (宋世子舍人)
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王誕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王誕（生于375年），史料所见人物。本项目依据《王誕》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 375年 | accepted |
| name.primary | 王誕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eGi6cJepexiV9GFAnd9L8u | 王混 | accepted |
| children | p_DhnXcbHu6RURkgDGk1hArD | 王诩 (宋世子舍人) | accepted |

## 外部来源

- [维基数据：王誕（Q11573207）](https://www.wikidata.org/wiki/Q11573207)
- [维基数据：王混（Q18118174）](https://www.wikidata.org/wiki/Q18118174)
- [维基数据：王诩 (宋世子舍人)（Q15894191）](https://www.wikidata.org/wiki/Q15894191)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
