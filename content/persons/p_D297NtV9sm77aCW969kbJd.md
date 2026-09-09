---
schema: wang-person/v1
id: p_D297NtV9sm77aCW969kbJd
status: active
merged_into: null
display_name: 王清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_44WPqdC8hVwanz16n4smSV
        subject_person_id: p_D297NtV9sm77aCW969kbJd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sYysHC4RQkaUaK6Wu4NJEZ
          claim_id: c_44WPqdC8hVwanz16n4smSV
          source_id: s_ea7m2KvpYEWHTjHpU7cxif
          stance: supports
          locator: CBDB:143056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143056）
          source: &a1
            id: s_ea7m2KvpYEWHTjHpU7cxif
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 143056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143056&o=json
            external_identifier: CBDB:143056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3JnNQrEb3iGM97kBNpoymE
        subject_person_id: p_D297NtV9sm77aCW969kbJd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 699年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DvvDPzJCs5YDY3FTALW68r
          claim_id: c_3JnNQrEb3iGM97kBNpoymE
          source_id: s_ea7m2KvpYEWHTjHpU7cxif
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
        id: c_DRSDSdBCNXF6GVytMU6cjY
        subject_person_id: p_D297NtV9sm77aCW969kbJd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 756年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AeoCxWniGt2QYqGhNnF4Wf
          claim_id: c_DRSDSdBCNXF6GVytMU6cjY
          source_id: s_ea7m2KvpYEWHTjHpU7cxif
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
        id: c_yrf2uK638ULQWpiRBZUvDM
        subject_person_id: p_D297NtV9sm77aCW969kbJd
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
        - id: cs_u2ou7W95govDhqr5UQ7VB4
          claim_id: c_yrf2uK638ULQWpiRBZUvDM
          source_id: s_ea7m2KvpYEWHTjHpU7cxif
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

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| birth.date | 699年 | accepted |
| death.date | 756年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 143056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143056&o=json)
