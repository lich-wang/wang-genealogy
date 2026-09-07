---
schema: wang-person/v1
id: p_RCHyAEEBXGnYRgeH85Q9u7
status: active
merged_into: null
display_name: 王胡之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mL9Afk3KmE5p1HvpvF6TJL
        subject_person_id: p_RCHyAEEBXGnYRgeH85Q9u7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胡之，史料所见人物。本项目依据《王胡之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ndjoEGGg3vuF8zf-8d1OrS
          claim_id: c_mL9Afk3KmE5p1HvpvF6TJL
          source_id: s_7wixopF9tTM3FbW5c1L2ze
          stance: supports
          locator: Q19825735
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_G4yRzcC4vNMswXHGF3xxs5
        subject_person_id: p_RCHyAEEBXGnYRgeH85Q9u7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胡之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Cu8wSQGF4o6r7yhpUNUG3d
          claim_id: c_G4yRzcC4vNMswXHGF3xxs5
          source_id: s_7wixopF9tTM3FbW5c1L2ze
          stance: supports
          locator: Q19825735
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3vtoK3A3MB8amKM3qzJN2C
        subject_person_id: p_b9xZoiiuBPoW8L2RzpVVCo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RCHyAEEBXGnYRgeH85Q9u7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ZKaV7re7F45TQAfypsnaw1
          claim_id: c_3vtoK3A3MB8amKM3qzJN2C
          source_id: s_SFuhPkjgMH7UeWM99KjEjG
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SFuhPkjgMH7UeWM99KjEjG
            source_type: api_record
            title: 维基数据：王廙（Q15911516）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15911516
            external_identifier: Q15911516
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:50.988Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%99
        - id: cs_QEJBhjAuUxiGqU7HgGNSET
          claim_id: c_3vtoK3A3MB8amKM3qzJN2C
          source_id: s_7wixopF9tTM3FbW5c1L2ze
          stance: supports
          locator: P22（父）
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
        - id: cs_iaKerag72d7UtP6YYZhtuT
          claim_id: c_3vtoK3A3MB8amKM3qzJN2C
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王胡之
          interpretation_note: null
          source:
            id: s_EuhopAKPrGRPYfhK6LWGqg
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:06.893Z
            metadata_json: null
        - id: cs_ijF88y7FmjfEsfHAznGVpB
          claim_id: c_3vtoK3A3MB8amKM3qzJN2C
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王胡之
          interpretation_note: null
          source:
            id: s_UT2fnx3qtzoieQ2DR3uegK
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:12:42.934Z
            metadata_json: null
        - id: cs_fogiwGDb97czeHKUhKo1by
          claim_id: c_3vtoK3A3MB8amKM3qzJN2C
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王胡之
          interpretation_note: null
          source:
            id: s_Hu48xKLWbTYqemmfCh8psU
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:50:46.620Z
            metadata_json: null
        - id: cs_cSEB7Bb8Fboa5TCDn3nGAU
          claim_id: c_3vtoK3A3MB8amKM3qzJN2C
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王胡之
          interpretation_note: null
          source:
            id: s_am7Fw6MoGrjn6MQaPht7Mr
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:33.641Z
            metadata_json: null
        - id: cs_7WLLhgbig52HbUpM8HQRRs
          claim_id: c_3vtoK3A3MB8amKM3qzJN2C
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王胡之
          interpretation_note: null
          source:
            id: s_2Vkz5GQzEDauSJDkgPos6m
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:13.683Z
            metadata_json: null
        - id: cs_L7ZyQBAd2J4Ub37cM663Yw
          claim_id: c_3vtoK3A3MB8amKM3qzJN2C
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王胡之
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
      object_person:
        id: p_b9xZoiiuBPoW8L2RzpVVCo
        status: active
        display_name: 王廙
        merged_into_person_id: null
  children:
    - claim:
        id: c_ovrLQzmHijvkLv1FhCtCSb
        subject_person_id: p_RCHyAEEBXGnYRgeH85Q9u7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BeHUK3G13DBFM9gpPWiBye
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_xjw7t1fHQcZivg9AG78aRF
          claim_id: c_ovrLQzmHijvkLv1FhCtCSb
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
        - id: cs_sMrB1nf5L6ZWcy2Cxcq1PV
          claim_id: c_ovrLQzmHijvkLv1FhCtCSb
          source_id: s_VM2uZf2Kx5XN529A4HbZTS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VM2uZf2Kx5XN529A4HbZTS
            source_type: api_record
            title: 维基数据：王茂之（Q22814793）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814793
            external_identifier: Q22814793
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:24.409Z
            metadata_json: null
      object_person:
        id: p_BeHUK3G13DBFM9gpPWiBye
        status: active
        display_name: 王茂之
        merged_into_person_id: null
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
        id: p_oQBH3N18DrD8VHPR7ymsan
        status: active
        display_name: 王和之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王胡之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王胡之，史料所见人物。本项目依据《王胡之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王胡之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b9xZoiiuBPoW8L2RzpVVCo | 王廙 | accepted |
| children | p_BeHUK3G13DBFM9gpPWiBye | 王茂之 | accepted |
| children | p_oQBH3N18DrD8VHPR7ymsan | 王和之 | accepted |

## 外部来源

- [维基数据：王和之（Q16905943）](https://www.wikidata.org/wiki/Q16905943)
- [维基数据：王胡之（Q19825735）](https://www.wikidata.org/wiki/Q19825735)
- [维基数据：王茂之（Q22814793）](https://www.wikidata.org/wiki/Q22814793)
- [维基数据：王廙（Q15911516）](https://www.wikidata.org/wiki/Q15911516)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：王和之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%92%8C%E4%B9%8B)
