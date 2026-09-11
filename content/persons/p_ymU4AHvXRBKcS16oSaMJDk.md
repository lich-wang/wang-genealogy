---
schema: wang-person/v1
id: p_ymU4AHvXRBKcS16oSaMJDk
status: active
merged_into: null
display_name: 王護
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8qkgD4o6CKnTQXPM4PFVyC
        subject_person_id: p_ymU4AHvXRBKcS16oSaMJDk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王護
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AgA13mYpub9QesGLB8e4fm
          claim_id: c_8qkgD4o6CKnTQXPM4PFVyC
          source_id: s_BCCyJRAC3i6XULdJKctJv7
          stance: supports
          locator: CBDB:640290
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640290）
          source: &a1
            id: s_BCCyJRAC3i6XULdJKctJv7
            source_type: api_record
            title: 中国历代人物传记资料库：王護（CBDB 640290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640290&o=json
            external_identifier: CBDB:640290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1wrVbHKYgu3nZcRDzvNSLJ
        subject_person_id: p_ymU4AHvXRBKcS16oSaMJDk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王護，清人物。籍贯濟南府，入仕廩生，曾任教授、復設訓導。（中国历代人物传记资料库 CBDB 640290）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NtgSU-japNj5FMT3NFBz2E
          claim_id: c_1wrVbHKYgu3nZcRDzvNSLJ
          source_id: s_BCCyJRAC3i6XULdJKctJv7
          stance: supports
          locator: CBDB:640290
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

# 王護

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王護 | accepted |
| bio.summary | 王護，清人物。籍贯濟南府，入仕廩生，曾任教授、復設訓導。（中国历代人物传记资料库 CBDB 640290） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王護（CBDB 640290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640290&o=json)
