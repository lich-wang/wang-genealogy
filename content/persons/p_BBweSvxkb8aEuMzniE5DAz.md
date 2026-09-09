---
schema: wang-person/v1
id: p_BBweSvxkb8aEuMzniE5DAz
status: active
merged_into: null
display_name: 王正億
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bq5cpKF32EKiZ6GxLnS9sH
        subject_person_id: p_BBweSvxkb8aEuMzniE5DAz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正億
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y6AYQR3VT8LGZcXTcrRdR1
          claim_id: c_Bq5cpKF32EKiZ6GxLnS9sH
          source_id: s_sNByfog5uCk8UbxUtFzMf2
          stance: supports
          locator: CBDB:30375
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30375）
          source: &a1
            id: s_sNByfog5uCk8UbxUtFzMf2
            source_type: api_record
            title: 中国历代人物传记资料库：王正億（CBDB 30375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30375&o=json
            external_identifier: CBDB:30375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HUAuMLsoydW2M7gfu6SWyd
        subject_person_id: p_BBweSvxkb8aEuMzniE5DAz
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
        - id: cs_GDvNQG76E5jTCLgDJYdiGv
          claim_id: c_HUAuMLsoydW2M7gfu6SWyd
          source_id: s_sNByfog5uCk8UbxUtFzMf2
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
        id: c_v33MtAsm2NFKoezcbdEv6m
        subject_person_id: p_BBweSvxkb8aEuMzniE5DAz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1577年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KACPhJ84AR3N7wdjT2YP2X
          claim_id: c_v33MtAsm2NFKoezcbdEv6m
          source_id: s_sNByfog5uCk8UbxUtFzMf2
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
        id: c_HirtsXK1E9Zyq9YFgBygR3
        subject_person_id: p_BBweSvxkb8aEuMzniE5DAz
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
        - id: cs_vaMekMqQ9whKSsBZ2yRWpC
          claim_id: c_HirtsXK1E9Zyq9YFgBygR3
          source_id: s_sNByfog5uCk8UbxUtFzMf2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正億

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正億 | accepted |
| birth.date | 1527年 | accepted |
| death.date | 1577年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正億（CBDB 30375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30375&o=json)
