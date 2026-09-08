---
schema: wang-person/v1
id: p_VczHkFQYHiLCrjxskrUgAh
status: active
merged_into: null
display_name: 王升
cbdb_id: 175469
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B3poZfpTHXuRxMv2fY2xSd
        subject_person_id: p_VczHkFQYHiLCrjxskrUgAh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升（卒于856年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175469 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_udDdQVa9Gza4HW4s5EHc2M
          claim_id: c_B3poZfpTHXuRxMv2fY2xSd
          source_id: s_GkDw6Zh7nJAm7HG3ASoF5N
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_GkDw6Zh7nJAm7HG3ASoF5N
            source_type: api_record
            title: 维基数据：王升（Q45661509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661509
            external_identifier: Q45661509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
        - id: cs_uryqCtCeBFuulSQeTW506P
          claim_id: c_B3poZfpTHXuRxMv2fY2xSd
          source_id: s_qHiurHaUcAa1CuwjXWcWq7
          stance: supports
          locator: CBDB:175469
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qHiurHaUcAa1CuwjXWcWq7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昇（175469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175469&o=json
            external_identifier: CBDB:175469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:02.390Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CoG1tFEPDti9hcMsPXSrg7
        subject_person_id: p_VczHkFQYHiLCrjxskrUgAh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 856年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0856-01-01
            latest: 0856-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rJfLHSebPYxuh4w3yj6tFn
          claim_id: c_CoG1tFEPDti9hcMsPXSrg7
          source_id: s_GkDw6Zh7nJAm7HG3ASoF5N
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_GkDw6Zh7nJAm7HG3ASoF5N
            source_type: api_record
            title: 维基数据：王升（Q45661509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661509
            external_identifier: Q45661509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kXMGGHB9bqYsa2VxevMPEV
        subject_person_id: p_VczHkFQYHiLCrjxskrUgAh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7pDfivmfD4ue25kY2ueAm9
          claim_id: c_kXMGGHB9bqYsa2VxevMPEV
          source_id: s_qHiurHaUcAa1CuwjXWcWq7
          stance: supports
          locator: Q45661509
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_cP41F5RD58MbjL3nGKzuwy
          claim_id: c_kXMGGHB9bqYsa2VxevMPEV
          source_id: s_GkDw6Zh7nJAm7HG3ASoF5N
          stance: supports
          locator: Q45661509
          quotation: null
          interpretation_note: null
          source:
            id: s_GkDw6Zh7nJAm7HG3ASoF5N
            source_type: api_record
            title: 维基数据：王升（Q45661509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661509
            external_identifier: Q45661509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Nygymsb1NWbWJG85V9kkPN
        subject_person_id: p_vEhXCL8FygQQwURMRVeMJc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VczHkFQYHiLCrjxskrUgAh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6QEuxoUwGA7QQKQjfJZ2US
          claim_id: c_Nygymsb1NWbWJG85V9kkPN
          source_id: s_7GmMcPgx4bg8fGLDs9ngLk
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7GmMcPgx4bg8fGLDs9ngLk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王長文（175463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json
            external_identifier: CBDB:175463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
        - id: cs_NMY6Jn6Wqc7rVXHwQQM4X4
          claim_id: c_Nygymsb1NWbWJG85V9kkPN
          source_id: s_XqngANYUVtYQtG6CooyTkB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XqngANYUVtYQtG6CooyTkB
            source_type: api_record
            title: 维基数据：王长文（Q45661148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661148
            external_identifier: Q45661148
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_S2TJep9j7EkHYFfFfQ2prj
          claim_id: c_Nygymsb1NWbWJG85V9kkPN
          source_id: s_GkDw6Zh7nJAm7HG3ASoF5N
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GkDw6Zh7nJAm7HG3ASoF5N
            source_type: api_record
            title: 维基数据：王升（Q45661509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661509
            external_identifier: Q45661509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
        - id: cs_tr94vNrGhf6yW5AEUEgh7e
          claim_id: c_Nygymsb1NWbWJG85V9kkPN
          source_id: s_qHiurHaUcAa1CuwjXWcWq7
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_qHiurHaUcAa1CuwjXWcWq7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昇（175469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175469&o=json
            external_identifier: CBDB:175469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:02.390Z
            metadata_json: null
      object_person:
        id: p_vEhXCL8FygQQwURMRVeMJc
        status: active
        display_name: 王长文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王升（卒于856年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175469 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 856年 | accepted |
| name.primary | 王升 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vEhXCL8FygQQwURMRVeMJc | 王长文 | accepted |

## 外部来源

- [维基数据：王升（Q45661509）](https://www.wikidata.org/wiki/Q45661509)
- [维基数据：王长文（Q45661148）](https://www.wikidata.org/wiki/Q45661148)
- [CBDB 中国历代人物传记资料库：王昇（175469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175469&o=json)
- [CBDB 中国历代人物传记资料库：王長文（175463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json)
