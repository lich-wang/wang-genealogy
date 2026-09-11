---
schema: wang-person/v1
id: p_QP3NwvKZSaBQQRph12F9S8
status: active
merged_into: null
display_name: 王頤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B714Fx2VDrP4GXhtR7YM1r
        subject_person_id: p_QP3NwvKZSaBQQRph12F9S8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tzXXCBpmv4FgjgCq86GYrw
          claim_id: c_B714Fx2VDrP4GXhtR7YM1r
          source_id: s_bTSXycdJZLGF666BU27ZvF
          stance: supports
          locator: CBDB:34068
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34068）
          source: &a1
            id: s_bTSXycdJZLGF666BU27ZvF
            source_type: api_record
            title: 中国历代人物传记资料库：王頤（CBDB 34068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34068&o=json
            external_identifier: CBDB:34068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EY2pbkYE1B8zPvbLVwJixc
        subject_person_id: p_QP3NwvKZSaBQQRph12F9S8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1130年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2vF7Wpr5yj2tGn5KmhGmqz
          claim_id: c_EY2pbkYE1B8zPvbLVwJixc
          source_id: s_bTSXycdJZLGF666BU27ZvF
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
        id: c_miSc832KS1N9xyohVMcZYA
        subject_person_id: p_QP3NwvKZSaBQQRph12F9S8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YN3kvkGaXsTwPX59GS4tNP
          claim_id: c_miSc832KS1N9xyohVMcZYA
          source_id: s_bTSXycdJZLGF666BU27ZvF
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
        id: c_qNo4Qw2ziKAMmZX7KsGNyy
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QP3NwvKZSaBQQRph12F9S8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qbswn1eoZ4hPNxteOYxn8A
          claim_id: c_qNo4Qw2ziKAMmZX7KsGNyy
          source_id: s_bTSXycdJZLGF666BU27ZvF
          stance: supports
          locator: 全宋文，卷 5677：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WFnoT4AbtuEmwq5jbDJDqe
        status: active
        display_name: 王恬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王頤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頤 | accepted |
| birth.date | 1130年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WFnoT4AbtuEmwq5jbDJDqe | 王恬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王頤（CBDB 34068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34068&o=json)
