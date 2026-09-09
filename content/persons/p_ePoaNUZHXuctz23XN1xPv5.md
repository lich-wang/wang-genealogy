---
schema: wang-person/v1
id: p_ePoaNUZHXuctz23XN1xPv5
status: active
merged_into: null
display_name: 王珤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SNX37H4uAAGbmbNAhn1RPi
        subject_person_id: p_ePoaNUZHXuctz23XN1xPv5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UVjTF5VepBmWcL3jMVyaGs
          claim_id: c_SNX37H4uAAGbmbNAhn1RPi
          source_id: s_nJFu1D7iWY3jKXk8j2xYvf
          stance: supports
          locator: CBDB:268955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268955）
          source: &a1
            id: s_nJFu1D7iWY3jKXk8j2xYvf
            source_type: api_record
            title: 中国历代人物传记资料库：王珤（CBDB 268955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268955&o=json
            external_identifier: CBDB:268955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XdxsXPwmzfphrggeu34iKj
        subject_person_id: p_ePoaNUZHXuctz23XN1xPv5
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
        - id: cs_DkGhdX3cuC4hUJVXGPRQ7r
          claim_id: c_XdxsXPwmzfphrggeu34iKj
          source_id: s_nJFu1D7iWY3jKXk8j2xYvf
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

# 王珤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珤 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珤（CBDB 268955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268955&o=json)
