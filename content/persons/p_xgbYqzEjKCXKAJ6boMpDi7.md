---
schema: wang-person/v1
id: p_xgbYqzEjKCXKAJ6boMpDi7
status: active
merged_into: null
display_name: 王機
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LxRYZ2zPkFrY2jK6XNooQh
        subject_person_id: p_xgbYqzEjKCXKAJ6boMpDi7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王機
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2iKPWmgCQd35HiiJhMkdyT
          claim_id: c_LxRYZ2zPkFrY2jK6XNooQh
          source_id: s_3HhDevahvejBM47s15gcLn
          stance: supports
          locator: CBDB:10698
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10698）
          source: &a1
            id: s_3HhDevahvejBM47s15gcLn
            source_type: api_record
            title: 中国历代人物传记资料库：王機（CBDB 10698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10698&o=json
            external_identifier: CBDB:10698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wNjvSBqrnwnciJV8uQWkNP
        subject_person_id: p_xgbYqzEjKCXKAJ6boMpDi7
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
        - id: cs_PBA79Gq53a3E6uP9dB2A7f
          claim_id: c_wNjvSBqrnwnciJV8uQWkNP
          source_id: s_3HhDevahvejBM47s15gcLn
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
        id: c_V0Q1XQ92o3zN972LU-j39Q
        subject_person_id: p_xgbYqzEjKCXKAJ6boMpDi7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cBjYNXmGTKaqzLUiA5y3bH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cnWC_D9VKTjeBvr8diTBuG
          claim_id: c_V0Q1XQ92o3zN972LU-j39Q
          source_id: s_jBEQqaSsU6XFAKsuHQ5YP2
          stance: supports
          locator: CBDB 双向互证（父 王機 ⇄ 子 王儼）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_jBEQqaSsU6XFAKsuHQ5YP2
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 10699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10699&o=json
            external_identifier: CBDB:10699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cBjYNXmGTKaqzLUiA5y3bH
        status: active
        display_name: 王儼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王機

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王機 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cBjYNXmGTKaqzLUiA5y3bH | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王機（CBDB 10698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10698&o=json)
- [中国历代人物传记资料库：王儼（CBDB 10699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10699&o=json)
