---
schema: wang-person/v1
id: p_stumq3LKUX83aY7FDSYoQ9
status: active
merged_into: null
display_name: 王紹先
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4G3SCDqfHbCHenmvLZEU39
        subject_person_id: p_stumq3LKUX83aY7FDSYoQ9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xrNc9u5QC6mTK4CJ3JHRKp
          claim_id: c_4G3SCDqfHbCHenmvLZEU39
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
          stance: supports
          locator: CBDB:206726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206726）
          source: &a1
            id: s_51SNKp1DcDfU2auLpQ39Cr
            source_type: api_record
            title: 中国历代人物传记资料库：王紹先（CBDB 206726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206726&o=json
            external_identifier: CBDB:206726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E5WJsmYBk6egWGCdpdgsKs
        subject_person_id: p_stumq3LKUX83aY7FDSYoQ9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1559年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jqpEpGWNxb7EAESMRvFLe6
          claim_id: c_E5WJsmYBk6egWGCdpdgsKs
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
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
        id: c_7Z6e4pZEWaQTuNkFEbXeuG
        subject_person_id: p_stumq3LKUX83aY7FDSYoQ9
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
        - id: cs_bJ3gkwv4Wn87tEtuKFCrdk
          claim_id: c_7Z6e4pZEWaQTuNkFEbXeuG
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
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
        id: c_TxDHEwS7pBQWCRkml8ZQzk
        subject_person_id: p_MzjvisS65eTZTH4c6EA4mL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_stumq3LKUX83aY7FDSYoQ9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WST65D7MHDJyzsxkcVGD0V
          claim_id: c_TxDHEwS7pBQWCRkml8ZQzk
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MzjvisS65eTZTH4c6EA4mL
        status: active
        display_name: 王昌功
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_zCjkz9NhzQmMeLdUCyUQ5Z
        subject_person_id: p_stumq3LKUX83aY7FDSYoQ9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pkpzoUkjchaQHfYiALSDMh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4RoEq_KkvhDAJS-0jgiWzy
          claim_id: c_zCjkz9NhzQmMeLdUCyUQ5Z
          source_id: s_tkdotZfBkD62uhEpJ1eUE6
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tkdotZfBkD62uhEpJ1eUE6
            source_type: api_record
            title: 中国历代人物传记资料库：雒氏(王紹先妻)（CBDB 222278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222278&o=json
            external_identifier: CBDB:222278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pkpzoUkjchaQHfYiALSDMh
        status: active
        display_name: 雒氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_oGcPtet5cQVB52uitg5cKi
        subject_person_id: p_U6gQS1uZx6TnaacuyLTD96
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_stumq3LKUX83aY7FDSYoQ9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sgb8QB5BiMKKURviY7lBwF
          claim_id: c_oGcPtet5cQVB52uitg5cKi
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_U6gQS1uZx6TnaacuyLTD96
        status: active
        display_name: 王懋
        merged_into_person_id: null
    - claim:
        id: c_j8msgjtkCh7G1Hr_j-ePcp
        subject_person_id: p_Ub1fRrchPGg2dwmwMQ21yb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_stumq3LKUX83aY7FDSYoQ9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2ZRqbzWnUSwXSPtaWWTQXW
          claim_id: c_j8msgjtkCh7G1Hr_j-ePcp
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ub1fRrchPGg2dwmwMQ21yb
        status: active
        display_name: 王用賢
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王紹先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹先 | accepted |
| birth.date | 1559年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MzjvisS65eTZTH4c6EA4mL | 王昌功 | accepted |
| spouses | p_pkpzoUkjchaQHfYiALSDMh | 雒氏 | accepted |
| ancestors | p_U6gQS1uZx6TnaacuyLTD96 | 王懋 | accepted |
| ancestors | p_Ub1fRrchPGg2dwmwMQ21yb | 王用賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：雒氏(王紹先妻)（CBDB 222278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222278&o=json)
- [中国历代人物传记资料库：王紹先（CBDB 206726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206726&o=json)
