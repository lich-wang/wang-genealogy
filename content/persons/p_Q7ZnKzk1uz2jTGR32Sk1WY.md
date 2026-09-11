---
schema: wang-person/v1
id: p_Q7ZnKzk1uz2jTGR32Sk1WY
status: active
merged_into: null
display_name: 王槩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QoMkcgzc5iwp1Q5he6nE4p
        subject_person_id: p_Q7ZnKzk1uz2jTGR32Sk1WY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QYPCP7t9LCDCH7FhQ5E3hL
          claim_id: c_QoMkcgzc5iwp1Q5he6nE4p
          source_id: s_VrX1Vwa1mCGdW2GSK1rLvP
          stance: supports
          locator: CBDB:243238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243238）
          source: &a1
            id: s_VrX1Vwa1mCGdW2GSK1rLvP
            source_type: api_record
            title: 中国历代人物传记资料库：王槩（CBDB 243238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243238&o=json
            external_identifier: CBDB:243238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GSW7nLQy83UNEc63BVtGJk
        subject_person_id: p_Q7ZnKzk1uz2jTGR32Sk1WY
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
        - id: cs_DTdAZ2KVYv5BF9eeQDbzEH
          claim_id: c_GSW7nLQy83UNEc63BVtGJk
          source_id: s_VrX1Vwa1mCGdW2GSK1rLvP
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
        id: c_4XLhq4fKK0sB5Rrrc4a3y-
        subject_person_id: p_Q7ZnKzk1uz2jTGR32Sk1WY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-dk5EFqou6s5gACicMhMcI
          claim_id: c_4XLhq4fKK0sB5Rrrc4a3y-
          source_id: s_VrX1Vwa1mCGdW2GSK1rLvP
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第六十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eeT9SQ93RGpf2B6Bihu6TP
        status: active
        display_name: 王臣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王槩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eeT9SQ93RGpf2B6Bihu6TP | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王槩（CBDB 243238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243238&o=json)
