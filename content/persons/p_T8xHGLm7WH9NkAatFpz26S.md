---
schema: wang-person/v1
id: p_T8xHGLm7WH9NkAatFpz26S
status: active
merged_into: null
display_name: 王世傑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CxbBeRfCEfs8imAPrWDaH5
        subject_person_id: p_T8xHGLm7WH9NkAatFpz26S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_enP55tnL8MkUsGCU8FuD4f
          claim_id: c_CxbBeRfCEfs8imAPrWDaH5
          source_id: s_BmQzuyE2QcQYqBjbrMdYPn
          stance: supports
          locator: CBDB:338131
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338131）
          source: &a1
            id: s_BmQzuyE2QcQYqBjbrMdYPn
            source_type: api_record
            title: 中国历代人物传记资料库：王世傑（CBDB 338131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338131&o=json
            external_identifier: CBDB:338131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Cw936FQbA5HF8qhDdVzQw7
        subject_person_id: p_T8xHGLm7WH9NkAatFpz26S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CaFUVD4eiFYys3SBe5dz29
          claim_id: c_Cw936FQbA5HF8qhDdVzQw7
          source_id: s_BmQzuyE2QcQYqBjbrMdYPn
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
        id: c_RaakWA-VByhELqbtEi_tPe
        subject_person_id: p_xHk7N3AX4R3UJV5CDubwrX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T8xHGLm7WH9NkAatFpz26S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1EeSNwOXB-ggu-jBynb1kp
          claim_id: c_RaakWA-VByhELqbtEi_tPe
          source_id: s_BmQzuyE2QcQYqBjbrMdYPn
          stance: supports
          locator: CBDB 双向互证（父 王澧 ⇄ 子 王世傑）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_xHk7N3AX4R3UJV5CDubwrX
        status: active
        display_name: 王澧
        merged_into_person_id: null
  children:
    - claim:
        id: c_qbHySUKU1bBjYq3em0oAVp
        subject_person_id: p_T8xHGLm7WH9NkAatFpz26S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DHru16jGHKcfWy9wEAhHfF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x5Ch1twXTChS4tArBGRJWh
          claim_id: c_qbHySUKU1bBjYq3em0oAVp
          source_id: s_UKkQUb7Zizm8CYjP9c7DgL
          stance: supports
          locator: CBDB 双向互证（父 王世傑 ⇄ 子 王之麟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_UKkQUb7Zizm8CYjP9c7DgL
            source_type: api_record
            title: 中国历代人物传记资料库：王之麟（CBDB 338129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338129&o=json
            external_identifier: CBDB:338129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DHru16jGHKcfWy9wEAhHfF
        status: active
        display_name: 王之麟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_yM-8T_8oQ17WfwxYAUtxs_
        subject_person_id: p_8GmE2mtKXF9gY2iwgPCfjf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T8xHGLm7WH9NkAatFpz26S
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vQNfFCLoSPuAgg1CAgwhn1
          claim_id: c_yM-8T_8oQ17WfwxYAUtxs_
          source_id: s_6uwC9rto3h6f8eErDmJUR6
          stance: supports
          locator: CBDB 双向互证（孫 王世傑 ⇄ 祖父 王俞）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_6uwC9rto3h6f8eErDmJUR6
            source_type: api_record
            title: 中国历代人物传记资料库：王俞（CBDB 338130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338130&o=json
            external_identifier: CBDB:338130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8GmE2mtKXF9gY2iwgPCfjf
        status: active
        display_name: 王俞
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王世傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世傑 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xHk7N3AX4R3UJV5CDubwrX | 王澧 | accepted |
| children | p_DHru16jGHKcfWy9wEAhHfF | 王之麟 | accepted |
| ancestors | p_8GmE2mtKXF9gY2iwgPCfjf | 王俞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世傑（CBDB 338131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338131&o=json)
- [中国历代人物传记资料库：王俞（CBDB 338130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338130&o=json)
- [中国历代人物传记资料库：王之麟（CBDB 338129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338129&o=json)
