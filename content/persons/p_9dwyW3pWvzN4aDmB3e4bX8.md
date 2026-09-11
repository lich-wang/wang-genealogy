---
schema: wang-person/v1
id: p_9dwyW3pWvzN4aDmB3e4bX8
status: active
merged_into: null
display_name: 王應中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4hc7QRs3SP3ENGt19V3t1A
        subject_person_id: p_9dwyW3pWvzN4aDmB3e4bX8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VZksbo51FoesEQmwy1yWvK
          claim_id: c_4hc7QRs3SP3ENGt19V3t1A
          source_id: s_kxmcLsA45XHW9LzjKVEQak
          stance: supports
          locator: CBDB:101446
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101446）
          source: &a1
            id: s_kxmcLsA45XHW9LzjKVEQak
            source_type: api_record
            title: 中国历代人物传记资料库：王應中（CBDB 101446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101446&o=json
            external_identifier: CBDB:101446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q897dYzzzW5apCYZ61Puug
        subject_person_id: p_9dwyW3pWvzN4aDmB3e4bX8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應中，元人物。籍贯諸暨州，曾任縣學教諭。（中国历代人物传记资料库 CBDB 101446）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J6sV8h9hydHezTI87T1D0Z
          claim_id: c_Q897dYzzzW5apCYZ61Puug
          source_id: s_kxmcLsA45XHW9LzjKVEQak
          stance: supports
          locator: CBDB:101446
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

# 王應中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應中 | accepted |
| bio.summary | 王應中，元人物。籍贯諸暨州，曾任縣學教諭。（中国历代人物传记资料库 CBDB 101446） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應中（CBDB 101446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101446&o=json)
