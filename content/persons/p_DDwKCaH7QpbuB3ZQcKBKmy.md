---
schema: wang-person/v1
id: p_DDwKCaH7QpbuB3ZQcKBKmy
status: active
merged_into: null
display_name: 王儇
cbdb_id: 175577
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uj3nLesHe4Gqi8GKwn72zs
        subject_person_id: p_DDwKCaH7QpbuB3ZQcKBKmy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儇（卒于746年），唐人物。籍贯咸陽，曾任挽郎。（中国历代人物传记资料库 CBDB 175577）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_tBj4LsvQQWv88r5qcBoU8S
          claim_id: c_uj3nLesHe4Gqi8GKwn72zs
          source_id: s_phKpZMVR3mWj3739R5Wvfc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_phKpZMVR3mWj3739R5Wvfc
            source_type: api_record
            title: 维基数据：王儇（Q45667458）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667458
            external_identifier: Q45667458
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_fMumWvoUlwSCUdPni6kJsQ
          claim_id: c_uj3nLesHe4Gqi8GKwn72zs
          source_id: s_a9SVomkcbBssG1Daj9H436
          stance: supports
          locator: CBDB:175577
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_a9SVomkcbBssG1Daj9H436
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王儇（175577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175577&o=json
            external_identifier: CBDB:175577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.468Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zKaa5wwtPgAWFsEmXX6M5F
        subject_person_id: p_DDwKCaH7QpbuB3ZQcKBKmy
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
        - id: cs_mnmNqnYuxwRQMSwzf5X8Cv
          claim_id: c_zKaa5wwtPgAWFsEmXX6M5F
          source_id: s_phKpZMVR3mWj3739R5Wvfc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_phKpZMVR3mWj3739R5Wvfc
            source_type: api_record
            title: 维基数据：王儇（Q45667458）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667458
            external_identifier: Q45667458
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HzdL3mjBKTW8ZJsMmGfLiS
        subject_person_id: p_DDwKCaH7QpbuB3ZQcKBKmy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儇
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CxtGLwTG68KYRwu8Kb8xCE
          claim_id: c_HzdL3mjBKTW8ZJsMmGfLiS
          source_id: s_a9SVomkcbBssG1Daj9H436
          stance: supports
          locator: Q45667458
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_K4JJECE6LmhqUD2tvqpoUJ
          claim_id: c_HzdL3mjBKTW8ZJsMmGfLiS
          source_id: s_phKpZMVR3mWj3739R5Wvfc
          stance: supports
          locator: Q45667458
          quotation: null
          interpretation_note: null
          source:
            id: s_phKpZMVR3mWj3739R5Wvfc
            source_type: api_record
            title: 维基数据：王儇（Q45667458）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667458
            external_identifier: Q45667458
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KwmgVjQjKuXZcfqe6XtZLd
        subject_person_id: p_hKTs5TTRzKAYzyv3cFGKZB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DDwKCaH7QpbuB3ZQcKBKmy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Fw6sbRUJDH3ozgryRJrymM
          claim_id: c_KwmgVjQjKuXZcfqe6XtZLd
          source_id: s_8zx1GebBJt81upvAjecWtH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8zx1GebBJt81upvAjecWtH
            source_type: api_record
            title: 维基数据：王晔（Q45667406）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667406
            external_identifier: Q45667406
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_S6DEHkNrKRRRk6xmyvpaUj
          claim_id: c_KwmgVjQjKuXZcfqe6XtZLd
          source_id: s_9GPzRQoLjX4DNEPnTtChSM
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9GPzRQoLjX4DNEPnTtChSM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王曄（175576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175576&o=json
            external_identifier: CBDB:175576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:37.995Z
            metadata_json: null
        - id: cs_w7mefb5LyVKGcV4stynPaV
          claim_id: c_KwmgVjQjKuXZcfqe6XtZLd
          source_id: s_phKpZMVR3mWj3739R5Wvfc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_phKpZMVR3mWj3739R5Wvfc
            source_type: api_record
            title: 维基数据：王儇（Q45667458）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667458
            external_identifier: Q45667458
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_BXWTSKMwZXV777Bfek1M5T
          claim_id: c_KwmgVjQjKuXZcfqe6XtZLd
          source_id: s_a9SVomkcbBssG1Daj9H436
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_a9SVomkcbBssG1Daj9H436
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王儇（175577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175577&o=json
            external_identifier: CBDB:175577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.468Z
            metadata_json: null
      object_person:
        id: p_hKTs5TTRzKAYzyv3cFGKZB
        status: active
        display_name: 王晔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王儇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王儇（卒于746年），唐人物。籍贯咸陽，曾任挽郎。（中国历代人物传记资料库 CBDB 175577） | accepted |
| death.date | 746年 | accepted |
| name.primary | 王儇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hKTs5TTRzKAYzyv3cFGKZB | 王晔 | accepted |

## 外部来源

- [维基数据：王儇（Q45667458）](https://www.wikidata.org/wiki/Q45667458)
- [维基数据：王晔（Q45667406）](https://www.wikidata.org/wiki/Q45667406)
- [CBDB 中国历代人物传记资料库：王儇（175577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175577&o=json)
- [CBDB 中国历代人物传记资料库：王曄（175576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175576&o=json)
