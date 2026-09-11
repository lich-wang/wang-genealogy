---
schema: wang-person/v1
id: p_tGQxMezMXxZCafpjaX7K3M
status: active
merged_into: null
display_name: 王正己
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wcfWETaChx7Ejk13BpAzMg
        subject_person_id: p_tGQxMezMXxZCafpjaX7K3M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正己
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CH3zqZyHUjhFqsj3rxrP9H
          claim_id: c_wcfWETaChx7Ejk13BpAzMg
          source_id: s_1jFKjLFSK5XVUUfBv6u47W
          stance: supports
          locator: CBDB:101130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101130）
          source: &a1
            id: s_1jFKjLFSK5XVUUfBv6u47W
            source_type: api_record
            title: 中国历代人物传记资料库：王正己（CBDB 101130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101130&o=json
            external_identifier: CBDB:101130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B7EE8632XSTq3ZC31PMD91
        subject_person_id: p_tGQxMezMXxZCafpjaX7K3M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正己，元人物。籍贯昌黎，曾任縣主簿。（中国历代人物传记资料库 CBDB 101130）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7YXAcu3-U92QlMdIwPMRpc
          claim_id: c_B7EE8632XSTq3ZC31PMD91
          source_id: s_1jFKjLFSK5XVUUfBv6u47W
          stance: supports
          locator: CBDB:101130
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

# 王正己

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正己 | accepted |
| bio.summary | 王正己，元人物。籍贯昌黎，曾任縣主簿。（中国历代人物传记资料库 CBDB 101130） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正己（CBDB 101130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101130&o=json)
