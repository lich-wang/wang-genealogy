---
schema: wang-person/v1
id: p_MAiRkitkM5dtxpiXBoh3Jq
status: active
merged_into: null
display_name: 王朝隱
cbdb_id: 22225
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3yAXCLvR1J9KfYqGYAp5b7
        subject_person_id: p_MAiRkitkM5dtxpiXBoh3Jq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝隱，宋人物。籍贯眉山，身份为士人。（中国历代人物传记资料库 CBDB 22225）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_SZ9f4mPBcHv1fhYl6ci1qQ
          claim_id: c_3yAXCLvR1J9KfYqGYAp5b7
          source_id: s_KFZuu6vvxfnqwGbHJD3GgV
          stance: supports
          locator: CBDB:22225
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KFZuu6vvxfnqwGbHJD3GgV
            source_type: api_record
            title: 中国历代人物传记资料库：王朝隱（CBDB 22225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22225&o=json
            external_identifier: CBDB:22225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aqKsUgEzYYxTt5fHDk3bS4
        subject_person_id: p_MAiRkitkM5dtxpiXBoh3Jq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝隱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FJR7Bq9AVh7WW6yKHLLQg2
          claim_id: c_aqKsUgEzYYxTt5fHDk3bS4
          source_id: s_KFZuu6vvxfnqwGbHJD3GgV
          stance: supports
          locator: CBDB:22225
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_t1_TZitPjkAR_Ka2x-KG9q
        subject_person_id: p_MAiRkitkM5dtxpiXBoh3Jq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m4omCECgB9Kup9Me7EUCYL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bxKjWn8WwJCG2Gp_EMwynI
          claim_id: c_t1_TZitPjkAR_Ka2x-KG9q
          source_id: s_zFprDqFo329KDdGLu8TaNs
          stance: supports
          locator: CBDB 双向互证（父 王朝隱 ⇄ 子 王淮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_zFprDqFo329KDdGLu8TaNs
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 22226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22226&o=json
            external_identifier: CBDB:22226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_m4omCECgB9Kup9Me7EUCYL
        status: active
        display_name: 王淮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝隱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王朝隱，宋人物。籍贯眉山，身份为士人。（中国历代人物传记资料库 CBDB 22225） | accepted |
| name.primary | 王朝隱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_m4omCECgB9Kup9Me7EUCYL | 王淮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝隱（CBDB 22225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22225&o=json)
- [中国历代人物传记资料库：王淮（CBDB 22226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22226&o=json)
