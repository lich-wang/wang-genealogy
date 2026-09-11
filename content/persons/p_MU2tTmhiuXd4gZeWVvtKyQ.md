---
schema: wang-person/v1
id: p_MU2tTmhiuXd4gZeWVvtKyQ
status: active
merged_into: null
display_name: 王惟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eEE1G69ymQ3J13BJMLXRpn
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EBf2NNn1D2bDEyXiyjErgh
          claim_id: c_eEE1G69ymQ3J13BJMLXRpn
          source_id: s_Y6cg1vrmHBW6v87xYUUoHL
          stance: supports
          locator: CBDB:320864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320864）
          source: &a1
            id: s_Y6cg1vrmHBW6v87xYUUoHL
            source_type: api_record
            title: 中国历代人物传记资料库：王惟（CBDB 320864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320864&o=json
            external_identifier: CBDB:320864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4N2q8MUTFT6aZSwBC6si8B
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
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
        - id: cs_seR3zuRxxMXzS4UBDDkNsa
          claim_id: c_4N2q8MUTFT6aZSwBC6si8B
          source_id: s_Y6cg1vrmHBW6v87xYUUoHL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3ikarDicGMOe9K6p2yDg47
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E8vxuQuTWTt4zWURnmDoIW
          claim_id: c_3ikarDicGMOe9K6p2yDg47
          source_id: s_Y6cg1vrmHBW6v87xYUUoHL
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第八十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W2D9MwuPsN8G7PZXkTNBD2
        status: active
        display_name: 王得春
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_W2D9MwuPsN8G7PZXkTNBD2 | 王得春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟（CBDB 320864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320864&o=json)
