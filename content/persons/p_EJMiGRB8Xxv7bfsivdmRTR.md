---
schema: wang-person/v1
id: p_EJMiGRB8Xxv7bfsivdmRTR
status: active
merged_into: null
display_name: 王晟
cbdb_id: 175468
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XjaqUejENFxfsmAuzmBu3E
        subject_person_id: p_EJMiGRB8Xxv7bfsivdmRTR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晟（卒于856年），唐人物。籍贯咸陽，曾任未詳。（中国历代人物传记资料库 CBDB 175468）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_BEvvmZBugKxF5uXFxwvLAt
          claim_id: c_XjaqUejENFxfsmAuzmBu3E
          source_id: s_XGBkKSukNXDX69MD8G369p
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_XGBkKSukNXDX69MD8G369p
            source_type: api_record
            title: 维基数据：王晟（Q45661451）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661451
            external_identifier: Q45661451
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
        - id: cs_Od8cnBSMNswDL2fE1e7zaN
          claim_id: c_XjaqUejENFxfsmAuzmBu3E
          source_id: s_oG8Ys5tQcA87EnTNC4G2TN
          stance: supports
          locator: CBDB:175468
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oG8Ys5tQcA87EnTNC4G2TN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晟（175468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175468&o=json
            external_identifier: CBDB:175468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:02.399Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iHSTusMYwhFigTFiJRsCe7
        subject_person_id: p_EJMiGRB8Xxv7bfsivdmRTR
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
        - id: cs_HHT5yQFnJNURV3rQQbhNn8
          claim_id: c_iHSTusMYwhFigTFiJRsCe7
          source_id: s_XGBkKSukNXDX69MD8G369p
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_XGBkKSukNXDX69MD8G369p
            source_type: api_record
            title: 维基数据：王晟（Q45661451）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661451
            external_identifier: Q45661451
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_y1xHXg2Tt45cL1qLik9AKU
        subject_person_id: p_EJMiGRB8Xxv7bfsivdmRTR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晟
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_M77Ut736neAHJGGfdrCcFg
          claim_id: c_y1xHXg2Tt45cL1qLik9AKU
          source_id: s_oG8Ys5tQcA87EnTNC4G2TN
          stance: supports
          locator: Q45661451
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_QgrwLqoj1asjW9EDoxzQkV
          claim_id: c_y1xHXg2Tt45cL1qLik9AKU
          source_id: s_XGBkKSukNXDX69MD8G369p
          stance: supports
          locator: Q45661451
          quotation: null
          interpretation_note: null
          source:
            id: s_XGBkKSukNXDX69MD8G369p
            source_type: api_record
            title: 维基数据：王晟（Q45661451）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661451
            external_identifier: Q45661451
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5GZivudzMmyD3gwC4yGVzD
        subject_person_id: p_vEhXCL8FygQQwURMRVeMJc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EJMiGRB8Xxv7bfsivdmRTR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_u8qU1KqwC2uVDveLKwUQhd
          claim_id: c_5GZivudzMmyD3gwC4yGVzD
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
        - id: cs_z7525xgeuDdqKtydAJn4Wu
          claim_id: c_5GZivudzMmyD3gwC4yGVzD
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
        - id: cs_7PryUUNqRNzZ1BdQxKuG9n
          claim_id: c_5GZivudzMmyD3gwC4yGVzD
          source_id: s_XGBkKSukNXDX69MD8G369p
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_XGBkKSukNXDX69MD8G369p
            source_type: api_record
            title: 维基数据：王晟（Q45661451）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661451
            external_identifier: Q45661451
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
        - id: cs_39gJJGMYBhJDZrUFi92P2T
          claim_id: c_5GZivudzMmyD3gwC4yGVzD
          source_id: s_oG8Ys5tQcA87EnTNC4G2TN
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_oG8Ys5tQcA87EnTNC4G2TN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晟（175468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175468&o=json
            external_identifier: CBDB:175468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:02.399Z
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

# 王晟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晟（卒于856年），唐人物。籍贯咸陽，曾任未詳。（中国历代人物传记资料库 CBDB 175468） | accepted |
| death.date | 856年 | accepted |
| name.primary | 王晟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vEhXCL8FygQQwURMRVeMJc | 王长文 | accepted |

## 外部来源

- [维基数据：王晟（Q45661451）](https://www.wikidata.org/wiki/Q45661451)
- [维基数据：王长文（Q45661148）](https://www.wikidata.org/wiki/Q45661148)
- [CBDB 中国历代人物传记资料库：王晟（175468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175468&o=json)
- [CBDB 中国历代人物传记资料库：王長文（175463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json)
