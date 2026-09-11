---
schema: wang-person/v1
id: p_BXF3dbPMGdrpkj3BGNYpWy
status: active
merged_into: null
display_name: 王文政
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JECM8LWJzyHDQLGnLtM7CD
        subject_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tQRg8Dei6CoYwUwQBFMhuE
          claim_id: c_JECM8LWJzyHDQLGnLtM7CD
          source_id: s_sVyKijqH5FuBXfq1FgHznE
          stance: supports
          locator: CBDB:204419
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204419）
          source: &a1
            id: s_sVyKijqH5FuBXfq1FgHznE
            source_type: api_record
            title: 中国历代人物传记资料库：王文政（CBDB 204419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204419&o=json
            external_identifier: CBDB:204419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tNCxEvRB1Yyg4QjSp1Jzx7
        subject_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5uUvgvkpq5ZZPNp24nb8n3
          claim_id: c_tNCxEvRB1Yyg4QjSp1Jzx7
          source_id: s_sVyKijqH5FuBXfq1FgHznE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_soWJ6CiH1HqNdCdzAowyEk
        subject_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rCwp143q3C1o5LZbpBLVLY
          claim_id: c_soWJ6CiH1HqNdCdzAowyEk
          source_id: s_sVyKijqH5FuBXfq1FgHznE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_R-_Fyy1ulcVxa0yYN9uNGN
        subject_person_id: p_BHMsY8qAbSMNGU2H8r2g2y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_moukQ6tg-anoO980wL6U1s
          claim_id: c_R-_Fyy1ulcVxa0yYN9uNGN
          source_id: s_1V6Hj2BNbdrieoMYggXvK9
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1V6Hj2BNbdrieoMYggXvK9
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 318793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318793&o=json
            external_identifier: CBDB:318793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BHMsY8qAbSMNGU2H8r2g2y
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文政 | accepted |
| birth.date | 1527年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BHMsY8qAbSMNGU2H8r2g2y | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文政（CBDB 204419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204419&o=json)
- [中国历代人物传记资料库：王佐（CBDB 318793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318793&o=json)
