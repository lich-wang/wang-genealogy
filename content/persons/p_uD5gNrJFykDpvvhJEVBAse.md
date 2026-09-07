---
schema: wang-person/v1
id: p_uD5gNrJFykDpvvhJEVBAse
status: active
merged_into: null
display_name: 王马老
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3khS6rMoUnufFfFhw3wi9B
        subject_person_id: p_uD5gNrJFykDpvvhJEVBAse
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王马老（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175406 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MFF9FLNrqPeWTjWpc2v11W
          claim_id: c_3khS6rMoUnufFfFhw3wi9B
          source_id: s_DxAT5b4ztvnb2qMT2ywcMm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_DxAT5b4ztvnb2qMT2ywcMm
            source_type: api_record
            title: 维基数据：王马老（Q45657750）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657750
            external_identifier: Q45657750
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.117Z
            metadata_json: null
        - id: cs_QxeTZ-hlMo7sBTZ3eImvMz
          claim_id: c_3khS6rMoUnufFfFhw3wi9B
          source_id: s_J3r1moq2qQNTquvsNvdFar
          stance: supports
          locator: CBDB:175406
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_J3r1moq2qQNTquvsNvdFar
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王馬老（175406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175406&o=json
            external_identifier: CBDB:175406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.401Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FuQXKgZRUad3SrWHKBP9q3
        subject_person_id: p_uD5gNrJFykDpvvhJEVBAse
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
        - id: cs_nFZNGaDNcZoZMTBs6Q1ZdL
          claim_id: c_FuQXKgZRUad3SrWHKBP9q3
          source_id: s_DxAT5b4ztvnb2qMT2ywcMm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_DxAT5b4ztvnb2qMT2ywcMm
            source_type: api_record
            title: 维基数据：王马老（Q45657750）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657750
            external_identifier: Q45657750
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.117Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2G1b6CPaWRd7MuD7we2PzP
        subject_person_id: p_uD5gNrJFykDpvvhJEVBAse
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王马老
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FhBEKL2PjZVbAGKccYTYaA
          claim_id: c_2G1b6CPaWRd7MuD7we2PzP
          source_id: s_J3r1moq2qQNTquvsNvdFar
          stance: supports
          locator: Q45657750
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_tpYXBUJey8QqCtUZ3qNCd8
          claim_id: c_2G1b6CPaWRd7MuD7we2PzP
          source_id: s_DxAT5b4ztvnb2qMT2ywcMm
          stance: supports
          locator: Q45657750
          quotation: null
          interpretation_note: null
          source:
            id: s_DxAT5b4ztvnb2qMT2ywcMm
            source_type: api_record
            title: 维基数据：王马老（Q45657750）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657750
            external_identifier: Q45657750
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.117Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K942xe2YVNsLLJbXGQRzMD
        subject_person_id: p_cZBud2fMcDR6rn4NqeNQf3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uD5gNrJFykDpvvhJEVBAse
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NXHt48SU4jTYwhAithQbYa
          claim_id: c_K942xe2YVNsLLJbXGQRzMD
          source_id: s_wppNwAcNRHuUX9Wdo6H1RQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wppNwAcNRHuUX9Wdo6H1RQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銓（175404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175404&o=json
            external_identifier: CBDB:175404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.211Z
            metadata_json: null
        - id: cs_sLo4P3nNbxJ75Y5Ty5W3Dv
          claim_id: c_K942xe2YVNsLLJbXGQRzMD
          source_id: s_gxC4334CKRU2fVv2oRotcA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_gxC4334CKRU2fVv2oRotcA
            source_type: api_record
            title: 维基数据：王铨（Q45657634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657634
            external_identifier: Q45657634
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_pdZddVz8FMB3mQrQPwL6SD
          claim_id: c_K942xe2YVNsLLJbXGQRzMD
          source_id: s_DxAT5b4ztvnb2qMT2ywcMm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_DxAT5b4ztvnb2qMT2ywcMm
            source_type: api_record
            title: 维基数据：王马老（Q45657750）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657750
            external_identifier: Q45657750
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.117Z
            metadata_json: null
        - id: cs_EoyoU8oJUsr8c92FE9KfZt
          claim_id: c_K942xe2YVNsLLJbXGQRzMD
          source_id: s_J3r1moq2qQNTquvsNvdFar
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_J3r1moq2qQNTquvsNvdFar
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王馬老（175406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175406&o=json
            external_identifier: CBDB:175406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.401Z
            metadata_json: null
      object_person:
        id: p_cZBud2fMcDR6rn4NqeNQf3
        status: active
        display_name: 王铨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王马老

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王马老（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175406 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 894年 | accepted |
| name.primary | 王马老 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cZBud2fMcDR6rn4NqeNQf3 | 王铨 | accepted |

## 外部来源

- [维基数据：王马老（Q45657750）](https://www.wikidata.org/wiki/Q45657750)
- [维基数据：王铨（Q45657634）](https://www.wikidata.org/wiki/Q45657634)
- [CBDB 中国历代人物传记资料库：王馬老（175406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175406&o=json)
- [CBDB 中国历代人物传记资料库：王銓（175404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175404&o=json)
