---
schema: wang-person/v1
id: p_MaMVdMMyMH118ESEhMtv84
status: active
merged_into: null
display_name: 王嚴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fJnZ6diaH7hqvhGXeiuAvR
        subject_person_id: p_MaMVdMMyMH118ESEhMtv84
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嚴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pK6uNWcB4k8iSVgC4kkEC3
          claim_id: c_fJnZ6diaH7hqvhGXeiuAvR
          source_id: s_Varrc5QLxnANyXEFqt9Gry
          stance: supports
          locator: CBDB:101003
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101003）
          source: &a1
            id: s_Varrc5QLxnANyXEFqt9Gry
            source_type: api_record
            title: 中国历代人物传记资料库：王嚴（CBDB 101003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101003&o=json
            external_identifier: CBDB:101003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4vcHbVL8RGNQTvbnRVKgGL
        subject_person_id: p_MaMVdMMyMH118ESEhMtv84
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1258年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JWZBD4R2Vn7Zjjsf2npXX9
          claim_id: c_4vcHbVL8RGNQTvbnRVKgGL
          source_id: s_Varrc5QLxnANyXEFqt9Gry
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
        id: c_KZQom4dWt3TQGNXrDapQoQ
        subject_person_id: p_MaMVdMMyMH118ESEhMtv84
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1342年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RzqFUbDkrCKTvJ1YP3EPJt
          claim_id: c_KZQom4dWt3TQGNXrDapQoQ
          source_id: s_Varrc5QLxnANyXEFqt9Gry
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
        id: c_26L5FjBg7bDjqpVztocPPr
        subject_person_id: p_MaMVdMMyMH118ESEhMtv84
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嚴（1258年—1342年），元人物。籍贯麗水，身份为落第士人、拒絕出仕，入仕薦舉 (保任,保舉)，曾任縣丞。（中国历代人物传记资料库 CBDB 101003）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5ZV-V3aRSs_lRB0NsHk0KR
          claim_id: c_26L5FjBg7bDjqpVztocPPr
          source_id: s_Varrc5QLxnANyXEFqt9Gry
          stance: supports
          locator: CBDB:101003
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

# 王嚴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嚴 | accepted |
| birth.date | 1258年 | accepted |
| death.date | 1342年 | accepted |
| bio.summary | 王嚴（1258年—1342年），元人物。籍贯麗水，身份为落第士人、拒絕出仕，入仕薦舉 (保任,保舉)，曾任縣丞。（中国历代人物传记资料库 CBDB 101003） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嚴（CBDB 101003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101003&o=json)
