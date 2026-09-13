---
schema: wang-person/v1
id: p_hKTs5TTRzKAYzyv3cFGKZB
status: active
merged_into: null
display_name: 王晔
cbdb_id: 175576
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_efrVvKXMHKD3cvLj9Y4qRs
        subject_person_id: p_hKTs5TTRzKAYzyv3cFGKZB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晔（卒于709年），唐人物。籍贯咸陽，曾任殿中侍御史、縣令。（中国历代人物传记资料库 CBDB 175576）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_fKCPwh3u3Z48QL952oA8y1
          claim_id: c_efrVvKXMHKD3cvLj9Y4qRs
          source_id: s_8zx1GebBJt81upvAjecWtH
          stance: supports
          locator: null
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
        - id: cs_Kwlo85tqJ7BLQmL-LfVCVm
          claim_id: c_efrVvKXMHKD3cvLj9Y4qRs
          source_id: s_9GPzRQoLjX4DNEPnTtChSM
          stance: supports
          locator: CBDB:175576
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mpFFpKoghCoi9B1WAUBZs6
        subject_person_id: p_hKTs5TTRzKAYzyv3cFGKZB
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
        - id: cs_a8MMekMNhNChxPecRJ4YJz
          claim_id: c_mpFFpKoghCoi9B1WAUBZs6
          source_id: s_8zx1GebBJt81upvAjecWtH
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ie9fE7XtAHCEVQcmm84vnY
        subject_person_id: p_hKTs5TTRzKAYzyv3cFGKZB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晔
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VSBaSrLL93Eva7ebaCUd1v
          claim_id: c_ie9fE7XtAHCEVQcmm84vnY
          source_id: s_8zx1GebBJt81upvAjecWtH
          stance: supports
          locator: Q45667406
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
        - id: cs_npzqNMc5HkG6h8zKUtNiTk
          claim_id: c_ie9fE7XtAHCEVQcmm84vnY
          source_id: s_9GPzRQoLjX4DNEPnTtChSM
          stance: supports
          locator: Q45667406
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wMDk83xFdPX8xBWsPdw3iA
        subject_person_id: p_ZSBMnefxQNX4zwGDPTrYX5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hKTs5TTRzKAYzyv3cFGKZB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MuLtGL2sA5wk7BspB7ZYJK
          claim_id: c_wMDk83xFdPX8xBWsPdw3iA
          source_id: s_7Npqc2V4HZVXpCQ8BDZJQV
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7Npqc2V4HZVXpCQ8BDZJQV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綝（175451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175451&o=json
            external_identifier: CBDB:175451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:19.563Z
            metadata_json: null
        - id: cs_RtTHU97oY84xSWgKEWBN1N
          claim_id: c_wMDk83xFdPX8xBWsPdw3iA
          source_id: s_CTC777F2HSKbjF4ZdjzJur
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CTC777F2HSKbjF4ZdjzJur
            source_type: api_record
            title: 维基数据：王方庆（Q7478164）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7478164
            external_identifier: Q7478164
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:19.421Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%96%B9%E5%BA%86
        - id: cs_3eyB1bSxgWrHkvgExV2Njc
          claim_id: c_wMDk83xFdPX8xBWsPdw3iA
          source_id: s_8zx1GebBJt81upvAjecWtH
          stance: supports
          locator: P22（父）
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
        - id: cs_6F97u891MG54FfRkWt8aub
          claim_id: c_wMDk83xFdPX8xBWsPdw3iA
          source_id: s_9GPzRQoLjX4DNEPnTtChSM
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_ZSBMnefxQNX4zwGDPTrYX5
        status: active
        display_name: 王方庆
        merged_into_person_id: null
  children:
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
        id: p_DDwKCaH7QpbuB3ZQcKBKmy
        status: active
        display_name: 王儇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晔（卒于709年），唐人物。籍贯咸陽，曾任殿中侍御史、縣令。（中国历代人物传记资料库 CBDB 175576） | accepted |
| death.date | 709年 | accepted |
| name.primary | 王晔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZSBMnefxQNX4zwGDPTrYX5 | 王方庆 | accepted |
| children | p_DDwKCaH7QpbuB3ZQcKBKmy | 王儇 | accepted |

## 外部来源

- [维基数据：王方庆（Q7478164）](https://www.wikidata.org/wiki/Q7478164)
- [维基数据：王儇（Q45667458）](https://www.wikidata.org/wiki/Q45667458)
- [维基数据：王晔（Q45667406）](https://www.wikidata.org/wiki/Q45667406)
- [CBDB 中国历代人物传记资料库：王綝（175451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175451&o=json)
- [CBDB 中国历代人物传记资料库：王儇（175577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175577&o=json)
- [CBDB 中国历代人物传记资料库：王曄（175576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175576&o=json)
