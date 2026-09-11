---
schema: wang-person/v1
id: p_YEbNeHxjLejyW7VALF582D
status: active
merged_into: null
display_name: 王守道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LdT7pGtfnwFfj14KXeBQQK
        subject_person_id: p_YEbNeHxjLejyW7VALF582D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9caGEBFvYFYHxbsVnv43QE
          claim_id: c_LdT7pGtfnwFfj14KXeBQQK
          source_id: s_8LGZMJzJ9wMT1S1iDMnJQk
          stance: supports
          locator: CBDB:101166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101166）
          source: &a1
            id: s_8LGZMJzJ9wMT1S1iDMnJQk
            source_type: api_record
            title: 中国历代人物传记资料库：王守道（CBDB 101166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101166&o=json
            external_identifier: CBDB:101166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6QQf8HrfJizh7VA5HV8mWG
        subject_person_id: p_YEbNeHxjLejyW7VALF582D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1270年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8JtCVUKwAM3hit2nXUXu38
          claim_id: c_6QQf8HrfJizh7VA5HV8mWG
          source_id: s_8LGZMJzJ9wMT1S1iDMnJQk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wGQYkpnfqBuJ7NsaNGHbzM
        subject_person_id: p_YEbNeHxjLejyW7VALF582D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守道（卒于1270年），元人物。籍贯平山，曾任經歷、行軍參謀。（中国历代人物传记资料库 CBDB 101166）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DEtESoi14-Ox2BtUTcGIis
          claim_id: c_wGQYkpnfqBuJ7NsaNGHbzM
          source_id: s_8LGZMJzJ9wMT1S1iDMnJQk
          stance: supports
          locator: CBDB:101166
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

# 王守道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守道 | accepted |
| death.date | 1270年 | accepted |
| bio.summary | 王守道（卒于1270年），元人物。籍贯平山，曾任經歷、行軍參謀。（中国历代人物传记资料库 CBDB 101166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守道（CBDB 101166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101166&o=json)
