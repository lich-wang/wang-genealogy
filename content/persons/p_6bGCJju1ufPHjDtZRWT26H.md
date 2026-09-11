---
schema: wang-person/v1
id: p_6bGCJju1ufPHjDtZRWT26H
status: active
merged_into: null
display_name: 王鑲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JZBDcAnaiJUtDiFk9gz4PV
        subject_person_id: p_6bGCJju1ufPHjDtZRWT26H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9hCUpx9ZyW88dSeURHLE36
          claim_id: c_JZBDcAnaiJUtDiFk9gz4PV
          source_id: s_28zrG4p2ZfALkqWWWQs6t1
          stance: supports
          locator: CBDB:640723
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640723）
          source: &a1
            id: s_28zrG4p2ZfALkqWWWQs6t1
            source_type: api_record
            title: 中国历代人物传记资料库：王鑲（CBDB 640723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640723&o=json
            external_identifier: CBDB:640723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Npam8Tu2dhPXFo3KSPUs5p
        subject_person_id: p_6bGCJju1ufPHjDtZRWT26H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑲，清人物。籍贯杭州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640723）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8nhky3f1eyeigHp0KXTrQ0
          claim_id: c_Npam8Tu2dhPXFo3KSPUs5p
          source_id: s_28zrG4p2ZfALkqWWWQs6t1
          stance: supports
          locator: CBDB:640723
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

# 王鑲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑲 | accepted |
| bio.summary | 王鑲，清人物。籍贯杭州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640723） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑲（CBDB 640723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640723&o=json)
