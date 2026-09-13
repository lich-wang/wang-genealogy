---
schema: wang-person/v1
id: p_cHtNMDSwmNv3KVwwrUz5on
status: active
merged_into: null
display_name: 王佺
cbdb_id: 175616
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vzvFYa8gmfYC2aqzVZbVQY
        subject_person_id: p_cHtNMDSwmNv3KVwwrUz5on
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佺（卒于746年），唐人物。籍贯咸陽，曾任令。（中国历代人物传记资料库 CBDB 175616）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_BxWse6TJdh81SyFtvRBksu
          claim_id: c_vzvFYa8gmfYC2aqzVZbVQY
          source_id: s_vJMAPG2rgpEXX3nmUaohGB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vJMAPG2rgpEXX3nmUaohGB
            source_type: api_record
            title: 维基数据：王佺（Q45669354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669354
            external_identifier: Q45669354
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.038Z
            metadata_json: null
        - id: cs_LvHKDlt4wzfRr65urB6D5G
          claim_id: c_vzvFYa8gmfYC2aqzVZbVQY
          source_id: s_o8AiVFYZcp8SHbnWq7bpz4
          stance: supports
          locator: CBDB:175616
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_o8AiVFYZcp8SHbnWq7bpz4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佺（175616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175616&o=json
            external_identifier: CBDB:175616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.217Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7WeTxnur9zHNrZ6z3pTT9v
        subject_person_id: p_cHtNMDSwmNv3KVwwrUz5on
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 746年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0746-01-01
            latest: 0746-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bM37QMh1TMp26aGn4NWqXx
          claim_id: c_7WeTxnur9zHNrZ6z3pTT9v
          source_id: s_vJMAPG2rgpEXX3nmUaohGB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vJMAPG2rgpEXX3nmUaohGB
            source_type: api_record
            title: 维基数据：王佺（Q45669354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669354
            external_identifier: Q45669354
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.038Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6K3WnoLTSnyAS4FVyohyUN
        subject_person_id: p_cHtNMDSwmNv3KVwwrUz5on
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佺
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5s5xrF8XY74knH7HZ4FH3r
          claim_id: c_6K3WnoLTSnyAS4FVyohyUN
          source_id: s_vJMAPG2rgpEXX3nmUaohGB
          stance: supports
          locator: Q45669354
          quotation: null
          interpretation_note: null
          source:
            id: s_vJMAPG2rgpEXX3nmUaohGB
            source_type: api_record
            title: 维基数据：王佺（Q45669354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669354
            external_identifier: Q45669354
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.038Z
            metadata_json: null
        - id: cs_ePA2Rf251uh83mDfNv8Kkx
          claim_id: c_6K3WnoLTSnyAS4FVyohyUN
          source_id: s_o8AiVFYZcp8SHbnWq7bpz4
          stance: supports
          locator: Q45669354
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qJGg8TFZB3zK85xbRswmbJ
        subject_person_id: p_B9cesCgD7mqBrmZ8ukgb39
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cHtNMDSwmNv3KVwwrUz5on
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ldvi5XkvYtD4cWAU99UhAE
          claim_id: c_qJGg8TFZB3zK85xbRswmbJ
          source_id: s_EHCAqKCwCRdaE933qgr38h
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_EHCAqKCwCRdaE933qgr38h
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暐（175615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175615&o=json
            external_identifier: CBDB:175615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.863Z
            metadata_json: null
        - id: cs_dCEbBV6Y1NDFN8wfUWbvPr
          claim_id: c_qJGg8TFZB3zK85xbRswmbJ
          source_id: s_9DUNPSybp79wPKVDVb9GAw
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9DUNPSybp79wPKVDVb9GAw
            source_type: api_record
            title: 维基数据：王𬀩（Q45669308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669308
            external_identifier: Q45669308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_KTBDLY4viQhcbykGoeBprV
          claim_id: c_qJGg8TFZB3zK85xbRswmbJ
          source_id: s_vJMAPG2rgpEXX3nmUaohGB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vJMAPG2rgpEXX3nmUaohGB
            source_type: api_record
            title: 维基数据：王佺（Q45669354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669354
            external_identifier: Q45669354
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.038Z
            metadata_json: null
        - id: cs_9MnNrz2Hk5158Bdn6kfBQQ
          claim_id: c_qJGg8TFZB3zK85xbRswmbJ
          source_id: s_o8AiVFYZcp8SHbnWq7bpz4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_o8AiVFYZcp8SHbnWq7bpz4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佺（175616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175616&o=json
            external_identifier: CBDB:175616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.217Z
            metadata_json: null
      object_person:
        id: p_B9cesCgD7mqBrmZ8ukgb39
        status: active
        display_name: 王𬀩
        merged_into_person_id: null
  children:
    - claim:
        id: c_6kJTcadjV8x5G722hNjcqf
        subject_person_id: p_cHtNMDSwmNv3KVwwrUz5on
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_33KokniZL21s1thwAaox5M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_EnLbifiPEzF1WeCQ1WMnfA
          claim_id: c_6kJTcadjV8x5G722hNjcqf
          source_id: s_vJMAPG2rgpEXX3nmUaohGB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vJMAPG2rgpEXX3nmUaohGB
            source_type: api_record
            title: 维基数据：王佺（Q45669354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669354
            external_identifier: Q45669354
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.038Z
            metadata_json: null
        - id: cs_GJtsbrXu5EXVR2ja8RFQGm
          claim_id: c_6kJTcadjV8x5G722hNjcqf
          source_id: s_o8AiVFYZcp8SHbnWq7bpz4
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_o8AiVFYZcp8SHbnWq7bpz4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佺（175616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175616&o=json
            external_identifier: CBDB:175616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.217Z
            metadata_json: null
        - id: cs_hZVqBB6BbR2nL646sXFdW9
          claim_id: c_6kJTcadjV8x5G722hNjcqf
          source_id: s_m5BPSZX3Gs1WTn7X9usBWq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_m5BPSZX3Gs1WTn7X9usBWq
            source_type: api_record
            title: 维基数据：王和及（Q45669401）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669401
            external_identifier: Q45669401
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_FT3pJh91hwh5auey9Swufs
          claim_id: c_6kJTcadjV8x5G722hNjcqf
          source_id: s_wERXsoni44ApD73ugMJToC
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wERXsoni44ApD73ugMJToC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和及（175617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175617&o=json
            external_identifier: CBDB:175617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.528Z
            metadata_json: null
      object_person:
        id: p_33KokniZL21s1thwAaox5M
        status: active
        display_name: 王和及
        merged_into_person_id: null
    - claim:
        id: c_ea9NhZeSWP9Hu3M875EH8i
        subject_person_id: p_cHtNMDSwmNv3KVwwrUz5on
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_23foehJQLDEs5RDFCrfjor
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2nQE9JwjySRLDKmrVf2iBD
          claim_id: c_ea9NhZeSWP9Hu3M875EH8i
          source_id: s_o8AiVFYZcp8SHbnWq7bpz4
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_o8AiVFYZcp8SHbnWq7bpz4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佺（175616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175616&o=json
            external_identifier: CBDB:175616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.217Z
            metadata_json: null
        - id: cs_7iBKxPxhXjW3J6q56BEKPN
          claim_id: c_ea9NhZeSWP9Hu3M875EH8i
          source_id: s_vJMAPG2rgpEXX3nmUaohGB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vJMAPG2rgpEXX3nmUaohGB
            source_type: api_record
            title: 维基数据：王佺（Q45669354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669354
            external_identifier: Q45669354
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.038Z
            metadata_json: null
        - id: cs_z4q8ySWE7UEubdt1n7qjDJ
          claim_id: c_ea9NhZeSWP9Hu3M875EH8i
          source_id: s_vqrPHSCb5pHgvC2azHnXzg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vqrPHSCb5pHgvC2azHnXzg
            source_type: api_record
            title: 维基数据：王和友（Q45669592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669592
            external_identifier: Q45669592
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_PXFMXSJkD6arDKPsvEutGF
          claim_id: c_ea9NhZeSWP9Hu3M875EH8i
          source_id: s_7LD1gMiGQkjeJwpT5zAGPD
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7LD1gMiGQkjeJwpT5zAGPD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和友（175621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json
            external_identifier: CBDB:175621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.517Z
            metadata_json: null
      object_person:
        id: p_23foehJQLDEs5RDFCrfjor
        status: active
        display_name: 王和友
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王佺（卒于746年），唐人物。籍贯咸陽，曾任令。（中国历代人物传记资料库 CBDB 175616） | accepted |
| death.date | 746年 | accepted |
| name.primary | 王佺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B9cesCgD7mqBrmZ8ukgb39 | 王𬀩 | accepted |
| children | p_33KokniZL21s1thwAaox5M | 王和及 | accepted |
| children | p_23foehJQLDEs5RDFCrfjor | 王和友 | accepted |

## 外部来源

- [维基数据：王和及（Q45669401）](https://www.wikidata.org/wiki/Q45669401)
- [维基数据：王和友（Q45669592）](https://www.wikidata.org/wiki/Q45669592)
- [维基数据：王佺（Q45669354）](https://www.wikidata.org/wiki/Q45669354)
- [维基数据：王𬀩（Q45669308）](https://www.wikidata.org/wiki/Q45669308)
- [CBDB 中国历代人物传记资料库：王和及（175617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175617&o=json)
- [CBDB 中国历代人物传记资料库：王和友（175621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json)
- [CBDB 中国历代人物传记资料库：王佺（175616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175616&o=json)
- [CBDB 中国历代人物传记资料库：王暐（175615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175615&o=json)
