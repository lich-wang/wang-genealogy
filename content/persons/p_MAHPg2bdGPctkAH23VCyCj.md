---
schema: wang-person/v1
id: p_MAHPg2bdGPctkAH23VCyCj
status: active
merged_into: null
display_name: 王孺卿
cbdb_id: 175584
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hWPkayJ8Guh8XYZJddioh1
        subject_person_id: p_MAHPg2bdGPctkAH23VCyCj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孺卿（卒于820年），唐人物。籍贯咸陽，曾任令。（中国历代人物传记资料库 CBDB 175584）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_jHMiHFGVR48QyjSMcw6a6y
          claim_id: c_hWPkayJ8Guh8XYZJddioh1
          source_id: s_yu51q3rJeqczisvXBFtx5a
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_yu51q3rJeqczisvXBFtx5a
            source_type: api_record
            title: 维基数据：王孺卿（Q45667762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667762
            external_identifier: Q45667762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.179Z
            metadata_json: null
        - id: cs_xtdROPsQVaKUeNz7Jyvna-
          claim_id: c_hWPkayJ8Guh8XYZJddioh1
          source_id: s_ULqkWDUyK6TeFUSgUQjZQv
          stance: supports
          locator: CBDB:175584
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ULqkWDUyK6TeFUSgUQjZQv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王孺卿（175584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175584&o=json
            external_identifier: CBDB:175584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:38.334Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EEDLNQP22xg4w3g5YAxCjs
        subject_person_id: p_MAHPg2bdGPctkAH23VCyCj
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
        - id: cs_Wi6uUTxk7bKNW1UB3ig1LM
          claim_id: c_EEDLNQP22xg4w3g5YAxCjs
          source_id: s_yu51q3rJeqczisvXBFtx5a
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_yu51q3rJeqczisvXBFtx5a
            source_type: api_record
            title: 维基数据：王孺卿（Q45667762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667762
            external_identifier: Q45667762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.179Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iuaXZJVkiB1LExLSo7Zpp5
        subject_person_id: p_MAHPg2bdGPctkAH23VCyCj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孺卿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NRkQvT1F6odmJ3LnVvQkpB
          claim_id: c_iuaXZJVkiB1LExLSo7Zpp5
          source_id: s_ULqkWDUyK6TeFUSgUQjZQv
          stance: supports
          locator: Q45667762
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ohQLfqNinewJp458xv5thP
          claim_id: c_iuaXZJVkiB1LExLSo7Zpp5
          source_id: s_yu51q3rJeqczisvXBFtx5a
          stance: supports
          locator: Q45667762
          quotation: null
          interpretation_note: null
          source:
            id: s_yu51q3rJeqczisvXBFtx5a
            source_type: api_record
            title: 维基数据：王孺卿（Q45667762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667762
            external_identifier: Q45667762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.179Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sTjiLkQ8rRGdxFKNHs3BV9
        subject_person_id: p_62HhnvGzNnUM79dMvqEziP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MAHPg2bdGPctkAH23VCyCj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tByVnhRmWhjeii9mdF9NBd
          claim_id: c_sTjiLkQ8rRGdxFKNHs3BV9
          source_id: s_BSHLD1t4y3vmUNRYEqEcyJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_BSHLD1t4y3vmUNRYEqEcyJ
            source_type: api_record
            title: 维基数据：王河（Q45667711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667711
            external_identifier: Q45667711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_vNAGxyeMgKH7B24FYFehvw
          claim_id: c_sTjiLkQ8rRGdxFKNHs3BV9
          source_id: s_3gFECzasRqw7aLYy2FRmua
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3gFECzasRqw7aLYy2FRmua
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王河（175583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175583&o=json
            external_identifier: CBDB:175583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.436Z
            metadata_json: null
        - id: cs_vZFtwvECeaPMPaAZ5Ngrsg
          claim_id: c_sTjiLkQ8rRGdxFKNHs3BV9
          source_id: s_yu51q3rJeqczisvXBFtx5a
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_yu51q3rJeqczisvXBFtx5a
            source_type: api_record
            title: 维基数据：王孺卿（Q45667762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667762
            external_identifier: Q45667762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.179Z
            metadata_json: null
        - id: cs_rQQYViu7GTnVneGtXDJLYm
          claim_id: c_sTjiLkQ8rRGdxFKNHs3BV9
          source_id: s_ULqkWDUyK6TeFUSgUQjZQv
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ULqkWDUyK6TeFUSgUQjZQv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王孺卿（175584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175584&o=json
            external_identifier: CBDB:175584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:38.334Z
            metadata_json: null
      object_person:
        id: p_62HhnvGzNnUM79dMvqEziP
        status: active
        display_name: 王河
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孺卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孺卿（卒于820年），唐人物。籍贯咸陽，曾任令。（中国历代人物传记资料库 CBDB 175584） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王孺卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_62HhnvGzNnUM79dMvqEziP | 王河 | accepted |

## 外部来源

- [维基数据：王河（Q45667711）](https://www.wikidata.org/wiki/Q45667711)
- [维基数据：王孺卿（Q45667762）](https://www.wikidata.org/wiki/Q45667762)
- [CBDB 中国历代人物传记资料库：王河（175583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175583&o=json)
- [CBDB 中国历代人物传记资料库：王孺卿（175584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175584&o=json)
