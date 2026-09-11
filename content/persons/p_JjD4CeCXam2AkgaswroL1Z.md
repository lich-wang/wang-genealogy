---
schema: wang-person/v1
id: p_JjD4CeCXam2AkgaswroL1Z
status: active
merged_into: null
display_name: 王汝言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FKziXyLEZ77vhMsn81C862
        subject_person_id: p_JjD4CeCXam2AkgaswroL1Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BmU3XcbYq4rFX513r1gBGK
          claim_id: c_FKziXyLEZ77vhMsn81C862
          source_id: s_QCX4y1aRypF9A5qXeQVjm5
          stance: supports
          locator: CBDB:639034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639034）
          source: &a1
            id: s_QCX4y1aRypF9A5qXeQVjm5
            source_type: api_record
            title: 中国历代人物传记资料库：王汝言（CBDB 639034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639034&o=json
            external_identifier: CBDB:639034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FdzWBnkcHNHFnTZrr29hCy
        subject_person_id: p_JjD4CeCXam2AkgaswroL1Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝言，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639034）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oyXKXLQwna57ij7d1OvONu
          claim_id: c_FdzWBnkcHNHFnTZrr29hCy
          source_id: s_QCX4y1aRypF9A5qXeQVjm5
          stance: supports
          locator: CBDB:639034
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

# 王汝言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝言 | accepted |
| bio.summary | 王汝言，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639034） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝言（CBDB 639034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639034&o=json)
