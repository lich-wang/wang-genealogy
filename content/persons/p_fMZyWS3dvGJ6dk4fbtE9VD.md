---
schema: wang-person/v1
id: p_fMZyWS3dvGJ6dk4fbtE9VD
status: active
merged_into: null
display_name: 王游仙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F4pLjQaCrGE4DE8Xak9AND
        subject_person_id: p_fMZyWS3dvGJ6dk4fbtE9VD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王游仙
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YZpkdoUAtyTP9jJPymuWbL
          claim_id: c_F4pLjQaCrGE4DE8Xak9AND
          source_id: s_2rG1xxFnTzw5DQEiGM6zZu
          stance: supports
          locator: CBDB:192154
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192154）
          source: &a1
            id: s_2rG1xxFnTzw5DQEiGM6zZu
            source_type: api_record
            title: 中国历代人物传记资料库：王游仙（CBDB 192154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192154&o=json
            external_identifier: CBDB:192154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_M8ThnDLVWXRFAniH8f81CV
        subject_person_id: p_fMZyWS3dvGJ6dk4fbtE9VD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 765年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gB32DtJxLfCvuEgDDdXsoj
          claim_id: c_M8ThnDLVWXRFAniH8f81CV
          source_id: s_2rG1xxFnTzw5DQEiGM6zZu
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
        id: c_JvEz14buGtR59cUMjh8oad
        subject_person_id: p_fMZyWS3dvGJ6dk4fbtE9VD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GyozQZDES92ELjtbkhnEBf
          claim_id: c_JvEz14buGtR59cUMjh8oad
          source_id: s_2rG1xxFnTzw5DQEiGM6zZu
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
        id: c_u5fvmpN5bxpOitUE4KF2Gg
        subject_person_id: p_fMZyWS3dvGJ6dk4fbtE9VD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2N9XpyU3DwCgBSQZ6FLApn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kypdncsx89X0JS-r48_TcK
          claim_id: c_u5fvmpN5bxpOitUE4KF2Gg
          source_id: s_CHrT7AkTzxzPUCzWtaHNBx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CHrT7AkTzxzPUCzWtaHNBx
            source_type: api_record
            title: 中国历代人物传记资料库：王明哲（CBDB 166619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166619&o=json
            external_identifier: CBDB:166619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2N9XpyU3DwCgBSQZ6FLApn
        status: active
        display_name: 王明哲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王游仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王游仙 | accepted |
| death.date | 765年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2N9XpyU3DwCgBSQZ6FLApn | 王明哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明哲（CBDB 166619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166619&o=json)
- [中国历代人物传记资料库：王游仙（CBDB 192154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192154&o=json)
