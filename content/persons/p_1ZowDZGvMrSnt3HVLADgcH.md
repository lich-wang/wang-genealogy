---
schema: wang-person/v1
id: p_1ZowDZGvMrSnt3HVLADgcH
status: active
merged_into: null
display_name: 王允才
cbdb_id: 384799
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1j8TqNFU4dqHXQkth6eAJt
        subject_person_id: p_1ZowDZGvMrSnt3HVLADgcH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允才，宋人物。籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 384799）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_CmAq6wgZwqKuNZ56ASaLvc
          claim_id: c_1j8TqNFU4dqHXQkth6eAJt
          source_id: s_JhKERHwGVFk1fy98yqSgQN
          stance: supports
          locator: CBDB:384799
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JhKERHwGVFk1fy98yqSgQN
            source_type: api_record
            title: 中国历代人物传记资料库：王允才（CBDB 384799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384799&o=json
            external_identifier: CBDB:384799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:21.809Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FBydABvAcdMfJFMq74bJ6j
        subject_person_id: p_1ZowDZGvMrSnt3HVLADgcH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wZ8cy9z52iEZ5ubnwYsHBt
          claim_id: c_FBydABvAcdMfJFMq74bJ6j
          source_id: s_JhKERHwGVFk1fy98yqSgQN
          stance: supports
          locator: CBDB:384799
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4801-4900）｜历史性依据：CBDB 朝代 = 宋
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

# 王允才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王允才，宋人物。籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 384799） | accepted |
| name.primary | 王允才 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允才（CBDB 384799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384799&o=json)
