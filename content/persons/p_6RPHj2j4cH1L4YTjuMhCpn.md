---
schema: wang-person/v1
id: p_6RPHj2j4cH1L4YTjuMhCpn
status: active
merged_into: null
display_name: 王起
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R79cFcaWB6NFgNUWbiPX5D
        subject_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UELLznzbL9GcH4GwyMjmt5
          claim_id: c_R79cFcaWB6NFgNUWbiPX5D
          source_id: s_QZUQfDNG45gtkNvmB8J354
          stance: supports
          locator: CBDB:92061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92061）
          source: &a1
            id: s_QZUQfDNG45gtkNvmB8J354
            source_type: api_record
            title: 中国历代人物传记资料库：王起（CBDB 92061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92061&o=json
            external_identifier: CBDB:92061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.110Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hyY3jRJv6EezGv6TevLHb4
        subject_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 760年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xU42Y2Bb5M1k75LBTWQYGL
          claim_id: c_hyY3jRJv6EezGv6TevLHb4
          source_id: s_QZUQfDNG45gtkNvmB8J354
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
        id: c_9QoG89tBFufjFTdE5knBus
        subject_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 847年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TB4fZ2JmhvsEhSiJ3Xq8dv
          claim_id: c_9QoG89tBFufjFTdE5knBus
          source_id: s_QZUQfDNG45gtkNvmB8J354
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
        id: c_TaS8HFGgMtVEnX5kyTm6cx
        subject_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xYbrivzD4WBSqFEi8u6jYC
          claim_id: c_TaS8HFGgMtVEnX5kyTm6cx
          source_id: s_QZUQfDNG45gtkNvmB8J354
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

# 王起

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起 | accepted |
| birth.date | 760年 | accepted |
| death.date | 847年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王起（CBDB 92061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92061&o=json)
