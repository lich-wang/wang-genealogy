---
schema: wang-person/v1
id: p_EGWu3kuNQhVSiewcJGE7Qn
status: active
merged_into: null
display_name: 王弘道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ajteHsxjXQpdubtV5HyiCK
        subject_person_id: p_EGWu3kuNQhVSiewcJGE7Qn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xMnK8MJuYs2Vn5RbKjyVSn
          claim_id: c_ajteHsxjXQpdubtV5HyiCK
          source_id: s_YWgXP5Er11wfmbprC4GLQ2
          stance: supports
          locator: CBDB:270431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270431）
          source: &a1
            id: s_YWgXP5Er11wfmbprC4GLQ2
            source_type: api_record
            title: 中国历代人物传记资料库：王弘道（CBDB 270431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270431&o=json
            external_identifier: CBDB:270431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J7R4W5A51GKXvs9SHNHFgQ
        subject_person_id: p_EGWu3kuNQhVSiewcJGE7Qn
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
        - id: cs_mv4TAAAXNpLMHNCGfX4TD4
          claim_id: c_J7R4W5A51GKXvs9SHNHFgQ
          source_id: s_YWgXP5Er11wfmbprC4GLQ2
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

# 王弘道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘道 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘道（CBDB 270431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270431&o=json)
