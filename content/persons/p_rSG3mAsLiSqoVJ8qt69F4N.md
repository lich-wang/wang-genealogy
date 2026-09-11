---
schema: wang-person/v1
id: p_rSG3mAsLiSqoVJ8qt69F4N
status: active
merged_into: null
display_name: 王登先
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AUB4DLCwHkdvKwrLuj6eZP
        subject_person_id: p_rSG3mAsLiSqoVJ8qt69F4N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EYqtd3GrGAD1UHgPc3NVWu
          claim_id: c_AUB4DLCwHkdvKwrLuj6eZP
          source_id: s_qKphYRQ2fP77KrkcrKmgvs
          stance: supports
          locator: CBDB:639498
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639498）
          source: &a1
            id: s_qKphYRQ2fP77KrkcrKmgvs
            source_type: api_record
            title: 中国历代人物传记资料库：王登先（CBDB 639498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639498&o=json
            external_identifier: CBDB:639498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yfpg5etYe4R342t5qxDi9H
        subject_person_id: p_rSG3mAsLiSqoVJ8qt69F4N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登先，清人物。籍贯湖南省，入仕行伍，曾任守備。（中国历代人物传记资料库 CBDB 639498）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i8Pm4f_ClMwDf5LrWCDjRU
          claim_id: c_Yfpg5etYe4R342t5qxDi9H
          source_id: s_qKphYRQ2fP77KrkcrKmgvs
          stance: supports
          locator: CBDB:639498
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

# 王登先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登先 | accepted |
| bio.summary | 王登先，清人物。籍贯湖南省，入仕行伍，曾任守備。（中国历代人物传记资料库 CBDB 639498） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登先（CBDB 639498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639498&o=json)
