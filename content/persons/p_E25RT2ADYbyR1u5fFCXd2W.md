---
schema: wang-person/v1
id: p_E25RT2ADYbyR1u5fFCXd2W
status: active
merged_into: null
display_name: 王儀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6xh23utD26cnNiGW2EXwKg
        subject_person_id: p_E25RT2ADYbyR1u5fFCXd2W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BJX64Kuh99M43YB8LdNouJ
          claim_id: c_6xh23utD26cnNiGW2EXwKg
          source_id: s_gwQbM6YmJ9anxZDDgijWSH
          stance: supports
          locator: CBDB:693231
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693231）
          source: &a1
            id: s_gwQbM6YmJ9anxZDDgijWSH
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 693231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693231&o=json
            external_identifier: CBDB:693231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.652Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UXJwaQFUTXZ683t2QJKFwC
        subject_person_id: p_E25RT2ADYbyR1u5fFCXd2W
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
        - id: cs_ExrYsz8pFB3JW3BGkqXU8H
          claim_id: c_UXJwaQFUTXZ683t2QJKFwC
          source_id: s_gwQbM6YmJ9anxZDDgijWSH
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

# 王儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儀（CBDB 693231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693231&o=json)
