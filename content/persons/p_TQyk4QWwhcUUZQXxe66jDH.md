---
schema: wang-person/v1
id: p_TQyk4QWwhcUUZQXxe66jDH
status: active
merged_into: null
display_name: 王詠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MaRj85LTuhN6KJ4tB2qVEK
        subject_person_id: p_TQyk4QWwhcUUZQXxe66jDH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ygfqf3fFGBbE9PFfLAC1hv
          claim_id: c_MaRj85LTuhN6KJ4tB2qVEK
          source_id: s_NBhoY1PJp3T71pqSaTD1Hv
          stance: supports
          locator: CBDB:22930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22930）
          source: &a1
            id: s_NBhoY1PJp3T71pqSaTD1Hv
            source_type: api_record
            title: 中国历代人物传记资料库：王詠（CBDB 22930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22930&o=json
            external_identifier: CBDB:22930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d3A6vQv6bsHJ9WC4ZJQuN6
        subject_person_id: p_TQyk4QWwhcUUZQXxe66jDH
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
        - id: cs_7Eaw4mV2jG65zbmeHAFzSH
          claim_id: c_d3A6vQv6bsHJ9WC4ZJQuN6
          source_id: s_NBhoY1PJp3T71pqSaTD1Hv
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
        id: c_Xj9uorfl5isz0ilp8DANhq
        subject_person_id: p_GC5h3sWatBkASdGv76t7Pz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TQyk4QWwhcUUZQXxe66jDH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FQZIznmHO7LvUz4qm-PRc0
          claim_id: c_Xj9uorfl5isz0ilp8DANhq
          source_id: s_i838NDVJWLFVSddQ6JFafo
          stance: supports
          locator: CBDB 双向互证（子 王詠 ⇄ 父 王淮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_i838NDVJWLFVSddQ6JFafo
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 22929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22929&o=json
            external_identifier: CBDB:22929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GC5h3sWatBkASdGv76t7Pz
        status: active
        display_name: 王淮
        merged_into_person_id: null
  children:
    - claim:
        id: c_4flMIqdf9fAwVmk-Nbx0Tv
        subject_person_id: p_TQyk4QWwhcUUZQXxe66jDH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_igztDbU8rAPT4ZKkD4V13x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1AAf99rmLay7FXSVGAVryx
          claim_id: c_4flMIqdf9fAwVmk-Nbx0Tv
          source_id: s_NBhoY1PJp3T71pqSaTD1Hv
          stance: supports
          locator: CBDB 双向互证（子 王謙夫 ⇄ 父 王詠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_igztDbU8rAPT4ZKkD4V13x
        status: active
        display_name: 王謙夫
        merged_into_person_id: null
    - claim:
        id: c_t5LKXsj9AJ8s8YR_eCErFj
        subject_person_id: p_TQyk4QWwhcUUZQXxe66jDH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zzJ4ZDoiD31Veqi7XMMf5a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bN-bWSR2KLpgwjIM8QEf5W
          claim_id: c_t5LKXsj9AJ8s8YR_eCErFj
          source_id: s_NBhoY1PJp3T71pqSaTD1Hv
          stance: supports
          locator: CBDB 双向互证（子 王少愷 ⇄ 父 王詠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_zzJ4ZDoiD31Veqi7XMMf5a
        status: active
        display_name: 王少愷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王詠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詠 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GC5h3sWatBkASdGv76t7Pz | 王淮 | accepted |
| children | p_igztDbU8rAPT4ZKkD4V13x | 王謙夫 | accepted |
| children | p_zzJ4ZDoiD31Veqi7XMMf5a | 王少愷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淮（CBDB 22929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22929&o=json)
- [中国历代人物传记资料库：王詠（CBDB 22930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22930&o=json)
