---
schema: wang-person/v1
id: p_hJYN4oe1c1xPsQK1bDY1qs
status: active
merged_into: null
display_name: 王佶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EEMP8ZppKayMmTfpbrbhGW
        subject_person_id: p_hJYN4oe1c1xPsQK1bDY1qs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KKiVzjHcJhkH7AF6y5JjxF
          claim_id: c_EEMP8ZppKayMmTfpbrbhGW
          source_id: s_9fy9kfPv3b9KBNcJ82p8BA
          stance: supports
          locator: CBDB:292756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292756）
          source: &a1
            id: s_9fy9kfPv3b9KBNcJ82p8BA
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 292756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292756&o=json
            external_identifier: CBDB:292756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.419Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yjfe58WvvABA1xxPXpKy8G
        subject_person_id: p_hJYN4oe1c1xPsQK1bDY1qs
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
        - id: cs_Cz36AS3G76s4BQPjCy4Bq9
          claim_id: c_Yjfe58WvvABA1xxPXpKy8G
          source_id: s_9fy9kfPv3b9KBNcJ82p8BA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XwXWaoHvVPVt1SiYcjv7h1
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hJYN4oe1c1xPsQK1bDY1qs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d7KkVRziXKbbqvUp0JbWtl
          claim_id: c_XwXWaoHvVPVt1SiYcjv7h1
          source_id: s_9fy9kfPv3b9KBNcJ82p8BA
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gyNUeFDDZGNowk91dtAr1B
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佶 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gyNUeFDDZGNowk91dtAr1B | 王惟賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佶（CBDB 292756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292756&o=json)
