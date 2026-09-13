---
schema: wang-person/v1
id: p_PaPNy2CS1q35QC2Tb2fFrA
status: active
merged_into: null
display_name: 王遂
cbdb_id: 175460
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k5rVnj6EzZt8hUpe1kQsyN
        subject_person_id: p_PaPNy2CS1q35QC2Tb2fFrA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遂（卒于819年），唐人物。籍贯咸陽，曾任州刺史。（中国历代人物传记资料库 CBDB 175460）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_1agp4ssgf45ZVV99WZ6N9X
          claim_id: c_k5rVnj6EzZt8hUpe1kQsyN
          source_id: s_2uFdoRoReYQS7WAxSUSUJc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_2uFdoRoReYQS7WAxSUSUJc
            source_type: api_record
            title: 维基数据：王遂（Q45660969）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660969
            external_identifier: Q45660969
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
        - id: cs_g0AAlUEX8HE66EO-PsisX6
          claim_id: c_k5rVnj6EzZt8hUpe1kQsyN
          source_id: s_8RzFPkq3MCvhVXbSSNa4Cn
          stance: supports
          locator: CBDB:175460
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8RzFPkq3MCvhVXbSSNa4Cn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王遂（175460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175460&o=json
            external_identifier: CBDB:175460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.584Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CZoRhC6MvwV5THCa5z35kg
        subject_person_id: p_PaPNy2CS1q35QC2Tb2fFrA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 819年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0819-01-01
            latest: 0819-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EBJsnQae4i19LDGnuAiEtD
          claim_id: c_CZoRhC6MvwV5THCa5z35kg
          source_id: s_2uFdoRoReYQS7WAxSUSUJc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_2uFdoRoReYQS7WAxSUSUJc
            source_type: api_record
            title: 维基数据：王遂（Q45660969）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660969
            external_identifier: Q45660969
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FvBtkzbSKG1R1jQPi1gGxS
        subject_person_id: p_PaPNy2CS1q35QC2Tb2fFrA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PEnjrJ4y7YrSCv7CKSHve5
          claim_id: c_FvBtkzbSKG1R1jQPi1gGxS
          source_id: s_8RzFPkq3MCvhVXbSSNa4Cn
          stance: supports
          locator: Q45660969
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Sz69D3gayU7yncnk8DPAYS
          claim_id: c_FvBtkzbSKG1R1jQPi1gGxS
          source_id: s_2uFdoRoReYQS7WAxSUSUJc
          stance: supports
          locator: Q45660969
          quotation: null
          interpretation_note: null
          source:
            id: s_2uFdoRoReYQS7WAxSUSUJc
            source_type: api_record
            title: 维基数据：王遂（Q45660969）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660969
            external_identifier: Q45660969
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HjVGLpJpXTXCjqYxsEivGd
        subject_person_id: p_Mfx73EGxmx5Kei6PX1Dz5V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PaPNy2CS1q35QC2Tb2fFrA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_G1mak9Wb1jFVPHDmLB2DU5
          claim_id: c_HjVGLpJpXTXCjqYxsEivGd
          source_id: s_xEU7qamzNzH2Kqf76LHwey
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_xEU7qamzNzH2Kqf76LHwey
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濡（175454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175454&o=json
            external_identifier: CBDB:175454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.078Z
            metadata_json: null
        - id: cs_JAJA3ai5jzJFGfJKFV68Bu
          claim_id: c_HjVGLpJpXTXCjqYxsEivGd
          source_id: s_dP8YP9TivMwdEJ8gu57v3K
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_dP8YP9TivMwdEJ8gu57v3K
            source_type: api_record
            title: 维基数据：王濡（Q45660609）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660609
            external_identifier: Q45660609
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.917Z
            metadata_json: null
        - id: cs_9V3tvA5FH2hWCMZ9DTKQjf
          claim_id: c_HjVGLpJpXTXCjqYxsEivGd
          source_id: s_2uFdoRoReYQS7WAxSUSUJc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_2uFdoRoReYQS7WAxSUSUJc
            source_type: api_record
            title: 维基数据：王遂（Q45660969）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660969
            external_identifier: Q45660969
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
        - id: cs_awP1BWNsg4yN53c4yaNMEn
          claim_id: c_HjVGLpJpXTXCjqYxsEivGd
          source_id: s_8RzFPkq3MCvhVXbSSNa4Cn
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8RzFPkq3MCvhVXbSSNa4Cn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王遂（175460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175460&o=json
            external_identifier: CBDB:175460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.584Z
            metadata_json: null
      object_person:
        id: p_Mfx73EGxmx5Kei6PX1Dz5V
        status: active
        display_name: 王濡
        merged_into_person_id: null
  children:
    - claim:
        id: c_4KaokBBm4M4AoFiQz2J8Ao
        subject_person_id: p_PaPNy2CS1q35QC2Tb2fFrA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5p71LDupxSiT4UNxVpx8U7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7ipb2C1pK5dUroFvLsMK1v
          claim_id: c_4KaokBBm4M4AoFiQz2J8Ao
          source_id: s_2uFdoRoReYQS7WAxSUSUJc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_2uFdoRoReYQS7WAxSUSUJc
            source_type: api_record
            title: 维基数据：王遂（Q45660969）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660969
            external_identifier: Q45660969
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
        - id: cs_cUqsx9ZEebLEk2jvUxvE65
          claim_id: c_4KaokBBm4M4AoFiQz2J8Ao
          source_id: s_8RzFPkq3MCvhVXbSSNa4Cn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8RzFPkq3MCvhVXbSSNa4Cn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王遂（175460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175460&o=json
            external_identifier: CBDB:175460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.584Z
            metadata_json: null
        - id: cs_T9tcK6RaEm3duCzFHSmEt5
          claim_id: c_4KaokBBm4M4AoFiQz2J8Ao
          source_id: s_1LDwp3ZAxmceauV1ZhCEmi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1LDwp3ZAxmceauV1ZhCEmi
            source_type: api_record
            title: 维基数据：王新丰（Q45661028）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661028
            external_identifier: Q45661028
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_dJ1H1ngjk4GNH49b8Fb1yU
          claim_id: c_4KaokBBm4M4AoFiQz2J8Ao
          source_id: s_NUC9CC1jrcEw7fuJwi6kfG
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_NUC9CC1jrcEw7fuJwi6kfG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王新豐（175461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175461&o=json
            external_identifier: CBDB:175461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.647Z
            metadata_json: null
      object_person:
        id: p_5p71LDupxSiT4UNxVpx8U7
        status: active
        display_name: 王新丰
        merged_into_person_id: null
    - claim:
        id: c_XBh6PyATEp5GrJiBDMa8PY
        subject_person_id: p_PaPNy2CS1q35QC2Tb2fFrA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NAMvYyCF9R4kNfLKReVsEZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fC11P7DgNsZTMzdnodHbAD
          claim_id: c_XBh6PyATEp5GrJiBDMa8PY
          source_id: s_8RzFPkq3MCvhVXbSSNa4Cn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8RzFPkq3MCvhVXbSSNa4Cn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王遂（175460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175460&o=json
            external_identifier: CBDB:175460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.584Z
            metadata_json: null
        - id: cs_vZDtXVkGhVXzesrZpSNC1W
          claim_id: c_XBh6PyATEp5GrJiBDMa8PY
          source_id: s_2uFdoRoReYQS7WAxSUSUJc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_2uFdoRoReYQS7WAxSUSUJc
            source_type: api_record
            title: 维基数据：王遂（Q45660969）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660969
            external_identifier: Q45660969
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
        - id: cs_vJzMAx77NKNwht4TbAUrEy
          claim_id: c_XBh6PyATEp5GrJiBDMa8PY
          source_id: s_CcAua5FQ8AZufoBSCNLpvw
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CcAua5FQ8AZufoBSCNLpvw
            source_type: api_record
            title: 维基数据：王果（Q45661087）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661087
            external_identifier: Q45661087
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_G5LqcAFL7pai5RTzMRMc3y
          claim_id: c_XBh6PyATEp5GrJiBDMa8PY
          source_id: s_aibNPoLFSFXRGk4JF9KqP4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_aibNPoLFSFXRGk4JF9KqP4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王果（175462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175462&o=json
            external_identifier: CBDB:175462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.637Z
            metadata_json: null
      object_person:
        id: p_NAMvYyCF9R4kNfLKReVsEZ
        status: active
        display_name: 王果
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遂（卒于819年），唐人物。籍贯咸陽，曾任州刺史。（中国历代人物传记资料库 CBDB 175460） | accepted |
| death.date | 819年 | accepted |
| name.primary | 王遂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Mfx73EGxmx5Kei6PX1Dz5V | 王濡 | accepted |
| children | p_5p71LDupxSiT4UNxVpx8U7 | 王新丰 | accepted |
| children | p_NAMvYyCF9R4kNfLKReVsEZ | 王果 | accepted |

## 外部来源

- [维基数据：王果（Q45661087）](https://www.wikidata.org/wiki/Q45661087)
- [维基数据：王濡（Q45660609）](https://www.wikidata.org/wiki/Q45660609)
- [维基数据：王遂（Q45660969）](https://www.wikidata.org/wiki/Q45660969)
- [维基数据：王新丰（Q45661028）](https://www.wikidata.org/wiki/Q45661028)
- [CBDB 中国历代人物传记资料库：王果（175462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175462&o=json)
- [CBDB 中国历代人物传记资料库：王濡（175454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175454&o=json)
- [CBDB 中国历代人物传记资料库：王遂（175460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175460&o=json)
- [CBDB 中国历代人物传记资料库：王新豐（175461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175461&o=json)
