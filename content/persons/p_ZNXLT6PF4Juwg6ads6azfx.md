---
schema: wang-person/v1
id: p_ZNXLT6PF4Juwg6ads6azfx
status: active
merged_into: null
display_name: 王天才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BiKdteeifnGhJSdznYxAJ8
        subject_person_id: p_ZNXLT6PF4Juwg6ads6azfx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yMXSBWZP31dMrAR4CWdGes
          claim_id: c_BiKdteeifnGhJSdznYxAJ8
          source_id: s_oJojpg7CwaUA6iFsCJbLhP
          stance: supports
          locator: CBDB:697128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697128）
          source: &a1
            id: s_oJojpg7CwaUA6iFsCJbLhP
            source_type: api_record
            title: 中国历代人物传记资料库：王天才（CBDB 697128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697128&o=json
            external_identifier: CBDB:697128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wiuAxMTosBmiTQrmeZ4J5R
        subject_person_id: p_ZNXLT6PF4Juwg6ads6azfx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天才，清人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 697128）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ABLKXrZG3pn2FZuhVQ4wmI
          claim_id: c_wiuAxMTosBmiTQrmeZ4J5R
          source_id: s_oJojpg7CwaUA6iFsCJbLhP
          stance: supports
          locator: CBDB:697128
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

# 王天才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天才 | accepted |
| bio.summary | 王天才，清人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 697128） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天才（CBDB 697128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697128&o=json)
