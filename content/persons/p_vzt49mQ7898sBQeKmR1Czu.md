---
schema: wang-person/v1
id: p_vzt49mQ7898sBQeKmR1Czu
status: active
merged_into: null
display_name: 王儒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LKE3qrWz8TmrNNrpUPrugj
        subject_person_id: p_vzt49mQ7898sBQeKmR1Czu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m7TgukC2JTP7j5Gc12gE31
          claim_id: c_LKE3qrWz8TmrNNrpUPrugj
          source_id: s_B4LiBRne2Mvyx2FLkFP4Lc
          stance: supports
          locator: CBDB:206132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206132）
          source: &a1
            id: s_B4LiBRne2Mvyx2FLkFP4Lc
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 206132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206132&o=json
            external_identifier: CBDB:206132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4gEQwMPBA8xYSpfddQYMgy
        subject_person_id: p_vzt49mQ7898sBQeKmR1Czu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1543年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wqtHzDhCieo6kNKhQS8acN
          claim_id: c_4gEQwMPBA8xYSpfddQYMgy
          source_id: s_B4LiBRne2Mvyx2FLkFP4Lc
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
        id: c_aSKyERHtEEE8XUmspDT5Sf
        subject_person_id: p_vzt49mQ7898sBQeKmR1Czu
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
        - id: cs_3eKUmGN5pD4c3UoLDG5Jh2
          claim_id: c_aSKyERHtEEE8XUmspDT5Sf
          source_id: s_B4LiBRne2Mvyx2FLkFP4Lc
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
  ancestors: []
  descendants: []
  other: []
---

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| birth.date | 1543年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 206132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206132&o=json)
