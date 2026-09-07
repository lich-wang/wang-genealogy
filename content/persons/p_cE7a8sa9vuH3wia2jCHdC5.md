---
schema: wang-person/v1
id: p_cE7a8sa9vuH3wia2jCHdC5
status: active
merged_into: null
display_name: 王伸
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TjxRs3xsE766Hbct3T44hb
        subject_person_id: p_cE7a8sa9vuH3wia2jCHdC5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伸（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175636 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MtDPpG13TWzv45AcwZNDHt
          claim_id: c_TjxRs3xsE766Hbct3T44hb
          source_id: s_Fcj6gUDmhpHZRTSdH8Zx7a
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Fcj6gUDmhpHZRTSdH8Zx7a
            source_type: api_record
            title: 维基数据：王伸（Q45670298）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670298
            external_identifier: Q45670298
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
        - id: cs_2xPJLTRYl993vBQhwtQGDE
          claim_id: c_TjxRs3xsE766Hbct3T44hb
          source_id: s_sD8W3sCPn9WBt3SuJFy3jp
          stance: supports
          locator: CBDB:175636
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sD8W3sCPn9WBt3SuJFy3jp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伸（175636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175636&o=json
            external_identifier: CBDB:175636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:43.988Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RoPtJGo4fBMZJ8Dmuu6qKJ
        subject_person_id: p_cE7a8sa9vuH3wia2jCHdC5
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
        - id: cs_p9UaHodYNyF29uptbPQMwi
          claim_id: c_RoPtJGo4fBMZJ8Dmuu6qKJ
          source_id: s_Fcj6gUDmhpHZRTSdH8Zx7a
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Fcj6gUDmhpHZRTSdH8Zx7a
            source_type: api_record
            title: 维基数据：王伸（Q45670298）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670298
            external_identifier: Q45670298
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PgdAAjkSv7DPHBEJu775Qs
        subject_person_id: p_cE7a8sa9vuH3wia2jCHdC5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伸
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4gSa3FV4XTF4kChnU5o8fx
          claim_id: c_PgdAAjkSv7DPHBEJu775Qs
          source_id: s_sD8W3sCPn9WBt3SuJFy3jp
          stance: supports
          locator: Q45670298
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_MZsMTQ2yvd8U6nneBKe8zB
          claim_id: c_PgdAAjkSv7DPHBEJu775Qs
          source_id: s_Fcj6gUDmhpHZRTSdH8Zx7a
          stance: supports
          locator: Q45670298
          quotation: null
          interpretation_note: null
          source:
            id: s_Fcj6gUDmhpHZRTSdH8Zx7a
            source_type: api_record
            title: 维基数据：王伸（Q45670298）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670298
            external_identifier: Q45670298
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GP2FGYMhQU2cQyTf4rw9RV
        subject_person_id: p_YHE2NJ9LSwowSpyQD68iW1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cE7a8sa9vuH3wia2jCHdC5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_e7PgV1UcazwoLs4c9j4d5P
          claim_id: c_GP2FGYMhQU2cQyTf4rw9RV
          source_id: s_v43uG4Av9fcuPA2Dw8jAmB
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_v43uG4Av9fcuPA2Dw8jAmB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暉（175634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175634&o=json
            external_identifier: CBDB:175634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.839Z
            metadata_json: null
        - id: cs_rGTqP4MftXb7chxJx2HEZG
          claim_id: c_GP2FGYMhQU2cQyTf4rw9RV
          source_id: s_k7pnfCmMHnCgceNnh6JLHJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_k7pnfCmMHnCgceNnh6JLHJ
            source_type: api_record
            title: 维基数据：王晖（Q45670207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670207
            external_identifier: Q45670207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_UBJPqx5Vyrf2JSucrXCE1u
          claim_id: c_GP2FGYMhQU2cQyTf4rw9RV
          source_id: s_Fcj6gUDmhpHZRTSdH8Zx7a
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Fcj6gUDmhpHZRTSdH8Zx7a
            source_type: api_record
            title: 维基数据：王伸（Q45670298）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670298
            external_identifier: Q45670298
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
        - id: cs_3ap9UxGL2CmuhMJLtaEbAQ
          claim_id: c_GP2FGYMhQU2cQyTf4rw9RV
          source_id: s_sD8W3sCPn9WBt3SuJFy3jp
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_sD8W3sCPn9WBt3SuJFy3jp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伸（175636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175636&o=json
            external_identifier: CBDB:175636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:43.988Z
            metadata_json: null
      object_person:
        id: p_YHE2NJ9LSwowSpyQD68iW1
        status: active
        display_name: 王晖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伸（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175636 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王伸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YHE2NJ9LSwowSpyQD68iW1 | 王晖 | accepted |

## 外部来源

- [维基数据：王晖（Q45670207）](https://www.wikidata.org/wiki/Q45670207)
- [维基数据：王伸（Q45670298）](https://www.wikidata.org/wiki/Q45670298)
- [CBDB 中国历代人物传记资料库：王暉（175634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175634&o=json)
- [CBDB 中国历代人物传记资料库：王伸（175636）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175636&o=json)
