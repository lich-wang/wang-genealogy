---
schema: wang-person/v1
id: p_FekPAGJTS2MEpfWDkLmhCu
status: active
merged_into: null
display_name: 王漪
cbdb_id: 175527
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6YhR3XPMSLDfKCoq8DAHdK
        subject_person_id: p_FekPAGJTS2MEpfWDkLmhCu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漪（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任衛尉。中国历代人物传记资料库（CBDB）以人物编号 175527 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_brkqa5DBpQyj3auXEekxXZ
          claim_id: c_6YhR3XPMSLDfKCoq8DAHdK
          source_id: s_Ld539iYsmDQVtRTgGCFh9C
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Ld539iYsmDQVtRTgGCFh9C
            source_type: api_record
            title: 维基数据：王漪（Q45664815）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664815
            external_identifier: Q45664815
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_BLhJChFtp0oJnBPHUcwnoW
          claim_id: c_6YhR3XPMSLDfKCoq8DAHdK
          source_id: s_wrud6KGDswJN4pXL3gh9Qb
          stance: supports
          locator: CBDB:175527
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wrud6KGDswJN4pXL3gh9Qb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王漪（175527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175527&o=json
            external_identifier: CBDB:175527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.563Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1EDJFZqMc3e5kNMJJDTEMR
        subject_person_id: p_FekPAGJTS2MEpfWDkLmhCu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1L4VLYqCfKDoLTwywHizXJ
          claim_id: c_1EDJFZqMc3e5kNMJJDTEMR
          source_id: s_Ld539iYsmDQVtRTgGCFh9C
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Ld539iYsmDQVtRTgGCFh9C
            source_type: api_record
            title: 维基数据：王漪（Q45664815）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664815
            external_identifier: Q45664815
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_34yArP8eRtR5GKYVFYS4Pq
        subject_person_id: p_FekPAGJTS2MEpfWDkLmhCu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漪
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9NKfpdZAHv74RVARNiCy9x
          claim_id: c_34yArP8eRtR5GKYVFYS4Pq
          source_id: s_Ld539iYsmDQVtRTgGCFh9C
          stance: supports
          locator: Q45664815
          quotation: null
          interpretation_note: null
          source:
            id: s_Ld539iYsmDQVtRTgGCFh9C
            source_type: api_record
            title: 维基数据：王漪（Q45664815）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664815
            external_identifier: Q45664815
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_aDTRhGJCc9fBUNW4c8k3jU
          claim_id: c_34yArP8eRtR5GKYVFYS4Pq
          source_id: s_wrud6KGDswJN4pXL3gh9Qb
          stance: supports
          locator: Q45664815
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W4p1iX9FJoW8JepM4xowFi
        subject_person_id: p_cGkviQ74mqPnwC4eLmu3AD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FekPAGJTS2MEpfWDkLmhCu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_EX18TV3Bk8LvYBAdFK2Mip
          claim_id: c_W4p1iX9FJoW8JepM4xowFi
          source_id: s_S3HDHGLJf9GpmQL5eDFUmW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_S3HDHGLJf9GpmQL5eDFUmW
            source_type: api_record
            title: 维基数据：王侁（Q45664762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664762
            external_identifier: Q45664762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_ftCBcMbzMvcCeAgroQxhQ9
          claim_id: c_W4p1iX9FJoW8JepM4xowFi
          source_id: s_9qDvYDyphuaW4PbCNK4SSY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9qDvYDyphuaW4PbCNK4SSY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王侁（175526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175526&o=json
            external_identifier: CBDB:175526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.123Z
            metadata_json: null
        - id: cs_A6BTurXUJGzknYnv7SCqYd
          claim_id: c_W4p1iX9FJoW8JepM4xowFi
          source_id: s_Ld539iYsmDQVtRTgGCFh9C
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Ld539iYsmDQVtRTgGCFh9C
            source_type: api_record
            title: 维基数据：王漪（Q45664815）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664815
            external_identifier: Q45664815
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_pjHABguq44YWs8aky6zS25
          claim_id: c_W4p1iX9FJoW8JepM4xowFi
          source_id: s_wrud6KGDswJN4pXL3gh9Qb
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wrud6KGDswJN4pXL3gh9Qb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王漪（175527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175527&o=json
            external_identifier: CBDB:175527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.563Z
            metadata_json: null
      object_person:
        id: p_cGkviQ74mqPnwC4eLmu3AD
        status: active
        display_name: 王侁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王漪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王漪（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任衛尉。中国历代人物传记资料库（CBDB）以人物编号 175527 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王漪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cGkviQ74mqPnwC4eLmu3AD | 王侁 | accepted |

## 外部来源

- [维基数据：王侁（Q45664762）](https://www.wikidata.org/wiki/Q45664762)
- [维基数据：王漪（Q45664815）](https://www.wikidata.org/wiki/Q45664815)
- [CBDB 中国历代人物传记资料库：王侁（175526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175526&o=json)
- [CBDB 中国历代人物传记资料库：王漪（175527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175527&o=json)
