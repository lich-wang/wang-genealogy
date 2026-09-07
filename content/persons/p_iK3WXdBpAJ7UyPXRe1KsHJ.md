---
schema: wang-person/v1
id: p_iK3WXdBpAJ7UyPXRe1KsHJ
status: active
merged_into: null
display_name: 王简
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bxn5bkRnhcJrfnAXFlEZY6
        subject_person_id: p_iK3WXdBpAJ7UyPXRe1KsHJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王简（？—？），字长仁，琅邪临沂人，王导的曾孙，王穆的长子，王智、王僧朗的哥哥。 王简官至东晋东阳太守，其女王韶凤嫁给了刘义融。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nOKQWoXBN1k_-sK7hAyeE7
          claim_id: c_Bxn5bkRnhcJrfnAXFlEZY6
          source_id: s_7-y27K8aCbtWJruUHFX30d
          stance: supports
          locator: 导言
          quotation: 王简（？—？），字长仁，琅邪临沂人，王导的曾孙，王穆的长子，王智
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_7-y27K8aCbtWJruUHFX30d
            source_type: website
            title: 中文维基百科：王简 (东晋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AE%80_(%E4%B8%9C%E6%99%8B)
            external_identifier: Q16906176
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KsHzjwARJ1uTsXDTZs27mr
        subject_person_id: p_iK3WXdBpAJ7UyPXRe1KsHJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王简
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QXRnxgNKk813gUTPB6APju
          claim_id: c_KsHzjwARJ1uTsXDTZs27mr
          source_id: s_mmF6RvWtnMVW94oB7N5Vba
          stance: supports
          locator: Q16906176
          quotation: null
          interpretation_note: null
          source:
            id: s_mmF6RvWtnMVW94oB7N5Vba
            source_type: api_record
            title: 维基数据：王简（Q16906176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906176
            external_identifier: Q16906176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:52.143Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AE%80_(%E4%B8%9C%E6%99%8B)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yX5MsJLv7KFv2hMAntzric
        subject_person_id: p_kQZ5bmU8mbAHk7K3zBAi1v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iK3WXdBpAJ7UyPXRe1KsHJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_cB6JSrdN36Brw6H7HcH5N5
          claim_id: c_yX5MsJLv7KFv2hMAntzric
          source_id: s_MhrEW81MhUpnMoCHrMvtpH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MhrEW81MhUpnMoCHrMvtpH
            source_type: api_record
            title: 维基数据：王穆（Q16906171）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906171
            external_identifier: Q16906171
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:59.588Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A9%86
        - id: cs_3yowahm6o6MU4USHDQwqMD
          claim_id: c_yX5MsJLv7KFv2hMAntzric
          source_id: s_mmF6RvWtnMVW94oB7N5Vba
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mmF6RvWtnMVW94oB7N5Vba
            source_type: api_record
            title: 维基数据：王简（Q16906176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906176
            external_identifier: Q16906176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:52.143Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AE%80_(%E4%B8%9C%E6%99%8B)
        - id: cs_wH9wMPHzGhC1yqMX4QJYhw
          claim_id: c_yX5MsJLv7KFv2hMAntzric
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王穆 → 王简
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
        - id: cs_dFZ1C8C6av2rDVxdGD81Wr
          claim_id: c_yX5MsJLv7KFv2hMAntzric
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王穆 → 王简
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
        id: p_kQZ5bmU8mbAHk7K3zBAi1v
        status: active
        display_name: 王穆
        merged_into_person_id: null
  children:
    - claim:
        id: c_EenAFvjf3sG62S9EBF2h11
        subject_person_id: p_iK3WXdBpAJ7UyPXRe1KsHJ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_3qAmSot22KQLa4zp2w3CL3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MLmi4C3G6ERpb6KZzhDPHT
          claim_id: c_EenAFvjf3sG62S9EBF2h11
          source_id: s_6m9AYNtf1PHQJa37bdgVnF
          stance: supports
          locator: 条文：条文识读（女）
          quotation: 其女王韶凤嫁给了刘义融。
          interpretation_note: null
          source:
            id: s_6m9AYNtf1PHQJa37bdgVnF
            source_type: website
            title: 中文维基百科：王简 (东晋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AE%80_(%E4%B8%9C%E6%99%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:09.293Z
            metadata_json: null
      object_person:
        id: p_3qAmSot22KQLa4zp2w3CL3
        status: active
        display_name: 王韶凤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王简

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王简（？—？），字长仁，琅邪临沂人，王导的曾孙，王穆的长子，王智、王僧朗的哥哥。 王简官至东晋东阳太守，其女王韶凤嫁给了刘义融。 | accepted |
| name.primary | 王简 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kQZ5bmU8mbAHk7K3zBAi1v | 王穆 | accepted |
| children | p_3qAmSot22KQLa4zp2w3CL3 | 王韶凤 | accepted |

## 外部来源

- [维基数据：王简（Q16906176）](https://www.wikidata.org/wiki/Q16906176)
- [维基数据：王穆（Q16906171）](https://www.wikidata.org/wiki/Q16906171)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王简 (东晋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AE%80_(%E4%B8%9C%E6%99%8B))
