---
schema: wang-person/v1
id: p_V58imM4qevLKTMUDbrBs11
status: active
merged_into: null
display_name: 王思晳
cbdb_id: 175395
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h2VxDwUjxoH7qzhQaqgXB9
        subject_person_id: p_V58imM4qevLKTMUDbrBs11
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思晳（卒于709年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任參軍。中国历代人物传记资料库（CBDB）以人物编号 175395 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_d9pcegtkK58LKN8Xnds2BM
          claim_id: c_h2VxDwUjxoH7qzhQaqgXB9
          source_id: s_s2FJxWe83KuLYs8DuheY2b
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_s2FJxWe83KuLYs8DuheY2b
            source_type: api_record
            title: 维基数据：王思晳（Q45657096）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657096
            external_identifier: Q45657096
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_oTTsIR15LafjivkZP8KBB6
          claim_id: c_h2VxDwUjxoH7qzhQaqgXB9
          source_id: s_3WPgNEFBUTB7C65GG9Pj3N
          stance: supports
          locator: CBDB:175395
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3WPgNEFBUTB7C65GG9Pj3N
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思晳（175395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175395&o=json
            external_identifier: CBDB:175395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.503Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_L3FHYGi7aRAmbimdW37BTZ
        subject_person_id: p_V58imM4qevLKTMUDbrBs11
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 709年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0709-01-01
            latest: 0709-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qxLbd42ZvVPfvP1GbFi81p
          claim_id: c_L3FHYGi7aRAmbimdW37BTZ
          source_id: s_s2FJxWe83KuLYs8DuheY2b
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_s2FJxWe83KuLYs8DuheY2b
            source_type: api_record
            title: 维基数据：王思晳（Q45657096）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657096
            external_identifier: Q45657096
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TsWkjNnJ9MNNH1oD8EPQzS
        subject_person_id: p_V58imM4qevLKTMUDbrBs11
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思晳
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_66PjnWBPH92qG2mUeYXuWT
          claim_id: c_TsWkjNnJ9MNNH1oD8EPQzS
          source_id: s_3WPgNEFBUTB7C65GG9Pj3N
          stance: supports
          locator: Q45657096
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Dv1vxPKBZrmrADK428SjKL
          claim_id: c_TsWkjNnJ9MNNH1oD8EPQzS
          source_id: s_s2FJxWe83KuLYs8DuheY2b
          stance: supports
          locator: Q45657096
          quotation: null
          interpretation_note: null
          source:
            id: s_s2FJxWe83KuLYs8DuheY2b
            source_type: api_record
            title: 维基数据：王思晳（Q45657096）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657096
            external_identifier: Q45657096
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DfWVNzTe1nxPXiSquk8mqU
        subject_person_id: p_AEv4UjMqpkRwJJqLF35aN2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V58imM4qevLKTMUDbrBs11
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_56QmMC7wLdr5LFmL3he7H5
          claim_id: c_DfWVNzTe1nxPXiSquk8mqU
          source_id: s_e6fiAQEt58PZCsMB1pLE8o
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_e6fiAQEt58PZCsMB1pLE8o
            source_type: api_record
            title: 维基数据：王缄（Q18905540）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905540
            external_identifier: Q18905540
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:19.422Z
            metadata_json: null
        - id: cs_uUkPaC85MkB9FPQDjhriAn
          claim_id: c_DfWVNzTe1nxPXiSquk8mqU
          source_id: s_uWEf33jcQqdtcyHZ72ihPi
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_uWEf33jcQqdtcyHZ72ihPi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王緘（175394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175394&o=json
            external_identifier: CBDB:175394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:19.711Z
            metadata_json: null
        - id: cs_AwMErfaQQqn4Ek4WoM8L7V
          claim_id: c_DfWVNzTe1nxPXiSquk8mqU
          source_id: s_s2FJxWe83KuLYs8DuheY2b
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_s2FJxWe83KuLYs8DuheY2b
            source_type: api_record
            title: 维基数据：王思晳（Q45657096）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657096
            external_identifier: Q45657096
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_jVP7CkQ5faGtuDPcsJu7Wd
          claim_id: c_DfWVNzTe1nxPXiSquk8mqU
          source_id: s_3WPgNEFBUTB7C65GG9Pj3N
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3WPgNEFBUTB7C65GG9Pj3N
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思晳（175395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175395&o=json
            external_identifier: CBDB:175395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.503Z
            metadata_json: null
      object_person:
        id: p_AEv4UjMqpkRwJJqLF35aN2
        status: active
        display_name: 王缄
        merged_into_person_id: null
  children:
    - claim:
        id: c_A6iHKM78q2naGQYxV29Csm
        subject_person_id: p_V58imM4qevLKTMUDbrBs11
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nardzs9nnVJrpD2H4EMLRj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_48sjKX7GhZAknVA5D94EZG
          claim_id: c_A6iHKM78q2naGQYxV29Csm
          source_id: s_s2FJxWe83KuLYs8DuheY2b
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_s2FJxWe83KuLYs8DuheY2b
            source_type: api_record
            title: 维基数据：王思晳（Q45657096）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657096
            external_identifier: Q45657096
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_nhGVwrbCRgMh67L8RfYQQh
          claim_id: c_A6iHKM78q2naGQYxV29Csm
          source_id: s_3WPgNEFBUTB7C65GG9Pj3N
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3WPgNEFBUTB7C65GG9Pj3N
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思晳（175395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175395&o=json
            external_identifier: CBDB:175395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.503Z
            metadata_json: null
        - id: cs_1Vc14ygJBsv6WmmBtBC8jT
          claim_id: c_A6iHKM78q2naGQYxV29Csm
          source_id: s_8BrT1avwgDi9xUtr8ARAMt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8BrT1avwgDi9xUtr8ARAMt
            source_type: api_record
            title: 维基数据：王㧑（Q45657154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657154
            external_identifier: Q45657154
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:53.808Z
            metadata_json: null
        - id: cs_KX2xF3LVxq85REimcxo7gb
          claim_id: c_A6iHKM78q2naGQYxV29Csm
          source_id: s_aenUCWRhJC4EK8VjfYHD5K
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_aenUCWRhJC4EK8VjfYHD5K
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王撝（175396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175396&o=json
            external_identifier: CBDB:175396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:53.951Z
            metadata_json: null
      object_person:
        id: p_Nardzs9nnVJrpD2H4EMLRj
        status: active
        display_name: 王㧑
        merged_into_person_id: null
    - claim:
        id: c_CPnP6wxbwaaEuQ2u8d7ASp
        subject_person_id: p_V58imM4qevLKTMUDbrBs11
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FFD2jVFYVbhsYAshL1DhPS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_kPSwCNbHPKcmjo8ZDT316a
          claim_id: c_CPnP6wxbwaaEuQ2u8d7ASp
          source_id: s_s2FJxWe83KuLYs8DuheY2b
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_s2FJxWe83KuLYs8DuheY2b
            source_type: api_record
            title: 维基数据：王思晳（Q45657096）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657096
            external_identifier: Q45657096
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_zYdguymW7YX87gFEHMC1vE
          claim_id: c_CPnP6wxbwaaEuQ2u8d7ASp
          source_id: s_3WPgNEFBUTB7C65GG9Pj3N
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3WPgNEFBUTB7C65GG9Pj3N
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思晳（175395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175395&o=json
            external_identifier: CBDB:175395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.503Z
            metadata_json: null
        - id: cs_fVMPGDpRdAa2i5CDeyZLwc
          claim_id: c_CPnP6wxbwaaEuQ2u8d7ASp
          source_id: s_z7226Pa3uynT3owB8yDoGh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_z7226Pa3uynT3owB8yDoGh
            source_type: api_record
            title: 维基数据：王擢（Q45657213）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657213
            external_identifier: Q45657213
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:55.642Z
            metadata_json: null
        - id: cs_k8p4CnMS1LBJGHyTbqd5k5
          claim_id: c_CPnP6wxbwaaEuQ2u8d7ASp
          source_id: s_bFz3h1cb5eZbtyoVRSmjFJ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_bFz3h1cb5eZbtyoVRSmjFJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王擢（175397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175397&o=json
            external_identifier: CBDB:175397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:55.782Z
            metadata_json: null
      object_person:
        id: p_FFD2jVFYVbhsYAshL1DhPS
        status: active
        display_name: 王擢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思晳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王思晳（卒于709年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任參軍。中国历代人物传记资料库（CBDB）以人物编号 175395 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 709年 | accepted |
| name.primary | 王思晳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AEv4UjMqpkRwJJqLF35aN2 | 王缄 | accepted |
| children | p_Nardzs9nnVJrpD2H4EMLRj | 王㧑 | accepted |
| children | p_FFD2jVFYVbhsYAshL1DhPS | 王擢 | accepted |

## 外部来源

- [维基数据：王㧑（Q45657154）](https://www.wikidata.org/wiki/Q45657154)
- [维基数据：王缄（Q18905540）](https://www.wikidata.org/wiki/Q18905540)
- [维基数据：王思晳（Q45657096）](https://www.wikidata.org/wiki/Q45657096)
- [维基数据：王擢（Q45657213）](https://www.wikidata.org/wiki/Q45657213)
- [CBDB 中国历代人物传记资料库：王撝（175396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175396&o=json)
- [CBDB 中国历代人物传记资料库：王緘（175394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175394&o=json)
- [CBDB 中国历代人物传记资料库：王思晳（175395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175395&o=json)
- [CBDB 中国历代人物传记资料库：王擢（175397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175397&o=json)
