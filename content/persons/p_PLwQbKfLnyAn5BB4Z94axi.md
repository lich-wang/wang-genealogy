---
schema: wang-person/v1
id: p_PLwQbKfLnyAn5BB4Z94axi
status: active
merged_into: null
display_name: 王延臺
cbdb_id: 139204
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EJHJtEszpFgkQ2jgXDeodA
        subject_person_id: p_PLwQbKfLnyAn5BB4Z94axi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延臺（卒于660年），唐人物。曾任校尉。（中国历代人物传记资料库 CBDB 139204）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wrzQMdMF3u3LdnyNOaKYTN
          claim_id: c_EJHJtEszpFgkQ2jgXDeodA
          source_id: s_4PK7Yzn13KatMwFmVkEHKT
          stance: supports
          locator: CBDB:139204
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4PK7Yzn13KatMwFmVkEHKT
            source_type: api_record
            title: 中国历代人物传记资料库：王延臺（CBDB 139204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139204&o=json
            external_identifier: CBDB:139204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rQC1EyFN3a48yiSKm83RNh
        subject_person_id: p_PLwQbKfLnyAn5BB4Z94axi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 660年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0660-01-01
            latest: 0660-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RT911e2HoZNpYfa1ERGBxo
          claim_id: c_rQC1EyFN3a48yiSKm83RNh
          source_id: s_4PK7Yzn13KatMwFmVkEHKT
          stance: supports
          locator: CBDB:139204
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 660
          source:
            id: s_4PK7Yzn13KatMwFmVkEHKT
            source_type: api_record
            title: 中国历代人物传记资料库：王延臺（CBDB 139204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139204&o=json
            external_identifier: CBDB:139204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XdtXUYXau2vKTx64PRqkpB
        subject_person_id: p_PLwQbKfLnyAn5BB4Z94axi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延臺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ATKRhgyCrFPUMEpMwRW3PB
          claim_id: c_XdtXUYXau2vKTx64PRqkpB
          source_id: s_4PK7Yzn13KatMwFmVkEHKT
          stance: supports
          locator: CBDB:139204
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 660
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_z89mFeyFBSxAVi_PoL4aSq
        subject_person_id: p_PLwQbKfLnyAn5BB4Z94axi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_hWgLw9pJTch7Y7johDQQFj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NJ4jptx5q-mfdhD4h-Pk2_
          claim_id: c_z89mFeyFBSxAVi_PoL4aSq
          source_id: s_3oz7kN22Oyz5ehRdopU7Qg
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 137：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3oz7kN22Oyz5ehRdopU7Qg
            source_type: api_record
            title: 中国历代人物传记资料库：劉住隆（CBDB 147623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147623&o=json
            external_identifier: CBDB:147623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hWgLw9pJTch7Y7johDQQFj
        status: active
        display_name: 劉住隆
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王延臺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延臺（卒于660年），唐人物。曾任校尉。（中国历代人物传记资料库 CBDB 139204） | accepted |
| death.date | 660年 | accepted |
| name.primary | 王延臺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hWgLw9pJTch7Y7johDQQFj | 劉住隆 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉住隆（CBDB 147623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147623&o=json)
- [中国历代人物传记资料库：王延臺（CBDB 139204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139204&o=json)
