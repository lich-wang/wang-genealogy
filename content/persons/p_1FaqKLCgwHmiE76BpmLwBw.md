---
schema: wang-person/v1
id: p_1FaqKLCgwHmiE76BpmLwBw
status: active
merged_into: null
display_name: 王簪節
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YGgpwgmSH5ApFxqHYW9LaW
        subject_person_id: p_1FaqKLCgwHmiE76BpmLwBw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簪節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jDijwVb6jeT1w8EjG1u8yQ
          claim_id: c_YGgpwgmSH5ApFxqHYW9LaW
          source_id: s_JZLrdSR4pQJtQWfKCN5M66
          stance: supports
          locator: CBDB:639726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639726）
          source: &a1
            id: s_JZLrdSR4pQJtQWfKCN5M66
            source_type: api_record
            title: 中国历代人物传记资料库：王簪節（CBDB 639726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639726&o=json
            external_identifier: CBDB:639726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GCV7ZudLJQ1qXdk9TkHHjh
        subject_person_id: p_1FaqKLCgwHmiE76BpmLwBw
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
        - id: cs_yLP5nXqdNT8cqfUN2rodiQ
          claim_id: c_GCV7ZudLJQ1qXdk9TkHHjh
          source_id: s_JZLrdSR4pQJtQWfKCN5M66
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

# 王簪節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王簪節 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王簪節（CBDB 639726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639726&o=json)
