---
schema: wang-person/v1
id: p_L4qGs246Gn1H9kXk3PWKpF
status: active
merged_into: null
display_name: 王次春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zd4CffoDLsyqrPQDkEyDbH
        subject_person_id: p_L4qGs246Gn1H9kXk3PWKpF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王次春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R9WipB3A1opTizNvACZ6dW
          claim_id: c_Zd4CffoDLsyqrPQDkEyDbH
          source_id: s_DoJ1ugZdBKdWugB8JWgJBx
          stance: supports
          locator: CBDB:541531
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（541531）
          source: &a1
            id: s_DoJ1ugZdBKdWugB8JWgJBx
            source_type: api_record
            title: 中国历代人物传记资料库：王次春（CBDB 541531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541531&o=json
            external_identifier: CBDB:541531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7JWijS9zdapEAoKMZ6QYX7
        subject_person_id: p_L4qGs246Gn1H9kXk3PWKpF
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
        - id: cs_pMNAn1AiHiQ2KkLof7FKmT
          claim_id: c_7JWijS9zdapEAoKMZ6QYX7
          source_id: s_DoJ1ugZdBKdWugB8JWgJBx
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

# 王次春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王次春 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王次春（CBDB 541531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541531&o=json)
