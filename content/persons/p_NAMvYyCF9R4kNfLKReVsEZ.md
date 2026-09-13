---
schema: wang-person/v1
id: p_NAMvYyCF9R4kNfLKReVsEZ
status: active
merged_into: null
display_name: 王果
cbdb_id: 175462
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1tSV2Avk2zHiUEi5kXqzZA
        subject_person_id: p_NAMvYyCF9R4kNfLKReVsEZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王果（卒于856年），唐人物。籍贯咸陽，曾任知州、參軍。（中国历代人物传记资料库 CBDB 175462）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ZUAxXYA7PETrBBapbQd76m
          claim_id: c_1tSV2Avk2zHiUEi5kXqzZA
          source_id: s_CcAua5FQ8AZufoBSCNLpvw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CcAua5FQ8AZufoBSCNLpvw
            source_type: api_record
            title: 维基数据：王果（Q45661087）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661087
            external_identifier: Q45661087
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_Ka69LqNg4R1pflYi7tq10p
          claim_id: c_1tSV2Avk2zHiUEi5kXqzZA
          source_id: s_aibNPoLFSFXRGk4JF9KqP4
          stance: supports
          locator: CBDB:175462
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aibNPoLFSFXRGk4JF9KqP4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王果（175462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175462&o=json
            external_identifier: CBDB:175462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.637Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qdvgGBV1coHDZFm1hNXAhQ
        subject_person_id: p_NAMvYyCF9R4kNfLKReVsEZ
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
        - id: cs_gwZs5E1XGFicaFfDsB3213
          claim_id: c_qdvgGBV1coHDZFm1hNXAhQ
          source_id: s_CcAua5FQ8AZufoBSCNLpvw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CcAua5FQ8AZufoBSCNLpvw
            source_type: api_record
            title: 维基数据：王果（Q45661087）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661087
            external_identifier: Q45661087
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LEKChBjVK2jfMB4uAvWSSq
        subject_person_id: p_NAMvYyCF9R4kNfLKReVsEZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王果
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KTR5xuFHeLb6TYP8ii7YTF
          claim_id: c_LEKChBjVK2jfMB4uAvWSSq
          source_id: s_CcAua5FQ8AZufoBSCNLpvw
          stance: supports
          locator: Q45661087
          quotation: null
          interpretation_note: null
          source:
            id: s_CcAua5FQ8AZufoBSCNLpvw
            source_type: api_record
            title: 维基数据：王果（Q45661087）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661087
            external_identifier: Q45661087
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_yUbRvnjf8DUTYzLB8tDJTe
          claim_id: c_LEKChBjVK2jfMB4uAvWSSq
          source_id: s_aibNPoLFSFXRGk4JF9KqP4
          stance: supports
          locator: Q45661087
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XBh6PyATEp5GrJiBDMa8PY
        subject_person_id: p_PaPNy2CS1q35QC2Tb2fFrA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NAMvYyCF9R4kNfLKReVsEZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fC11P7DgNsZTMzdnodHbAD
          claim_id: c_XBh6PyATEp5GrJiBDMa8PY
          source_id: s_8RzFPkq3MCvhVXbSSNa4Cn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8RzFPkq3MCvhVXbSSNa4Cn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王遂（175460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175460&o=json
            external_identifier: CBDB:175460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.584Z
            metadata_json: null
        - id: cs_vZDtXVkGhVXzesrZpSNC1W
          claim_id: c_XBh6PyATEp5GrJiBDMa8PY
          source_id: s_2uFdoRoReYQS7WAxSUSUJc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_2uFdoRoReYQS7WAxSUSUJc
            source_type: api_record
            title: 维基数据：王遂（Q45660969）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660969
            external_identifier: Q45660969
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
        - id: cs_vJzMAx77NKNwht4TbAUrEy
          claim_id: c_XBh6PyATEp5GrJiBDMa8PY
          source_id: s_CcAua5FQ8AZufoBSCNLpvw
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CcAua5FQ8AZufoBSCNLpvw
            source_type: api_record
            title: 维基数据：王果（Q45661087）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661087
            external_identifier: Q45661087
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_G5LqcAFL7pai5RTzMRMc3y
          claim_id: c_XBh6PyATEp5GrJiBDMa8PY
          source_id: s_aibNPoLFSFXRGk4JF9KqP4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_aibNPoLFSFXRGk4JF9KqP4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王果（175462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175462&o=json
            external_identifier: CBDB:175462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.637Z
            metadata_json: null
      object_person:
        id: p_PaPNy2CS1q35QC2Tb2fFrA
        status: active
        display_name: 王遂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王果

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王果（卒于856年），唐人物。籍贯咸陽，曾任知州、參軍。（中国历代人物传记资料库 CBDB 175462） | accepted |
| death.date | 856年 | accepted |
| name.primary | 王果 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PaPNy2CS1q35QC2Tb2fFrA | 王遂 | accepted |

## 外部来源

- [维基数据：王果（Q45661087）](https://www.wikidata.org/wiki/Q45661087)
- [维基数据：王遂（Q45660969）](https://www.wikidata.org/wiki/Q45660969)
- [CBDB 中国历代人物传记资料库：王果（175462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175462&o=json)
- [CBDB 中国历代人物传记资料库：王遂（175460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175460&o=json)
