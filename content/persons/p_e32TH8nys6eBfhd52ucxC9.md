---
schema: wang-person/v1
id: p_e32TH8nys6eBfhd52ucxC9
status: active
merged_into: null
display_name: 王希曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ETB4bR5vn3vGmCFr8GAZ5q
        subject_person_id: p_e32TH8nys6eBfhd52ucxC9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BPnnQB7A4vTHHqe8WrP9aX
          claim_id: c_ETB4bR5vn3vGmCFr8GAZ5q
          source_id: s_oRq2UxKGHREN1K3bNRhtkW
          stance: supports
          locator: CBDB:472081
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472081）
          source: &a1
            id: s_oRq2UxKGHREN1K3bNRhtkW
            source_type: api_record
            title: 中国历代人物传记资料库：王希曾（CBDB 472081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472081&o=json
            external_identifier: CBDB:472081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9yuKfoWwxnU1W1CZxk6hM6
        subject_person_id: p_e32TH8nys6eBfhd52ucxC9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希曾，清人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 472081）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tT3GSV9HQiA3L6rzcC00VG
          claim_id: c_9yuKfoWwxnU1W1CZxk6hM6
          source_id: s_oRq2UxKGHREN1K3bNRhtkW
          stance: supports
          locator: CBDB:472081
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

# 王希曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希曾 | accepted |
| bio.summary | 王希曾，清人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 472081） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希曾（CBDB 472081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472081&o=json)
