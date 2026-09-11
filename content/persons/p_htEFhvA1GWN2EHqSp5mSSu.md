---
schema: wang-person/v1
id: p_htEFhvA1GWN2EHqSp5mSSu
status: active
merged_into: null
display_name: 王世芳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oM4ZsAqSaBH72Ekw8sH1GC
        subject_person_id: p_htEFhvA1GWN2EHqSp5mSSu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AUdYpo8qboNsGCC6MifaKM
          claim_id: c_oM4ZsAqSaBH72Ekw8sH1GC
          source_id: s_NHHE1fgFd2kb43cos1yrQ5
          stance: supports
          locator: CBDB:202098
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202098）
          source: &a1
            id: s_NHHE1fgFd2kb43cos1yrQ5
            source_type: api_record
            title: 中国历代人物传记资料库：王世芳（CBDB 202098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202098&o=json
            external_identifier: CBDB:202098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.719Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4bcgqnwNX8zS9gBUBEJH5n
        subject_person_id: p_htEFhvA1GWN2EHqSp5mSSu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1487年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xp13t3LiVHRPE4qy9xBt4W
          claim_id: c_4bcgqnwNX8zS9gBUBEJH5n
          source_id: s_NHHE1fgFd2kb43cos1yrQ5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2iUKFoyF68favWG1KYWkSw
        subject_person_id: p_htEFhvA1GWN2EHqSp5mSSu
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
        - id: cs_N1UQaFQRaVBAt9UsTJzEkx
          claim_id: c_2iUKFoyF68favWG1KYWkSw
          source_id: s_NHHE1fgFd2kb43cos1yrQ5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_qvPGgis8SjW3vKWSM4Ssar
        subject_person_id: p_emSVrN2cQ2GqKFX79DRrPL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_htEFhvA1GWN2EHqSp5mSSu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YuiPXGA0AZbC1blrDYuH4B
          claim_id: c_qvPGgis8SjW3vKWSM4Ssar
          source_id: s_sEQEViKcXkMBW7thxPUFxi
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sEQEViKcXkMBW7thxPUFxi
            source_type: api_record
            title: 中国历代人物传记资料库：王僑（CBDB 283503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283503&o=json
            external_identifier: CBDB:283503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.136Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_emSVrN2cQ2GqKFX79DRrPL
        status: active
        display_name: 王僑
        merged_into_person_id: null
    - claim:
        id: c_MI4As05QOyqqOHvrhlBDAP
        subject_person_id: p_x6f6DgLrcD1iiVCeB2E5kp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_htEFhvA1GWN2EHqSp5mSSu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WFQuGumSFKU3d8aQOHGVf-
          claim_id: c_MI4As05QOyqqOHvrhlBDAP
          source_id: s_wggnkd31bM4PUi11xGhHw5
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wggnkd31bM4PUi11xGhHw5
            source_type: api_record
            title: 中国历代人物传记资料库：王輅（CBDB 283502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283502&o=json
            external_identifier: CBDB:283502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.134Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_x6f6DgLrcD1iiVCeB2E5kp
        status: active
        display_name: 王輅
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王世芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世芳 | accepted |
| birth.date | 1487年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_emSVrN2cQ2GqKFX79DRrPL | 王僑 | accepted |
| ancestors | p_x6f6DgLrcD1iiVCeB2E5kp | 王輅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輅（CBDB 283502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283502&o=json)
- [中国历代人物传记资料库：王僑（CBDB 283503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283503&o=json)
- [中国历代人物传记资料库：王世芳（CBDB 202098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202098&o=json)
