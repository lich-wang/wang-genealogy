---
schema: wang-person/v1
id: p_gkheh2H38pxtSB6bw2FeUY
status: active
merged_into: null
display_name: 王正辭
cbdb_id: 26352
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5F8LYZLEJrcZgP9aaTek37
        subject_person_id: p_gkheh2H38pxtSB6bw2FeUY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正辭，宋人物。中国历代人物传记资料库（CBDB）以人物编号 26352 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_60g19C0Yc_sc50rlD2FJwP
          claim_id: c_5F8LYZLEJrcZgP9aaTek37
          source_id: s_RdfHs9UPenBaTKwc6p223t
          stance: supports
          locator: CBDB:26352
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_RdfHs9UPenBaTKwc6p223t
            source_type: api_record
            title: 中国历代人物传记资料库：王正辭（CBDB 26352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26352&o=json
            external_identifier: CBDB:26352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nxSi7bwM82QwDhFmY7axpr
        subject_person_id: p_gkheh2H38pxtSB6bw2FeUY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正辭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7PLvNk4VLcQMQ1K9KYnruQ
          claim_id: c_nxSi7bwM82QwDhFmY7axpr
          source_id: s_RdfHs9UPenBaTKwc6p223t
          stance: supports
          locator: CBDB:26352
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_RdfHs9UPenBaTKwc6p223t
            source_type: api_record
            title: 中国历代人物传记资料库：王正辭（CBDB 26352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26352&o=json
            external_identifier: CBDB:26352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vmiWEw7819KQ-RjLBM6MwJ
        subject_person_id: p_9NsMqSGNiM8RgLGjUarzq5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gkheh2H38pxtSB6bw2FeUY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b8hENFW28I_2ZWrqdQEOzB
          claim_id: c_vmiWEw7819KQ-RjLBM6MwJ
          source_id: s_u8Y9bSA64Ra2kkyGTspCFk
          stance: supports
          locator: CBDB 双向互证（子 王正辭 ⇄ 父 王若納）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_u8Y9bSA64Ra2kkyGTspCFk
            source_type: api_record
            title: 中国历代人物传记资料库：王若納（CBDB 26351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26351&o=json
            external_identifier: CBDB:26351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9NsMqSGNiM8RgLGjUarzq5
        status: active
        display_name: 王若納
        merged_into_person_id: null
  children:
    - claim:
        id: c_yF4i1EQY1v_f9cgnehUHF5
        subject_person_id: p_gkheh2H38pxtSB6bw2FeUY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wMzMMZUYVLTvRNNyoinudX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ShS2O9ZS8yqf5xfUMUbie
          claim_id: c_yF4i1EQY1v_f9cgnehUHF5
          source_id: s_EHDESTiq8s2BPbwzx11enQ
          stance: supports
          locator: CBDB 双向互证（父 王正辭 ⇄ 子 王檢）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_EHDESTiq8s2BPbwzx11enQ
            source_type: api_record
            title: 中国历代人物传记资料库：王檢（CBDB 26353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26353&o=json
            external_identifier: CBDB:26353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wMzMMZUYVLTvRNNyoinudX
        status: active
        display_name: 王檢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正辭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正辭，宋人物。中国历代人物传记资料库（CBDB）以人物编号 26352 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王正辭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9NsMqSGNiM8RgLGjUarzq5 | 王若納 | accepted |
| children | p_wMzMMZUYVLTvRNNyoinudX | 王檢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王檢（CBDB 26353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26353&o=json)
- [中国历代人物传记资料库：王若納（CBDB 26351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26351&o=json)
- [中国历代人物传记资料库：王正辭（CBDB 26352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26352&o=json)
