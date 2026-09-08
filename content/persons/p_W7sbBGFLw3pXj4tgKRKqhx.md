---
schema: wang-person/v1
id: p_W7sbBGFLw3pXj4tgKRKqhx
status: active
merged_into: null
display_name: 王镐
cbdb_id: 175474
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pGSfnj166AVNnNcUAsNXCs
        subject_person_id: p_W7sbBGFLw3pXj4tgKRKqhx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王镐（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175474 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3MFf5YozZMJ4TCTDEQ6KwD
          claim_id: c_pGSfnj166AVNnNcUAsNXCs
          source_id: s_tFTUcEu5S49pbtsV1ms4aH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tFTUcEu5S49pbtsV1ms4aH
            source_type: api_record
            title: 维基数据：王镐（Q45661804）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661804
            external_identifier: Q45661804
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
        - id: cs_S4RrUcTyqesI8a2a6j_2XS
          claim_id: c_pGSfnj166AVNnNcUAsNXCs
          source_id: s_7UGoTBSHhk6PsaiwGZeuUq
          stance: supports
          locator: CBDB:175474
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7UGoTBSHhk6PsaiwGZeuUq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鎬（175474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175474&o=json
            external_identifier: CBDB:175474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:04.263Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_s9p6M8Uk7RuAKMgsGY3tkM
        subject_person_id: p_W7sbBGFLw3pXj4tgKRKqhx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TAYZyrQtqA15QKP2j2MEdN
          claim_id: c_s9p6M8Uk7RuAKMgsGY3tkM
          source_id: s_tFTUcEu5S49pbtsV1ms4aH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tFTUcEu5S49pbtsV1ms4aH
            source_type: api_record
            title: 维基数据：王镐（Q45661804）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661804
            external_identifier: Q45661804
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iHpqC27i5iJn22mni5cmHM
        subject_person_id: p_W7sbBGFLw3pXj4tgKRKqhx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王镐
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_A2un1suPpDkiLs5JLMB7Mk
          claim_id: c_iHpqC27i5iJn22mni5cmHM
          source_id: s_tFTUcEu5S49pbtsV1ms4aH
          stance: supports
          locator: Q45661804
          quotation: null
          interpretation_note: null
          source:
            id: s_tFTUcEu5S49pbtsV1ms4aH
            source_type: api_record
            title: 维基数据：王镐（Q45661804）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661804
            external_identifier: Q45661804
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
        - id: cs_TTMwVU6X4AQ8a6w7kq37WF
          claim_id: c_iHpqC27i5iJn22mni5cmHM
          source_id: s_7UGoTBSHhk6PsaiwGZeuUq
          stance: supports
          locator: Q45661804
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_o6j4MMCLRwPnRNA5r8geX6
        subject_person_id: p_ha5m4LN9UakVx5unFGkpVX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W7sbBGFLw3pXj4tgKRKqhx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_aafr6x7g8XnxWteVpw3S5K
          claim_id: c_o6j4MMCLRwPnRNA5r8geX6
          source_id: s_kbAVZNXV2iP2or6UX1J3Mm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kbAVZNXV2iP2or6UX1J3Mm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迺（175472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175472&o=json
            external_identifier: CBDB:175472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
        - id: cs_coLCky4Fyr2zWPCYsqmFrb
          claim_id: c_o6j4MMCLRwPnRNA5r8geX6
          source_id: s_v93UjDK4HtFgtC7k5uYMK8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_v93UjDK4HtFgtC7k5uYMK8
            source_type: api_record
            title: 维基数据：王迺（Q45661685）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661685
            external_identifier: Q45661685
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_HFBNjA2f36svL9858L8DES
          claim_id: c_o6j4MMCLRwPnRNA5r8geX6
          source_id: s_tFTUcEu5S49pbtsV1ms4aH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tFTUcEu5S49pbtsV1ms4aH
            source_type: api_record
            title: 维基数据：王镐（Q45661804）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661804
            external_identifier: Q45661804
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
        - id: cs_z3CVpxCZnNedcyfpMPHTGW
          claim_id: c_o6j4MMCLRwPnRNA5r8geX6
          source_id: s_7UGoTBSHhk6PsaiwGZeuUq
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7UGoTBSHhk6PsaiwGZeuUq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鎬（175474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175474&o=json
            external_identifier: CBDB:175474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:04.263Z
            metadata_json: null
      object_person:
        id: p_ha5m4LN9UakVx5unFGkpVX
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

# 王镐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王镐（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175474 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王镐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ha5m4LN9UakVx5unFGkpVX | 王迺 | accepted |

## 外部来源

- [维基数据：王镐（Q45661804）](https://www.wikidata.org/wiki/Q45661804)
- [维基数据：王迺（Q45661685）](https://www.wikidata.org/wiki/Q45661685)
- [CBDB 中国历代人物传记资料库：王鎬（175474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175474&o=json)
- [CBDB 中国历代人物传记资料库：王迺（175472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175472&o=json)
