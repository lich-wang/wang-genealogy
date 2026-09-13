---
schema: wang-person/v1
id: p_pSBMj38n59vtLbkzXg38QC
status: active
merged_into: null
display_name: 王仪
cbdb_id: 175610
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9K87FsaxNJTrFEBssjRiJb
        subject_person_id: p_pSBMj38n59vtLbkzXg38QC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仪（卒于746年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175610）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_kdX9C3guFGjEUqJsioWJM6
          claim_id: c_9K87FsaxNJTrFEBssjRiJb
          source_id: s_pbGMgAhEoF3Uqim1SYxEHr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_pbGMgAhEoF3Uqim1SYxEHr
            source_type: api_record
            title: 维基数据：王仪（Q45669071）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669071
            external_identifier: Q45669071
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_LdOTw8NEyAF3BJHosTZUjg
          claim_id: c_9K87FsaxNJTrFEBssjRiJb
          source_id: s_HUS35mPqiHq1CT8qL5BQDW
          stance: supports
          locator: CBDB:175610
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HUS35mPqiHq1CT8qL5BQDW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王儀（175610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175610&o=json
            external_identifier: CBDB:175610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.333Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qKEA6qmgUfybrNtLpMDeGL
        subject_person_id: p_pSBMj38n59vtLbkzXg38QC
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
        - id: cs_42H8K8LJCj96z4C1TyfqZE
          claim_id: c_qKEA6qmgUfybrNtLpMDeGL
          source_id: s_pbGMgAhEoF3Uqim1SYxEHr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_pbGMgAhEoF3Uqim1SYxEHr
            source_type: api_record
            title: 维基数据：王仪（Q45669071）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669071
            external_identifier: Q45669071
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NEaM4WcgV4Crn7CF2QMi8G
        subject_person_id: p_pSBMj38n59vtLbkzXg38QC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仪
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_782tr4us5BsgaSJdS27GpC
          claim_id: c_NEaM4WcgV4Crn7CF2QMi8G
          source_id: s_HUS35mPqiHq1CT8qL5BQDW
          stance: supports
          locator: Q45669071
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_phxPA1htsHd2mFHDc3SM6E
          claim_id: c_NEaM4WcgV4Crn7CF2QMi8G
          source_id: s_pbGMgAhEoF3Uqim1SYxEHr
          stance: supports
          locator: Q45669071
          quotation: null
          interpretation_note: null
          source:
            id: s_pbGMgAhEoF3Uqim1SYxEHr
            source_type: api_record
            title: 维基数据：王仪（Q45669071）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669071
            external_identifier: Q45669071
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TYAfPSqrEShsWCknNuLLY9
        subject_person_id: p_zKiyG8Et428Qshx93cGmXx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pSBMj38n59vtLbkzXg38QC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_57j4rGhQVdQr4pRtytLyiz
          claim_id: c_TYAfPSqrEShsWCknNuLLY9
          source_id: s_LzjmjT3XXrsixH4sLE4GU9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_LzjmjT3XXrsixH4sLE4GU9
            source_type: api_record
            title: 维基数据：王暟（Q45668621）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668621
            external_identifier: Q45668621
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_oAmvQ38XyHJuhA5mDCrDZ8
          claim_id: c_TYAfPSqrEShsWCknNuLLY9
          source_id: s_3hPKehA9c7h47aCnSDEotF
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3hPKehA9c7h47aCnSDEotF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暟（175601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175601&o=json
            external_identifier: CBDB:175601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:37.992Z
            metadata_json: null
        - id: cs_YLvqKSLq4ULKnqeHJ1o5fb
          claim_id: c_TYAfPSqrEShsWCknNuLLY9
          source_id: s_pbGMgAhEoF3Uqim1SYxEHr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pbGMgAhEoF3Uqim1SYxEHr
            source_type: api_record
            title: 维基数据：王仪（Q45669071）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669071
            external_identifier: Q45669071
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_gv6Me2cHCSA8rLLwBrvft8
          claim_id: c_TYAfPSqrEShsWCknNuLLY9
          source_id: s_HUS35mPqiHq1CT8qL5BQDW
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HUS35mPqiHq1CT8qL5BQDW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王儀（175610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175610&o=json
            external_identifier: CBDB:175610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.333Z
            metadata_json: null
      object_person:
        id: p_zKiyG8Et428Qshx93cGmXx
        status: active
        display_name: 王暟
        merged_into_person_id: null
  children:
    - claim:
        id: c_h3vKq9RWN3aKUn7WPo9XhK
        subject_person_id: p_pSBMj38n59vtLbkzXg38QC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sWwSh6sCgmnFiT4vB8NsXR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_EP9P6rwUs6bbF1GL1Wf48a
          claim_id: c_h3vKq9RWN3aKUn7WPo9XhK
          source_id: s_pbGMgAhEoF3Uqim1SYxEHr
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_pbGMgAhEoF3Uqim1SYxEHr
            source_type: api_record
            title: 维基数据：王仪（Q45669071）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669071
            external_identifier: Q45669071
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_dS9543R5BmJN4e3fnhCMyV
          claim_id: c_h3vKq9RWN3aKUn7WPo9XhK
          source_id: s_HUS35mPqiHq1CT8qL5BQDW
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HUS35mPqiHq1CT8qL5BQDW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王儀（175610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175610&o=json
            external_identifier: CBDB:175610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.333Z
            metadata_json: null
        - id: cs_PGogMGuJUxMAMzrFTE1E6p
          claim_id: c_h3vKq9RWN3aKUn7WPo9XhK
          source_id: s_rKaSEN8T2fskn5NzW11Dej
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_rKaSEN8T2fskn5NzW11Dej
            source_type: api_record
            title: 维基数据：王滟（Q45669120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669120
            external_identifier: Q45669120
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_FAvGbAHqymMBr8L5aACXWe
          claim_id: c_h3vKq9RWN3aKUn7WPo9XhK
          source_id: s_Bi96TrqhugeD3d9uWRwAXg
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Bi96TrqhugeD3d9uWRwAXg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王灩（175611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175611&o=json
            external_identifier: CBDB:175611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.521Z
            metadata_json: null
      object_person:
        id: p_sWwSh6sCgmnFiT4vB8NsXR
        status: active
        display_name: 王滟
        merged_into_person_id: null
    - claim:
        id: c_J5VE7boY4iDRtaRskGiKpz
        subject_person_id: p_pSBMj38n59vtLbkzXg38QC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GNsomPm1f6b7ukH3PC8R7M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5mhLtdNSy2FL8Qnp4FVsDK
          claim_id: c_J5VE7boY4iDRtaRskGiKpz
          source_id: s_pbGMgAhEoF3Uqim1SYxEHr
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_pbGMgAhEoF3Uqim1SYxEHr
            source_type: api_record
            title: 维基数据：王仪（Q45669071）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669071
            external_identifier: Q45669071
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_75MT96awbFcq5FPeQgzzze
          claim_id: c_J5VE7boY4iDRtaRskGiKpz
          source_id: s_HUS35mPqiHq1CT8qL5BQDW
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HUS35mPqiHq1CT8qL5BQDW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王儀（175610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175610&o=json
            external_identifier: CBDB:175610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.333Z
            metadata_json: null
        - id: cs_Gc8NQ2JyevuHMaKj7cqHpn
          claim_id: c_J5VE7boY4iDRtaRskGiKpz
          source_id: s_8JN3n7LTLnGG7skcRgkdC6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8JN3n7LTLnGG7skcRgkdC6
            source_type: api_record
            title: 维基数据：王贞（Q45669216）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669216
            external_identifier: Q45669216
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_QRBBu2ZiYbEComoFwxRWoX
          claim_id: c_J5VE7boY4iDRtaRskGiKpz
          source_id: s_b6FTWvmXfTMCX3cMncf9KV
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_b6FTWvmXfTMCX3cMncf9KV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王貞（175613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175613&o=json
            external_identifier: CBDB:175613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.527Z
            metadata_json: null
      object_person:
        id: p_GNsomPm1f6b7ukH3PC8R7M
        status: active
        display_name: 王贞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仪（卒于746年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175610） | accepted |
| death.date | 746年 | accepted |
| name.primary | 王仪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zKiyG8Et428Qshx93cGmXx | 王暟 | accepted |
| children | p_sWwSh6sCgmnFiT4vB8NsXR | 王滟 | accepted |
| children | p_GNsomPm1f6b7ukH3PC8R7M | 王贞 | accepted |

## 外部来源

- [维基数据：王暟（Q45668621）](https://www.wikidata.org/wiki/Q45668621)
- [维基数据：王滟（Q45669120）](https://www.wikidata.org/wiki/Q45669120)
- [维基数据：王仪（Q45669071）](https://www.wikidata.org/wiki/Q45669071)
- [维基数据：王贞（Q45669216）](https://www.wikidata.org/wiki/Q45669216)
- [CBDB 中国历代人物传记资料库：王暟（175601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175601&o=json)
- [CBDB 中国历代人物传记资料库：王灩（175611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175611&o=json)
- [CBDB 中国历代人物传记资料库：王儀（175610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175610&o=json)
- [CBDB 中国历代人物传记资料库：王貞（175613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175613&o=json)
