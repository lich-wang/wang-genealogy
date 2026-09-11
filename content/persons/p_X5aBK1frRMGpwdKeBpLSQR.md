---
schema: wang-person/v1
id: p_X5aBK1frRMGpwdKeBpLSQR
status: active
merged_into: null
display_name: 王登堦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3QNMGpKwMHWscg3PAVprcN
        subject_person_id: p_X5aBK1frRMGpwdKeBpLSQR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登堦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nFZ6stLBbgpP4BhrZCK4cz
          claim_id: c_3QNMGpKwMHWscg3PAVprcN
          source_id: s_3J8mvFsy8iqAhqFJ9QEzdG
          stance: supports
          locator: CBDB:639501
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639501）
          source: &a1
            id: s_3J8mvFsy8iqAhqFJ9QEzdG
            source_type: api_record
            title: 中国历代人物传记资料库：王登堦（CBDB 639501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639501&o=json
            external_identifier: CBDB:639501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.952Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_De8Gw7DUrUQGnHxbX8hHAH
        subject_person_id: p_X5aBK1frRMGpwdKeBpLSQR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登堦，清人物。籍贯紹興府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 639501）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A-NN1lLmJ5-c45gwTd7IcY
          claim_id: c_De8Gw7DUrUQGnHxbX8hHAH
          source_id: s_3J8mvFsy8iqAhqFJ9QEzdG
          stance: supports
          locator: CBDB:639501
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

# 王登堦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登堦 | accepted |
| bio.summary | 王登堦，清人物。籍贯紹興府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 639501） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登堦（CBDB 639501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639501&o=json)
