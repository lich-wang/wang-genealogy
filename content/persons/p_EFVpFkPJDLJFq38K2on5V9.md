---
schema: wang-person/v1
id: p_EFVpFkPJDLJFq38K2on5V9
status: active
merged_into: null
display_name: 王鉅臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Mb5Y45VizC8NP3r48BphH
        subject_person_id: p_EFVpFkPJDLJFq38K2on5V9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉅臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6Ru8L48Z323ZkqVU6qy1Gu
          claim_id: c_1Mb5Y45VizC8NP3r48BphH
          source_id: s_kYp5RAkooQPy7n3i3kkuRX
          stance: supports
          locator: CBDB:640554
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640554）
          source: &a1
            id: s_kYp5RAkooQPy7n3i3kkuRX
            source_type: api_record
            title: 中国历代人物传记资料库：王鉅臣（CBDB 640554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640554&o=json
            external_identifier: CBDB:640554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fsKv8YJYUPkzsMU1XeVNjN
        subject_person_id: p_EFVpFkPJDLJFq38K2on5V9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉅臣，清人物。籍贯重慶府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640554）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L2hnjgjLzralA5BBWYrg9z
          claim_id: c_fsKv8YJYUPkzsMU1XeVNjN
          source_id: s_kYp5RAkooQPy7n3i3kkuRX
          stance: supports
          locator: CBDB:640554
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

# 王鉅臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉅臣 | accepted |
| bio.summary | 王鉅臣，清人物。籍贯重慶府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640554） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉅臣（CBDB 640554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640554&o=json)
