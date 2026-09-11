---
schema: wang-person/v1
id: p_FebULYZ1Mok5osGeZL97Vp
status: active
merged_into: null
display_name: 王嶽
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K2gCxiKcthGX5eAQrnzsgt
        subject_person_id: p_FebULYZ1Mok5osGeZL97Vp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DXp9uUG5KnS5ntAKc95kpv
          claim_id: c_K2gCxiKcthGX5eAQrnzsgt
          source_id: s_aCG56MW9QP1Sa1GVL2iATh
          stance: supports
          locator: CBDB:200389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200389）
          source: &a1
            id: s_aCG56MW9QP1Sa1GVL2iATh
            source_type: api_record
            title: 中国历代人物传记资料库：王嶽（CBDB 200389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200389&o=json
            external_identifier: CBDB:200389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uc5VCNN7BcqDhchLDUNufB
        subject_person_id: p_FebULYZ1Mok5osGeZL97Vp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1448年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wcwrWmB79rBqdVd9VuHj96
          claim_id: c_uc5VCNN7BcqDhchLDUNufB
          source_id: s_aCG56MW9QP1Sa1GVL2iATh
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
        id: c_zGy2iRSoMPgqNxHT8qXDBs
        subject_person_id: p_FebULYZ1Mok5osGeZL97Vp
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
        - id: cs_wzwX91W7dSJUgbFhr19mea
          claim_id: c_zGy2iRSoMPgqNxHT8qXDBs
          source_id: s_aCG56MW9QP1Sa1GVL2iATh
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
        id: c_7RQ6feULIK9k1Q0Cs9uzK6
        subject_person_id: p_1fEzNtyPjCg5rqRonPekKp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FebULYZ1Mok5osGeZL97Vp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rstty4MlXzkGFr_YovmD7t
          claim_id: c_7RQ6feULIK9k1Q0Cs9uzK6
          source_id: s_oRCAgNvVuPRjjqBzMZFSP8
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oRCAgNvVuPRjjqBzMZFSP8
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 257073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257073&o=json
            external_identifier: CBDB:257073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1fEzNtyPjCg5rqRonPekKp
        status: active
        display_name: 王澤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_wQS1gYHa432MDTblMe49jg
        subject_person_id: p_iDHYjbUs9Cnr7wU4NATWxS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FebULYZ1Mok5osGeZL97Vp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xcJi85E0RK4cMFmSF4z16b
          claim_id: c_wQS1gYHa432MDTblMe49jg
          source_id: s_CBakdwAKt5Yhs5EzXoKTkB
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CBakdwAKt5Yhs5EzXoKTkB
            source_type: api_record
            title: 中国历代人物传记资料库：王致遠（CBDB 257071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257071&o=json
            external_identifier: CBDB:257071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iDHYjbUs9Cnr7wU4NATWxS
        status: active
        display_name: 王致遠
        merged_into_person_id: null
    - claim:
        id: c_Bg6PlvOJH45FGFgrxfp-vg
        subject_person_id: p_PKmXoEz6WVxAL58MjFwTD2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FebULYZ1Mok5osGeZL97Vp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wy3-4JpO2N11uIkY_-F1sm
          claim_id: c_Bg6PlvOJH45FGFgrxfp-vg
          source_id: s_irHFsBsd3Vj6JT14getcVT
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_irHFsBsd3Vj6JT14getcVT
            source_type: api_record
            title: 中国历代人物传记资料库：王景信（CBDB 257072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257072&o=json
            external_identifier: CBDB:257072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_PKmXoEz6WVxAL58MjFwTD2
        status: active
        display_name: 王景信
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王嶽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶽 | accepted |
| birth.date | 1448年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1fEzNtyPjCg5rqRonPekKp | 王澤 | accepted |
| ancestors | p_iDHYjbUs9Cnr7wU4NATWxS | 王致遠 | accepted |
| ancestors | p_PKmXoEz6WVxAL58MjFwTD2 | 王景信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景信（CBDB 257072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257072&o=json)
- [中国历代人物传记资料库：王嶽（CBDB 200389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200389&o=json)
- [中国历代人物传记资料库：王澤（CBDB 257073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257073&o=json)
- [中国历代人物传记资料库：王致遠（CBDB 257071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257071&o=json)
