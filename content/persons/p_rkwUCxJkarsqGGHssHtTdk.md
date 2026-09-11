---
schema: wang-person/v1
id: p_rkwUCxJkarsqGGHssHtTdk
status: active
merged_into: null
display_name: 王用賢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eNZQpiFREGB5mMGtCr1549
        subject_person_id: p_rkwUCxJkarsqGGHssHtTdk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v4GUhJxrSXqEFvJUsHi8FC
          claim_id: c_eNZQpiFREGB5mMGtCr1549
          source_id: s_LHQNpdzeLEHSEZ8uKLNEL5
          stance: supports
          locator: CBDB:204011
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204011）
          source: &a1
            id: s_LHQNpdzeLEHSEZ8uKLNEL5
            source_type: api_record
            title: 中国历代人物传记资料库：王用賢（CBDB 204011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204011&o=json
            external_identifier: CBDB:204011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5m7hhcBpLJiP156gGg1rZ7
        subject_person_id: p_rkwUCxJkarsqGGHssHtTdk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BWpkSh75sUAd6h7rgFXnf5
          claim_id: c_5m7hhcBpLJiP156gGg1rZ7
          source_id: s_LHQNpdzeLEHSEZ8uKLNEL5
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
        id: c_fNanPCFe2FUHwHwwrVMmoT
        subject_person_id: p_rkwUCxJkarsqGGHssHtTdk
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
        - id: cs_TFVkhFB8qRj3LV2adK36EK
          claim_id: c_fNanPCFe2FUHwHwwrVMmoT
          source_id: s_LHQNpdzeLEHSEZ8uKLNEL5
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
        id: c_tlOf6Sw81sRWcnOg5FBPRO
        subject_person_id: p_DFCRUSa4hCVBMPph3xEiW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rkwUCxJkarsqGGHssHtTdk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NPlS3L5pYTDbUutCkorxD7
          claim_id: c_tlOf6Sw81sRWcnOg5FBPRO
          source_id: s_YfQ3rK1dPb5GKm5FoFzp8U
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YfQ3rK1dPb5GKm5FoFzp8U
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 313196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313196&o=json
            external_identifier: CBDB:313196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DFCRUSa4hCVBMPph3xEiW2
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王用賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用賢 | accepted |
| birth.date | 1515年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DFCRUSa4hCVBMPph3xEiW2 | 王瑤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑤（CBDB 313196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313196&o=json)
- [中国历代人物传记资料库：王用賢（CBDB 204011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204011&o=json)
