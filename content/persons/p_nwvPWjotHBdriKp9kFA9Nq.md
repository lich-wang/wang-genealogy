---
schema: wang-person/v1
id: p_nwvPWjotHBdriKp9kFA9Nq
status: active
merged_into: null
display_name: 王侃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4aSNoJvnSF4b2PHRA9HhB9
        subject_person_id: p_nwvPWjotHBdriKp9kFA9Nq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T5LsyHHbMDbg7Z6EFPLEci
          claim_id: c_4aSNoJvnSF4b2PHRA9HhB9
          source_id: s_JCRbhh5JS3M7oG4ArEZ7jy
          stance: supports
          locator: CBDB:245629
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245629）
          source: &a1
            id: s_JCRbhh5JS3M7oG4ArEZ7jy
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 245629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245629&o=json
            external_identifier: CBDB:245629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.070Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_518MKryCwLZ1uuPzkmSaDK
        subject_person_id: p_nwvPWjotHBdriKp9kFA9Nq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃，明人物。景泰二年進士，籍贯武進。（中国历代人物传记资料库 CBDB 245629）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_60pKrOwFNG-9WOGwkGXeY4
          claim_id: c_518MKryCwLZ1uuPzkmSaDK
          source_id: s_JCRbhh5JS3M7oG4ArEZ7jy
          stance: supports
          locator: CBDB:245629
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

# 王侃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侃 | accepted |
| bio.summary | 王侃，明人物。景泰二年進士，籍贯武進。（中国历代人物传记资料库 CBDB 245629） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王侃（CBDB 245629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245629&o=json)
