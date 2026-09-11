---
schema: wang-person/v1
id: p_MQ9r9Qjt2Dybq1fuAJe8L9
status: active
merged_into: null
display_name: 王皋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8KeiUdEEbz1hqXmfh8C2V1
        subject_person_id: p_MQ9r9Qjt2Dybq1fuAJe8L9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7T5wNkTnXJRjQJx5L7FN1J
          claim_id: c_8KeiUdEEbz1hqXmfh8C2V1
          source_id: s_3r7S9DFXZ6fYBpgm56KibY
          stance: supports
          locator: CBDB:98004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（98004）
          source: &a1
            id: s_3r7S9DFXZ6fYBpgm56KibY
            source_type: api_record
            title: 中国历代人物传记资料库：王皋（CBDB 98004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98004&o=json
            external_identifier: CBDB:98004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DrzkyGxdMTjQQFJ4t1MyRy
        subject_person_id: p_MQ9r9Qjt2Dybq1fuAJe8L9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皋，宋人物。曾任尚書省兵部職方司員外郎。（中国历代人物传记资料库 CBDB 98004）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B9imDce0EWWP8s-3Hgwx88
          claim_id: c_DrzkyGxdMTjQQFJ4t1MyRy
          source_id: s_3r7S9DFXZ6fYBpgm56KibY
          stance: supports
          locator: CBDB:98004
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

# 王皋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王皋 | accepted |
| bio.summary | 王皋，宋人物。曾任尚書省兵部職方司員外郎。（中国历代人物传记资料库 CBDB 98004） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王皋（CBDB 98004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98004&o=json)
