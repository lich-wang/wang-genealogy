---
schema: wang-person/v1
id: p_S3ed5sGuwGvN5fRZ5r9uCh
status: active
merged_into: null
display_name: 王师达
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7TBKk4Qw5pb77KerQCjb8K
        subject_person_id: p_S3ed5sGuwGvN5fRZ5r9uCh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师达（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175427 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_axomFW8HgsH5x5v9D8hRFX
          claim_id: c_7TBKk4Qw5pb77KerQCjb8K
          source_id: s_N9TnFxMBsADCba6eRjPkgH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_N9TnFxMBsADCba6eRjPkgH
            source_type: api_record
            title: 维基数据：王师达（Q45658998）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658998
            external_identifier: Q45658998
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
        - id: cs_t9cYHqGzyI21ZrBTB2H2Ry
          claim_id: c_7TBKk4Qw5pb77KerQCjb8K
          source_id: s_t9qfkoJzk5P1NhbarNjG3c
          stance: supports
          locator: CBDB:175427
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_t9qfkoJzk5P1NhbarNjG3c
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師達（175427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175427&o=json
            external_identifier: CBDB:175427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:07.090Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PyZxogx4rJEAdGHrBKo3Mt
        subject_person_id: p_S3ed5sGuwGvN5fRZ5r9uCh
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
        - id: cs_tUarUi6MKC5v1k2AHBtVHA
          claim_id: c_PyZxogx4rJEAdGHrBKo3Mt
          source_id: s_N9TnFxMBsADCba6eRjPkgH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_N9TnFxMBsADCba6eRjPkgH
            source_type: api_record
            title: 维基数据：王师达（Q45658998）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658998
            external_identifier: Q45658998
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Px2Sm4CVmdhRxCG2bPoLhs
        subject_person_id: p_S3ed5sGuwGvN5fRZ5r9uCh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师达
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UGYDUidmuG1GutRsrvf1PY
          claim_id: c_Px2Sm4CVmdhRxCG2bPoLhs
          source_id: s_t9qfkoJzk5P1NhbarNjG3c
          stance: supports
          locator: Q45658998
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_jsbLv9Su6SG44qe9bhjazh
          claim_id: c_Px2Sm4CVmdhRxCG2bPoLhs
          source_id: s_N9TnFxMBsADCba6eRjPkgH
          stance: supports
          locator: Q45658998
          quotation: null
          interpretation_note: null
          source:
            id: s_N9TnFxMBsADCba6eRjPkgH
            source_type: api_record
            title: 维基数据：王师达（Q45658998）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658998
            external_identifier: Q45658998
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Gj8QTJ9g1se3JDLvxc8KgJ
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S3ed5sGuwGvN5fRZ5r9uCh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9Z3MGs9nCDaFyuzT4NDbQo
          claim_id: c_Gj8QTJ9g1se3JDLvxc8KgJ
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6HC9Tz6usZG9tpzmYrAfiQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迺（175425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175425&o=json
            external_identifier: CBDB:175425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.862Z
            metadata_json: null
        - id: cs_ruJjTBM8R3jMC75TqpMjAg
          claim_id: c_Gj8QTJ9g1se3JDLvxc8KgJ
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_q2HM3LSwn2hCoD23EH61RQ
            source_type: api_record
            title: 维基数据：王迺（Q45658880）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658880
            external_identifier: Q45658880
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_462Cbw8LeBZ2EM5FWQwdMK
          claim_id: c_Gj8QTJ9g1se3JDLvxc8KgJ
          source_id: s_N9TnFxMBsADCba6eRjPkgH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_N9TnFxMBsADCba6eRjPkgH
            source_type: api_record
            title: 维基数据：王师达（Q45658998）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658998
            external_identifier: Q45658998
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
        - id: cs_GexL7v5SN8Q5tDoDmAj6T3
          claim_id: c_Gj8QTJ9g1se3JDLvxc8KgJ
          source_id: s_t9qfkoJzk5P1NhbarNjG3c
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_t9qfkoJzk5P1NhbarNjG3c
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師達（175427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175427&o=json
            external_identifier: CBDB:175427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:07.090Z
            metadata_json: null
      object_person:
        id: p_R43S4tSNhE9EYwSxHQi8DK
        status: active
        display_name: 王迺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王师达

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王师达（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175427 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 894年 | accepted |
| name.primary | 王师达 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R43S4tSNhE9EYwSxHQi8DK | 王迺 | accepted |

## 外部来源

- [维基数据：王迺（Q45658880）](https://www.wikidata.org/wiki/Q45658880)
- [维基数据：王师达（Q45658998）](https://www.wikidata.org/wiki/Q45658998)
- [CBDB 中国历代人物传记资料库：王迺（175425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175425&o=json)
- [CBDB 中国历代人物传记资料库：王師達（175427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175427&o=json)
