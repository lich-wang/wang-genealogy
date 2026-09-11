---
schema: wang-person/v1
id: p_N1sjWWAngPbNQ5mXRM9s3H
status: active
merged_into: null
display_name: 王介
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jrr8RNsSnweNU6cudWyFdF
        subject_person_id: p_N1sjWWAngPbNQ5mXRM9s3H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t6q4KKMshm9mCX8Jdzfa93
          claim_id: c_Jrr8RNsSnweNU6cudWyFdF
          source_id: s_bpuRCgiE9dmV7GetKuCsAJ
          stance: supports
          locator: CBDB:10241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10241）
          source: &a1
            id: s_bpuRCgiE9dmV7GetKuCsAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 10241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10241&o=json
            external_identifier: CBDB:10241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.524Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hEEj6fhaqWP3dQVUBt4jy7
        subject_person_id: p_N1sjWWAngPbNQ5mXRM9s3H
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1158年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BApt7Vf7sFGGG7wjt3ZTFM
          claim_id: c_hEEj6fhaqWP3dQVUBt4jy7
          source_id: s_bpuRCgiE9dmV7GetKuCsAJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_d7t5Qu6KH84CApopiypFDS
        subject_person_id: p_N1sjWWAngPbNQ5mXRM9s3H
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1213年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zRrgUW2RLGGLpsD42SjKW1
          claim_id: c_d7t5Qu6KH84CApopiypFDS
          source_id: s_bpuRCgiE9dmV7GetKuCsAJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_68bxEb4NY51CsHsak8CMxj
        subject_person_id: p_N1sjWWAngPbNQ5mXRM9s3H
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
        - id: cs_A1VSCGCgTzES9HHHvVxGEM
          claim_id: c_68bxEb4NY51CsHsak8CMxj
          source_id: s_bpuRCgiE9dmV7GetKuCsAJ
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
        id: c_BglTpsrT_yEQUHIYr1gjBJ
        subject_person_id: p_fWF3nnEN6hjupeD4fHR2qh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N1sjWWAngPbNQ5mXRM9s3H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cv5Wi9Q-N10Uxzcks8aBj_
          claim_id: c_BglTpsrT_yEQUHIYr1gjBJ
          source_id: s_LGgYw62G9UR8eCgMczJ48s
          stance: supports
          locator: CBDB 双向互证（子 王介 ⇄ 父 王嵩卿）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_LGgYw62G9UR8eCgMczJ48s
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩卿（CBDB 24350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24350&o=json
            external_identifier: CBDB:24350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_fWF3nnEN6hjupeD4fHR2qh
        status: active
        display_name: 王嵩卿
        merged_into_person_id: null
  children:
    - claim:
        id: c_Et1YCQ0dSqNDkZr2O0mpRi
        subject_person_id: p_N1sjWWAngPbNQ5mXRM9s3H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BvXbPRWUcfLiPBR76u4MLW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OM1fsujhsV_o7uaIGZR5Zz
          claim_id: c_Et1YCQ0dSqNDkZr2O0mpRi
          source_id: s_JE3EYBu67fSr2MZLKWmG78
          stance: supports
          locator: CBDB 双向互证（父 王介 ⇄ 子 王埜）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_JE3EYBu67fSr2MZLKWmG78
            source_type: api_record
            title: 中国历代人物传记资料库：王埜（CBDB 10242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10242&o=json
            external_identifier: CBDB:10242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BvXbPRWUcfLiPBR76u4MLW
        status: active
        display_name: 王埜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_k8nIfDELV8xN_TyB1yl82K
        subject_person_id: p_dHZC3EZ3ECRTV8RLzJtHuV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_N1sjWWAngPbNQ5mXRM9s3H
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a4GWCwvARKRPHzjvDxRZ2H
          claim_id: c_k8nIfDELV8xN_TyB1yl82K
          source_id: s_5s32gXNt1LKDKSS177a7JW
          stance: supports
          locator: 全宋文，卷 7197：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5s32gXNt1LKDKSS177a7JW
            source_type: api_record
            title: 中国历代人物传记资料库：王矩（CBDB 24349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24349&o=json
            external_identifier: CBDB:24349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHZC3EZ3ECRTV8RLzJtHuV
        status: active
        display_name: 王矩
        merged_into_person_id: null
    - claim:
        id: c_5x2cKj0fZaNQuHoGXiE79q
        subject_person_id: p_vFrareYRs8BujyJitkmWc6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_N1sjWWAngPbNQ5mXRM9s3H
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eR6u4pxVeSz465GAaAYUG7
          claim_id: c_5x2cKj0fZaNQuHoGXiE79q
          source_id: s_mGm3QsSwTtD8YSmbhUMxei
          stance: supports
          locator: 全宋文，卷 7197：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mGm3QsSwTtD8YSmbhUMxei
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 10240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10240&o=json
            external_identifier: CBDB:10240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vFrareYRs8BujyJitkmWc6
        status: active
        display_name: 王敏
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_lAt7PDY1QyjpU6CF66PehQ
        subject_person_id: p_N1sjWWAngPbNQ5mXRM9s3H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9KKSnPnKv9UdjydbqgSQdz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__lkwflXSSwCZ7Ds6a8ykp0
          claim_id: c_lAt7PDY1QyjpU6CF66PehQ
          source_id: s_ZwD1HCHazCgZwqQXMMDfV9
          stance: supports
          locator: 全宋文，卷 7197：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZwD1HCHazCgZwqQXMMDfV9
            source_type: api_record
            title: 中国历代人物传记资料库：王同祖（CBDB 24875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24875&o=json
            external_identifier: CBDB:24875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9KKSnPnKv9UdjydbqgSQdz
        status: active
        display_name: 王同祖
        merged_into_person_id: null
  other: []
---

# 王介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介 | accepted |
| birth.date | 1158年 | accepted |
| death.date | 1213年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fWF3nnEN6hjupeD4fHR2qh | 王嵩卿 | accepted |
| children | p_BvXbPRWUcfLiPBR76u4MLW | 王埜 | accepted |
| ancestors | p_dHZC3EZ3ECRTV8RLzJtHuV | 王矩 | accepted |
| ancestors | p_vFrareYRs8BujyJitkmWc6 | 王敏 | accepted |
| descendants | p_9KKSnPnKv9UdjydbqgSQdz | 王同祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王介（CBDB 10241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10241&o=json)
- [中国历代人物传记资料库：王矩（CBDB 24349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24349&o=json)
- [中国历代人物传记资料库：王敏（CBDB 10240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10240&o=json)
- [中国历代人物传记资料库：王嵩卿（CBDB 24350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24350&o=json)
- [中国历代人物传记资料库：王同祖（CBDB 24875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24875&o=json)
- [中国历代人物传记资料库：王埜（CBDB 10242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10242&o=json)
