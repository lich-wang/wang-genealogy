---
schema: wang-person/v1
id: p_mzi91Uxi85qNEK3A8TUgFk
status: active
merged_into: null
display_name: 王鎔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LMJFA6pXnPQtzrq8F42FL4
        subject_person_id: p_mzi91Uxi85qNEK3A8TUgFk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5D7i6Yh9aVhHao2PyXK7D6
          claim_id: c_LMJFA6pXnPQtzrq8F42FL4
          source_id: s_yxTgSggXZK7Mp9HkkNgo18
          stance: supports
          locator: CBDB:17634
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17634）
          source: &a1
            id: s_yxTgSggXZK7Mp9HkkNgo18
            source_type: api_record
            title: 中国历代人物传记资料库：王鎔（CBDB 17634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17634&o=json
            external_identifier: CBDB:17634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.663Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EDCkV3A4LpJzvgSs91pzXB
        subject_person_id: p_mzi91Uxi85qNEK3A8TUgFk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tEivheSjdAcyaJ1UParC9P
          claim_id: c_EDCkV3A4LpJzvgSs91pzXB
          source_id: s_yxTgSggXZK7Mp9HkkNgo18
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

# 王鎔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎔 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎔（CBDB 17634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17634&o=json)
