---
schema: wang-person/v1
id: p_F3A2LfaZNs8ryznksG7eQn
status: active
merged_into: null
display_name: 王懋
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uxU4ZGKVTTJuEuDrzBLhMW
        subject_person_id: p_F3A2LfaZNs8ryznksG7eQn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋，南乡僖侯。维基数据以独立条目 Q22814998 收录该人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_dgt5NPiqLk2mgJfjRYRIhj
          claim_id: c_uxU4ZGKVTTJuEuDrzBLhMW
          source_id: s_NuY8cr7vCDr1MHDyamJc6s
          stance: supports
          locator: Q22814998
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_NuY8cr7vCDr1MHDyamJc6s
            source_type: api_record
            title: 维基数据：王懋（Q22814998）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814998
            external_identifier: Q22814998
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:56.458Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uiujm7sTx8qsGKNjEij63j
        subject_person_id: p_F3A2LfaZNs8ryznksG7eQn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7AWtfUBSLu5D2NjZRWgAEY
          claim_id: c_uiujm7sTx8qsGKNjEij63j
          source_id: s_NuY8cr7vCDr1MHDyamJc6s
          stance: supports
          locator: Q22814998
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LtjssY26HBhDNLdvqyQrtA
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F3A2LfaZNs8ryznksG7eQn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_niaxX88pQqRwTBFMo77X3V
          claim_id: c_LtjssY26HBhDNLdvqyQrtA
          source_id: s_T9oFeHgKECyHSzfi1GR4bB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_T9oFeHgKECyHSzfi1GR4bB
            source_type: api_record
            title: 维基数据：王偃（Q11572909）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572909
            external_identifier: Q11572909
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:27.598Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%81%83
        - id: cs_thQaQQDjm4S4Ai7ACiZWqn
          claim_id: c_LtjssY26HBhDNLdvqyQrtA
          source_id: s_NuY8cr7vCDr1MHDyamJc6s
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NuY8cr7vCDr1MHDyamJc6s
            source_type: api_record
            title: 维基数据：王懋（Q22814998）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814998
            external_identifier: Q22814998
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:56.458Z
            metadata_json: null
        - id: cs_GGQXkMMVe1NEkXuua27Wgh
          claim_id: c_LtjssY26HBhDNLdvqyQrtA
          source_id: s_5tLASNMeNdWKrBsKoxom8v
          stance: supports
          locator: 条文：王偃次子
          quotation: 王懋，王偃次子。
          interpretation_note: null
          source:
            id: s_5tLASNMeNdWKrBsKoxom8v
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:14.501Z
            metadata_json: null
        - id: cs_H7cok324VGANJCZ8ZaRhnG
          claim_id: c_LtjssY26HBhDNLdvqyQrtA
          source_id: s_a2CTnxE4LwRuQ6x2sS3F4U
          stance: supports
          locator: 条文：王偃次子
          quotation: 王懋，王偃次子。
          interpretation_note: null
          source:
            id: s_a2CTnxE4LwRuQ6x2sS3F4U
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:27.336Z
            metadata_json: null
        - id: cs_NLKY9NSMAe3i3d4sq7T9ef
          claim_id: c_LtjssY26HBhDNLdvqyQrtA
          source_id: s_GrAcQoc7HJWZm6dpgd5VkC
          stance: supports
          locator: 条文：王偃次子
          quotation: 王懋，王偃次子。
          interpretation_note: null
          source:
            id: s_GrAcQoc7HJWZm6dpgd5VkC
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:28.058Z
            metadata_json: null
        - id: cs_nSasZjJcWfrJVQMZPi56Gt
          claim_id: c_LtjssY26HBhDNLdvqyQrtA
          source_id: s_md4kq9QQ7xb94G1zDWdTio
          stance: supports
          locator: 条文：王偃次子
          quotation: 王懋，王偃次子。
          interpretation_note: null
          source:
            id: s_md4kq9QQ7xb94G1zDWdTio
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:57.457Z
            metadata_json: null
        - id: cs_CjxdCkoJ91mKTtuNbGGJdQ
          claim_id: c_LtjssY26HBhDNLdvqyQrtA
          source_id: s_hrF9dJ9LLwnXJP1W8EkHYm
          stance: supports
          locator: 条文：王偃次子
          quotation: 王懋，王偃次子。
          interpretation_note: null
          source:
            id: s_hrF9dJ9LLwnXJP1W8EkHYm
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:25.018Z
            metadata_json: null
      object_person:
        id: p_zzsFuAEs6JJ4EJkXaf48Mn
        status: active
        display_name: 王偃
        merged_into_person_id: null
  children:
    - claim:
        id: c_Jbw66dYwQpDRxxRAgdjend
        subject_person_id: p_F3A2LfaZNs8ryznksG7eQn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EPN3YNRH5v3a9kop1zob77
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Q4eDP2p22rN3ZHmDfv32pd
          claim_id: c_Jbw66dYwQpDRxxRAgdjend
          source_id: s_NuY8cr7vCDr1MHDyamJc6s
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_NuY8cr7vCDr1MHDyamJc6s
            source_type: api_record
            title: 维基数据：王懋（Q22814998）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814998
            external_identifier: Q22814998
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:56.458Z
            metadata_json: null
        - id: cs_33xDZdvJJvTd3sbzsK9jLn
          claim_id: c_Jbw66dYwQpDRxxRAgdjend
          source_id: s_joJxBUhDogYHUGHf61ssdD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_joJxBUhDogYHUGHf61ssdD
            source_type: api_record
            title: 维基数据：王瑩（Q11573176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573176
            external_identifier: Q11573176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:17.590Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8E%B9_(%E5%8D%97%E6%9C%9D)
        - id: cs_keJaM6QRyPgkLkFW8zvh4u
          claim_id: c_Jbw66dYwQpDRxxRAgdjend
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王懋 → 王莹
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
        - id: cs_JPeat6xM6xgLqTm5TQDe9B
          claim_id: c_Jbw66dYwQpDRxxRAgdjend
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王懋 → 王莹
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
        id: p_EPN3YNRH5v3a9kop1zob77
        status: active
        display_name: 王瑩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王懋，南乡僖侯。维基数据以独立条目 Q22814998 收录该人物。 | accepted |
| name.primary | 王懋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zzsFuAEs6JJ4EJkXaf48Mn | 王偃 | accepted |
| children | p_EPN3YNRH5v3a9kop1zob77 | 王瑩 | accepted |

## 外部来源

- [维基数据：王懋（Q22814998）](https://www.wikidata.org/wiki/Q22814998)
- [维基数据：王偃（Q11572909）](https://www.wikidata.org/wiki/Q11572909)
- [维基数据：王瑩（Q11573176）](https://www.wikidata.org/wiki/Q11573176)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：刘荣男](https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7)
