---
schema: wang-person/v1
id: p_wx6B3fHb94a8DGc5JBJdG9
status: active
merged_into: null
display_name: 王淋瑩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E4zwhD2XELBCww64rNi7hq
        subject_person_id: p_wx6B3fHb94a8DGc5JBJdG9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淋瑩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qr9nE9Xcrm9e762ZrNL9Lz
          claim_id: c_E4zwhD2XELBCww64rNi7hq
          source_id: s_x6Yiy8sotUUYgjZJFC6hYu
          stance: supports
          locator: CBDB:639112
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639112）
          source: &a1
            id: s_x6Yiy8sotUUYgjZJFC6hYu
            source_type: api_record
            title: 中国历代人物传记资料库：王淋瑩（CBDB 639112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639112&o=json
            external_identifier: CBDB:639112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zuC3duPzFnu9qcEQn31gur
        subject_person_id: p_wx6B3fHb94a8DGc5JBJdG9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淋瑩，清人物。籍贯肅州直隸州，曾任復設訓導。（中国历代人物传记资料库 CBDB 639112）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JDNT9GlXXMI8JpoZswuPBL
          claim_id: c_zuC3duPzFnu9qcEQn31gur
          source_id: s_x6Yiy8sotUUYgjZJFC6hYu
          stance: supports
          locator: CBDB:639112
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

# 王淋瑩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淋瑩 | accepted |
| bio.summary | 王淋瑩，清人物。籍贯肅州直隸州，曾任復設訓導。（中国历代人物传记资料库 CBDB 639112） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淋瑩（CBDB 639112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639112&o=json)
