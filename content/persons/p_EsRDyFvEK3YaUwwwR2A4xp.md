---
schema: wang-person/v1
id: p_EsRDyFvEK3YaUwwwR2A4xp
status: active
merged_into: null
display_name: 王璣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zdx2LxWq3R6Hdsoyi9NiXR
        subject_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iiYus7HXmQYrytsfgg9jvb
          claim_id: c_Zdx2LxWq3R6Hdsoyi9NiXR
          source_id: s_pjZuWWz5q9b7suKN74HyQM
          stance: supports
          locator: CBDB:126823
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126823）
          source: &a1
            id: s_pjZuWWz5q9b7suKN74HyQM
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 126823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126823&o=json
            external_identifier: CBDB:126823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.232Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_C9wruzTCBeAH1LBaXR5ihQ
        subject_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1490年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xzLG2mnqjMPDqWkbhNrABo
          claim_id: c_C9wruzTCBeAH1LBaXR5ihQ
          source_id: s_pjZuWWz5q9b7suKN74HyQM
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
        id: c_uDngymGrkXNge5vRpebKhN
        subject_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1563年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9bCEL4XiicPpZE9kpR8P7z
          claim_id: c_uDngymGrkXNge5vRpebKhN
          source_id: s_pjZuWWz5q9b7suKN74HyQM
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
        id: c_VHztc4qnAN3exPjjr8Gh6b
        subject_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
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
        - id: cs_t9ZJfdYNEEqXdMdV6NMwBm
          claim_id: c_VHztc4qnAN3exPjjr8Gh6b
          source_id: s_pjZuWWz5q9b7suKN74HyQM
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
        id: c_ZeqDGGOnD-gmdKrsSacXIK
        subject_person_id: p_oLGH5VdAkbTAKw9xdBWvfS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H6eIEiFsLWjk8RdULOsir9
          claim_id: c_ZeqDGGOnD-gmdKrsSacXIK
          source_id: s_pjZuWWz5q9b7suKN74HyQM
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oLGH5VdAkbTAKw9xdBWvfS
        status: active
        display_name: 王文暉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_9U64Y2kTvLL9FQeKFgSCwH
        subject_person_id: p_w95Qyiy1Ei4ZGtAAFRrWXU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XiTBYO5yw500R4k2QarQyj
          claim_id: c_9U64Y2kTvLL9FQeKFgSCwH
          source_id: s_pjZuWWz5q9b7suKN74HyQM
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w95Qyiy1Ei4ZGtAAFRrWXU
        status: active
        display_name: 王時言
        merged_into_person_id: null
    - claim:
        id: c_ZiDScIPZQ96xDRBIChezw4
        subject_person_id: p_SKTCYUFHWsLRhaeZBL7nG7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zDBbwFB8u6TN6XY1LAs7Vh
          claim_id: c_ZiDScIPZQ96xDRBIChezw4
          source_id: s_pjZuWWz5q9b7suKN74HyQM
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SKTCYUFHWsLRhaeZBL7nG7
        status: active
        display_name: 王璽
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王璣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璣 | accepted |
| birth.date | 1490年 | accepted |
| death.date | 1563年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oLGH5VdAkbTAKw9xdBWvfS | 王文暉 | accepted |
| ancestors | p_w95Qyiy1Ei4ZGtAAFRrWXU | 王時言 | accepted |
| ancestors | p_SKTCYUFHWsLRhaeZBL7nG7 | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璣（CBDB 126823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126823&o=json)
