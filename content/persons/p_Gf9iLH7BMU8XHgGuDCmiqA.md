---
schema: wang-person/v1
id: p_Gf9iLH7BMU8XHgGuDCmiqA
status: active
merged_into: null
display_name: 王沛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3VUAjcuDtf3eC1ZWhSimn5
        subject_person_id: p_Gf9iLH7BMU8XHgGuDCmiqA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CgE1wFNp4dqXo4p7yFks5n
          claim_id: c_3VUAjcuDtf3eC1ZWhSimn5
          source_id: s_P9w91nq1cSXQ9HBYcCA2ag
          stance: supports
          locator: CBDB:445568
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445568）
          source: &a1
            id: s_P9w91nq1cSXQ9HBYcCA2ag
            source_type: api_record
            title: 中国历代人物传记资料库：王沛（CBDB 445568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445568&o=json
            external_identifier: CBDB:445568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.179Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7VyE9TnYZ9P6vzBc4sqTYo
        subject_person_id: p_Gf9iLH7BMU8XHgGuDCmiqA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2KscqVsivk7NUjkqNdD4mP
          claim_id: c_7VyE9TnYZ9P6vzBc4sqTYo
          source_id: s_P9w91nq1cSXQ9HBYcCA2ag
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

# 王沛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沛 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沛（CBDB 445568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445568&o=json)
