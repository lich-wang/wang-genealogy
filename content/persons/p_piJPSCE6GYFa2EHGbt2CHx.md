---
schema: wang-person/v1
id: p_piJPSCE6GYFa2EHGbt2CHx
status: active
merged_into: null
display_name: 王亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SMrCbpBhDKWMvx9KnFJtiA
        subject_person_id: p_piJPSCE6GYFa2EHGbt2CHx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RdXi4L5BQqzFEqmeLBV346
          claim_id: c_SMrCbpBhDKWMvx9KnFJtiA
          source_id: s_536PqLwRBeVFYUpXXMNGWM
          stance: supports
          locator: CBDB:508673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508673）
          source: &a1
            id: s_536PqLwRBeVFYUpXXMNGWM
            source_type: api_record
            title: 中国历代人物传记资料库：王亨（CBDB 508673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508673&o=json
            external_identifier: CBDB:508673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6An3v7bRjzxJwaaUBzqgnD
        subject_person_id: p_piJPSCE6GYFa2EHGbt2CHx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨，明人物。入仕監生，曾任教諭。（中国历代人物传记资料库 CBDB 508673）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XyZzNqkVLGZV6oXGLQNYqz
          claim_id: c_6An3v7bRjzxJwaaUBzqgnD
          source_id: s_536PqLwRBeVFYUpXXMNGWM
          stance: supports
          locator: CBDB:508673
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

# 王亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亨 | accepted |
| bio.summary | 王亨，明人物。入仕監生，曾任教諭。（中国历代人物传记资料库 CBDB 508673） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亨（CBDB 508673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508673&o=json)
