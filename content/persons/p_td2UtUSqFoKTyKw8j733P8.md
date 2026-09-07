---
schema: wang-person/v1
id: p_td2UtUSqFoKTyKw8j733P8
status: active
merged_into: null
display_name: 刘荣男
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A7T58vynJr8rwwZJKYTnGk
        subject_person_id: p_td2UtUSqFoKTyKw8j733P8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘荣男，史料所见人物。本项目依据《刘荣男》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_kDwzfy6ffmpO_OhI3LX2iD
          claim_id: c_A7T58vynJr8rwwZJKYTnGk
          source_id: s_cCUH45zwtnQbSQLX1AKCQD
          stance: supports
          locator: Q10897941
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_cCUH45zwtnQbSQLX1AKCQD
            source_type: api_record
            title: 维基数据：刘荣男（Q10897941）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10897941
            external_identifier: Q10897941
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:42.716Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7WDAPkckXQTtB6cNZb5Kvp
        subject_person_id: p_td2UtUSqFoKTyKw8j733P8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘荣男
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_c9e22DdDRsf3PJs2cAMKXH
          claim_id: c_7WDAPkckXQTtB6cNZb5Kvp
          source_id: s_cCUH45zwtnQbSQLX1AKCQD
          stance: supports
          locator: Q10897941
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_GhMx7Bhz8xhMBNyCi3FmY2
        subject_person_id: p_td2UtUSqFoKTyKw8j733P8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_zDM7KWs8woGRYQeL6ikJD6
          claim_id: c_GhMx7Bhz8xhMBNyCi3FmY2
          source_id: s_T9oFeHgKECyHSzfi1GR4bB
          stance: supports
          locator: P26（配偶）
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
        - id: cs_BLkbG6Q5n7wCHdmFqEmR1M
          claim_id: c_GhMx7Bhz8xhMBNyCi3FmY2
          source_id: s_cCUH45zwtnQbSQLX1AKCQD
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_cCUH45zwtnQbSQLX1AKCQD
            source_type: api_record
            title: 维基数据：刘荣男（Q10897941）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10897941
            external_identifier: Q10897941
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:42.716Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
        - id: cs_oqorPU6cdv2Q6PEZpajWe8
          claim_id: c_GhMx7Bhz8xhMBNyCi3FmY2
          source_id: s_5tLASNMeNdWKrBsKoxom8v
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王偃
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
        - id: cs_MoGLfQZs6f973hTUME2BFA
          claim_id: c_GhMx7Bhz8xhMBNyCi3FmY2
          source_id: s_a2CTnxE4LwRuQ6x2sS3F4U
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王偃
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
        - id: cs_h6VHk6j1xETHFb2CmzNUQu
          claim_id: c_GhMx7Bhz8xhMBNyCi3FmY2
          source_id: s_GrAcQoc7HJWZm6dpgd5VkC
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王偃
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
        - id: cs_x15UtPPg544LmTJUkKieX9
          claim_id: c_GhMx7Bhz8xhMBNyCi3FmY2
          source_id: s_md4kq9QQ7xb94G1zDWdTio
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王偃
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
        - id: cs_XY4pNbjfyNkjCzpqKj6tJY
          claim_id: c_GhMx7Bhz8xhMBNyCi3FmY2
          source_id: s_hrF9dJ9LLwnXJP1W8EkHYm
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王偃
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
  ancestors: []
  descendants: []
  other: []
---

# 刘荣男

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 刘荣男，史料所见人物。本项目依据《刘荣男》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 刘荣男 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_zzsFuAEs6JJ4EJkXaf48Mn | 王偃 | accepted |

## 外部来源

- [维基数据：刘荣男（Q10897941）](https://www.wikidata.org/wiki/Q10897941)
- [维基数据：王偃（Q11572909）](https://www.wikidata.org/wiki/Q11572909)
- [中文维基百科：刘荣男](https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7)
