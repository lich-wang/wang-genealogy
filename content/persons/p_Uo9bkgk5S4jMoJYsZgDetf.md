---
schema: wang-person/v1
id: p_Uo9bkgk5S4jMoJYsZgDetf
status: active
merged_into: null
display_name: 王皇后 (梁敬帝)
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hnfo9Hq1oJfPwsdYNHq7N1
        subject_person_id: p_Uo9bkgk5S4jMoJYsZgDetf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皇后 (梁敬帝)（生于6世纪），史料所见人物。本项目依据《王皇后 (梁敬帝)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_OFr90fXPmP4ffX_PfHGk-J
          claim_id: c_hnfo9Hq1oJfPwsdYNHq7N1
          source_id: s_in9NeXoCSb844PcCiHdso8
          stance: supports
          locator: Q5374609
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_in9NeXoCSb844PcCiHdso8
            source_type: api_record
            title: 维基数据：王皇后 (梁敬帝)（Q5374609）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5374609
            external_identifier: Q5374609
            license_code: CC0-1.0
            accessed_at: 2026-08-24T09:39:53.956Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9A%87%E5%90%8E_(%E6%A2%81%E6%95%AC%E5%B8%9D)
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZemdQmEm9JwrNErFr1zLz3
        subject_person_id: p_Uo9bkgk5S4jMoJYsZgDetf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 6世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: 0501-01-01
            latest: 0600-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p2tHiTpEKDu8C63G1sms32
          claim_id: c_ZemdQmEm9JwrNErFr1zLz3
          source_id: s_in9NeXoCSb844PcCiHdso8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_in9NeXoCSb844PcCiHdso8
            source_type: api_record
            title: 维基数据：王皇后 (梁敬帝)（Q5374609）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5374609
            external_identifier: Q5374609
            license_code: CC0-1.0
            accessed_at: 2026-08-24T09:39:53.956Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9A%87%E5%90%8E_(%E6%A2%81%E6%95%AC%E5%B8%9D)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LLUGPm6oWAmoqjMyrGKFAg
        subject_person_id: p_Uo9bkgk5S4jMoJYsZgDetf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皇后 (梁敬帝)
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_X9UrHpKWdPAQZGBTCPNSyw
          claim_id: c_LLUGPm6oWAmoqjMyrGKFAg
          source_id: s_in9NeXoCSb844PcCiHdso8
          stance: supports
          locator: Q5374609
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sckN5DmGJgPjpfRNvjD7ay
        subject_person_id: p_dXTc9PCwcP4NC2jiywn7fJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Uo9bkgk5S4jMoJYsZgDetf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Yj8Xd2urFG962DxbkieqXm
          claim_id: c_sckN5DmGJgPjpfRNvjD7ay
          source_id: s_in9NeXoCSb844PcCiHdso8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_in9NeXoCSb844PcCiHdso8
            source_type: api_record
            title: 维基数据：王皇后 (梁敬帝)（Q5374609）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5374609
            external_identifier: Q5374609
            license_code: CC0-1.0
            accessed_at: 2026-08-24T09:39:53.956Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9A%87%E5%90%8E_(%E6%A2%81%E6%95%AC%E5%B8%9D)
        - id: cs_zuwPPJNW1fH4xxE4x72g3e
          claim_id: c_sckN5DmGJgPjpfRNvjD7ay
          source_id: s_3zqJrGdEBE7YQGByQ9sXQh
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3zqJrGdEBE7YQGByQ9sXQh
            source_type: api_record
            title: 维基数据：王佥（Q22814776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814776
            external_identifier: Q22814776
            license_code: CC0-1.0
            accessed_at: 2026-08-24T09:16:58.082Z
            metadata_json: null
        - id: cs_RDWJMeHMnVmtzC88NEprFQ
          claim_id: c_sckN5DmGJgPjpfRNvjD7ay
          source_id: s_5pzdVQHVo1xv2nbEbLFYSc
          stance: supports
          locator: 条文：之子/之女
          quotation: 王皇后（{{bd|6世紀||？|catIdx=C}}），名不详，琅邪郡临沂县（今山东省临沂市）人，南梁太子中庶人王佥之女，梁敬帝萧方智皇后
          interpretation_note: null
          source:
            id: s_5pzdVQHVo1xv2nbEbLFYSc
            source_type: website
            title: 中文维基百科：王皇后 (梁敬帝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9A%87%E5%90%8E_(%E6%A2%81%E6%95%AC%E5%B8%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:31.625Z
            metadata_json: null
        - id: cs_hX3xUapPbna9kRqCQvCsSH
          claim_id: c_sckN5DmGJgPjpfRNvjD7ay
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王佥 → 王皇后
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
        - id: cs_wg9zMHyRgGioNxES6cHJ2z
          claim_id: c_sckN5DmGJgPjpfRNvjD7ay
          source_id: s_kkpFpY642tuZrQjsJebaL5
          stance: supports
          locator: 条文：之子/之女
          quotation: 王皇后，名不详，琅邪郡临沂县（今山东省临沂市）人，南梁太子中庶人王佥之女，梁敬帝萧方智皇后
          interpretation_note: null
          source:
            id: s_kkpFpY642tuZrQjsJebaL5
            source_type: website
            title: 中文维基百科：王皇后 (梁敬帝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9A%87%E5%90%8E_(%E6%A2%81%E6%95%AC%E5%B8%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:44.870Z
            metadata_json: null
      object_person:
        id: p_dXTc9PCwcP4NC2jiywn7fJ
        status: active
        display_name: 王佥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_aCBNN3n95KJ1cA8rPuyRZB
        subject_person_id: p_Uo9bkgk5S4jMoJYsZgDetf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_witFrKxBZ52fXzQWvAN9sk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nd4GUsqAkVLUVGHKEdHUoK
          claim_id: c_aCBNN3n95KJ1cA8rPuyRZB
          source_id: s_w1yBfeKi8w3fJ7dvE3o1qK
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_w1yBfeKi8w3fJ7dvE3o1qK
            source_type: api_record
            title: 维基数据：萧方智（Q1059979）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1059979
            external_identifier: Q1059979
            license_code: CC0-1.0
            accessed_at: 2026-08-24T09:53:36.102Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%A2%81%E6%95%AC%E5%B8%9D
        - id: cs_a7YR2fGYHBHHxLbts8Uc9k
          claim_id: c_aCBNN3n95KJ1cA8rPuyRZB
          source_id: s_in9NeXoCSb844PcCiHdso8
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_in9NeXoCSb844PcCiHdso8
            source_type: api_record
            title: 维基数据：王皇后 (梁敬帝)（Q5374609）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5374609
            external_identifier: Q5374609
            license_code: CC0-1.0
            accessed_at: 2026-08-24T09:39:53.956Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9A%87%E5%90%8E_(%E6%A2%81%E6%95%AC%E5%B8%9D)
      object_person:
        id: p_witFrKxBZ52fXzQWvAN9sk
        status: active
        display_name: 萧方智
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王皇后 (梁敬帝)

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王皇后 (梁敬帝)（生于6世纪），史料所见人物。本项目依据《王皇后 (梁敬帝)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 6世纪 | accepted |
| name.primary | 王皇后 (梁敬帝) | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dXTc9PCwcP4NC2jiywn7fJ | 王佥 | accepted |
| spouses | p_witFrKxBZ52fXzQWvAN9sk | 萧方智 | accepted |

## 外部来源

- [维基数据：王皇后 (梁敬帝)（Q5374609）](https://www.wikidata.org/wiki/Q5374609)
- [维基数据：王佥（Q22814776）](https://www.wikidata.org/wiki/Q22814776)
- [维基数据：萧方智（Q1059979）](https://www.wikidata.org/wiki/Q1059979)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王皇后 (梁敬帝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9A%87%E5%90%8E_(%E6%A2%81%E6%95%AC%E5%B8%9D))
