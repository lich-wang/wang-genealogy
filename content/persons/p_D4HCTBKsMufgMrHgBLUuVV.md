---
schema: wang-person/v1
id: p_D4HCTBKsMufgMrHgBLUuVV
status: active
merged_into: null
display_name: 王行
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qh5QgadzM9jVgn48e8sdF4
        subject_person_id: p_D4HCTBKsMufgMrHgBLUuVV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rJKPupTDdD5FdWcn9fz4p4
          claim_id: c_qh5QgadzM9jVgn48e8sdF4
          source_id: s_pvZhsEBG998dFn6nXMVUg9
          stance: supports
          locator: CBDB:142493
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142493）
          source: &a1
            id: s_pvZhsEBG998dFn6nXMVUg9
            source_type: api_record
            title: 中国历代人物传记资料库：王行（CBDB 142493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142493&o=json
            external_identifier: CBDB:142493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CJhSDqGrHyVvfgUEPbi5QH
        subject_person_id: p_D4HCTBKsMufgMrHgBLUuVV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 594年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1DA7HavWgYTXxTPuSNdRuu
          claim_id: c_CJhSDqGrHyVvfgUEPbi5QH
          source_id: s_pvZhsEBG998dFn6nXMVUg9
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
        id: c_KJGqiQfXR1E7z4RtNMLwsq
        subject_person_id: p_D4HCTBKsMufgMrHgBLUuVV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 658年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AM3C1LzriAfgWof7RQMwxw
          claim_id: c_KJGqiQfXR1E7z4RtNMLwsq
          source_id: s_pvZhsEBG998dFn6nXMVUg9
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
        id: c_UKJWhHmpoJ5x8sm9HhgLZj
        subject_person_id: p_D4HCTBKsMufgMrHgBLUuVV
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
        - id: cs_WXRZVzTPARSoE7rgEdfzHk
          claim_id: c_UKJWhHmpoJ5x8sm9HhgLZj
          source_id: s_pvZhsEBG998dFn6nXMVUg9
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

# 王行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行 | accepted |
| birth.date | 594年 | accepted |
| death.date | 658年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王行（CBDB 142493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142493&o=json)
