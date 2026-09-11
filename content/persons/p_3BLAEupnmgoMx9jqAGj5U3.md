---
schema: wang-person/v1
id: p_3BLAEupnmgoMx9jqAGj5U3
status: active
merged_into: null
display_name: 王文羽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PYUXBQfzMn9rWtq6dMooQ8
        subject_person_id: p_3BLAEupnmgoMx9jqAGj5U3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文羽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6mxHYt5MC5YgZBZWNpZJNa
          claim_id: c_PYUXBQfzMn9rWtq6dMooQ8
          source_id: s_apZZrera5W2yseuGYqDH8e
          stance: supports
          locator: CBDB:121806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121806）
          source: &a1
            id: s_apZZrera5W2yseuGYqDH8e
            source_type: api_record
            title: 中国历代人物传记资料库：王文羽（CBDB 121806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121806&o=json
            external_identifier: CBDB:121806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JAXWP9MFkUYxgiHV6Y9FDM
        subject_person_id: p_3BLAEupnmgoMx9jqAGj5U3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1756年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BPaS4LKiqZjx2LaNUTzWr7
          claim_id: c_JAXWP9MFkUYxgiHV6Y9FDM
          source_id: s_apZZrera5W2yseuGYqDH8e
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
        id: c_uwyAt57bdJLkYDTJr8GEz2
        subject_person_id: p_3BLAEupnmgoMx9jqAGj5U3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1824年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QzJtC28yKR6afnpDUPXQ8Y
          claim_id: c_uwyAt57bdJLkYDTJr8GEz2
          source_id: s_apZZrera5W2yseuGYqDH8e
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
        id: c_cyHJmu1tKj58xVNX2RLPQ7
        subject_person_id: p_3BLAEupnmgoMx9jqAGj5U3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WDQQC43gfRHG9PuKgL8ug8
          claim_id: c_cyHJmu1tKj58xVNX2RLPQ7
          source_id: s_apZZrera5W2yseuGYqDH8e
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
        id: c_Cm88UvA-VtWXb220Utc25v
        subject_person_id: p_gqyGCnz9XCXA3WqKdw1Xzf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3BLAEupnmgoMx9jqAGj5U3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fDdDFhrGU_5StgCkSVPbAm
          claim_id: c_Cm88UvA-VtWXb220Utc25v
          source_id: s_apZZrera5W2yseuGYqDH8e
          stance: supports
          locator: 沅湘耆舊集:二百卷：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gqyGCnz9XCXA3WqKdw1Xzf
        status: active
        display_name: 王其仁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文羽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文羽 | accepted |
| birth.date | 1756年 | accepted |
| death.date | 1824年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gqyGCnz9XCXA3WqKdw1Xzf | 王其仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文羽（CBDB 121806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121806&o=json)
