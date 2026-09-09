---
schema: wang-person/v1
id: p_KV2BxYoy4ACHerD9aHfnoQ
status: active
merged_into: null
display_name: 王賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rN4gpqn7MsE1UoCiWJoTyq
        subject_person_id: p_KV2BxYoy4ACHerD9aHfnoQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U4ZmkPpmzGvUeMtx2gD6dn
          claim_id: c_rN4gpqn7MsE1UoCiWJoTyq
          source_id: s_sSeMDYMQxeFr7zMAcKYvoa
          stance: supports
          locator: CBDB:454900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454900）
          source: &a1
            id: s_sSeMDYMQxeFr7zMAcKYvoa
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 454900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454900&o=json
            external_identifier: CBDB:454900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3F6oC5K9Av7SVw37N6HJxK
        subject_person_id: p_KV2BxYoy4ACHerD9aHfnoQ
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
        - id: cs_HNAXa35wiVNqh5u1UEEphy
          claim_id: c_3F6oC5K9Av7SVw37N6HJxK
          source_id: s_sSeMDYMQxeFr7zMAcKYvoa
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

# 王賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賢（CBDB 454900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454900&o=json)
