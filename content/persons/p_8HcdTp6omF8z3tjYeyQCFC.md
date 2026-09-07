---
schema: wang-person/v1
id: p_8HcdTp6omF8z3tjYeyQCFC
status: active
merged_into: null
display_name: 王球
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vBHs94tQBignVKf3d7Jzpb
        subject_person_id: p_8HcdTp6omF8z3tjYeyQCFC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王球（393年—441年），字倩玉，琅邪临沂人，东晋司徒王谧之子，在南朝宋官至尚书仆射。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2DPB1H1b5j4ibe8fS7SYWh
          claim_id: c_vBHs94tQBignVKf3d7Jzpb
          source_id: s_2UqoZbycwiQMpJj5LNKGr9
          stance: supports
          locator: 导言
          quotation: 在宋官至尚書僕射
          interpretation_note: 据人物条目导言概括生卒、籍贯与身份。
          source:
            id: s_2UqoZbycwiQMpJj5LNKGr9
            source_type: website
            title: 中文维基百科：王球
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%83
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:42.064Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Qk3aEyyU4bRyDm2vFC9mQ2
        subject_person_id: p_8HcdTp6omF8z3tjYeyQCFC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 393年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0393-01-01
            latest: 0393-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JUNkTWoThXRPGbnPwAHizK
          claim_id: c_Qk3aEyyU4bRyDm2vFC9mQ2
          source_id: s_c4EJgpiZocF75rMEkkAPAd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_c4EJgpiZocF75rMEkkAPAd
            source_type: api_record
            title: 维基数据：王球（Q11573172）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573172
            external_identifier: Q11573172
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:47.180Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%83
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DQ54HhJJ8PQ1wwBzt7CwRW
        subject_person_id: p_8HcdTp6omF8z3tjYeyQCFC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 441年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0441-01-01
            latest: 0441-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8LuuvEh4thGgH3BARWUhrH
          claim_id: c_DQ54HhJJ8PQ1wwBzt7CwRW
          source_id: s_c4EJgpiZocF75rMEkkAPAd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_c4EJgpiZocF75rMEkkAPAd
            source_type: api_record
            title: 维基数据：王球（Q11573172）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573172
            external_identifier: Q11573172
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:47.180Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%83
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2FAZiWvCXib9zZ8NpeqGi8
        subject_person_id: p_8HcdTp6omF8z3tjYeyQCFC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王球
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Y4R8m2geGjpchBt3dTd7N5
          claim_id: c_2FAZiWvCXib9zZ8NpeqGi8
          source_id: s_c4EJgpiZocF75rMEkkAPAd
          stance: supports
          locator: Q11573172
          quotation: null
          interpretation_note: null
          source:
            id: s_c4EJgpiZocF75rMEkkAPAd
            source_type: api_record
            title: 维基数据：王球（Q11573172）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573172
            external_identifier: Q11573172
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:47.180Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%83
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zXnJh1g5kCTqfqAnp8QeNh
        subject_person_id: p_4DPX9WczBMafdh2C9FWaf3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8HcdTp6omF8z3tjYeyQCFC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_bUnMB3fHrLfcD92ZUAFD7C
          claim_id: c_zXnJh1g5kCTqfqAnp8QeNh
          source_id: s_RVKFY3VTTpRzBsCgZ4VPsL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RVKFY3VTTpRzBsCgZ4VPsL
            source_type: api_record
            title: 维基数据：王謐（Q15914878）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15914878
            external_identifier: Q15914878
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:52.744Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AC%90
        - id: cs_H4Vm4CPCXXyyrgkQGbxgKy
          claim_id: c_zXnJh1g5kCTqfqAnp8QeNh
          source_id: s_c4EJgpiZocF75rMEkkAPAd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_c4EJgpiZocF75rMEkkAPAd
            source_type: api_record
            title: 维基数据：王球（Q11573172）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573172
            external_identifier: Q11573172
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:47.180Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%83
        - id: cs_kBGA16YCU71udbcU4wBA6C
          claim_id: c_zXnJh1g5kCTqfqAnp8QeNh
          source_id: s_2UqoZbycwiQMpJj5LNKGr9
          stance: supports
          locator: 条文：之子/之女
          quotation: 王球是東晉司徒王謐的兒子，在宋官至尚書僕射
          interpretation_note: null
          source:
            id: s_2UqoZbycwiQMpJj5LNKGr9
            source_type: website
            title: 中文维基百科：王球
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%83
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:42.064Z
            metadata_json: null
        - id: cs_Q2a3szMpUbWQ9N4P4A67Qc
          claim_id: c_zXnJh1g5kCTqfqAnp8QeNh
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王谧 → 王球
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
        - id: cs_tmBXom4TW1Ymfek79FvJWr
          claim_id: c_zXnJh1g5kCTqfqAnp8QeNh
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王谧 → 王球
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
        id: p_4DPX9WczBMafdh2C9FWaf3
        status: active
        display_name: 王謐
        merged_into_person_id: null
  children:
    - claim:
        id: c_99ZEtWXjSGxen7s1PnF9RF
        subject_person_id: p_8HcdTp6omF8z3tjYeyQCFC
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_r7X2CoAa4zb88qeVFCKdmV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wtE2wYj3r9j71pssPN1Tw3
          claim_id: c_99ZEtWXjSGxen7s1PnF9RF
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王球 → 王伷
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
        - id: cs_zwQzfP8LWGZM7VPnHuqbVJ
          claim_id: c_99ZEtWXjSGxen7s1PnF9RF
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王球 → 王伷
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
        id: p_r7X2CoAa4zb88qeVFCKdmV
        status: active
        display_name: 王伷
        merged_into_person_id: null
    - claim:
        id: c_yNv8SLJynQRD4eMapVK6XN
        subject_person_id: p_8HcdTp6omF8z3tjYeyQCFC
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_HKCQBGT1bnAPnMGwAipgaN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9RK2RB1YR4YQy2XhYc9JCx
          claim_id: c_yNv8SLJynQRD4eMapVK6XN
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王球 → 王俨
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
        - id: cs_iUFcLCc2eMyLffZYF7nBDF
          claim_id: c_yNv8SLJynQRD4eMapVK6XN
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王球 → 王俨
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
        id: p_HKCQBGT1bnAPnMGwAipgaN
        status: active
        display_name: 王俨
        merged_into_person_id: null
    - claim:
        id: c_T3pApthJQW5qLLNaQDVZkg
        subject_person_id: p_8HcdTp6omF8z3tjYeyQCFC
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_A5ydQK5ydnPtYRczTCawMz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MMiHQg9N4kboeB3t5x4QG9
          claim_id: c_T3pApthJQW5qLLNaQDVZkg
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王球 → 王彦方
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
        id: p_A5ydQK5ydnPtYRczTCawMz
        status: active
        display_name: 王彦方
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children:
    - claim:
        id: c_huSKSEr2xMe8WJ6FDdjHb5
        subject_person_id: p_8HcdTp6omF8z3tjYeyQCFC
        claim_kind: relationship
        predicate: kinship.adoptive_father_of
        object_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_rqihwFRP83ZHkQtwgoc2L5
          claim_id: c_huSKSEr2xMe8WJ6FDdjHb5
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王球 → 王奂
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
        - id: cs_oPUkmJUXvQ4oaDLiqKxysK
          claim_id: c_huSKSEr2xMe8WJ6FDdjHb5
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王球 → 王奂
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
        - id: cs_PtFr7XFYEM1ihp64Ggk2UB
          claim_id: c_huSKSEr2xMe8WJ6FDdjHb5
          source_id: s_tNLBhpAGTwSg968Z18d4U2
          stance: supports
          locator: 卷十二·王奂
          quotation: 奂，僧虔从子。出继从祖中书令球，字彦孙。
          interpretation_note: “出继”说明王球是嗣父／养父；生父关系另由王粹一支来源支持。
          source:
            id: s_tNLBhpAGTwSg968Z18d4U2
            source_type: book
            title: 中文维基文库：《全齊文》卷十二·王奂
            creator: 严可均辑
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E5%85%A8%E9%BD%8A%E6%96%87/%E5%8D%B7%E5%8D%81%E4%BA%8C
            external_identifier: null
            license_code: public-domain
            accessed_at: 2026-09-03T02:57:13.365Z
            metadata_json: null
      object_person:
        id: p_DHbqGXMHDUDbi5qvE74UDS
        status: active
        display_name: 王奂
        merged_into_person_id: null
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王球

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王球（393年—441年），字倩玉，琅邪临沂人，东晋司徒王谧之子，在南朝宋官至尚书仆射。 | accepted |
| birth.date | 393年 | accepted |
| death.date | 441年 | accepted |
| name.primary | 王球 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4DPX9WczBMafdh2C9FWaf3 | 王謐 | accepted |
| children | p_r7X2CoAa4zb88qeVFCKdmV | 王伷 | accepted |
| children | p_HKCQBGT1bnAPnMGwAipgaN | 王俨 | accepted |
| children | p_A5ydQK5ydnPtYRczTCawMz | 王彦方 | accepted |
| adoptive_children | p_DHbqGXMHDUDbi5qvE74UDS | 王奂 | accepted |

## 外部来源

- [维基数据：王謐（Q15914878）](https://www.wikidata.org/wiki/Q15914878)
- [维基数据：王球（Q11573172）](https://www.wikidata.org/wiki/Q11573172)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王球](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%83)
- [中文维基文库：《全齊文》卷十二·王奂](https://zh.wikisource.org/wiki/%E5%85%A8%E9%BD%8A%E6%96%87/%E5%8D%B7%E5%8D%81%E4%BA%8C)
