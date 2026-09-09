---
schema: wang-person/v1
id: p_QtPAUQJLxbMpt5EG6m8NEq
status: active
merged_into: null
display_name: 王文貴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5E8PifbS8XPGK96Pco3bSB
        subject_person_id: p_QtPAUQJLxbMpt5EG6m8NEq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SyGp3ync6MG4ZtALHynZqz
          claim_id: c_5E8PifbS8XPGK96Pco3bSB
          source_id: s_iHunMM7feZ92sAgAAXzRQ3
          stance: supports
          locator: CBDB:274336
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274336）
          source: &a1
            id: s_iHunMM7feZ92sAgAAXzRQ3
            source_type: api_record
            title: 中国历代人物传记资料库：王文貴（CBDB 274336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274336&o=json
            external_identifier: CBDB:274336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G6tQjFkvj8mQ6TQ3c18dGz
        subject_person_id: p_QtPAUQJLxbMpt5EG6m8NEq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KoPPk2yHCcLc2HocFH4jQj
          claim_id: c_G6tQjFkvj8mQ6TQ3c18dGz
          source_id: s_iHunMM7feZ92sAgAAXzRQ3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王文貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文貴 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文貴（CBDB 274336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274336&o=json)
