---
schema: wang-person/v1
id: p_7C4esJAzfG3L7QshHfUvu3
status: active
merged_into: null
display_name: 王隆際
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xHES2WwR21KzU8ptKLSTBK
        subject_person_id: p_7C4esJAzfG3L7QshHfUvu3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆際
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r6Kfb3zTqAYSkB6aJG9pd2
          claim_id: c_xHES2WwR21KzU8ptKLSTBK
          source_id: s_vVQ8XUTxrNkzpUMZPGY6c5
          stance: supports
          locator: CBDB:640779
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640779）
          source: &a1
            id: s_vVQ8XUTxrNkzpUMZPGY6c5
            source_type: api_record
            title: 中国历代人物传记资料库：王隆際（CBDB 640779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640779&o=json
            external_identifier: CBDB:640779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.367Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B5WpBJ7L62BwT6zwDwtxZT
        subject_person_id: p_7C4esJAzfG3L7QshHfUvu3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆際，清人物。籍贯泗水，曾任訓導。（中国历代人物传记资料库 CBDB 640779）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lxQQKgM7qI0jh9XZdzaRM1
          claim_id: c_B5WpBJ7L62BwT6zwDwtxZT
          source_id: s_vVQ8XUTxrNkzpUMZPGY6c5
          stance: supports
          locator: CBDB:640779
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

# 王隆際

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隆際 | accepted |
| bio.summary | 王隆際，清人物。籍贯泗水，曾任訓導。（中国历代人物传记资料库 CBDB 640779） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王隆際（CBDB 640779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640779&o=json)
