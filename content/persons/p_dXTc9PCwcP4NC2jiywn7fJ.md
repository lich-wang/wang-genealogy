---
schema: wang-person/v1
id: p_dXTc9PCwcP4NC2jiywn7fJ
status: active
merged_into: null
display_name: 王佥
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kFIelKuScFACtBR7iklfDd
        subject_person_id: p_dXTc9PCwcP4NC2jiywn7fJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佥，史料所见人物。本项目依据《王佥》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nxQRPsc6u44hSjXCGiyb_S
          claim_id: c_kFIelKuScFACtBR7iklfDd
          source_id: s_3zqJrGdEBE7YQGByQ9sXQh
          stance: supports
          locator: Q22814776
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YUFKVRVHzDE9zWVkb73ghw
        subject_person_id: p_dXTc9PCwcP4NC2jiywn7fJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佥
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gxhLy79EaXRQDSmYjLHaRG
          claim_id: c_YUFKVRVHzDE9zWVkb73ghw
          source_id: s_3zqJrGdEBE7YQGByQ9sXQh
          stance: supports
          locator: Q22814776
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HZYNW3xy2PtKiyF3x4VPn1
        subject_person_id: p_J834gYrU1F2b3b6hCDtUW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dXTc9PCwcP4NC2jiywn7fJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4r27ee2ZVt8UVDCyEDw63N
          claim_id: c_HZYNW3xy2PtKiyF3x4VPn1
          source_id: s_3zqJrGdEBE7YQGByQ9sXQh
          stance: supports
          locator: P22（父）
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
        - id: cs_XeDfyzMsHUi6SAeA7JEGEc
          claim_id: c_HZYNW3xy2PtKiyF3x4VPn1
          source_id: s_Bo2MZpkeRcitNXafzC4e6C
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bo2MZpkeRcitNXafzC4e6C
            source_type: api_record
            title: 维基数据：王琳（Q22814773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814773
            external_identifier: Q22814773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:03.575Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2)
      object_person:
        id: p_J834gYrU1F2b3b6hCDtUW2
        status: active
        display_name: 王琳
        merged_into_person_id: null
  children:
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
        id: p_Uo9bkgk5S4jMoJYsZgDetf
        status: active
        display_name: 王皇后 (梁敬帝)
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王佥，史料所见人物。本项目依据《王佥》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王佥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J834gYrU1F2b3b6hCDtUW2 | 王琳 | accepted |
| children | p_Uo9bkgk5S4jMoJYsZgDetf | 王皇后 (梁敬帝) | accepted |

## 外部来源

- [维基数据：王皇后 (梁敬帝)（Q5374609）](https://www.wikidata.org/wiki/Q5374609)
- [维基数据：王琳（Q22814773）](https://www.wikidata.org/wiki/Q22814773)
- [维基数据：王佥（Q22814776）](https://www.wikidata.org/wiki/Q22814776)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王皇后 (梁敬帝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9A%87%E5%90%8E_(%E6%A2%81%E6%95%AC%E5%B8%9D))
