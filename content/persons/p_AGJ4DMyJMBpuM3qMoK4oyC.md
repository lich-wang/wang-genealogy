---
schema: wang-person/v1
id: p_AGJ4DMyJMBpuM3qMoK4oyC
status: active
merged_into: null
display_name: 王栗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d44U1DEE9zYf37XZbmtf39
        subject_person_id: p_AGJ4DMyJMBpuM3qMoK4oyC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_upuEVVVdCaD9vbi5t8jvAp
          claim_id: c_d44U1DEE9zYf37XZbmtf39
          source_id: s_WLJ2MDpjRZiKpXfuCemhey
          stance: supports
          locator: CBDB:534826
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（534826）
          source: &a1
            id: s_WLJ2MDpjRZiKpXfuCemhey
            source_type: api_record
            title: 中国历代人物传记资料库：王栗（CBDB 534826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534826&o=json
            external_identifier: CBDB:534826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.389Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tsg8rCP1ok9TRGnxneEieo
        subject_person_id: p_AGJ4DMyJMBpuM3qMoK4oyC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栗，宋人物。籍贯臨安，入仕進士。（中国历代人物传记资料库 CBDB 534826）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nrzfzBh85a2EsYpasik0E5
          claim_id: c_Tsg8rCP1ok9TRGnxneEieo
          source_id: s_WLJ2MDpjRZiKpXfuCemhey
          stance: supports
          locator: CBDB:534826
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

# 王栗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王栗 | accepted |
| bio.summary | 王栗，宋人物。籍贯臨安，入仕進士。（中国历代人物传记资料库 CBDB 534826） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王栗（CBDB 534826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534826&o=json)
