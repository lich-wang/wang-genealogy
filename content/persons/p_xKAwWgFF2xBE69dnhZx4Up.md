---
schema: wang-person/v1
id: p_xKAwWgFF2xBE69dnhZx4Up
status: active
merged_into: null
display_name: 王玉梅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bxHyA3SeYgeeeHG6yBx61u
        subject_person_id: p_xKAwWgFF2xBE69dnhZx4Up
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉梅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1j7YUECSAMKeLz9jjEfZBq
          claim_id: c_bxHyA3SeYgeeeHG6yBx61u
          source_id: s_PgygHXNCFNoHePRMd75uQZ
          stance: supports
          locator: CBDB:118984
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（118984）
          source: &a1
            id: s_PgygHXNCFNoHePRMd75uQZ
            source_type: api_record
            title: 中国历代人物传记资料库：王玉梅（CBDB 118984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118984&o=json
            external_identifier: CBDB:118984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.170Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DmLpMxLwrGyp13WPcSBqM8
        subject_person_id: p_xKAwWgFF2xBE69dnhZx4Up
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1495年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aFwfDmpZb4M92vq8JHudFS
          claim_id: c_DmLpMxLwrGyp13WPcSBqM8
          source_id: s_PgygHXNCFNoHePRMd75uQZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KaBGy7BipqrZQ68AQwcBp2
        subject_person_id: p_xKAwWgFF2xBE69dnhZx4Up
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eif2wrmLHnURdfkPWx7Buf
          claim_id: c_KaBGy7BipqrZQ68AQwcBp2
          source_id: s_PgygHXNCFNoHePRMd75uQZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YT7HUn7tcgbnDHLewxL6NN
        subject_person_id: p_xKAwWgFF2xBE69dnhZx4Up
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
        - id: cs_sETSrC8NKDwKi2kQAaRuCL
          claim_id: c_YT7HUn7tcgbnDHLewxL6NN
          source_id: s_PgygHXNCFNoHePRMd75uQZ
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
        id: c_EGpiOCTmQDPd8tbcrNau0M
        subject_person_id: p_cMt7pGMZBF9z9NEKQ4FQTq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xKAwWgFF2xBE69dnhZx4Up
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pbpDsMaXT45e1r_0DTzHwh
          claim_id: c_EGpiOCTmQDPd8tbcrNau0M
          source_id: s_PgygHXNCFNoHePRMd75uQZ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3111：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cMt7pGMZBF9z9NEKQ4FQTq
        status: active
        display_name: 王得時
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉梅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉梅 | accepted |
| birth.date | 1495年 | accepted |
| death.date | 1511年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cMt7pGMZBF9z9NEKQ4FQTq | 王得時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玉梅（CBDB 118984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118984&o=json)
