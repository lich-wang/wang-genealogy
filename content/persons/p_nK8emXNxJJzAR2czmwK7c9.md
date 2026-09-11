---
schema: wang-person/v1
id: p_nK8emXNxJJzAR2czmwK7c9
status: active
merged_into: null
display_name: 王三策
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zRbEWX8V7BQspaoWLTKhLz
        subject_person_id: p_nK8emXNxJJzAR2czmwK7c9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三策
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4KBJiS1uPKPKfmjRpgHKra
          claim_id: c_zRbEWX8V7BQspaoWLTKhLz
          source_id: s_yGmokb7efNx3gFNcFUJtPR
          stance: supports
          locator: CBDB:327864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327864）
          source: &a1
            id: s_yGmokb7efNx3gFNcFUJtPR
            source_type: api_record
            title: 中国历代人物传记资料库：王三策（CBDB 327864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327864&o=json
            external_identifier: CBDB:327864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LSxz4ziBRqWJn2JXP3uEoF
        subject_person_id: p_nK8emXNxJJzAR2czmwK7c9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三策，明人物。嘉靖四十一年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 327864）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RgBCGER-pZj0t_zR9B8RwE
          claim_id: c_LSxz4ziBRqWJn2JXP3uEoF
          source_id: s_yGmokb7efNx3gFNcFUJtPR
          stance: supports
          locator: CBDB:327864
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

# 王三策

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三策 | accepted |
| bio.summary | 王三策，明人物。嘉靖四十一年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 327864） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三策（CBDB 327864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327864&o=json)
