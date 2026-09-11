---
schema: wang-person/v1
id: p_CbSnoBRFeWLS8K3FmgBWc5
status: active
merged_into: null
display_name: 王言徹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MNX3qpReXqxxZALGfuG6s6
        subject_person_id: p_CbSnoBRFeWLS8K3FmgBWc5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言徹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WxrVYsXD9xyiDjcQRFYgcd
          claim_id: c_MNX3qpReXqxxZALGfuG6s6
          source_id: s_x5AaHpJjXf22H6hP4acNPJ
          stance: supports
          locator: CBDB:688164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688164）
          source: &a1
            id: s_x5AaHpJjXf22H6hP4acNPJ
            source_type: api_record
            title: 中国历代人物传记资料库：王言徹（CBDB 688164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688164&o=json
            external_identifier: CBDB:688164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.489Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e4ApSzChvWJRFJs8fAzr7k
        subject_person_id: p_CbSnoBRFeWLS8K3FmgBWc5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言徹，宋人物。籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 688164）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AbCzTATfw_7PslnrAKwXcO
          claim_id: c_e4ApSzChvWJRFJs8fAzr7k
          source_id: s_x5AaHpJjXf22H6hP4acNPJ
          stance: supports
          locator: CBDB:688164
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

# 王言徹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言徹 | accepted |
| bio.summary | 王言徹，宋人物。籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 688164） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言徹（CBDB 688164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688164&o=json)
