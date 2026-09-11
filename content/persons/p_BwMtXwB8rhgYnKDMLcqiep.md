---
schema: wang-person/v1
id: p_BwMtXwB8rhgYnKDMLcqiep
status: active
merged_into: null
display_name: 王衝霄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vYBL3GH3tPdVvE7DS55TK6
        subject_person_id: p_BwMtXwB8rhgYnKDMLcqiep
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衝霄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kwbhETGm7gykZEJ9nxhvuZ
          claim_id: c_vYBL3GH3tPdVvE7DS55TK6
          source_id: s_P6mi184W2pnQD73o3RrpnH
          stance: supports
          locator: CBDB:640209
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640209）
          source: &a1
            id: s_P6mi184W2pnQD73o3RrpnH
            source_type: api_record
            title: 中国历代人物传记资料库：王衝霄（CBDB 640209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640209&o=json
            external_identifier: CBDB:640209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kF26C62UpuyyvPm7mXXHjk
        subject_person_id: p_BwMtXwB8rhgYnKDMLcqiep
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王衝霄，清人物。籍贯濟南府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640209）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LBDX3HBVAz_Y2YVegXmZpN
          claim_id: c_kF26C62UpuyyvPm7mXXHjk
          source_id: s_P6mi184W2pnQD73o3RrpnH
          stance: supports
          locator: CBDB:640209
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

# 王衝霄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衝霄 | accepted |
| bio.summary | 王衝霄，清人物。籍贯濟南府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640209） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衝霄（CBDB 640209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640209&o=json)
