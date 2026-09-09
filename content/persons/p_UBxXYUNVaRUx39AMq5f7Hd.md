---
schema: wang-person/v1
id: p_UBxXYUNVaRUx39AMq5f7Hd
status: active
merged_into: null
display_name: 王鼎貽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YCD4dBw3KBNsydzXfatK4C
        subject_person_id: p_UBxXYUNVaRUx39AMq5f7Hd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎貽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5v9j5pMnJ27Cyg5HQ9T4C8
          claim_id: c_YCD4dBw3KBNsydzXfatK4C
          source_id: s_5FF3H2xPQTU8Ko9HWFc4zP
          stance: supports
          locator: CBDB:641050
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641050）
          source: &a1
            id: s_5FF3H2xPQTU8Ko9HWFc4zP
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎貽（CBDB 641050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641050&o=json
            external_identifier: CBDB:641050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.451Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XGFWxWoq4DgpWzszRtTBsj
        subject_person_id: p_UBxXYUNVaRUx39AMq5f7Hd
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
        - id: cs_ci5jKaPhv5BuK8ic7cYkcU
          claim_id: c_XGFWxWoq4DgpWzszRtTBsj
          source_id: s_5FF3H2xPQTU8Ko9HWFc4zP
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

# 王鼎貽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎貽 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎貽（CBDB 641050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641050&o=json)
