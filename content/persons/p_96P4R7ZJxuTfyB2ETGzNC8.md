---
schema: wang-person/v1
id: p_96P4R7ZJxuTfyB2ETGzNC8
status: active
merged_into: null
display_name: 王寶仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6uRPEF9xK1NLxgFpL7ibXK
        subject_person_id: p_96P4R7ZJxuTfyB2ETGzNC8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v74tLyvAjE3ExfeRbKu7xp
          claim_id: c_6uRPEF9xK1NLxgFpL7ibXK
          source_id: s_jzG2nhLHakGb1ZYnRBuQck
          stance: supports
          locator: CBDB:342620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342620）
          source: &a1
            id: s_jzG2nhLHakGb1ZYnRBuQck
            source_type: api_record
            title: 中国历代人物传记资料库：王寶仁（CBDB 342620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342620&o=json
            external_identifier: CBDB:342620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_piQcnrM4iF6gQW8VRDfT4n
        subject_person_id: p_96P4R7ZJxuTfyB2ETGzNC8
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
        - id: cs_HAxQR9Qjk8s1WPybaNWpNW
          claim_id: c_piQcnrM4iF6gQW8VRDfT4n
          source_id: s_jzG2nhLHakGb1ZYnRBuQck
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

# 王寶仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶仁 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶仁（CBDB 342620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342620&o=json)
