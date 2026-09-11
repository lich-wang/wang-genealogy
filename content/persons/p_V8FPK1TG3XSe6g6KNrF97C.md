---
schema: wang-person/v1
id: p_V8FPK1TG3XSe6g6KNrF97C
status: active
merged_into: null
display_name: 王紹宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kyBX4bwTFEvXY4ECZB6oc4
        subject_person_id: p_V8FPK1TG3XSe6g6KNrF97C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_niv5EJGVT2d2Q7GRGXS227
          claim_id: c_kyBX4bwTFEvXY4ECZB6oc4
          source_id: s_b3SY5BRoDLa1GAuXWQoGyU
          stance: supports
          locator: CBDB:639762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639762）
          source: &a1
            id: s_b3SY5BRoDLa1GAuXWQoGyU
            source_type: api_record
            title: 中国历代人物传记资料库：王紹宗（CBDB 639762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639762&o=json
            external_identifier: CBDB:639762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PvCV1usKip3KD42c98XMwC
        subject_person_id: p_V8FPK1TG3XSe6g6KNrF97C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹宗，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 639762）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5dcSwT6GsMwtcGslq7kFnk
          claim_id: c_PvCV1usKip3KD42c98XMwC
          source_id: s_b3SY5BRoDLa1GAuXWQoGyU
          stance: supports
          locator: CBDB:639762
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

# 王紹宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹宗 | accepted |
| bio.summary | 王紹宗，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 639762） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹宗（CBDB 639762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639762&o=json)
