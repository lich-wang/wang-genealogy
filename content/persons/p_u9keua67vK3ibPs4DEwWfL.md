---
schema: wang-person/v1
id: p_u9keua67vK3ibPs4DEwWfL
status: active
merged_into: null
display_name: 王源明
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ztRaQ3FfkrFb1HxKXsPHNQ
        subject_person_id: p_u9keua67vK3ibPs4DEwWfL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源明（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175593 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_po9j2PiH2Mfbye646iLKG8
          claim_id: c_ztRaQ3FfkrFb1HxKXsPHNQ
          source_id: s_QEwpcaLTEPmP7qYTWcf36A
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_QEwpcaLTEPmP7qYTWcf36A
            source_type: api_record
            title: 维基数据：王源明（Q45668222）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668222
            external_identifier: Q45668222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:39.824Z
            metadata_json: null
        - id: cs_Db3rLp9BwwlduGt0DFYKIO
          claim_id: c_ztRaQ3FfkrFb1HxKXsPHNQ
          source_id: s_K7QU5gFoiBETbKDJ8ghcvB
          stance: supports
          locator: CBDB:175593
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_K7QU5gFoiBETbKDJ8ghcvB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源明（175593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175593&o=json
            external_identifier: CBDB:175593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:39.988Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bbZ6vwGapTsvkm36zczkQ6
        subject_person_id: p_u9keua67vK3ibPs4DEwWfL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qjCwo7Evmt54jtKFyYGfPm
          claim_id: c_bbZ6vwGapTsvkm36zczkQ6
          source_id: s_QEwpcaLTEPmP7qYTWcf36A
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_QEwpcaLTEPmP7qYTWcf36A
            source_type: api_record
            title: 维基数据：王源明（Q45668222）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668222
            external_identifier: Q45668222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:39.824Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BtNGAVztKvoAiV36542d6E
        subject_person_id: p_u9keua67vK3ibPs4DEwWfL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源明
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JxAAgbGk6Av4qgFrHhitSC
          claim_id: c_BtNGAVztKvoAiV36542d6E
          source_id: s_K7QU5gFoiBETbKDJ8ghcvB
          stance: supports
          locator: Q45668222
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_WijD4wGgbJMKZ84D4Cpb8F
          claim_id: c_BtNGAVztKvoAiV36542d6E
          source_id: s_QEwpcaLTEPmP7qYTWcf36A
          stance: supports
          locator: Q45668222
          quotation: null
          interpretation_note: null
          source:
            id: s_QEwpcaLTEPmP7qYTWcf36A
            source_type: api_record
            title: 维基数据：王源明（Q45668222）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668222
            external_identifier: Q45668222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:39.824Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6BXKTmtMTcHoVAEQ1BGF1i
        subject_person_id: p_G13YPoCU5cj4XERmwK9pm6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u9keua67vK3ibPs4DEwWfL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2LeNr9EMxPXrHHPsB48X6v
          claim_id: c_6BXKTmtMTcHoVAEQ1BGF1i
          source_id: s_AAYt4Ds2HhAes8BnEpCqNr
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_AAYt4Ds2HhAes8BnEpCqNr
            source_type: api_record
            title: 维基数据：王溥（Q45668121）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668121
            external_identifier: Q45668121
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_Ccv4kY9LiCAA29K9DByoLn
          claim_id: c_6BXKTmtMTcHoVAEQ1BGF1i
          source_id: s_n87MvNpCcfqwZ5keZ5Cwf1
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_n87MvNpCcfqwZ5keZ5Cwf1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王溥（175591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175591&o=json
            external_identifier: CBDB:175591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.912Z
            metadata_json: null
        - id: cs_tL1qHzB9FmAYHvLfbhzjdE
          claim_id: c_6BXKTmtMTcHoVAEQ1BGF1i
          source_id: s_QEwpcaLTEPmP7qYTWcf36A
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QEwpcaLTEPmP7qYTWcf36A
            source_type: api_record
            title: 维基数据：王源明（Q45668222）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668222
            external_identifier: Q45668222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:39.824Z
            metadata_json: null
        - id: cs_PQBLLVnEDtcTE1J5Hbq7qB
          claim_id: c_6BXKTmtMTcHoVAEQ1BGF1i
          source_id: s_K7QU5gFoiBETbKDJ8ghcvB
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_K7QU5gFoiBETbKDJ8ghcvB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源明（175593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175593&o=json
            external_identifier: CBDB:175593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:39.988Z
            metadata_json: null
      object_person:
        id: p_G13YPoCU5cj4XERmwK9pm6
        status: active
        display_name: 王溥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源明（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175593 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_G13YPoCU5cj4XERmwK9pm6 | 王溥 | accepted |

## 外部来源

- [维基数据：王溥（Q45668121）](https://www.wikidata.org/wiki/Q45668121)
- [维基数据：王源明（Q45668222）](https://www.wikidata.org/wiki/Q45668222)
- [CBDB 中国历代人物传记资料库：王溥（175591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175591&o=json)
- [CBDB 中国历代人物传记资料库：王源明（175593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175593&o=json)
