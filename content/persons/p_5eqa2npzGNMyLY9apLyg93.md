---
schema: wang-person/v1
id: p_5eqa2npzGNMyLY9apLyg93
status: active
merged_into: null
display_name: 王儼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L4v7QJERJpKH5phFs7F3fZ
        subject_person_id: p_5eqa2npzGNMyLY9apLyg93
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yWBg8EFWXazpnnE14pdUMZ
          claim_id: c_L4v7QJERJpKH5phFs7F3fZ
          source_id: s_xSNFJ3uVoBPhNYenKBXfEa
          stance: supports
          locator: CBDB:126890
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126890）
          source: &a1
            id: s_xSNFJ3uVoBPhNYenKBXfEa
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 126890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126890&o=json
            external_identifier: CBDB:126890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y92gsUSQEusvA6ABc4srKE
        subject_person_id: p_5eqa2npzGNMyLY9apLyg93
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
        - id: cs_baqd9e386p96hYNyixJ4MY
          claim_id: c_y92gsUSQEusvA6ABc4srKE
          source_id: s_xSNFJ3uVoBPhNYenKBXfEa
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
        id: c_OCDjAB-aidEk6RHxlWc8yd
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5eqa2npzGNMyLY9apLyg93
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6m28Zbg3SGKoaGU2ybAsIu
          claim_id: c_OCDjAB-aidEk6RHxlWc8yd
          source_id: s_xSNFJ3uVoBPhNYenKBXfEa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xaFW5n3rj8bBX5K7DicMLs
        status: active
        display_name: 王三成
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_HTE-V5tc7jMrmxfNQH0RfL
        subject_person_id: p_CiQUwAvRuDMT5yXpH3NMmL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5eqa2npzGNMyLY9apLyg93
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nUQs-9crxmxXIP3KRxLDVP
          claim_id: c_HTE-V5tc7jMrmxfNQH0RfL
          source_id: s_xSNFJ3uVoBPhNYenKBXfEa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CiQUwAvRuDMT5yXpH3NMmL
        status: active
        display_name: 王濬
        merged_into_person_id: null
    - claim:
        id: c_j2wYeTubmCAP4GuWNkZYRJ
        subject_person_id: p_GXyYh4gFZuBGtFJXmM8AQz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5eqa2npzGNMyLY9apLyg93
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0NJ2hM6zya5fMnF5tdn_MG
          claim_id: c_j2wYeTubmCAP4GuWNkZYRJ
          source_id: s_xSNFJ3uVoBPhNYenKBXfEa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GXyYh4gFZuBGtFJXmM8AQz
        status: active
        display_name: 王孝
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xaFW5n3rj8bBX5K7DicMLs | 王三成 | accepted |
| ancestors | p_CiQUwAvRuDMT5yXpH3NMmL | 王濬 | accepted |
| ancestors | p_GXyYh4gFZuBGtFJXmM8AQz | 王孝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儼（CBDB 126890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126890&o=json)
