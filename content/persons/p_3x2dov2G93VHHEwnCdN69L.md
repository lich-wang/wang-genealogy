---
schema: wang-person/v1
id: p_3x2dov2G93VHHEwnCdN69L
status: active
merged_into: null
display_name: 王鳳翔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VG35yTee4TWVbLDHtnxKRn
        subject_person_id: p_3x2dov2G93VHHEwnCdN69L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳翔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xZ5mi2NQK7oiN8KRtvNDpP
          claim_id: c_VG35yTee4TWVbLDHtnxKRn
          source_id: s_vQRDEkJqNpVFAwmzn5yEUW
          stance: supports
          locator: CBDB:280411
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280411）
          source: &a1
            id: s_vQRDEkJqNpVFAwmzn5yEUW
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳翔（CBDB 280411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280411&o=json
            external_identifier: CBDB:280411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R7LxLeFnyLhLB4QXwJZMJx
        subject_person_id: p_3x2dov2G93VHHEwnCdN69L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳翔，明人物。正德十二年進士，籍贯莆田，入仕監生，曾任典史、主簿。（中国历代人物传记资料库 CBDB 280411）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4Oy26a347LTKM7lwLPyukU
          claim_id: c_R7LxLeFnyLhLB4QXwJZMJx
          source_id: s_vQRDEkJqNpVFAwmzn5yEUW
          stance: supports
          locator: CBDB:280411
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

# 王鳳翔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳翔 | accepted |
| bio.summary | 王鳳翔，明人物。正德十二年進士，籍贯莆田，入仕監生，曾任典史、主簿。（中国历代人物传记资料库 CBDB 280411） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳翔（CBDB 280411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280411&o=json)
