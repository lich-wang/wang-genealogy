---
schema: wang-person/v1
id: p_T8wtNdLDkso7djU1HjAnLi
status: active
merged_into: null
display_name: 王沭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_852Si7wV62WfwcQi1MCH9g
        subject_person_id: p_T8wtNdLDkso7djU1HjAnLi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_434dUnZNHc7EKjtDrW32T7
          claim_id: c_852Si7wV62WfwcQi1MCH9g
          source_id: s_u2HMRkRkoJmxv8ZCXz1hoZ
          stance: supports
          locator: CBDB:639057
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639057）
          source: &a1
            id: s_u2HMRkRkoJmxv8ZCXz1hoZ
            source_type: api_record
            title: 中国历代人物传记资料库：王沭（CBDB 639057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639057&o=json
            external_identifier: CBDB:639057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t6vR1NHuEbM7PxsxgGHEj8
        subject_person_id: p_T8wtNdLDkso7djU1HjAnLi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沭，清人物。籍贯寧國，入仕增廣生; 增廣生員，曾任復設訓導。（中国历代人物传记资料库 CBDB 639057）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pyxnBXmHFvDlm97DA9M1y2
          claim_id: c_t6vR1NHuEbM7PxsxgGHEj8
          source_id: s_u2HMRkRkoJmxv8ZCXz1hoZ
          stance: supports
          locator: CBDB:639057
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

# 王沭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沭 | accepted |
| bio.summary | 王沭，清人物。籍贯寧國，入仕增廣生; 增廣生員，曾任復設訓導。（中国历代人物传记资料库 CBDB 639057） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沭（CBDB 639057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639057&o=json)
