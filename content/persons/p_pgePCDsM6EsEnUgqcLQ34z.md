---
schema: wang-person/v1
id: p_pgePCDsM6EsEnUgqcLQ34z
status: active
merged_into: null
display_name: 王序
cbdb_id: 186788
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mo21FDMoLpmxNETS9s7bQT
        subject_person_id: p_pgePCDsM6EsEnUgqcLQ34z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序（卒于837年），唐人物。CBDB 记录其籍贯记录为萬年。中国历代人物传记资料库（CBDB）以人物编号 186788 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_HcxPmxGzjw2jQDh88jJhjg
          claim_id: c_Mo21FDMoLpmxNETS9s7bQT
          source_id: s_68kdjvXSMR63XUTSM5BpMk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_68kdjvXSMR63XUTSM5BpMk
            source_type: api_record
            title: 维基数据：王序（Q45688275）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45688275
            external_identifier: Q45688275
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:24.129Z
            metadata_json: null
        - id: cs_nZbfb8V_0xu4x8M2bcCqMH
          claim_id: c_Mo21FDMoLpmxNETS9s7bQT
          source_id: s_6Fn28pnFALNXqm178Y6ZBr
          stance: supports
          locator: CBDB:186788
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6Fn28pnFALNXqm178Y6ZBr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王序（186788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186788&o=json
            external_identifier: CBDB:186788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:24.288Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_A8oGi9b7BAkhNVWLiLEarg
        subject_person_id: p_pgePCDsM6EsEnUgqcLQ34z
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 837年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0837-01-01
            latest: 0837-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jwTLGaQ76D9dgq7hpyyJQp
          claim_id: c_A8oGi9b7BAkhNVWLiLEarg
          source_id: s_68kdjvXSMR63XUTSM5BpMk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_68kdjvXSMR63XUTSM5BpMk
            source_type: api_record
            title: 维基数据：王序（Q45688275）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45688275
            external_identifier: Q45688275
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:24.129Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MWWYkHHNJno1qhhzRWmPFn
        subject_person_id: p_pgePCDsM6EsEnUgqcLQ34z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BFuCJ9LQ585wxBiThhwN94
          claim_id: c_MWWYkHHNJno1qhhzRWmPFn
          source_id: s_6Fn28pnFALNXqm178Y6ZBr
          stance: supports
          locator: Q45688275
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_QmQUjWPFR85xJLZjvntQCm
          claim_id: c_MWWYkHHNJno1qhhzRWmPFn
          source_id: s_68kdjvXSMR63XUTSM5BpMk
          stance: supports
          locator: Q45688275
          quotation: null
          interpretation_note: null
          source:
            id: s_68kdjvXSMR63XUTSM5BpMk
            source_type: api_record
            title: 维基数据：王序（Q45688275）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45688275
            external_identifier: Q45688275
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:24.129Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sWaGyViBTLshmuBzF4HG5q
        subject_person_id: p_YTkrtC1SG3UCyQcRpy3dg3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pgePCDsM6EsEnUgqcLQ34z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_82DVfjkFqkN9cQanusbANH
          claim_id: c_sWaGyViBTLshmuBzF4HG5q
          source_id: s_BG9ffhEZvcbCs6QsWWqsTw
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_BG9ffhEZvcbCs6QsWWqsTw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綰（145389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145389&o=json
            external_identifier: CBDB:145389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:49.537Z
            metadata_json: null
        - id: cs_CuT731EyzPVKTK9MgLwNov
          claim_id: c_sWaGyViBTLshmuBzF4HG5q
          source_id: s_C53tiXM1rEUxa17UogJ73G
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_C53tiXM1rEUxa17UogJ73G
            source_type: api_record
            title: 维基数据：王绾（Q45458523）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45458523
            external_identifier: Q45458523
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:49.386Z
            metadata_json: null
        - id: cs_mY1UzbuYm1mE6NHZpFAyNd
          claim_id: c_sWaGyViBTLshmuBzF4HG5q
          source_id: s_68kdjvXSMR63XUTSM5BpMk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_68kdjvXSMR63XUTSM5BpMk
            source_type: api_record
            title: 维基数据：王序（Q45688275）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45688275
            external_identifier: Q45688275
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:24.129Z
            metadata_json: null
        - id: cs_525mPF12y2DqtooUFxsfiK
          claim_id: c_sWaGyViBTLshmuBzF4HG5q
          source_id: s_6Fn28pnFALNXqm178Y6ZBr
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6Fn28pnFALNXqm178Y6ZBr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王序（186788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186788&o=json
            external_identifier: CBDB:186788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:24.288Z
            metadata_json: null
      object_person:
        id: p_YTkrtC1SG3UCyQcRpy3dg3
        status: active
        display_name: 王绾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王序

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王序（卒于837年），唐人物。CBDB 记录其籍贯记录为萬年。中国历代人物传记资料库（CBDB）以人物编号 186788 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 837年 | accepted |
| name.primary | 王序 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YTkrtC1SG3UCyQcRpy3dg3 | 王绾 | accepted |

## 外部来源

- [维基数据：王绾（Q45458523）](https://www.wikidata.org/wiki/Q45458523)
- [维基数据：王序（Q45688275）](https://www.wikidata.org/wiki/Q45688275)
- [CBDB 中国历代人物传记资料库：王綰（145389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145389&o=json)
- [CBDB 中国历代人物传记资料库：王序（186788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186788&o=json)
