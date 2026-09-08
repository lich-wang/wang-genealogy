---
schema: wang-person/v1
id: p_MnDiqNwWr2tdGy1C6WX8aV
status: active
merged_into: null
display_name: 王昌嗣
cbdb_id: 175434
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z26LdtJDRE3wQyWfYzRsVh
        subject_person_id: p_MnDiqNwWr2tdGy1C6WX8aV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌嗣（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175434 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nLBZ5NDNx5D1VzPFGWudJC
          claim_id: c_z26LdtJDRE3wQyWfYzRsVh
          source_id: s_CrUodSAYP8bgb4mJTT77VB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CrUodSAYP8bgb4mJTT77VB
            source_type: api_record
            title: 维基数据：王昌嗣（Q45659415）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659415
            external_identifier: Q45659415
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_qcdkOZms5XXtLRIHu3bm5L
          claim_id: c_z26LdtJDRE3wQyWfYzRsVh
          source_id: s_qWCLM4GUM5Dc4TNLi13srp
          stance: supports
          locator: CBDB:175434
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qWCLM4GUM5Dc4TNLi13srp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昌嗣（175434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175434&o=json
            external_identifier: CBDB:175434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.519Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_i553dp8pihknDqG9QxJhxC
        subject_person_id: p_MnDiqNwWr2tdGy1C6WX8aV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0894-01-01
            latest: 0894-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oWG4pftCLhE18kj7Qm45ut
          claim_id: c_i553dp8pihknDqG9QxJhxC
          source_id: s_CrUodSAYP8bgb4mJTT77VB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CrUodSAYP8bgb4mJTT77VB
            source_type: api_record
            title: 维基数据：王昌嗣（Q45659415）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659415
            external_identifier: Q45659415
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dxjEzKtZf9PwaDKwbFAfoL
        subject_person_id: p_MnDiqNwWr2tdGy1C6WX8aV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌嗣
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cjJMJXng1fVTGHXFg1C2qD
          claim_id: c_dxjEzKtZf9PwaDKwbFAfoL
          source_id: s_qWCLM4GUM5Dc4TNLi13srp
          stance: supports
          locator: Q45659415
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_jB3pte9NU2i318wHsPAtbL
          claim_id: c_dxjEzKtZf9PwaDKwbFAfoL
          source_id: s_CrUodSAYP8bgb4mJTT77VB
          stance: supports
          locator: Q45659415
          quotation: null
          interpretation_note: null
          source:
            id: s_CrUodSAYP8bgb4mJTT77VB
            source_type: api_record
            title: 维基数据：王昌嗣（Q45659415）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659415
            external_identifier: Q45659415
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NyGB6dp9ex8FFuQW8UdJgP
        subject_person_id: p_KrQPoCtGgBA1JmWKQJxS4S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MnDiqNwWr2tdGy1C6WX8aV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_m7X1H8nbhgk6gRwYcL8p9v
          claim_id: c_NyGB6dp9ex8FFuQW8UdJgP
          source_id: s_hELwR14JcJR4bXoJDih8yb
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hELwR14JcJR4bXoJDih8yb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王檢（175433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175433&o=json
            external_identifier: CBDB:175433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.861Z
            metadata_json: null
        - id: cs_pyAJMqd7L9ZZ4Sc1J3a6g9
          claim_id: c_NyGB6dp9ex8FFuQW8UdJgP
          source_id: s_Sw97HPd7Fe46sQh4RLCNGi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Sw97HPd7Fe46sQh4RLCNGi
            source_type: api_record
            title: 维基数据：王检（Q45659357）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659357
            external_identifier: Q45659357
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_CXb2P93fFJV2QEJLAYT7vH
          claim_id: c_NyGB6dp9ex8FFuQW8UdJgP
          source_id: s_CrUodSAYP8bgb4mJTT77VB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CrUodSAYP8bgb4mJTT77VB
            source_type: api_record
            title: 维基数据：王昌嗣（Q45659415）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659415
            external_identifier: Q45659415
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_NLQ15MXhnVgE2KJC9K3FYN
          claim_id: c_NyGB6dp9ex8FFuQW8UdJgP
          source_id: s_qWCLM4GUM5Dc4TNLi13srp
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_qWCLM4GUM5Dc4TNLi13srp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昌嗣（175434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175434&o=json
            external_identifier: CBDB:175434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.519Z
            metadata_json: null
      object_person:
        id: p_KrQPoCtGgBA1JmWKQJxS4S
        status: active
        display_name: 王检
        merged_into_person_id: null
  children:
    - claim:
        id: c_3ohkV6B5EtXCrM73etTAAz
        subject_person_id: p_MnDiqNwWr2tdGy1C6WX8aV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_db3eW4vhes1H5LeCXo2cJW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FStthQXCBgdKPeAPLfdf63
          claim_id: c_3ohkV6B5EtXCrM73etTAAz
          source_id: s_qWCLM4GUM5Dc4TNLi13srp
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_qWCLM4GUM5Dc4TNLi13srp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昌嗣（175434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175434&o=json
            external_identifier: CBDB:175434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.519Z
            metadata_json: null
        - id: cs_n2b3NuT7gwNK6A5UgUbBAw
          claim_id: c_3ohkV6B5EtXCrM73etTAAz
          source_id: s_CrUodSAYP8bgb4mJTT77VB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CrUodSAYP8bgb4mJTT77VB
            source_type: api_record
            title: 维基数据：王昌嗣（Q45659415）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659415
            external_identifier: Q45659415
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_w6oBYC9pFtzABVmuHM26BX
          claim_id: c_3ohkV6B5EtXCrM73etTAAz
          source_id: s_uFByyJYWsPNmZD7dqow13Z
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uFByyJYWsPNmZD7dqow13Z
            source_type: api_record
            title: 维基数据：王给（Q45659475）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659475
            external_identifier: Q45659475
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.553Z
            metadata_json: null
        - id: cs_H6eo83WAZv87ryC3Z1wV6y
          claim_id: c_3ohkV6B5EtXCrM73etTAAz
          source_id: s_HL6wqhttEANPCMqo16KdpR
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HL6wqhttEANPCMqo16KdpR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王給（175435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175435&o=json
            external_identifier: CBDB:175435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:41.710Z
            metadata_json: null
      object_person:
        id: p_db3eW4vhes1H5LeCXo2cJW
        status: active
        display_name: 王给
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昌嗣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昌嗣（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175434 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 894年 | accepted |
| name.primary | 王昌嗣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KrQPoCtGgBA1JmWKQJxS4S | 王检 | accepted |
| children | p_db3eW4vhes1H5LeCXo2cJW | 王给 | accepted |

## 外部来源

- [维基数据：王昌嗣（Q45659415）](https://www.wikidata.org/wiki/Q45659415)
- [维基数据：王给（Q45659475）](https://www.wikidata.org/wiki/Q45659475)
- [维基数据：王检（Q45659357）](https://www.wikidata.org/wiki/Q45659357)
- [CBDB 中国历代人物传记资料库：王昌嗣（175434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175434&o=json)
- [CBDB 中国历代人物传记资料库：王給（175435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175435&o=json)
- [CBDB 中国历代人物传记资料库：王檢（175433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175433&o=json)
