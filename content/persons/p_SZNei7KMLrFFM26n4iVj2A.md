---
schema: wang-person/v1
id: p_SZNei7KMLrFFM26n4iVj2A
status: active
merged_into: null
display_name: 王廷霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z91CEWtjLMgGkBukb92UBm
        subject_person_id: p_SZNei7KMLrFFM26n4iVj2A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8NmJMg2jLub73duYYBTDnk
          claim_id: c_z91CEWtjLMgGkBukb92UBm
          source_id: s_xGsn69DH1D8bcdufjUKiA8
          stance: supports
          locator: CBDB:637574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637574）
          source: &a1
            id: s_xGsn69DH1D8bcdufjUKiA8
            source_type: api_record
            title: 中国历代人物传记资料库：王廷霖（CBDB 637574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637574&o=json
            external_identifier: CBDB:637574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sQ7SDEETHiLd5Ht8Ccn5ff
        subject_person_id: p_SZNei7KMLrFFM26n4iVj2A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷霖，清人物。籍贯會稽，曾任典史。（中国历代人物传记资料库 CBDB 637574）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_66si7FC9ZJJEWYra9aezfz
          claim_id: c_sQ7SDEETHiLd5Ht8Ccn5ff
          source_id: s_xGsn69DH1D8bcdufjUKiA8
          stance: supports
          locator: CBDB:637574
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

# 王廷霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷霖 | accepted |
| bio.summary | 王廷霖，清人物。籍贯會稽，曾任典史。（中国历代人物传记资料库 CBDB 637574） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷霖（CBDB 637574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637574&o=json)
