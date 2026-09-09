---
schema: wang-person/v1
id: p_yZhfrYkB2wNwxT8j2xtVeJ
status: active
merged_into: null
display_name: 王毓芝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nkX7BmBALV629H4bCmxTr6
        subject_person_id: p_yZhfrYkB2wNwxT8j2xtVeJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓芝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YuYkAyqfj7KGeuhim6MKoe
          claim_id: c_nkX7BmBALV629H4bCmxTr6
          source_id: s_o19nZWqsfDFzBRXoKpFgZa
          stance: supports
          locator: CBDB:72161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72161）
          source: &a1
            id: s_o19nZWqsfDFzBRXoKpFgZa
            source_type: api_record
            title: 中国历代人物传记资料库：王毓芝（CBDB 72161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72161&o=json
            external_identifier: CBDB:72161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.032Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kyRs2JQ2BJdVtTTkbQ6XR1
        subject_person_id: p_yZhfrYkB2wNwxT8j2xtVeJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1851年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r8vcHcDrsDgWF951knDMZT
          claim_id: c_kyRs2JQ2BJdVtTTkbQ6XR1
          source_id: s_o19nZWqsfDFzBRXoKpFgZa
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
        id: c_cHCu4RVBHpYYXSmK9yEvSZ
        subject_person_id: p_yZhfrYkB2wNwxT8j2xtVeJ
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
        - id: cs_BVYQTuaLnv1bGndjALGqo8
          claim_id: c_cHCu4RVBHpYYXSmK9yEvSZ
          source_id: s_o19nZWqsfDFzBRXoKpFgZa
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

# 王毓芝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓芝 | accepted |
| birth.date | 1851年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王毓芝（CBDB 72161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72161&o=json)
