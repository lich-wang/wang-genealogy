---
schema: wang-person/v1
id: p_Eh5d2E5vUqL3cqcURtbibf
status: active
merged_into: null
display_name: 王秩羣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hcnsB4TxHVLr6uNkXDodN7
        subject_person_id: p_Eh5d2E5vUqL3cqcURtbibf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秩羣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J4tJFkCYo2WURgMiZh6EQR
          claim_id: c_hcnsB4TxHVLr6uNkXDodN7
          source_id: s_wHNp8Hbf9wEJvas9Le9Yfp
          stance: supports
          locator: CBDB:639676
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639676）
          source: &a1
            id: s_wHNp8Hbf9wEJvas9Le9Yfp
            source_type: api_record
            title: 中国历代人物传记资料库：王秩羣（CBDB 639676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639676&o=json
            external_identifier: CBDB:639676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.014Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K6FcKYhfphkc2Xh1QnCzJu
        subject_person_id: p_Eh5d2E5vUqL3cqcURtbibf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王秩羣，清人物。籍贯徐州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 639676）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rWXaDYTn1bDwU2ZNv34Hgs
          claim_id: c_K6FcKYhfphkc2Xh1QnCzJu
          source_id: s_wHNp8Hbf9wEJvas9Le9Yfp
          stance: supports
          locator: CBDB:639676
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

# 王秩羣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秩羣 | accepted |
| bio.summary | 王秩羣，清人物。籍贯徐州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 639676） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秩羣（CBDB 639676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639676&o=json)
