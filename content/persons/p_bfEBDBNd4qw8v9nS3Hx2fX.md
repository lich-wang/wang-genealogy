---
schema: wang-person/v1
id: p_bfEBDBNd4qw8v9nS3Hx2fX
status: active
merged_into: null
display_name: 王彦范
cbdb_id: 175414
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DwZgJs2aVMWDtzW44gaR2E
        subject_person_id: p_bfEBDBNd4qw8v9nS3Hx2fX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彦范（卒于968年），五代人物。中国历代人物传记资料库（CBDB）以人物编号 175414 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_yuf4g1Pg6X8FPtPGh7J5Yz
          claim_id: c_DwZgJs2aVMWDtzW44gaR2E
          source_id: s_F3SibBTvZHGkqyNZaneBpj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_F3SibBTvZHGkqyNZaneBpj
            source_type: api_record
            title: 维基数据：王彦范（Q45658226）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658226
            external_identifier: Q45658226
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.630Z
            metadata_json: null
        - id: cs_prJrALmKzRWSqHs2qZejxW
          claim_id: c_DwZgJs2aVMWDtzW44gaR2E
          source_id: s_x3hnSCk9PkRWs8kuJnFL6X
          stance: supports
          locator: CBDB:175414
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_x3hnSCk9PkRWs8kuJnFL6X
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彥範（175414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175414&o=json
            external_identifier: CBDB:175414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:00.951Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GHFq9TgKXPR1FyaGKxQsSL
        subject_person_id: p_bfEBDBNd4qw8v9nS3Hx2fX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 968年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0968-01-01
            latest: 0968-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NQZBYEN3sUn99YBPDvGmEJ
          claim_id: c_GHFq9TgKXPR1FyaGKxQsSL
          source_id: s_F3SibBTvZHGkqyNZaneBpj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_F3SibBTvZHGkqyNZaneBpj
            source_type: api_record
            title: 维基数据：王彦范（Q45658226）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658226
            external_identifier: Q45658226
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.630Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CD1HgwA9D3fL3DJoYoXunz
        subject_person_id: p_bfEBDBNd4qw8v9nS3Hx2fX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彦范
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_35Uwi7z1f8KBGGEP2DMdFU
          claim_id: c_CD1HgwA9D3fL3DJoYoXunz
          source_id: s_F3SibBTvZHGkqyNZaneBpj
          stance: supports
          locator: Q45658226
          quotation: null
          interpretation_note: null
          source:
            id: s_F3SibBTvZHGkqyNZaneBpj
            source_type: api_record
            title: 维基数据：王彦范（Q45658226）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658226
            external_identifier: Q45658226
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.630Z
            metadata_json: null
        - id: cs_AkVsDDc7gn9nyDQJ8a54Ks
          claim_id: c_CD1HgwA9D3fL3DJoYoXunz
          source_id: s_x3hnSCk9PkRWs8kuJnFL6X
          stance: supports
          locator: Q45658226
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5UJkkE1GdPvNuiWknMKJtH
        subject_person_id: p_N5kbg3euLXxpkZM8MisDtX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bfEBDBNd4qw8v9nS3Hx2fX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fZiMiHj5FDJVWFKCTze3qv
          claim_id: c_5UJkkE1GdPvNuiWknMKJtH
          source_id: s_PFGE112YyCkC2L3u1Q1Bq9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PFGE112YyCkC2L3u1Q1Bq9
            source_type: api_record
            title: 维基数据：王慎（Q45658047）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658047
            external_identifier: Q45658047
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.615Z
            metadata_json: null
        - id: cs_xvkfrY9MCKcE2Agy7Fib78
          claim_id: c_5UJkkE1GdPvNuiWknMKJtH
          source_id: s_kVkZ2KjGp9ZKsJj8B2CQqq
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kVkZ2KjGp9ZKsJj8B2CQqq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慎（175411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175411&o=json
            external_identifier: CBDB:175411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.752Z
            metadata_json: null
        - id: cs_E7eEa2BjVUaJHCtyLHFz9x
          claim_id: c_5UJkkE1GdPvNuiWknMKJtH
          source_id: s_F3SibBTvZHGkqyNZaneBpj
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_F3SibBTvZHGkqyNZaneBpj
            source_type: api_record
            title: 维基数据：王彦范（Q45658226）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658226
            external_identifier: Q45658226
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.630Z
            metadata_json: null
        - id: cs_7MJS1jRmNjAJUT3Bi8K8BM
          claim_id: c_5UJkkE1GdPvNuiWknMKJtH
          source_id: s_x3hnSCk9PkRWs8kuJnFL6X
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_x3hnSCk9PkRWs8kuJnFL6X
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彥範（175414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175414&o=json
            external_identifier: CBDB:175414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:00.951Z
            metadata_json: null
      object_person:
        id: p_N5kbg3euLXxpkZM8MisDtX
        status: active
        display_name: 王慎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彦范

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彦范（卒于968年），五代人物。中国历代人物传记资料库（CBDB）以人物编号 175414 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 968年 | accepted |
| name.primary | 王彦范 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N5kbg3euLXxpkZM8MisDtX | 王慎 | accepted |

## 外部来源

- [维基数据：王慎（Q45658047）](https://www.wikidata.org/wiki/Q45658047)
- [维基数据：王彦范（Q45658226）](https://www.wikidata.org/wiki/Q45658226)
- [CBDB 中国历代人物传记资料库：王慎（175411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175411&o=json)
- [CBDB 中国历代人物传记资料库：王彥範（175414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175414&o=json)
