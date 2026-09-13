---
schema: wang-person/v1
id: p_g2bWmBWwoSBq13dEZGzzn8
status: active
merged_into: null
display_name: 王肇
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9dWqDgCvbHqTPqBXNyZrUz
        subject_person_id: p_g2bWmBWwoSBq13dEZGzzn8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇（？—？），琅邪临沂人，王祥的庶长子，王夏、王馥、王烈、王芬的哥哥。因为王肇是庶子，所以王祥的爵位由王肇的弟弟王馥继承。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_kqv2Ya7lJghjYcRUqXO68S
          claim_id: c_9dWqDgCvbHqTPqBXNyZrUz
          source_id: s_6J3TXWe63M0fUtasN_e2oc
          stance: supports
          locator: 导言
          quotation: 王肇（？—？），琅邪临沂人，王祥的庶长子，王夏、王馥、王烈、王芬
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_6J3TXWe63M0fUtasN_e2oc
            source_type: website
            title: 中文维基百科：王肇
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%82%87
            external_identifier: Q15902476
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T09:29:27.764Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MXEn5CyGmEiD2kfucECPUg
        subject_person_id: p_g2bWmBWwoSBq13dEZGzzn8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1DVBra4JLpe9NfXAEJ1Ndr
          claim_id: c_MXEn5CyGmEiD2kfucECPUg
          source_id: s_GCFfEJpVDtQrQuryYaXre5
          stance: supports
          locator: Q15902476
          quotation: null
          interpretation_note: null
          source:
            id: s_GCFfEJpVDtQrQuryYaXre5
            source_type: api_record
            title: 維基數據：王肇（Q15902476）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15902476
            external_identifier: Q15902476
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:34.759Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%82%87
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EPBQahjoViQFnnH4PgM99L
        subject_person_id: p_Xategg2TUsqjtsJGVyycV2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g2bWmBWwoSBq13dEZGzzn8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NvUoxe8pBQYeLLnw426fa1
          claim_id: c_EPBQahjoViQFnnH4PgM99L
          source_id: s_aE4danWB5J8ku3rRi7jSVQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_aE4danWB5J8ku3rRi7jSVQ
            source_type: website
            title: 中文维基百科：王祥
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王祥
            external_identifier: Q710053
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_rZB714HrAN99wiYxp5RJY1
          claim_id: c_EPBQahjoViQFnnH4PgM99L
          source_id: s_xJjGWjM3eAPuzx3FStgwtt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xJjGWjM3eAPuzx3FStgwtt
            source_type: api_record
            title: 維基數據：王祥（Q710053）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q710053
            external_identifier: Q710053
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:55.576Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A5%A5
        - id: cs_QnYqQQUxQY1bDafq5AR2HW
          claim_id: c_EPBQahjoViQFnnH4PgM99L
          source_id: s_GCFfEJpVDtQrQuryYaXre5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GCFfEJpVDtQrQuryYaXre5
            source_type: api_record
            title: 維基數據：王肇（Q15902476）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15902476
            external_identifier: Q15902476
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:34.759Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%82%87
        - id: cs_3LTJKjjikuSaJUVNromGbf
          claim_id: c_EPBQahjoViQFnnH4PgM99L
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王祥 → 王肇
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
        - id: cs_gb7uBS36uTFvvpFXhSEgBm
          claim_id: c_EPBQahjoViQFnnH4PgM99L
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王祥 → 王肇
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
        id: p_Xategg2TUsqjtsJGVyycV2
        status: active
        display_name: 王祥
        merged_into_person_id: null
  children:
    - claim:
        id: c_3BDfR7YDbkH7H6KNL7PW5M
        subject_person_id: p_g2bWmBWwoSBq13dEZGzzn8
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_1rjye7Q3jLQPz54TXjNKsR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4rEAY1ukRPKHb51wDrwtoL
          claim_id: c_3BDfR7YDbkH7H6KNL7PW5M
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王肇 → 王俊
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
        - id: cs_CVcJNMn5VdCSTryR7hQMBx
          claim_id: c_3BDfR7YDbkH7H6KNL7PW5M
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王肇 → 王俊
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
      object_person:
        id: p_1rjye7Q3jLQPz54TXjNKsR
        status: active
        display_name: 王俊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王肇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王肇（？—？），琅邪临沂人，王祥的庶长子，王夏、王馥、王烈、王芬的哥哥。因为王肇是庶子，所以王祥的爵位由王肇的弟弟王馥继承。 | accepted |
| name.primary | 王肇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xategg2TUsqjtsJGVyycV2 | 王祥 | accepted |
| children | p_1rjye7Q3jLQPz54TXjNKsR | 王俊 | accepted |

## 外部来源

- [維基數據：王祥（Q710053）](https://www.wikidata.org/wiki/Q710053)
- [維基數據：王肇（Q15902476）](https://www.wikidata.org/wiki/Q15902476)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王祥](https://zh.wikipedia.org/wiki/王祥)
- [中文维基百科：王肇](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%82%87)
