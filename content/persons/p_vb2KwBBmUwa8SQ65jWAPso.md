---
schema: wang-person/v1
id: p_vb2KwBBmUwa8SQ65jWAPso
status: active
merged_into: null
display_name: 王晋
cbdb_id: 175458
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5crW26ce6urKnX5r38zt1w
        subject_person_id: p_vb2KwBBmUwa8SQ65jWAPso
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晋（卒于893年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175458 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_enhGBdKd7bH4bETUTfKt3N
          claim_id: c_5crW26ce6urKnX5r38zt1w
          source_id: s_tczUnD4Jq6enH8PJ5ZoSvx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tczUnD4Jq6enH8PJ5ZoSvx
            source_type: api_record
            title: 维基数据：王晋（Q45660849）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660849
            external_identifier: Q45660849
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.027Z
            metadata_json: null
        - id: cs_IbTvE_QyoIeph4g6BKy7tM
          claim_id: c_5crW26ce6urKnX5r38zt1w
          source_id: s_L5Z9mN2cWUJ2v1yLQCaJW4
          stance: supports
          locator: CBDB:175458
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_L5Z9mN2cWUJ2v1yLQCaJW4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晉（175458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175458&o=json
            external_identifier: CBDB:175458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:12.177Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xCQWV2NtvcA6wSeMLjFpA5
        subject_person_id: p_vb2KwBBmUwa8SQ65jWAPso
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 893年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0893-01-01
            latest: 0893-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FNbXYWje6bEoyHjEWwVG97
          claim_id: c_xCQWV2NtvcA6wSeMLjFpA5
          source_id: s_tczUnD4Jq6enH8PJ5ZoSvx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tczUnD4Jq6enH8PJ5ZoSvx
            source_type: api_record
            title: 维基数据：王晋（Q45660849）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660849
            external_identifier: Q45660849
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.027Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_f6GYx19T1pVnin9ckcQzgK
        subject_person_id: p_vb2KwBBmUwa8SQ65jWAPso
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4U2yXb1sQqiyBMDvoNbsUF
          claim_id: c_f6GYx19T1pVnin9ckcQzgK
          source_id: s_L5Z9mN2cWUJ2v1yLQCaJW4
          stance: supports
          locator: Q45660849
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_pfknbRZAk5HfaJru24vTBn
          claim_id: c_f6GYx19T1pVnin9ckcQzgK
          source_id: s_tczUnD4Jq6enH8PJ5ZoSvx
          stance: supports
          locator: Q45660849
          quotation: null
          interpretation_note: null
          source:
            id: s_tczUnD4Jq6enH8PJ5ZoSvx
            source_type: api_record
            title: 维基数据：王晋（Q45660849）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660849
            external_identifier: Q45660849
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.027Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_S8YG6bCUeQ7mqoi6N6ckdZ
        subject_person_id: p_cv6xJKW3B4C3nm223hT23m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vb2KwBBmUwa8SQ65jWAPso
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9Bpm9D4kYR67bMmy5rwuD3
          claim_id: c_S8YG6bCUeQ7mqoi6N6ckdZ
          source_id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
            source_type: api_record
            title: 维基数据：王璋（Q45660786）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660786
            external_identifier: Q45660786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_k1jsbg7C7KME3KfcGBd9QB
          claim_id: c_S8YG6bCUeQ7mqoi6N6ckdZ
          source_id: s_SNtDRKwNHPnrCYNgCpMrup
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_SNtDRKwNHPnrCYNgCpMrup
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璋（175457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175457&o=json
            external_identifier: CBDB:175457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.631Z
            metadata_json: null
        - id: cs_bdN2ZEsAj3roEQMZTPn3DU
          claim_id: c_S8YG6bCUeQ7mqoi6N6ckdZ
          source_id: s_tczUnD4Jq6enH8PJ5ZoSvx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tczUnD4Jq6enH8PJ5ZoSvx
            source_type: api_record
            title: 维基数据：王晋（Q45660849）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660849
            external_identifier: Q45660849
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.027Z
            metadata_json: null
        - id: cs_2A1C8ArgKFsXshGhuPgfT2
          claim_id: c_S8YG6bCUeQ7mqoi6N6ckdZ
          source_id: s_L5Z9mN2cWUJ2v1yLQCaJW4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_L5Z9mN2cWUJ2v1yLQCaJW4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晉（175458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175458&o=json
            external_identifier: CBDB:175458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:12.177Z
            metadata_json: null
      object_person:
        id: p_cv6xJKW3B4C3nm223hT23m
        status: active
        display_name: 王璋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晋（卒于893年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175458 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 893年 | accepted |
| name.primary | 王晋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cv6xJKW3B4C3nm223hT23m | 王璋 | accepted |

## 外部来源

- [维基数据：王晋（Q45660849）](https://www.wikidata.org/wiki/Q45660849)
- [维基数据：王璋（Q45660786）](https://www.wikidata.org/wiki/Q45660786)
- [CBDB 中国历代人物传记资料库：王晉（175458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175458&o=json)
- [CBDB 中国历代人物传记资料库：王璋（175457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175457&o=json)
