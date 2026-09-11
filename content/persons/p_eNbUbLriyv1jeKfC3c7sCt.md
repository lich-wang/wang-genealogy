---
schema: wang-person/v1
id: p_eNbUbLriyv1jeKfC3c7sCt
status: active
merged_into: null
display_name: 王岡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iJKD8Buaw3FQUu2icY3xjV
        subject_person_id: p_eNbUbLriyv1jeKfC3c7sCt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F3cYjLQvUDHUctarn85naL
          claim_id: c_iJKD8Buaw3FQUu2icY3xjV
          source_id: s_pHGGaaETseroQYunqHCzdH
          stance: supports
          locator: CBDB:1837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1837）
          source: &a1
            id: s_pHGGaaETseroQYunqHCzdH
            source_type: api_record
            title: 中国历代人物传记资料库：王岡（CBDB 1837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1837&o=json
            external_identifier: CBDB:1837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r5JyEFKv8i8xjv9YNBj2hu
        subject_person_id: p_eNbUbLriyv1jeKfC3c7sCt
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
        - id: cs_3qKtUh8pkaT2r65ZBgMQVE
          claim_id: c_r5JyEFKv8i8xjv9YNBj2hu
          source_id: s_pHGGaaETseroQYunqHCzdH
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
        id: c_3522ye1kux1rxEOTnts2L6
        subject_person_id: p_sHFJ2ZsHcQtaAPhRiY7kgq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eNbUbLriyv1jeKfC3c7sCt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pmWBn02X7Dgl4LX4gfIPEY
          claim_id: c_3522ye1kux1rxEOTnts2L6
          source_id: s_pHGGaaETseroQYunqHCzdH
          stance: supports
          locator: CBDB 双向互证（父 王軾 ⇄ 子 王岡）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_sHFJ2ZsHcQtaAPhRiY7kgq
        status: active
        display_name: 王軾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王岡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岡 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sHFJ2ZsHcQtaAPhRiY7kgq | 王軾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王岡（CBDB 1837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1837&o=json)
