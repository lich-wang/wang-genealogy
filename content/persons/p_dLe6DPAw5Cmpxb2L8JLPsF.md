---
schema: wang-person/v1
id: p_dLe6DPAw5Cmpxb2L8JLPsF
status: active
merged_into: null
display_name: 王琇
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wxsUfTYK27ndWePl7cw22P
        subject_person_id: p_dLe6DPAw5Cmpxb2L8JLPsF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琇（？—？），琅邪临沂人，王导曾孙，王谧之子，王瓘、王球的弟弟，进入刘宋后，兄弟三人均至高官。 景平二年（424年）七月，傅亮、徐羡之等人废黜宋少帝刘义符，王琇当时担任侍中，参与拥立宋文帝刘义隆。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_rkxCWozflNa8XcSRIFRL8Q
          claim_id: c_wxsUfTYK27ndWePl7cw22P
          source_id: s_FId-KVhNCT_3QsgJ9Wq5F8
          stance: supports
          locator: 导言
          quotation: 王琇（？—？），琅邪临沂人，王导曾孙，王谧之子，王瓘、王球的弟弟
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_FId-KVhNCT_3QsgJ9Wq5F8
            source_type: website
            title: 中文维基百科：王琇 (劉宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%87_(%E5%8A%89%E5%AE%8B)
            external_identifier: Q15892004
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_R4v7UvoaaUkY1PVuxsJPc2
        subject_person_id: p_dLe6DPAw5Cmpxb2L8JLPsF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琇
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QYW7aBoV2D4gKmtH6R2Mi9
          claim_id: c_R4v7UvoaaUkY1PVuxsJPc2
          source_id: s_AiMGfsYLcnYEfNnWr91Bb3
          stance: supports
          locator: Q15892004
          quotation: null
          interpretation_note: null
          source:
            id: s_AiMGfsYLcnYEfNnWr91Bb3
            source_type: api_record
            title: 维基数据：王琇（Q15892004）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15892004
            external_identifier: Q15892004
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:49.009Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%87_(%E5%8A%89%E5%AE%8B)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NdZXjr4o4jsGYQYtEL7nF9
        subject_person_id: p_4DPX9WczBMafdh2C9FWaf3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dLe6DPAw5Cmpxb2L8JLPsF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_y9DRSkEJYTnbc78xrDW2uk
          claim_id: c_NdZXjr4o4jsGYQYtEL7nF9
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
        - id: cs_v8TqrEStvGk8kZbFYXvKUj
          claim_id: c_NdZXjr4o4jsGYQYtEL7nF9
          source_id: s_AiMGfsYLcnYEfNnWr91Bb3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_AiMGfsYLcnYEfNnWr91Bb3
            source_type: api_record
            title: 维基数据：王琇（Q15892004）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15892004
            external_identifier: Q15892004
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:49.009Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%87_(%E5%8A%89%E5%AE%8B)
        - id: cs_GqAdZ55gUzwy8SSRuHzZFy
          claim_id: c_NdZXjr4o4jsGYQYtEL7nF9
          source_id: s_dtF4geyEFAhwSrd23rUbcT
          stance: supports
          locator: 条文：之子/之女
          quotation: 王琇（{{bd|？||？||}}），琅邪临沂人，王导曾孙，王谧之子，王瓘、王球的弟弟，进入刘宋后，兄弟三人均至高官
          interpretation_note: null
          source:
            id: s_dtF4geyEFAhwSrd23rUbcT
            source_type: website
            title: 中文维基百科：王琇 (劉宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%87_(%E5%8A%89%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:42.982Z
            metadata_json: null
        - id: cs_8M9Gp3yJjjC2FEYDV8mcm7
          claim_id: c_NdZXjr4o4jsGYQYtEL7nF9
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王谧 → 王琇
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
        - id: cs_mjhaS34fLfDdLLT5GWnFkQ
          claim_id: c_NdZXjr4o4jsGYQYtEL7nF9
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王谧 → 王琇
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
        - id: cs_HVjSJZMp9F8V6u7CStsk9A
          claim_id: c_NdZXjr4o4jsGYQYtEL7nF9
          source_id: s_CxaQ6ZxSJpycq4KZQ8PGJr
          stance: supports
          locator: 条文：之子/之女
          quotation: 王琇，琅邪临沂人，王导曾孙，王谧之子，王瓘、王球的弟弟，进入刘宋后，兄弟三人均至高官
          interpretation_note: null
          source:
            id: s_CxaQ6ZxSJpycq4KZQ8PGJr
            source_type: website
            title: 中文维基百科：王琇 (劉宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%87_(%E5%8A%89%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:42.351Z
            metadata_json: null
      object_person:
        id: p_4DPX9WczBMafdh2C9FWaf3
        status: active
        display_name: 王謐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王琇（？—？），琅邪临沂人，王导曾孙，王谧之子，王瓘、王球的弟弟，进入刘宋后，兄弟三人均至高官。 景平二年（424年）七月，傅亮、徐羡之等人废黜宋少帝刘义符，王琇当时担任侍中，参与拥立宋文帝刘义隆。 | accepted |
| name.primary | 王琇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4DPX9WczBMafdh2C9FWaf3 | 王謐 | accepted |

## 外部来源

- [维基数据：王謐（Q15914878）](https://www.wikidata.org/wiki/Q15914878)
- [维基数据：王琇（Q15892004）](https://www.wikidata.org/wiki/Q15892004)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王琇 (劉宋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%87_(%E5%8A%89%E5%AE%8B))
