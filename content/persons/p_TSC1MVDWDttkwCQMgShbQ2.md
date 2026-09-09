---
schema: wang-person/v1
id: p_TSC1MVDWDttkwCQMgShbQ2
status: active
merged_into: null
display_name: 王遘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3tkRTcyWeHBEtai9z5Pxxk
        subject_person_id: p_TSC1MVDWDttkwCQMgShbQ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bN7FmarsS3KBWhMmxAhh7R
          claim_id: c_3tkRTcyWeHBEtai9z5Pxxk
          source_id: s_26aV296GmtJbRqLHrLgj6L
          stance: supports
          locator: CBDB:92098
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92098）
          source: &a1
            id: s_26aV296GmtJbRqLHrLgj6L
            source_type: api_record
            title: 中国历代人物传记资料库：王遘（CBDB 92098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92098&o=json
            external_identifier: CBDB:92098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.129Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vjLEEECyttK1cJ62AqDqpp
        subject_person_id: p_TSC1MVDWDttkwCQMgShbQ2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 793年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_akTQ9PNo2fDL1QEpNvRR89
          claim_id: c_vjLEEECyttK1cJ62AqDqpp
          source_id: s_26aV296GmtJbRqLHrLgj6L
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
        id: c_reAHHazbL6tdaWjri4JHUg
        subject_person_id: p_TSC1MVDWDttkwCQMgShbQ2
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
        - id: cs_14uLw2jhog3T1i7iVTdz3b
          claim_id: c_reAHHazbL6tdaWjri4JHUg
          source_id: s_26aV296GmtJbRqLHrLgj6L
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

# 王遘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遘 | accepted |
| death.date | 793年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遘（CBDB 92098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92098&o=json)
