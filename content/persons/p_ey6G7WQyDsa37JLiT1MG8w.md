---
schema: wang-person/v1
id: p_ey6G7WQyDsa37JLiT1MG8w
status: active
merged_into: null
display_name: 王叔鸾
cbdb_id: 175504
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iFP6rHJSjX3AGnRJ8dJaUV
        subject_person_id: p_ey6G7WQyDsa37JLiT1MG8w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔鸾（卒于875年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175504）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_wYsKsuKL6eVECd1N3hZ3Hk
          claim_id: c_iFP6rHJSjX3AGnRJ8dJaUV
          source_id: s_iqxseeUJHYDjgci9MoRDtP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_iqxseeUJHYDjgci9MoRDtP
            source_type: api_record
            title: 维基数据：王叔鸾（Q45663547）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663547
            external_identifier: Q45663547
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.662Z
            metadata_json: null
        - id: cs_QUft86uyTxkY3CYzzrPbXm
          claim_id: c_iFP6rHJSjX3AGnRJ8dJaUV
          source_id: s_4MDP5huAkEWwZTrWQ6p1w6
          stance: supports
          locator: CBDB:175504
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4MDP5huAkEWwZTrWQ6p1w6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王叔鸞（175504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175504&o=json
            external_identifier: CBDB:175504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:07.839Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TfjAwYLXUmKZ19FdWgsfYt
        subject_person_id: p_ey6G7WQyDsa37JLiT1MG8w
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 875年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0875-01-01
            latest: 0875-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SCUSBGefbgqyQKx28sA5wB
          claim_id: c_TfjAwYLXUmKZ19FdWgsfYt
          source_id: s_iqxseeUJHYDjgci9MoRDtP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_iqxseeUJHYDjgci9MoRDtP
            source_type: api_record
            title: 维基数据：王叔鸾（Q45663547）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663547
            external_identifier: Q45663547
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.662Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_97epHnroxLmNP4qMpTbmSp
        subject_person_id: p_ey6G7WQyDsa37JLiT1MG8w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔鸾
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_E7tXD2GcDcTLhxDK9nJXgE
          claim_id: c_97epHnroxLmNP4qMpTbmSp
          source_id: s_4MDP5huAkEWwZTrWQ6p1w6
          stance: supports
          locator: Q45663547
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_whPmyXkzWiEw9hgadXJdPq
          claim_id: c_97epHnroxLmNP4qMpTbmSp
          source_id: s_iqxseeUJHYDjgci9MoRDtP
          stance: supports
          locator: Q45663547
          quotation: null
          interpretation_note: null
          source:
            id: s_iqxseeUJHYDjgci9MoRDtP
            source_type: api_record
            title: 维基数据：王叔鸾（Q45663547）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663547
            external_identifier: Q45663547
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.662Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_atpe1mkMDWE9rKnWPUDMFf
        subject_person_id: p_TyJ2M3ZheRX5T2BF68hTVk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ey6G7WQyDsa37JLiT1MG8w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PjE9bbCuT5tGvdvGQ4MLyq
          claim_id: c_atpe1mkMDWE9rKnWPUDMFf
          source_id: s_w6Eqp9zJRFFLrBraexCCYD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_w6Eqp9zJRFFLrBraexCCYD
            source_type: api_record
            title: 维基数据：王源中（Q16903986）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16903986
            external_identifier: Q16903986
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.578Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BA%90%E4%B8%AD
        - id: cs_Yc2z3shmMcz4cJCZYsFSSE
          claim_id: c_atpe1mkMDWE9rKnWPUDMFf
          source_id: s_obzovB79XtaLoD1NBN8fF4
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_obzovB79XtaLoD1NBN8fF4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源中（175500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175500&o=json
            external_identifier: CBDB:175500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:41.738Z
            metadata_json: null
        - id: cs_7DUuV1TwjhP1qJhVS581NJ
          claim_id: c_atpe1mkMDWE9rKnWPUDMFf
          source_id: s_iqxseeUJHYDjgci9MoRDtP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iqxseeUJHYDjgci9MoRDtP
            source_type: api_record
            title: 维基数据：王叔鸾（Q45663547）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663547
            external_identifier: Q45663547
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.662Z
            metadata_json: null
        - id: cs_MWmtWs3YkPMJBKyu88uYox
          claim_id: c_atpe1mkMDWE9rKnWPUDMFf
          source_id: s_4MDP5huAkEWwZTrWQ6p1w6
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_4MDP5huAkEWwZTrWQ6p1w6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王叔鸞（175504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175504&o=json
            external_identifier: CBDB:175504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:07.839Z
            metadata_json: null
      object_person:
        id: p_TyJ2M3ZheRX5T2BF68hTVk
        status: active
        display_name: 王源中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王叔鸾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王叔鸾（卒于875年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175504） | accepted |
| death.date | 875年 | accepted |
| name.primary | 王叔鸾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TyJ2M3ZheRX5T2BF68hTVk | 王源中 | accepted |

## 外部来源

- [维基数据：王叔鸾（Q45663547）](https://www.wikidata.org/wiki/Q45663547)
- [维基数据：王源中（Q16903986）](https://www.wikidata.org/wiki/Q16903986)
- [CBDB 中国历代人物传记资料库：王叔鸞（175504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175504&o=json)
- [CBDB 中国历代人物传记资料库：王源中（175500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175500&o=json)
