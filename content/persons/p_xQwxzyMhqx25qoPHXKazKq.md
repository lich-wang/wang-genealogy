---
schema: wang-person/v1
id: p_xQwxzyMhqx25qoPHXKazKq
status: active
merged_into: null
display_name: 王晦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_26vA3cyxXqRZG7J2tEEYhg
        subject_person_id: p_xQwxzyMhqx25qoPHXKazKq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kp2nnxg8HUVKQv3XFyqH4A
          claim_id: c_26vA3cyxXqRZG7J2tEEYhg
          source_id: s_hbigRoGwm494EyZssLMi9D
          stance: supports
          locator: CBDB:29333
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29333）
          source: &a1
            id: s_hbigRoGwm494EyZssLMi9D
            source_type: api_record
            title: 中国历代人物传记资料库：王晦（CBDB 29333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29333&o=json
            external_identifier: CBDB:29333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.000Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6BhqLbNj3wKT1Xjv8t4EyG
        subject_person_id: p_xQwxzyMhqx25qoPHXKazKq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CTWBrsDzQNzK7hQqh7iNe2
          claim_id: c_6BhqLbNj3wKT1Xjv8t4EyG
          source_id: s_hbigRoGwm494EyZssLMi9D
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
        id: c_FF9t5G-mHvy9I2SB2lGrj5
        subject_person_id: p_xQwxzyMhqx25qoPHXKazKq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G6fKAKWzeChduasCK684Fr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TQJj7joZx9EtBpoDEIvQO1
          claim_id: c_FF9t5G-mHvy9I2SB2lGrj5
          source_id: s_mDDFkJCaevic2299EtyVGF
          stance: supports
          locator: CBDB 双向互证（父 王晦 ⇄ 子 王守誠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_mDDFkJCaevic2299EtyVGF
            source_type: api_record
            title: 中国历代人物传记资料库：王守誠（CBDB 29334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29334&o=json
            external_identifier: CBDB:29334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G6fKAKWzeChduasCK684Fr
        status: active
        display_name: 王守誠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晦 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_G6fKAKWzeChduasCK684Fr | 王守誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晦（CBDB 29333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29333&o=json)
- [中国历代人物传记资料库：王守誠（CBDB 29334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29334&o=json)
