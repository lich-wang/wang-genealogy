---
schema: wang-person/v1
id: p_JnJgUQuJC1mz5eRcxkCLB9
status: active
merged_into: null
display_name: 王綸翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3NvaCt5jr7U97hP85yqK2g
        subject_person_id: p_JnJgUQuJC1mz5eRcxkCLB9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A52qqi51wU5dbZupvVxBMQ
          claim_id: c_3NvaCt5jr7U97hP85yqK2g
          source_id: s_QzXxFs68xqDDqNhYY2qec3
          stance: supports
          locator: CBDB:639839
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639839）
          source: &a1
            id: s_QzXxFs68xqDDqNhYY2qec3
            source_type: api_record
            title: 中国历代人物传记资料库：王綸翰（CBDB 639839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639839&o=json
            external_identifier: CBDB:639839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YxhVQT2kvR4FGe9qkYnNf8
        subject_person_id: p_JnJgUQuJC1mz5eRcxkCLB9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸翰，清人物。籍贯會稽，入仕監生，曾任主簿。（中国历代人物传记资料库 CBDB 639839）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I5GjfVt-NoGr_YyXTr_ysm
          claim_id: c_YxhVQT2kvR4FGe9qkYnNf8
          source_id: s_QzXxFs68xqDDqNhYY2qec3
          stance: supports
          locator: CBDB:639839
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

# 王綸翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸翰 | accepted |
| bio.summary | 王綸翰，清人物。籍贯會稽，入仕監生，曾任主簿。（中国历代人物传记资料库 CBDB 639839） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綸翰（CBDB 639839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639839&o=json)
