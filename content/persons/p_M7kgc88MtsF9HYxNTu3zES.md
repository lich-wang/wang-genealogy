---
schema: wang-person/v1
id: p_M7kgc88MtsF9HYxNTu3zES
status: active
merged_into: null
display_name: 王延裪
cbdb_id: 71579
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BLFSGJmZ5qXQskqeRymJLR
        subject_person_id: p_M7kgc88MtsF9HYxNTu3zES
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延裪（生于1614年），清人物。籍贯清苑。（中国历代人物传记资料库 CBDB 71579）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8oDsqHjR8ZUxjh1kX0xr5o
          claim_id: c_BLFSGJmZ5qXQskqeRymJLR
          source_id: s_XqQoPgRkK753nGyAvcqHps
          stance: supports
          locator: CBDB:71579
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XqQoPgRkK753nGyAvcqHps
            source_type: api_record
            title: 中国历代人物传记资料库：王延裪（CBDB 71579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71579&o=json
            external_identifier: CBDB:71579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YRczPKsF9rpyAQfmPKwLYp
        subject_person_id: p_M7kgc88MtsF9HYxNTu3zES
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1614年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1614-01-01
            latest: 1614-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tYp21b7LtUvFgKKnPv3PHS
          claim_id: c_YRczPKsF9rpyAQfmPKwLYp
          source_id: s_XqQoPgRkK753nGyAvcqHps
          stance: supports
          locator: CBDB:71579
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1614
          source:
            id: s_XqQoPgRkK753nGyAvcqHps
            source_type: api_record
            title: 中国历代人物传记资料库：王延裪（CBDB 71579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71579&o=json
            external_identifier: CBDB:71579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hFVx4PaXoRUM6yhXJQwUym
        subject_person_id: p_M7kgc88MtsF9HYxNTu3zES
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延裪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1TQnF6QBH58ZG47PLNUS4K
          claim_id: c_hFVx4PaXoRUM6yhXJQwUym
          source_id: s_XqQoPgRkK753nGyAvcqHps
          stance: supports
          locator: CBDB:71579
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1614
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

# 王延裪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延裪（生于1614年），清人物。籍贯清苑。（中国历代人物传记资料库 CBDB 71579） | accepted |
| birth.date | 1614年 | accepted |
| name.primary | 王延裪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延裪（CBDB 71579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71579&o=json)
