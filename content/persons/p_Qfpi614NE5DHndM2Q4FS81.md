---
schema: wang-person/v1
id: p_Qfpi614NE5DHndM2Q4FS81
status: active
merged_into: null
display_name: 王輅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9e7xUKKwd38GM2UDsr3Pm8
        subject_person_id: p_Qfpi614NE5DHndM2Q4FS81
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tJbpS4AvDLfL7uAqFWfD21
          claim_id: c_9e7xUKKwd38GM2UDsr3Pm8
          source_id: s_6VN5Fn9WxHcBq2y8TrHE1X
          stance: supports
          locator: CBDB:441145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（441145）
          source: &a1
            id: s_6VN5Fn9WxHcBq2y8TrHE1X
            source_type: api_record
            title: 中国历代人物传记资料库：王輅（CBDB 441145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441145&o=json
            external_identifier: CBDB:441145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GsG2jPymQ3SNfPKgNAevzq
        subject_person_id: p_Qfpi614NE5DHndM2Q4FS81
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅，清人物。籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 441145）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jmwqoGny8GT04m3A7rN9bD
          claim_id: c_GsG2jPymQ3SNfPKgNAevzq
          source_id: s_6VN5Fn9WxHcBq2y8TrHE1X
          stance: supports
          locator: CBDB:441145
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

# 王輅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輅 | accepted |
| bio.summary | 王輅，清人物。籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 441145） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輅（CBDB 441145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441145&o=json)
