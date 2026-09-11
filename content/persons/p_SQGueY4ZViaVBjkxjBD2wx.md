---
schema: wang-person/v1
id: p_SQGueY4ZViaVBjkxjBD2wx
status: active
merged_into: null
display_name: 王尹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7KBzkE7eP6WpEBwBmfosSy
        subject_person_id: p_SQGueY4ZViaVBjkxjBD2wx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fo8KMwujoHfuaaR5r4skDA
          claim_id: c_7KBzkE7eP6WpEBwBmfosSy
          source_id: s_sGnFjeUrhaHLZUEMQM33QC
          stance: supports
          locator: CBDB:342061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342061）
          source: &a1
            id: s_sGnFjeUrhaHLZUEMQM33QC
            source_type: api_record
            title: 中国历代人物传记资料库：王尹（CBDB 342061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342061&o=json
            external_identifier: CBDB:342061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9XKJUpVNA4786gAKmAtRVE
        subject_person_id: p_SQGueY4ZViaVBjkxjBD2wx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尹，清人物。明清進士進士，籍贯懷寧，入仕進士。（中国历代人物传记资料库 CBDB 342061）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jmdKesYmaDV0it0k27MryN
          claim_id: c_9XKJUpVNA4786gAKmAtRVE
          source_id: s_sGnFjeUrhaHLZUEMQM33QC
          stance: supports
          locator: CBDB:342061
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王尹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尹 | accepted |
| bio.summary | 王尹，清人物。明清進士進士，籍贯懷寧，入仕進士。（中国历代人物传记资料库 CBDB 342061） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尹（CBDB 342061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342061&o=json)
