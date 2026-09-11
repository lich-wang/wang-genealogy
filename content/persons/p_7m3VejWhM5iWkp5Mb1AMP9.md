---
schema: wang-person/v1
id: p_7m3VejWhM5iWkp5Mb1AMP9
status: active
merged_into: null
display_name: 王道經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6ZvMwVZHs9FPs2EUF7vAMp
        subject_person_id: p_7m3VejWhM5iWkp5Mb1AMP9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ArudKjHjj1jZJj9hiY5XGm
          claim_id: c_6ZvMwVZHs9FPs2EUF7vAMp
          source_id: s_H7FDRhEzVPMKxr3z7o63ne
          stance: supports
          locator: CBDB:640462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640462）
          source: &a1
            id: s_H7FDRhEzVPMKxr3z7o63ne
            source_type: api_record
            title: 中国历代人物传记资料库：王道經（CBDB 640462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640462&o=json
            external_identifier: CBDB:640462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Uu8pj4WHQXzH8HaUdrCDuX
        subject_person_id: p_7m3VejWhM5iWkp5Mb1AMP9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道經，清人物。籍贯寧國，曾任訓導。（中国历代人物传记资料库 CBDB 640462）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rGU0ZLep6OCUBnkehoz0dK
          claim_id: c_Uu8pj4WHQXzH8HaUdrCDuX
          source_id: s_H7FDRhEzVPMKxr3z7o63ne
          stance: supports
          locator: CBDB:640462
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

# 王道經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道經 | accepted |
| bio.summary | 王道經，清人物。籍贯寧國，曾任訓導。（中国历代人物传记资料库 CBDB 640462） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道經（CBDB 640462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640462&o=json)
