---
schema: wang-person/v1
id: p_kDUZpt4UUEtEL7PhpMVLHL
status: active
merged_into: null
display_name: 王深
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3vQUWEwCatyDspRqwsfVu2
        subject_person_id: p_kDUZpt4UUEtEL7PhpMVLHL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z2QwB2ys8Taiu4NvcS6Jdd
          claim_id: c_3vQUWEwCatyDspRqwsfVu2
          source_id: s_vBvEmFfPhQ2StLAGJ2h6aH
          stance: supports
          locator: CBDB:139743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139743）
          source: &a1
            id: s_vBvEmFfPhQ2StLAGJ2h6aH
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 139743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139743&o=json
            external_identifier: CBDB:139743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.450Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MLNLNaxh1hWEAKKpWd2wi9
        subject_person_id: p_kDUZpt4UUEtEL7PhpMVLHL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 618年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NHSj1FCrahK3vKCbVCWH9H
          claim_id: c_MLNLNaxh1hWEAKKpWd2wi9
          source_id: s_vBvEmFfPhQ2StLAGJ2h6aH
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
        id: c_scpQK1JMR31fBqpJEkmezG
        subject_person_id: p_kDUZpt4UUEtEL7PhpMVLHL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 669年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QofEAfubVSbB3MFLZdy4kv
          claim_id: c_scpQK1JMR31fBqpJEkmezG
          source_id: s_vBvEmFfPhQ2StLAGJ2h6aH
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
        id: c_H3Krz8C9gB957mEE5y6sHW
        subject_person_id: p_kDUZpt4UUEtEL7PhpMVLHL
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
        - id: cs_CaVpshMSDr9F6dyT9WMYDU
          claim_id: c_H3Krz8C9gB957mEE5y6sHW
          source_id: s_vBvEmFfPhQ2StLAGJ2h6aH
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
        id: c_wUc1pZ60WBecRQkWPjc5qt
        subject_person_id: p_Z6k1MpB5cddxezfWuTvTWv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kDUZpt4UUEtEL7PhpMVLHL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IhpzHKjp0Dp0OK5JFFZRtR
          claim_id: c_wUc1pZ60WBecRQkWPjc5qt
          source_id: s_vBvEmFfPhQ2StLAGJ2h6aH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tiaolu 12：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z6k1MpB5cddxezfWuTvTWv
        status: active
        display_name: 王嵩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王深 | accepted |
| birth.date | 618年 | accepted |
| death.date | 669年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Z6k1MpB5cddxezfWuTvTWv | 王嵩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王深（CBDB 139743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139743&o=json)
