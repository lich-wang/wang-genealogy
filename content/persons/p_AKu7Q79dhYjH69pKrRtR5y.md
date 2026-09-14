---
schema: wang-person/v1
id: p_AKu7Q79dhYjH69pKrRtR5y
status: active
merged_into: null
display_name: 王之翰
cbdb_id: 217735
revision: 10
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EV4rCyrB7Y3yJe3kibtywP
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰，明人物。萬曆五年進士，籍贯新城，入仕監生，曾任禮部郎中。（中国历代人物传记资料库 CBDB 217735）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_G1sjwV86goH2kJW2942P6d
          claim_id: c_EV4rCyrB7Y3yJe3kibtywP
          source_id: s_u98co3v7JVQWnUh6hzZVZy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_u98co3v7JVQWnUh6hzZVZy
            source_type: api_record
            title: 维基数据：王之翰（Q45450999）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450999
            external_identifier: Q45450999
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_PF54F1ZI3Bg_i53tq49D0M
          claim_id: c_EV4rCyrB7Y3yJe3kibtywP
          source_id: s_feEGCJXsT3fmBmuJECYJLd
          stance: supports
          locator: CBDB:217735
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_feEGCJXsT3fmBmuJECYJLd
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之翰（217735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217735&o=json
            external_identifier: CBDB:217735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:09.418Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vbYFtcoKoBLcArweZBRaiY
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LauR5Tc53jj1s4Jp3TcV4p
          claim_id: c_vbYFtcoKoBLcArweZBRaiY
          source_id: s_u98co3v7JVQWnUh6hzZVZy
          stance: supports
          locator: Q45450999
          quotation: null
          interpretation_note: null
          source:
            id: s_u98co3v7JVQWnUh6hzZVZy
            source_type: api_record
            title: 维基数据：王之翰（Q45450999）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450999
            external_identifier: Q45450999
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_jSRBRg2Ue6MKs799unXi7A
          claim_id: c_vbYFtcoKoBLcArweZBRaiY
          source_id: s_feEGCJXsT3fmBmuJECYJLd
          stance: supports
          locator: Q45450999
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_F6AULyQ2KsMWt6vnDyKC14
        subject_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EdBFgT3zMPscJFnhRChKuL
          claim_id: c_F6AULyQ2KsMWt6vnDyKC14
          source_id: s_u98co3v7JVQWnUh6hzZVZy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_u98co3v7JVQWnUh6hzZVZy
            source_type: api_record
            title: 维基数据：王之翰（Q45450999）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450999
            external_identifier: Q45450999
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_YboS6KvvkAotCaFSfAYbtX
          claim_id: c_F6AULyQ2KsMWt6vnDyKC14
          source_id: s_8v97D6aRgy5zRhLaWeAPgN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8v97D6aRgy5zRhLaWeAPgN
            source_type: api_record
            title: 维基数据：王重光（Q15935070）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935070
            external_identifier: Q15935070
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
  children:
    - claim:
        id: c_8p47PRfUhrPUZAjxfRr92k
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hkxRnkwdABHFBvtuuQxejY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_caKHFs6AmvpzWYtJFVPNpp
          claim_id: c_8p47PRfUhrPUZAjxfRr92k
          source_id: s_u98co3v7JVQWnUh6hzZVZy
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_u98co3v7JVQWnUh6hzZVZy
            source_type: api_record
            title: 维基数据：王之翰（Q45450999）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450999
            external_identifier: Q45450999
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_UttoqfvzUf46WWLWLMHz6h
          claim_id: c_8p47PRfUhrPUZAjxfRr92k
          source_id: s_hU2T3rNMDcHdxgdRjFWsNh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hU2T3rNMDcHdxgdRjFWsNh
            source_type: api_record
            title: 维基数据：王象坤（Q16904084）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16904084
            external_identifier: Q16904084
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:07.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B1%A1%E5%9D%A4
      object_person:
        id: p_hkxRnkwdABHFBvtuuQxejY
        status: active
        display_name: 王象坤
        merged_into_person_id: null
    - claim:
        id: c_ChYgQrxTA_HtWyifElS7aF
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6JLCo5EzMW7F2kapW4gNNi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AusFBNuabbCoAbOQerZPuY
          claim_id: c_ChYgQrxTA_HtWyifElS7aF
          source_id: s_TS831NuH0pNp0-rGmkRhnn
          stance: supports
          locator: CBDB：兄弟 王象坤（205267）之父／母 王之翰
          quotation: null
          interpretation_note: 由兄弟关系推断：王象貴 与 王象坤 为同胞（CBDB 记「兄」），王象坤 之父／母即 王象貴 之父／母。
          source:
            id: s_TS831NuH0pNp0-rGmkRhnn
            source_type: api_record
            title: 中国历代人物传记资料库：王象貴（CBDB 330757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330757&o=json
            external_identifier: CBDB:330757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6JLCo5EzMW7F2kapW4gNNi
        status: active
        display_name: 王象貴
        merged_into_person_id: null
    - claim:
        id: c_jxBOI91mDGh0Bb3hGk74qv
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EvFQLpxB44GGFT5o7nE4zs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6BAs3a9tAvuLtTNbTrxPzw
          claim_id: c_jxBOI91mDGh0Bb3hGk74qv
          source_id: s_2xMbgZqW4eZKXAl0qZ3Tgk
          stance: supports
          locator: CBDB：兄弟 王象坤（205267）之父／母 王之翰
          quotation: null
          interpretation_note: 由兄弟关系推断：王象蒙 与 王象坤 为同胞（CBDB 记「兄」），王象坤 之父／母即 王象蒙 之父／母。
          source:
            id: s_2xMbgZqW4eZKXAl0qZ3Tgk
            source_type: api_record
            title: 中国历代人物传记资料库：王象蒙（CBDB 330753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330753&o=json
            external_identifier: CBDB:330753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EvFQLpxB44GGFT5o7nE4zs
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
    - claim:
        id: c_8SYDXAr4BFh3-f-dY_UpWt
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NNTF9YWYB26rR4f3GScgc3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TlM-AZiFdvdT2QOVo3OW8A
          claim_id: c_8SYDXAr4BFh3-f-dY_UpWt
          source_id: s_DRcx4fgZaKTAM1YCgHh4MG
          stance: supports
          locator: CBDB：兄弟 王象坤（205267）之父／母 王之翰
          quotation: null
          interpretation_note: 由兄弟关系推断：王象乾 与 王象坤 为同胞（CBDB 记「弟」），王象坤 之父／母即 王象乾 之父／母。
          source:
            id: s_DRcx4fgZaKTAM1YCgHh4MG
            source_type: api_record
            title: 中国历代人物传记资料库：王象乾（CBDB 330752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330752&o=json
            external_identifier: CBDB:330752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NNTF9YWYB26rR4f3GScgc3
        status: active
        display_name: 王象乾
        merged_into_person_id: null
    - claim:
        id: c_TR3AepRAIDJ-uYBfkUtcm7
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PbyqkA5KdNBk7sXJ6ndxuk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kQTlxPRt8lXNQ_So4eXVQl
          claim_id: c_TR3AepRAIDJ-uYBfkUtcm7
          source_id: s_YKcAXXEr0SQ5d6bTvQZ89F
          stance: supports
          locator: CBDB：兄弟 王象坤（205267）之父／母 王之翰
          quotation: null
          interpretation_note: 由兄弟关系推断：王象離 与 王象坤 为同胞（CBDB 记「兄」），王象坤 之父／母即 王象離 之父／母。
          source:
            id: s_YKcAXXEr0SQ5d6bTvQZ89F
            source_type: api_record
            title: 中国历代人物传记资料库：王象離（CBDB 330759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330759&o=json
            external_identifier: CBDB:330759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PbyqkA5KdNBk7sXJ6ndxuk
        status: active
        display_name: 王象離
        merged_into_person_id: null
    - claim:
        id: c_De57GqZxKJLI9O_ShKNVkc
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TD1TvnKHWVi268fxKgzDuM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QhLbKF6Qew08eMP1lm4sO-
          claim_id: c_De57GqZxKJLI9O_ShKNVkc
          source_id: s_ncE1XNE-IywE3t9GEJxDe9
          stance: supports
          locator: CBDB：兄弟 王象坤（205267）之父／母 王之翰
          quotation: null
          interpretation_note: 由兄弟关系推断：王象晉 与 王象坤 为同胞（CBDB 记「兄」），王象坤 之父／母即 王象晉 之父／母。
          source:
            id: s_ncE1XNE-IywE3t9GEJxDe9
            source_type: api_record
            title: 中国历代人物传记资料库：王象晉（CBDB 65763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json
            external_identifier: CBDB:65763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TD1TvnKHWVi268fxKgzDuM
        status: active
        display_name: 王象晉
        merged_into_person_id: null
    - claim:
        id: c__YFGfNKNpUSOvt8ekD1KTY
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W8NmC2naYNSTxSJ63z9T7e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cA9i4h8WprsqShPJlQpFXb
          claim_id: c__YFGfNKNpUSOvt8ekD1KTY
          source_id: s_BXUOe5CbUGecilruvp7D9K
          stance: supports
          locator: CBDB：兄弟 王象坤（205267）之父／母 王之翰
          quotation: null
          interpretation_note: 由兄弟关系推断：王象泰 与 王象坤 为同胞（CBDB 记「兄」），王象坤 之父／母即 王象泰 之父／母。
          source:
            id: s_BXUOe5CbUGecilruvp7D9K
            source_type: api_record
            title: 中国历代人物传记资料库：王象泰（CBDB 330755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330755&o=json
            external_identifier: CBDB:330755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W8NmC2naYNSTxSJ63z9T7e
        status: active
        display_name: 王象泰
        merged_into_person_id: null
    - claim:
        id: c_6pnAGYPCSgzpHC6QbR6htV
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dnykwgQHL3d7rAL5cnX9D8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OdzGTHaviVK-ktinC4WKd3
          claim_id: c_6pnAGYPCSgzpHC6QbR6htV
          source_id: s_95oKJyvNCByYL_0ZPgYWhz
          stance: supports
          locator: CBDB：兄弟 王象坤（205267）之父／母 王之翰
          quotation: null
          interpretation_note: 由兄弟关系推断：王象震 与 王象坤 为同胞（CBDB 记「兄」），王象坤 之父／母即 王象震 之父／母。
          source:
            id: s_95oKJyvNCByYL_0ZPgYWhz
            source_type: api_record
            title: 中国历代人物传记资料库：王象震（CBDB 330756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330756&o=json
            external_identifier: CBDB:330756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dnykwgQHL3d7rAL5cnX9D8
        status: active
        display_name: 王象震
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之翰，明人物。萬曆五年進士，籍贯新城，入仕監生，曾任禮部郎中。（中国历代人物传记资料库 CBDB 217735） | accepted |
| name.primary | 王之翰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |
| children | p_hkxRnkwdABHFBvtuuQxejY | 王象坤 | accepted |
| children | p_6JLCo5EzMW7F2kapW4gNNi | 王象貴 | accepted |
| children | p_EvFQLpxB44GGFT5o7nE4zs | 王象蒙 | accepted |
| children | p_NNTF9YWYB26rR4f3GScgc3 | 王象乾 | accepted |
| children | p_PbyqkA5KdNBk7sXJ6ndxuk | 王象離 | accepted |
| children | p_TD1TvnKHWVi268fxKgzDuM | 王象晉 | accepted |
| children | p_W8NmC2naYNSTxSJ63z9T7e | 王象泰 | accepted |
| children | p_dnykwgQHL3d7rAL5cnX9D8 | 王象震 | accepted |

## 外部来源

- [维基数据：王象坤（Q16904084）](https://www.wikidata.org/wiki/Q16904084)
- [维基数据：王之翰（Q45450999）](https://www.wikidata.org/wiki/Q45450999)
- [维基数据：王重光（Q15935070）](https://www.wikidata.org/wiki/Q15935070)
- [中国历代人物传记资料库：王象貴（CBDB 330757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330757&o=json)
- [中国历代人物传记资料库：王象晉（CBDB 65763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json)
- [中国历代人物传记资料库：王象離（CBDB 330759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330759&o=json)
- [中国历代人物传记资料库：王象蒙（CBDB 330753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330753&o=json)
- [中国历代人物传记资料库：王象乾（CBDB 330752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330752&o=json)
- [中国历代人物传记资料库：王象泰（CBDB 330755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330755&o=json)
- [中国历代人物传记资料库：王象震（CBDB 330756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330756&o=json)
- [CBDB 中国历代人物传记资料库：王之翰（217735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217735&o=json)
