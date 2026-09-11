---
schema: wang-person/v1
id: p_TSprqsFjCG2odyb22hhKwE
status: active
merged_into: null
display_name: 王陞元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jNdADY9ty7JFMbHUF9LXnB
        subject_person_id: p_TSprqsFjCG2odyb22hhKwE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陞元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hyxACQX8V53H12fyqdmGuf
          claim_id: c_jNdADY9ty7JFMbHUF9LXnB
          source_id: s_ZWpvhFgW5aW21EGwudKFRa
          stance: supports
          locator: CBDB:640764
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640764）
          source: &a1
            id: s_ZWpvhFgW5aW21EGwudKFRa
            source_type: api_record
            title: 中国历代人物传记资料库：王陞元（CBDB 640764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640764&o=json
            external_identifier: CBDB:640764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.196Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EP33XPpBY1pRLsMvUK6b4C
        subject_person_id: p_TSprqsFjCG2odyb22hhKwE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陞元，清人物。籍贯趙城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640764）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LDlr2k7xsvYtKEJi0VcP5L
          claim_id: c_EP33XPpBY1pRLsMvUK6b4C
          source_id: s_ZWpvhFgW5aW21EGwudKFRa
          stance: supports
          locator: CBDB:640764
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

# 王陞元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陞元 | accepted |
| bio.summary | 王陞元，清人物。籍贯趙城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640764） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王陞元（CBDB 640764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640764&o=json)
