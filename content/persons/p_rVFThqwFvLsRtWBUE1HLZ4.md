---
schema: wang-person/v1
id: p_rVFThqwFvLsRtWBUE1HLZ4
status: active
merged_into: null
display_name: 王洙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qFGqogrtrsk1FagBFRFHDK
        subject_person_id: p_rVFThqwFvLsRtWBUE1HLZ4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rGrkfM2LCMGHg6GB5Pr85B
          claim_id: c_qFGqogrtrsk1FagBFRFHDK
          source_id: s_bMAv8NFv9BoF3sKXMvdE7f
          stance: supports
          locator: CBDB:3941
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3941）
          source: &a1
            id: s_bMAv8NFv9BoF3sKXMvdE7f
            source_type: api_record
            title: 中国历代人物传记资料库：王洙（CBDB 3941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3941&o=json
            external_identifier: CBDB:3941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DzD17iKvtJ7SY15rM7x1hb
        subject_person_id: p_rVFThqwFvLsRtWBUE1HLZ4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 997年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2mokmmrFvk7vJppRJppY6c
          claim_id: c_DzD17iKvtJ7SY15rM7x1hb
          source_id: s_bMAv8NFv9BoF3sKXMvdE7f
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
        id: c_qzx91xW8dxzw48rBEEyNsz
        subject_person_id: p_rVFThqwFvLsRtWBUE1HLZ4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1057年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8G85WSRSxAwZ3CN8SVEeUF
          claim_id: c_qzx91xW8dxzw48rBEEyNsz
          source_id: s_bMAv8NFv9BoF3sKXMvdE7f
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
        id: c_S51G7gsemwTPPhWBBnyYo3
        subject_person_id: p_rVFThqwFvLsRtWBUE1HLZ4
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
        - id: cs_FBPPvbwd9di287WSQgBt1Z
          claim_id: c_S51G7gsemwTPPhWBBnyYo3
          source_id: s_bMAv8NFv9BoF3sKXMvdE7f
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
        id: c_2uQS9WyvLFqCuzO0iQkyXd
        subject_person_id: p_dhFVx6GMqbAdJa25T7qrk6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rVFThqwFvLsRtWBUE1HLZ4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gyW10cW1Y26ZQFApLp6xZg
          claim_id: c_2uQS9WyvLFqCuzO0iQkyXd
          source_id: s_hNWTMBC6q552FxcCtxB4Vw
          stance: supports
          locator: 宋人傳記資料索引(電子版)，729;730：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hNWTMBC6q552FxcCtxB4Vw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：齊氏（5399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5399&o=json
            external_identifier: CBDB:5399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:00.416Z
            metadata_json: null
      object_person:
        id: p_dhFVx6GMqbAdJa25T7qrk6
        status: active
        display_name: 齐氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王洙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洙 | accepted |
| birth.date | 997年 | accepted |
| death.date | 1057年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dhFVx6GMqbAdJa25T7qrk6 | 齐氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洙（CBDB 3941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3941&o=json)
- [CBDB 中国历代人物传记资料库：齊氏（5399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5399&o=json)
