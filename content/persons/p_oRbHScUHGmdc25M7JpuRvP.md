---
schema: wang-person/v1
id: p_oRbHScUHGmdc25M7JpuRvP
status: active
merged_into: null
display_name: 王應龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eUuJoezeMQ8YT4GSVPEaD6
        subject_person_id: p_oRbHScUHGmdc25M7JpuRvP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jaftfgM1VaQFWHeT1yEY8a
          claim_id: c_eUuJoezeMQ8YT4GSVPEaD6
          source_id: s_3sASRC7YeyyZBy5wBLATWX
          stance: supports
          locator: CBDB:462125
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462125）
          source: &a1
            id: s_3sASRC7YeyyZBy5wBLATWX
            source_type: api_record
            title: 中国历代人物传记资料库：王應龍（CBDB 462125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462125&o=json
            external_identifier: CBDB:462125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A656WgEurs7pWQrXivqKhB
        subject_person_id: p_oRbHScUHGmdc25M7JpuRvP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應龍，清人物。曾任營遊擊、鎮總兵。（中国历代人物传记资料库 CBDB 462125）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JNurPJ1-VT9q4_jrdIH-UM
          claim_id: c_A656WgEurs7pWQrXivqKhB
          source_id: s_3sASRC7YeyyZBy5wBLATWX
          stance: supports
          locator: CBDB:462125
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

# 王應龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應龍 | accepted |
| bio.summary | 王應龍，清人物。曾任營遊擊、鎮總兵。（中国历代人物传记资料库 CBDB 462125） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應龍（CBDB 462125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462125&o=json)
