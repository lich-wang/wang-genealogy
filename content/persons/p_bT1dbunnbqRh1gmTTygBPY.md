---
schema: wang-person/v1
id: p_bT1dbunnbqRh1gmTTygBPY
status: active
merged_into: null
display_name: 王九敘
cbdb_id: 268142
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o23LSDxbxfcKucuptwh9iQ
        subject_person_id: p_bT1dbunnbqRh1gmTTygBPY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九敘，明人物。弘治九年進士，籍贯鄠縣。（中国历代人物传记资料库 CBDB 268142）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_AvBr3M-Xc_9nzTWooz5DZH
          claim_id: c_o23LSDxbxfcKucuptwh9iQ
          source_id: s_w8CiqLNPHhcms73JWacnBT
          stance: supports
          locator: CBDB:268142
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_w8CiqLNPHhcms73JWacnBT
            source_type: api_record
            title: 中国历代人物传记资料库：王九敘（CBDB 268142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268142&o=json
            external_identifier: CBDB:268142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9gC1XrXEexfN44SDmQ4rs8
        subject_person_id: p_bT1dbunnbqRh1gmTTygBPY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WdjPPwGeR3NWVQ64ZHG6HR
          claim_id: c_9gC1XrXEexfN44SDmQ4rs8
          source_id: s_w8CiqLNPHhcms73JWacnBT
          stance: supports
          locator: CBDB:268142
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
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

# 王九敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王九敘，明人物。弘治九年進士，籍贯鄠縣。（中国历代人物传记资料库 CBDB 268142） | accepted |
| name.primary | 王九敘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九敘（CBDB 268142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268142&o=json)
