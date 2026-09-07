---
schema: wang-person/v1
id: p_Z61kX1Nv7EC6m6zX2Q6T3Q
status: active
merged_into: null
display_name: 王彻
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yi6vDDRqXF_2kygcjMeWTs
        subject_person_id: p_Z61kX1Nv7EC6m6zX2Q6T3Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彻（？—？），琅邪临沂人，王偃之孙，王藻与临川长公主刘英媛的儿子。 王藻被关入监牢死去后，刘英媛与王藻断绝了婚姻关系。刘英媛后来上书宋明帝，希望回到王藻家中，抚养王彻，宋明帝答应了她。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NFlKMuwiiwA0D6G1I1690M
          claim_id: c_yi6vDDRqXF_2kygcjMeWTs
          source_id: s_5WD65c3LwBU1CFEgxt_Dlp
          stance: supports
          locator: 导言
          quotation: 王彻（？—？），琅邪临沂人，王偃之孙，王藻与临川长公主刘英媛的儿
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_5WD65c3LwBU1CFEgxt_Dlp
            source_type: website
            title: 中文维基百科：王彻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%BB
            external_identifier: Q16906024
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KxJQXe5fMFZJHErc8jAuSQ
        subject_person_id: p_Z61kX1Nv7EC6m6zX2Q6T3Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彻
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cGKcEojmwtRS2DTp3prq39
          claim_id: c_KxJQXe5fMFZJHErc8jAuSQ
          source_id: s_B7sBe6UJTi4c8awW5uBYAW
          stance: supports
          locator: Q16906024
          quotation: null
          interpretation_note: null
          source:
            id: s_B7sBe6UJTi4c8awW5uBYAW
            source_type: api_record
            title: 维基数据：王彻（Q16906024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906024
            external_identifier: Q16906024
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:02.158Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%BB
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_quNnAg7uE7wT3MbTm8Nsfa
        subject_person_id: p_xHtjbkzQpxs78ENySENCje
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z61kX1Nv7EC6m6zX2Q6T3Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DivzuL1bPhRrThuEjKWgZ2
          claim_id: c_quNnAg7uE7wT3MbTm8Nsfa
          source_id: s_7WZ1bXXFFGZBWP4R1KQMS4
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7WZ1bXXFFGZBWP4R1KQMS4
            source_type: api_record
            title: 维基数据：王藻（Q22814742）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814742
            external_identifier: Q22814742
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%97%BB_(%E5%8A%89%E5%AE%8B)
        - id: cs_938GqMRSNFk6ZHDFxBcpm3
          claim_id: c_quNnAg7uE7wT3MbTm8Nsfa
          source_id: s_B7sBe6UJTi4c8awW5uBYAW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_B7sBe6UJTi4c8awW5uBYAW
            source_type: api_record
            title: 维基数据：王彻（Q16906024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906024
            external_identifier: Q16906024
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:02.158Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%BB
        - id: cs_AsKgdZm49QV5kBXHE5E2k5
          claim_id: c_quNnAg7uE7wT3MbTm8Nsfa
          source_id: s_FDChK9B6LiYc2CZygT1Q37
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王偃之孙，王藻与临川长公主刘英媛的儿子
          interpretation_note: null
          source:
            id: s_FDChK9B6LiYc2CZygT1Q37
            source_type: website
            title: 中文维基百科：王彻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:24.806Z
            metadata_json: null
        - id: cs_eLw3uXxGhfSbF5VsbeDfLF
          claim_id: c_quNnAg7uE7wT3MbTm8Nsfa
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王藻 → 王彻
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
        - id: cs_8XEW6Cy4HAv315uMJVrAJj
          claim_id: c_quNnAg7uE7wT3MbTm8Nsfa
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王藻 → 王彻
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
        - id: cs_R3C956Y46azaNBAXpoPP76
          claim_id: c_quNnAg7uE7wT3MbTm8Nsfa
          source_id: s_KszAPzRgpveDh3B6KK6Y3L
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王彻（），琅邪临沂人，王偃之孙，王藻与临川长公主刘英媛的儿子。
          interpretation_note: null
          source:
            id: s_KszAPzRgpveDh3B6KK6Y3L
            source_type: website
            title: 中文维基百科：王彻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:43.924Z
            metadata_json: null
      object_person:
        id: p_xHtjbkzQpxs78ENySENCje
        status: active
        display_name: 王藻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_yNZMXvTFvpunP9v7Wq8UAr
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z61kX1Nv7EC6m6zX2Q6T3Q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tAv3QV9LMSc2wMxLeKm7t7
          claim_id: c_yNZMXvTFvpunP9v7Wq8UAr
          source_id: s_FDChK9B6LiYc2CZygT1Q37
          stance: supports
          locator: 条文：条文识读（孙）（2世）
          quotation: 王偃之孙，王藻与临川长公主刘英媛的儿子
          interpretation_note: null
          source:
            id: s_FDChK9B6LiYc2CZygT1Q37
            source_type: website
            title: 中文维基百科：王彻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:24.806Z
            metadata_json: null
        - id: cs_eCDMwZH6vkKa871DAiKGt3
          claim_id: c_yNZMXvTFvpunP9v7Wq8UAr
          source_id: s_KszAPzRgpveDh3B6KK6Y3L
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王彻（），琅邪临沂人，王偃之孙，王藻与临川长公主刘英媛的儿子。
          interpretation_note: null
          source:
            id: s_KszAPzRgpveDh3B6KK6Y3L
            source_type: website
            title: 中文维基百科：王彻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:43.924Z
            metadata_json: null
      object_person:
        id: p_zzsFuAEs6JJ4EJkXaf48Mn
        status: active
        display_name: 王偃
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王彻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彻（？—？），琅邪临沂人，王偃之孙，王藻与临川长公主刘英媛的儿子。 王藻被关入监牢死去后，刘英媛与王藻断绝了婚姻关系。刘英媛后来上书宋明帝，希望回到王藻家中，抚养王彻，宋明帝答应了她。 | accepted |
| name.primary | 王彻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xHtjbkzQpxs78ENySENCje | 王藻 | accepted |
| ancestors | p_zzsFuAEs6JJ4EJkXaf48Mn | 王偃 | accepted |

## 外部来源

- [维基数据：王彻（Q16906024）](https://www.wikidata.org/wiki/Q16906024)
- [维基数据：王藻（Q22814742）](https://www.wikidata.org/wiki/Q22814742)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王彻](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%BB)
