---
schema: wang-person/v1
id: p_vL7SZsvXamGMNii6Bovtj6
status: active
merged_into: null
display_name: 王治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BjLhbEnAfXYdeVnHnhQfi6
        subject_person_id: p_vL7SZsvXamGMNii6Bovtj6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SSx7JrmdxLicNxj9tENj4s
          claim_id: c_BjLhbEnAfXYdeVnHnhQfi6
          source_id: s_2M5bmrFEBSekC5Znc2Augs
          stance: supports
          locator: CBDB:71115
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71115）
          source: &a1
            id: s_2M5bmrFEBSekC5Znc2Augs
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 71115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71115&o=json
            external_identifier: CBDB:71115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hgv4jJ4fgqo6MwePAj2BFP
        subject_person_id: p_vL7SZsvXamGMNii6Bovtj6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1745年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9j45QBhV7cJGrLWk4EQbVy
          claim_id: c_hgv4jJ4fgqo6MwePAj2BFP
          source_id: s_2M5bmrFEBSekC5Znc2Augs
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
        id: c_a48qYPxjMxHkvuA4apAq24
        subject_person_id: p_vL7SZsvXamGMNii6Bovtj6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1824年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UjWS313oe5RaphaCaXVtY8
          claim_id: c_a48qYPxjMxHkvuA4apAq24
          source_id: s_2M5bmrFEBSekC5Znc2Augs
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
        id: c_FNJofnjgEVZGBxewHwHwUK
        subject_person_id: p_vL7SZsvXamGMNii6Bovtj6
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
        - id: cs_W2S7V7pX8MmhhkiEh5J3qy
          claim_id: c_FNJofnjgEVZGBxewHwHwUK
          source_id: s_2M5bmrFEBSekC5Znc2Augs
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

# 王治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治 | accepted |
| birth.date | 1745年 | accepted |
| death.date | 1824年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王治（CBDB 71115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71115&o=json)
