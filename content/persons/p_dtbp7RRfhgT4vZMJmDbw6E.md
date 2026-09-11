---
schema: wang-person/v1
id: p_dtbp7RRfhgT4vZMJmDbw6E
status: active
merged_into: null
display_name: 王肇塘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_maARYEk1hcrZLP4rjN67rT
        subject_person_id: p_dtbp7RRfhgT4vZMJmDbw6E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇塘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZFg4Drnpeh5StkkVCB56e7
          claim_id: c_maARYEk1hcrZLP4rjN67rT
          source_id: s_ykwNRcZwVpZ6DfjMDWyMum
          stance: supports
          locator: CBDB:639970
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639970）
          source: &a1
            id: s_ykwNRcZwVpZ6DfjMDWyMum
            source_type: api_record
            title: 中国历代人物传记资料库：王肇塘（CBDB 639970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639970&o=json
            external_identifier: CBDB:639970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.105Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fr8KC2KVZHuZAnngXSaqwH
        subject_person_id: p_dtbp7RRfhgT4vZMJmDbw6E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇塘，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639970）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kmcp7kgsKxvrjGGevWHrOg
          claim_id: c_fr8KC2KVZHuZAnngXSaqwH
          source_id: s_ykwNRcZwVpZ6DfjMDWyMum
          stance: supports
          locator: CBDB:639970
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

# 王肇塘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇塘 | accepted |
| bio.summary | 王肇塘，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639970） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肇塘（CBDB 639970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639970&o=json)
