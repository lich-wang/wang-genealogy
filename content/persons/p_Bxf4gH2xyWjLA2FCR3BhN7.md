---
schema: wang-person/v1
id: p_Bxf4gH2xyWjLA2FCR3BhN7
status: active
merged_into: null
display_name: 王松龄
cbdb_id: 36706
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tXbNQF53ZF4A2UKCVgi3XF
        subject_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松龄，宋人物。籍贯鉅野，曾任縣丞。（中国历代人物传记资料库 CBDB 36706）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_agHMTZNKEvft8tCHoRs7JC
          claim_id: c_tXbNQF53ZF4A2UKCVgi3XF
          source_id: s_HL9c8H9GGz9vuWNZQPLLbQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_HL9c8H9GGz9vuWNZQPLLbQ
            source_type: api_record
            title: 维基数据：王松龄（Q45427492）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45427492
            external_identifier: Q45427492
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:17.362Z
            metadata_json: null
        - id: cs_KfO92iGIIzpusqq2YY18Xj
          claim_id: c_tXbNQF53ZF4A2UKCVgi3XF
          source_id: s_AX6PgDBCeaR1gEucMkzDv9
          stance: supports
          locator: CBDB:36706
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AX6PgDBCeaR1gEucMkzDv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王松齡（36706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36706&o=json
            external_identifier: CBDB:36706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:17.536Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QaGv94t78n7vuf4UayJZsD
        subject_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松龄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1CgG1AAh15JhtzMSRCMx6Z
          claim_id: c_QaGv94t78n7vuf4UayJZsD
          source_id: s_HL9c8H9GGz9vuWNZQPLLbQ
          stance: supports
          locator: Q45427492
          quotation: null
          interpretation_note: null
          source:
            id: s_HL9c8H9GGz9vuWNZQPLLbQ
            source_type: api_record
            title: 维基数据：王松龄（Q45427492）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45427492
            external_identifier: Q45427492
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:17.362Z
            metadata_json: null
        - id: cs_3L3myd5nrPDiJ5fX4jbNEH
          claim_id: c_QaGv94t78n7vuf4UayJZsD
          source_id: s_AX6PgDBCeaR1gEucMkzDv9
          stance: supports
          locator: Q45427492
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uing214wRXzdfcBGdC6eB7
        subject_person_id: p_zAMNQJueCwPPKR5vjoLaAD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fSKcxdw7LKXvehWMuYXiYL
          claim_id: c_uing214wRXzdfcBGdC6eB7
          source_id: s_HL9c8H9GGz9vuWNZQPLLbQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_S7Vt3QT9B6J7tESbagpScv
          claim_id: c_uing214wRXzdfcBGdC6eB7
          source_id: s_XGTV8UkV21vTCML8WGhwr8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XGTV8UkV21vTCML8WGhwr8
            source_type: api_record
            title: 维基数据：王彦博（Q45409553）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45409553
            external_identifier: Q45409553
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:00.696Z
            metadata_json: null
        - id: cs_S9ccwHatgJsQKW16eCPDFk
          claim_id: c_uing214wRXzdfcBGdC6eB7
          source_id: s_46EMQd7ZTyE8aAbsz323u9
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_46EMQd7ZTyE8aAbsz323u9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彥博（26229）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26229&o=json
            external_identifier: CBDB:26229
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:00.875Z
            metadata_json: null
      object_person:
        id: p_zAMNQJueCwPPKR5vjoLaAD
        status: active
        display_name: 王彦博
        merged_into_person_id: null
    - claim:
        id: c_Vnq6t0xHmqfUYQcyf-i3zR
        subject_person_id: p_GZbsE9QaKe1eQKtqPL2T7F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V787GoF_1stdjK0_pjBkJj
          claim_id: c_Vnq6t0xHmqfUYQcyf-i3zR
          source_id: s_fGW6nhH5W9uBA7hHf2yaa8
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fGW6nhH5W9uBA7hHf2yaa8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：孔氏（37779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37779&o=json
            external_identifier: CBDB:37779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:17.529Z
            metadata_json: null
      object_person:
        id: p_GZbsE9QaKe1eQKtqPL2T7F
        status: active
        display_name: 孔氏
        merged_into_person_id: null
  children:
    - claim:
        id: c_5NA5N9BMyx3Bip3HJ9mgmZ
        subject_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3Jpz1MJr19NoGHADTpC82d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n4QV741ZxNMbrAFuX9kSJh
          claim_id: c_5NA5N9BMyx3Bip3HJ9mgmZ
          source_id: s_HL9c8H9GGz9vuWNZQPLLbQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_mKWy2XoZ3TkzGAUsFqia9j
          claim_id: c_5NA5N9BMyx3Bip3HJ9mgmZ
          source_id: s_A9W6Fn8pDLjwCDupsuh81N
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_A9W6Fn8pDLjwCDupsuh81N
            source_type: api_record
            title: 维基数据：王串（Q45430635）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45430635
            external_identifier: Q45430635
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_3Jpz1MJr19NoGHADTpC82d
        status: active
        display_name: 王串
        merged_into_person_id: null
    - claim:
        id: c_Lfj5G24bqL91BqT1q4KPu1
        subject_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_TXR4BZHWFYBdp9oHRn9hCf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m5FWCQ6pABifp4K3W7Pqzk
          claim_id: c_Lfj5G24bqL91BqT1q4KPu1
          source_id: s_AX6PgDBCeaR1gEucMkzDv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_TXR4BZHWFYBdp9oHRn9hCf
        status: active
        display_name: 王聿
        merged_into_person_id: null
    - claim:
        id: c_ottJFFdrPBbDJMDqj2FayQ
        subject_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_kdXLrKQ2gAzwQuRiYauex1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZgeBoYnwedK79fzy8TWJLs
          claim_id: c_ottJFFdrPBbDJMDqj2FayQ
          source_id: s_AX6PgDBCeaR1gEucMkzDv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_kdXLrKQ2gAzwQuRiYauex1
        status: active
        display_name: 王中
        merged_into_person_id: null
    - claim:
        id: c_YMcfe3Kj75JX36EvjhO29T
        subject_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TXR4BZHWFYBdp9oHRn9hCf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FBst7_XA7DZuXKEHwPaWVB
          claim_id: c_YMcfe3Kj75JX36EvjhO29T
          source_id: s_AX6PgDBCeaR1gEucMkzDv9
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TXR4BZHWFYBdp9oHRn9hCf
        status: active
        display_name: 王聿
        merged_into_person_id: null
    - claim:
        id: c_tRGZ1VvOhuT9ncrBojG9yx
        subject_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kdXLrKQ2gAzwQuRiYauex1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MtGiF9UcrHfRrqLHQetLLk
          claim_id: c_tRGZ1VvOhuT9ncrBojG9yx
          source_id: s_AX6PgDBCeaR1gEucMkzDv9
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kdXLrKQ2gAzwQuRiYauex1
        status: active
        display_name: 王中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_IH5VuZjcxJZzFnqPi7IX2h
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Mom-65cH-S_1NJ31O5vSA
          claim_id: c_IH5VuZjcxJZzFnqPi7IX2h
          source_id: s_ZbRR2qinMrmQKSJZ5nhy4i
          stance: supports
          locator: 宋人傳記資料索引(電子版)：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZbRR2qinMrmQKSJZ5nhy4i
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：周氏（37792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37792&o=json
            external_identifier: CBDB:37792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_tJA4SGo5rnDTPZB6FnPcWP
        status: active
        display_name: 周氏
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王松龄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王松龄，宋人物。籍贯鉅野，曾任縣丞。（中国历代人物传记资料库 CBDB 36706） | accepted |
| name.primary | 王松龄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zAMNQJueCwPPKR5vjoLaAD | 王彦博 | accepted |
| parents | p_GZbsE9QaKe1eQKtqPL2T7F | 孔氏 | accepted |
| children | p_3Jpz1MJr19NoGHADTpC82d | 王串 | accepted |
| children | p_TXR4BZHWFYBdp9oHRn9hCf | 王聿 | accepted |
| children | p_kdXLrKQ2gAzwQuRiYauex1 | 王中 | accepted |
| children | p_TXR4BZHWFYBdp9oHRn9hCf | 王聿 | accepted |
| children | p_kdXLrKQ2gAzwQuRiYauex1 | 王中 | accepted |
| ancestors | p_tJA4SGo5rnDTPZB6FnPcWP | 周氏 | accepted |

## 外部来源

- [维基数据：王串（Q45430635）](https://www.wikidata.org/wiki/Q45430635)
- [维基数据：王松龄（Q45427492）](https://www.wikidata.org/wiki/Q45427492)
- [维基数据：王彦博（Q45409553）](https://www.wikidata.org/wiki/Q45409553)
- [CBDB 中国历代人物传记资料库：孔氏（37779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37779&o=json)
- [CBDB 中国历代人物传记资料库：王松齡（36706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36706&o=json)
- [CBDB 中国历代人物传记资料库：王彥博（26229）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26229&o=json)
- [CBDB 中国历代人物传记资料库：周氏（37792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37792&o=json)
