---
schema: wang-person/v1
id: p_MPCRGZ8F57txdPGFqn6YXn
status: active
merged_into: null
display_name: 王玉如
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PWCFJyAETjJnMWUv9hP3mM
        subject_person_id: p_MPCRGZ8F57txdPGFqn6YXn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉如
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TxQJBDfKrN4JAFKfEZxzuX
          claim_id: c_PWCFJyAETjJnMWUv9hP3mM
          source_id: s_qMyfefMspainGAFaChXxLq
          stance: supports
          locator: CBDB:55355
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（55355）
          source: &a1
            id: s_qMyfefMspainGAFaChXxLq
            source_type: api_record
            title: 中国历代人物传记资料库：王玉如（CBDB 55355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55355&o=json
            external_identifier: CBDB:55355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.739Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pEPh4yQkivawXauiAHRHGs
        subject_person_id: p_MPCRGZ8F57txdPGFqn6YXn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1766年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F6edn6XmiW1Sx64R19JdEu
          claim_id: c_pEPh4yQkivawXauiAHRHGs
          source_id: s_qMyfefMspainGAFaChXxLq
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
        id: c_J14kw1XfVsVKF8EG4PK88P
        subject_person_id: p_MPCRGZ8F57txdPGFqn6YXn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1820年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uk8wMpTi368rC8rKUD7DEw
          claim_id: c_J14kw1XfVsVKF8EG4PK88P
          source_id: s_qMyfefMspainGAFaChXxLq
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
        id: c_A2MCJJAV6biV5r6xeHuc5d
        subject_person_id: p_MPCRGZ8F57txdPGFqn6YXn
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
        - id: cs_aPUfsGJAwQLKTMPQbTrDnS
          claim_id: c_A2MCJJAV6biV5r6xeHuc5d
          source_id: s_qMyfefMspainGAFaChXxLq
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
  spouses:
    - claim:
        id: c_LLspohSa8jrcyT2fgmYcRX
        subject_person_id: p_MPCRGZ8F57txdPGFqn6YXn
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ev4u2VA1jnUyKvBMy3JTE6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s_7XHcWj-QB6TR5QVtCshn
          claim_id: c_LLspohSa8jrcyT2fgmYcRX
          source_id: s_AExqE-Q3X3OJ4s7zJbcg6D
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #877：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AExqE-Q3X3OJ4s7zJbcg6D
            source_type: api_record
            title: 中国历代人物传记资料库：孫嘉樂（CBDB 55336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55336&o=json
            external_identifier: CBDB:55336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ev4u2VA1jnUyKvBMy3JTE6
        status: active
        display_name: 孫嘉樂
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王玉如

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉如 | accepted |
| birth.date | 1766年 | accepted |
| death.date | 1820年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ev4u2VA1jnUyKvBMy3JTE6 | 孫嘉樂 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫嘉樂（CBDB 55336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55336&o=json)
- [中国历代人物传记资料库：王玉如（CBDB 55355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55355&o=json)
