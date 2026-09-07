---
schema: wang-person/v1
id: p_oQBH3N18DrD8VHPR7ymsan
status: active
merged_into: null
display_name: 王和之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NqaZNRqnXIKtlvnTUoYgAf
        subject_person_id: p_oQBH3N18DrD8VHPR7ymsan
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和之（？—？），字兴道，琅邪临沂人，王廙之孙，王胡之之子，历任永嘉太守、正员常侍。 王和之评价谢琰说：“躁动不安的样子，就像丢了鹰的训鹰师。”
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_zVE2EoX4Kwg9ezRQ1QMmFu
          claim_id: c_NqaZNRqnXIKtlvnTUoYgAf
          source_id: s_AhHG_OCHCfeJV5HgJVGFv5
          stance: supports
          locator: 导言
          quotation: 王和之（？—？），字兴道，琅邪临沂人，王廙之孙，王胡之之子，历任
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_AhHG_OCHCfeJV5HgJVGFv5
            source_type: website
            title: 中文维基百科：王和之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%92%8C%E4%B9%8B
            external_identifier: Q16905943
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MMKiGL7uHbsdGmG6NKw1za
        subject_person_id: p_oQBH3N18DrD8VHPR7ymsan
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yuwC4nfBFCwM82jZbViyMS
          claim_id: c_MMKiGL7uHbsdGmG6NKw1za
          source_id: s_Dw2FSQKRaCqqbUVVqNkVYg
          stance: supports
          locator: Q16905943
          quotation: null
          interpretation_note: null
          source:
            id: s_Dw2FSQKRaCqqbUVVqNkVYg
            source_type: api_record
            title: 维基数据：王和之（Q16905943）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16905943
            external_identifier: Q16905943
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:29.004Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%92%8C%E4%B9%8B
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PvNBTaJWgAesJKhGGx1FC9
        subject_person_id: p_RCHyAEEBXGnYRgeH85Q9u7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oQBH3N18DrD8VHPR7ymsan
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Y2sTF9wuwWaXNLNvgF8t9t
          claim_id: c_PvNBTaJWgAesJKhGGx1FC9
          source_id: s_7wixopF9tTM3FbW5c1L2ze
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7wixopF9tTM3FbW5c1L2ze
            source_type: api_record
            title: 维基数据：王胡之（Q19825735）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q19825735
            external_identifier: Q19825735
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:53.247Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%83%A1%E4%B9%8B
        - id: cs_ud4u8SQAP3HPukfRLGgegc
          claim_id: c_PvNBTaJWgAesJKhGGx1FC9
          source_id: s_Dw2FSQKRaCqqbUVVqNkVYg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Dw2FSQKRaCqqbUVVqNkVYg
            source_type: api_record
            title: 维基数据：王和之（Q16905943）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16905943
            external_identifier: Q16905943
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:29.004Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%92%8C%E4%B9%8B
        - id: cs_HZNp76HQHEJ569e1GegioS
          claim_id: c_PvNBTaJWgAesJKhGGx1FC9
          source_id: s_VU27utzmZxNGW1M4ANjRiA
          stance: supports
          locator: 条文：之子/之女
          quotation: 王和之（{{bd|？||？||}}），字兴道，琅邪临沂人，王廙之孙，王胡之之子，历任永嘉太守、正员常侍
          interpretation_note: null
          source:
            id: s_VU27utzmZxNGW1M4ANjRiA
            source_type: website
            title: 中文维基百科：王和之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%92%8C%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:53.042Z
            metadata_json: null
        - id: cs_r3NRH7PCB5hn464wazvJH4
          claim_id: c_PvNBTaJWgAesJKhGGx1FC9
          source_id: s_VJ7VDiQQ12bjk97AwbLPwm
          stance: supports
          locator: 条文：之子/之女
          quotation: 王和之，字兴道，琅邪临沂人，王廙之孙，王胡之之子，历任永嘉太守、正员常侍
          interpretation_note: null
          source:
            id: s_VJ7VDiQQ12bjk97AwbLPwm
            source_type: website
            title: 中文维基百科：王和之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%92%8C%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:05.655Z
            metadata_json: null
      object_person:
        id: p_RCHyAEEBXGnYRgeH85Q9u7
        status: active
        display_name: 王胡之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_6Pk7odjdTy7dRJLvdXSraf
        subject_person_id: p_b9xZoiiuBPoW8L2RzpVVCo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oQBH3N18DrD8VHPR7ymsan
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X1BPiipPLMurcLik4TnGU8
          claim_id: c_6Pk7odjdTy7dRJLvdXSraf
          source_id: s_VU27utzmZxNGW1M4ANjRiA
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王廙之孙
          interpretation_note: null
          source:
            id: s_VU27utzmZxNGW1M4ANjRiA
            source_type: website
            title: 中文维基百科：王和之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%92%8C%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:53.042Z
            metadata_json: null
        - id: cs_B8oXYbX1Z1Mn37F426SS1d
          claim_id: c_6Pk7odjdTy7dRJLvdXSraf
          source_id: s_VJ7VDiQQ12bjk97AwbLPwm
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王廙之孙
          interpretation_note: null
          source:
            id: s_VJ7VDiQQ12bjk97AwbLPwm
            source_type: website
            title: 中文维基百科：王和之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%92%8C%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:05.655Z
            metadata_json: null
      object_person:
        id: p_b9xZoiiuBPoW8L2RzpVVCo
        status: active
        display_name: 王廙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王和之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王和之（？—？），字兴道，琅邪临沂人，王廙之孙，王胡之之子，历任永嘉太守、正员常侍。 王和之评价谢琰说：“躁动不安的样子，就像丢了鹰的训鹰师。” | accepted |
| name.primary | 王和之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RCHyAEEBXGnYRgeH85Q9u7 | 王胡之 | accepted |
| ancestors | p_b9xZoiiuBPoW8L2RzpVVCo | 王廙 | accepted |

## 外部来源

- [维基数据：王和之（Q16905943）](https://www.wikidata.org/wiki/Q16905943)
- [维基数据：王胡之（Q19825735）](https://www.wikidata.org/wiki/Q19825735)
- [中文维基百科：王和之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%92%8C%E4%B9%8B)
