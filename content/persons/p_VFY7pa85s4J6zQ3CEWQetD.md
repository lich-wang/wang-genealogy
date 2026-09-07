---
schema: wang-person/v1
id: p_VFY7pa85s4J6zQ3CEWQetD
status: active
merged_into: null
display_name: 王及
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LvLS7CCTQgP6vnrUrrssn5
        subject_person_id: p_VFY7pa85s4J6zQ3CEWQetD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王及（卒于805年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任中書舍人。中国历代人物传记资料库（CBDB）以人物编号 175543 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_xR2ZLYRPh5o8HHipBNb8bv
          claim_id: c_LvLS7CCTQgP6vnrUrrssn5
          source_id: s_R2ERVGUSTFdaLQcas86RM7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_R2ERVGUSTFdaLQcas86RM7
            source_type: api_record
            title: 维基数据：王及（Q45665623）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665623
            external_identifier: Q45665623
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.028Z
            metadata_json: null
        - id: cs_OLGQ7m-NgbGcO-LJvNlEeX
          claim_id: c_LvLS7CCTQgP6vnrUrrssn5
          source_id: s_FHnrH5NQLrDst3z6jtiM9A
          stance: supports
          locator: CBDB:175543
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FHnrH5NQLrDst3z6jtiM9A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王及（175543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175543&o=json
            external_identifier: CBDB:175543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:12.180Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vT6osBmzc5Xg2r2wMoF5BJ
        subject_person_id: p_VFY7pa85s4J6zQ3CEWQetD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 805年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0805-01-01
            latest: 0805-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LdTx5Jw9tAYwJCG1b2DPLi
          claim_id: c_vT6osBmzc5Xg2r2wMoF5BJ
          source_id: s_R2ERVGUSTFdaLQcas86RM7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_R2ERVGUSTFdaLQcas86RM7
            source_type: api_record
            title: 维基数据：王及（Q45665623）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665623
            external_identifier: Q45665623
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.028Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_trRCPMSuY1vQYdWNeBg1Xi
        subject_person_id: p_VFY7pa85s4J6zQ3CEWQetD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王及
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1pGa96VbTmD5ruGTdbR4JS
          claim_id: c_trRCPMSuY1vQYdWNeBg1Xi
          source_id: s_R2ERVGUSTFdaLQcas86RM7
          stance: supports
          locator: Q45665623
          quotation: null
          interpretation_note: null
          source:
            id: s_R2ERVGUSTFdaLQcas86RM7
            source_type: api_record
            title: 维基数据：王及（Q45665623）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665623
            external_identifier: Q45665623
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.028Z
            metadata_json: null
        - id: cs_Ww56oXKWnB5jMpHXKprWwE
          claim_id: c_trRCPMSuY1vQYdWNeBg1Xi
          source_id: s_FHnrH5NQLrDst3z6jtiM9A
          stance: supports
          locator: Q45665623
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7hmDPRe3KocX8Ce3RcnkdY
        subject_person_id: p_o3CtQwgPCb9SPDjiw6AWp7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VFY7pa85s4J6zQ3CEWQetD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_61o8gVYDMxnxgMU8wU6g9C
          claim_id: c_7hmDPRe3KocX8Ce3RcnkdY
          source_id: s_y7Ty8hHvBFKCvjH2p9WUi9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_y7Ty8hHvBFKCvjH2p9WUi9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璵（175542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175542&o=json
            external_identifier: CBDB:175542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:06.035Z
            metadata_json: null
        - id: cs_YtHRGzF8PC8gzw3D5hiCyw
          claim_id: c_7hmDPRe3KocX8Ce3RcnkdY
          source_id: s_8JJBz2XuxNkrWkBP19JReT
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8JJBz2XuxNkrWkBP19JReT
            source_type: api_record
            title: 维基数据：王玙（Q7967736）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7967736
            external_identifier: Q7967736
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8E%99
        - id: cs_yqte9mNGiPsyb3Ggaq5SMs
          claim_id: c_7hmDPRe3KocX8Ce3RcnkdY
          source_id: s_R2ERVGUSTFdaLQcas86RM7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_R2ERVGUSTFdaLQcas86RM7
            source_type: api_record
            title: 维基数据：王及（Q45665623）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665623
            external_identifier: Q45665623
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.028Z
            metadata_json: null
        - id: cs_t8TEEewbuLi45L4a4Ns48V
          claim_id: c_7hmDPRe3KocX8Ce3RcnkdY
          source_id: s_FHnrH5NQLrDst3z6jtiM9A
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FHnrH5NQLrDst3z6jtiM9A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王及（175543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175543&o=json
            external_identifier: CBDB:175543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:12.180Z
            metadata_json: null
      object_person:
        id: p_o3CtQwgPCb9SPDjiw6AWp7
        status: active
        display_name: 王玙
        merged_into_person_id: null
  children:
    - claim:
        id: c_xTKV2QsXk6otG2G3BGYF1C
        subject_person_id: p_VFY7pa85s4J6zQ3CEWQetD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gWJemB5XduGNkLqdFcrivv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KTE6vz55UQFbLBonKevvse
          claim_id: c_xTKV2QsXk6otG2G3BGYF1C
          source_id: s_FHnrH5NQLrDst3z6jtiM9A
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FHnrH5NQLrDst3z6jtiM9A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王及（175543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175543&o=json
            external_identifier: CBDB:175543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:12.180Z
            metadata_json: null
        - id: cs_aQ2o8pqzFQiZGTY8mTNZou
          claim_id: c_xTKV2QsXk6otG2G3BGYF1C
          source_id: s_R2ERVGUSTFdaLQcas86RM7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_R2ERVGUSTFdaLQcas86RM7
            source_type: api_record
            title: 维基数据：王及（Q45665623）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665623
            external_identifier: Q45665623
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.028Z
            metadata_json: null
        - id: cs_hFs9peojLWe89RY7AhAkCa
          claim_id: c_xTKV2QsXk6otG2G3BGYF1C
          source_id: s_RWTsEqw5xx6766DiY6L6C6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_RWTsEqw5xx6766DiY6L6C6
            source_type: api_record
            title: 维基数据：王鐬（Q45665676）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665676
            external_identifier: Q45665676
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:43.327Z
            metadata_json: null
        - id: cs_xEfWUGXeFCEv4JeQaMuGsp
          claim_id: c_xTKV2QsXk6otG2G3BGYF1C
          source_id: s_J1jD7P5iGBwY2Y3Rq69tSJ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_J1jD7P5iGBwY2Y3Rq69tSJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鐬（175544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175544&o=json
            external_identifier: CBDB:175544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:43.463Z
            metadata_json: null
      object_person:
        id: p_gWJemB5XduGNkLqdFcrivv
        status: active
        display_name: 王鐬
        merged_into_person_id: null
    - claim:
        id: c_ADGhYNeVePBBf98M34mp1e
        subject_person_id: p_VFY7pa85s4J6zQ3CEWQetD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_weTgXctV7Eb1o4FyPStPTQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tYqzxKpLXx1bHK7eB86v3H
          claim_id: c_ADGhYNeVePBBf98M34mp1e
          source_id: s_FHnrH5NQLrDst3z6jtiM9A
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FHnrH5NQLrDst3z6jtiM9A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王及（175543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175543&o=json
            external_identifier: CBDB:175543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:12.180Z
            metadata_json: null
        - id: cs_yShubFbEW8pgXEkPhdbSLj
          claim_id: c_ADGhYNeVePBBf98M34mp1e
          source_id: s_R2ERVGUSTFdaLQcas86RM7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_R2ERVGUSTFdaLQcas86RM7
            source_type: api_record
            title: 维基数据：王及（Q45665623）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665623
            external_identifier: Q45665623
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.028Z
            metadata_json: null
        - id: cs_55SMDKJxbJyXGzkip7Kqt1
          claim_id: c_ADGhYNeVePBBf98M34mp1e
          source_id: s_3x7zux3E69S3EtGyk4m9r7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3x7zux3E69S3EtGyk4m9r7
            source_type: api_record
            title: 维基数据：王针（Q45665970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665970
            external_identifier: Q45665970
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:43.327Z
            metadata_json: null
        - id: cs_QAzdRUq81pddwJV4Jqt3bG
          claim_id: c_ADGhYNeVePBBf98M34mp1e
          source_id: s_HbLe6EeoH27EFvnm5jM81C
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HbLe6EeoH27EFvnm5jM81C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鍼（175549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175549&o=json
            external_identifier: CBDB:175549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:43.474Z
            metadata_json: null
      object_person:
        id: p_weTgXctV7Eb1o4FyPStPTQ
        status: active
        display_name: 王针
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王及

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王及（卒于805年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任中書舍人。中国历代人物传记资料库（CBDB）以人物编号 175543 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 805年 | accepted |
| name.primary | 王及 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_o3CtQwgPCb9SPDjiw6AWp7 | 王玙 | accepted |
| children | p_gWJemB5XduGNkLqdFcrivv | 王鐬 | accepted |
| children | p_weTgXctV7Eb1o4FyPStPTQ | 王针 | accepted |

## 外部来源

- [维基数据：王鐬（Q45665676）](https://www.wikidata.org/wiki/Q45665676)
- [维基数据：王及（Q45665623）](https://www.wikidata.org/wiki/Q45665623)
- [维基数据：王玙（Q7967736）](https://www.wikidata.org/wiki/Q7967736)
- [维基数据：王针（Q45665970）](https://www.wikidata.org/wiki/Q45665970)
- [CBDB 中国历代人物传记资料库：王鐬（175544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175544&o=json)
- [CBDB 中国历代人物传记资料库：王及（175543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175543&o=json)
- [CBDB 中国历代人物传记资料库：王璵（175542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175542&o=json)
- [CBDB 中国历代人物传记资料库：王鍼（175549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175549&o=json)
