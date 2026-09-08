---
schema: wang-person/v1
id: p_kKrz1QMZM38oh9Cm3WzWm4
status: active
merged_into: null
display_name: 王早
cbdb_id: 175464
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DqzgTzjR587RjaGyZAMH4W
        subject_person_id: p_kKrz1QMZM38oh9Cm3WzWm4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王早（卒于856年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任丞。中国历代人物传记资料库（CBDB）以人物编号 175464 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_iE2iEXraiTUmn8jBwpEGV9
          claim_id: c_DqzgTzjR587RjaGyZAMH4W
          source_id: s_Zj8osAMYEWE8nFRE19KQA3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Zj8osAMYEWE8nFRE19KQA3
            source_type: api_record
            title: 维基数据：王早（Q45661209）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661209
            external_identifier: Q45661209
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_fQ1i1S5vvB0em842kObvko
          claim_id: c_DqzgTzjR587RjaGyZAMH4W
          source_id: s_3LAufnYun895DWL6aDM1XW
          stance: supports
          locator: CBDB:175464
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3LAufnYun895DWL6aDM1XW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王早（175464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175464&o=json
            external_identifier: CBDB:175464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.624Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HitB2TJ4YnZ93WaU8zkMky
        subject_person_id: p_kKrz1QMZM38oh9Cm3WzWm4
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
        - id: cs_PoLfDwDonGjVRqtV7e2xu1
          claim_id: c_HitB2TJ4YnZ93WaU8zkMky
          source_id: s_Zj8osAMYEWE8nFRE19KQA3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Zj8osAMYEWE8nFRE19KQA3
            source_type: api_record
            title: 维基数据：王早（Q45661209）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661209
            external_identifier: Q45661209
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7pu9Y7JRU9nKBCGYfXfnB1
        subject_person_id: p_kKrz1QMZM38oh9Cm3WzWm4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王早
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Rspht7j4nZTy51Fhbhs3Au
          claim_id: c_7pu9Y7JRU9nKBCGYfXfnB1
          source_id: s_3LAufnYun895DWL6aDM1XW
          stance: supports
          locator: Q45661209
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_r5wSWY7d6WSK3ZNieUyRwM
          claim_id: c_7pu9Y7JRU9nKBCGYfXfnB1
          source_id: s_Zj8osAMYEWE8nFRE19KQA3
          stance: supports
          locator: Q45661209
          quotation: null
          interpretation_note: null
          source:
            id: s_Zj8osAMYEWE8nFRE19KQA3
            source_type: api_record
            title: 维基数据：王早（Q45661209）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661209
            external_identifier: Q45661209
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PUUpzd7jD9DpPtXTuPQioM
        subject_person_id: p_vEhXCL8FygQQwURMRVeMJc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kKrz1QMZM38oh9Cm3WzWm4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XwjxNisFGFidWYYMzgePgZ
          claim_id: c_PUUpzd7jD9DpPtXTuPQioM
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
        - id: cs_xHkc4bZDMG7WQL69Kfat2D
          claim_id: c_PUUpzd7jD9DpPtXTuPQioM
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
        - id: cs_GVcMYRbyrC4NtiZQ9PXf9j
          claim_id: c_PUUpzd7jD9DpPtXTuPQioM
          source_id: s_Zj8osAMYEWE8nFRE19KQA3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Zj8osAMYEWE8nFRE19KQA3
            source_type: api_record
            title: 维基数据：王早（Q45661209）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661209
            external_identifier: Q45661209
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_19HtfCPkEgjzjjkyM6i2Zy
          claim_id: c_PUUpzd7jD9DpPtXTuPQioM
          source_id: s_3LAufnYun895DWL6aDM1XW
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3LAufnYun895DWL6aDM1XW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王早（175464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175464&o=json
            external_identifier: CBDB:175464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.624Z
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

# 王早

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王早（卒于856年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任丞。中国历代人物传记资料库（CBDB）以人物编号 175464 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 856年 | accepted |
| name.primary | 王早 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vEhXCL8FygQQwURMRVeMJc | 王长文 | accepted |

## 外部来源

- [维基数据：王早（Q45661209）](https://www.wikidata.org/wiki/Q45661209)
- [维基数据：王长文（Q45661148）](https://www.wikidata.org/wiki/Q45661148)
- [CBDB 中国历代人物传记资料库：王早（175464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175464&o=json)
- [CBDB 中国历代人物传记资料库：王長文（175463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json)
