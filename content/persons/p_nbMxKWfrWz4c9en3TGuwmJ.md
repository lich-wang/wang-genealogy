---
schema: wang-person/v1
id: p_nbMxKWfrWz4c9en3TGuwmJ
status: active
merged_into: null
display_name: 王显道
cbdb_id: 326551
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MsA5aPt349yT2tMGZd312q
        subject_person_id: p_nbMxKWfrWz4c9en3TGuwmJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王显道
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vVRhJ95wHFEoQ2ZopZehvE
          claim_id: c_MsA5aPt349yT2tMGZd312q
          source_id: s_fyUZqGv8iR8TkXP6rt1425
          stance: supports
          locator: Q45501594
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_fyUZqGv8iR8TkXP6rt1425
            source_type: api_record
            title: 维基数据：王显道（Q45501594）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45501594
            external_identifier: Q45501594
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_LzLXCwU94gb4VVQYjdhaK6
          claim_id: c_MsA5aPt349yT2tMGZd312q
          source_id: s_wKLY4TKnxgLaFf21jYqdjR
          stance: supports
          locator: CBDB:326551
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_wKLY4TKnxgLaFf21jYqdjR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王顯道（326551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326551&o=json
            external_identifier: CBDB:326551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_87g4Z6Jn5N5HyMok34zNug
        subject_person_id: p_nbMxKWfrWz4c9en3TGuwmJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 326551
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nEsrhUKHH2zSbRLXXDLeR6
          claim_id: c_87g4Z6Jn5N5HyMok34zNug
          source_id: s_fyUZqGv8iR8TkXP6rt1425
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_unYQHoYSVmimwottyGKus8
        subject_person_id: p_nbMxKWfrWz4c9en3TGuwmJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zicKU4bgAdp55gRC45KJy4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n7Hiyb2AzihDLdQDQv8Qo3
          claim_id: c_unYQHoYSVmimwottyGKus8
          source_id: s_nNdH2CU9Sa9Bv9AJLQ9gQ2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_nNdH2CU9Sa9Bv9AJLQ9gQ2
            source_type: api_record
            title: 维基数据：王子忠（Q45507096）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507096
            external_identifier: Q45507096
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
        - id: cs_dQm4iEGK78PJ5i9EzbSQNU
          claim_id: c_unYQHoYSVmimwottyGKus8
          source_id: s_fyUZqGv8iR8TkXP6rt1425
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_zicKU4bgAdp55gRC45KJy4
        status: active
        display_name: 王子忠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_f59mcrHIgC1cT678byQnAa
        subject_person_id: p_nbMxKWfrWz4c9en3TGuwmJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1CAD7Cg5ACndjPsTMwMUQ7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jlwzfa4Z3n7JMCu8mYpGO1
          claim_id: c_f59mcrHIgC1cT678byQnAa
          source_id: s_wKLY4TKnxgLaFf21jYqdjR
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_1CAD7Cg5ACndjPsTMwMUQ7
        status: merged
        display_name: 王越
        merged_into_person_id: p_SAKZSsVXkQRnwcLYqa1oYe
  other: []
---

# 王显道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王显道 | accepted |
| bio.summary | Ming dynasty person CBDB = 326551 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zicKU4bgAdp55gRC45KJy4 | 王子忠 | accepted |
| descendants | p_1CAD7Cg5ACndjPsTMwMUQ7 | 王越 | accepted |

## 外部来源

- [维基数据：王显道（Q45501594）](https://www.wikidata.org/wiki/Q45501594)
- [维基数据：王子忠（Q45507096）](https://www.wikidata.org/wiki/Q45507096)
- [CBDB 中国历代人物传记资料库：王顯道（326551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326551&o=json)
