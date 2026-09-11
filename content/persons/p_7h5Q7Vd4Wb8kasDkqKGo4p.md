---
schema: wang-person/v1
id: p_7h5Q7Vd4Wb8kasDkqKGo4p
status: active
merged_into: null
display_name: 王鑑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yCGEe6gCz8ng3Qt43wEavN
        subject_person_id: p_7h5Q7Vd4Wb8kasDkqKGo4p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_34F8TxqM7C2LBS3FMKN855
          claim_id: c_yCGEe6gCz8ng3Qt43wEavN
          source_id: s_C85kajEhQqkT29WoE7Appu
          stance: supports
          locator: CBDB:101012
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101012）
          source: &a1
            id: s_C85kajEhQqkT29WoE7Appu
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 101012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101012&o=json
            external_identifier: CBDB:101012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xKQ4zzv4KgCjAVvZNEkAtS
        subject_person_id: p_7h5Q7Vd4Wb8kasDkqKGo4p
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1294年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EPttXAcP1cvuVdMshkzJSe
          claim_id: c_xKQ4zzv4KgCjAVvZNEkAtS
          source_id: s_C85kajEhQqkT29WoE7Appu
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
        id: c_hAJ9ns6xBw8BYKfNu1NmJv
        subject_person_id: p_7h5Q7Vd4Wb8kasDkqKGo4p
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1366年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eAqe2uF7tyMhniHMhdDSYd
          claim_id: c_hAJ9ns6xBw8BYKfNu1NmJv
          source_id: s_C85kajEhQqkT29WoE7Appu
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
        id: c_D1s5uBnx9FHGaXxR9APDSV
        subject_person_id: p_7h5Q7Vd4Wb8kasDkqKGo4p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑（1294年—1366年），元人物。籍贯安平，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 101012）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MSkVbcWRqRJ_BcJ-qXnPtY
          claim_id: c_D1s5uBnx9FHGaXxR9APDSV
          source_id: s_C85kajEhQqkT29WoE7Appu
          stance: supports
          locator: CBDB:101012
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| birth.date | 1294年 | accepted |
| death.date | 1366年 | accepted |
| bio.summary | 王鑑（1294年—1366年），元人物。籍贯安平，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 101012） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 101012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101012&o=json)
