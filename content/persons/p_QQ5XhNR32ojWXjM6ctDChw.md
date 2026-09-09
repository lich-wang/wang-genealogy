---
schema: wang-person/v1
id: p_QQ5XhNR32ojWXjM6ctDChw
status: active
merged_into: null
display_name: 王文治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FSN9zFjctHP21AC31p7PT7
        subject_person_id: p_QQ5XhNR32ojWXjM6ctDChw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_evefS8nthwBSydEEM4MY4L
          claim_id: c_FSN9zFjctHP21AC31p7PT7
          source_id: s_f5VtDTcLF87inGDHKgcgGu
          stance: supports
          locator: CBDB:54580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（54580）
          source: &a1
            id: s_f5VtDTcLF87inGDHKgcgGu
            source_type: api_record
            title: 中国历代人物传记资料库：王文治（CBDB 54580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54580&o=json
            external_identifier: CBDB:54580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YLsraR4jaKJZww8BSpmA7y
        subject_person_id: p_QQ5XhNR32ojWXjM6ctDChw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1730年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aufGFiBaTxqJYdL8zEQ1gK
          claim_id: c_YLsraR4jaKJZww8BSpmA7y
          source_id: s_f5VtDTcLF87inGDHKgcgGu
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
        id: c_VsLduK7GZzPa67CgNHjAtR
        subject_person_id: p_QQ5XhNR32ojWXjM6ctDChw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1802年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u8mjCYk5C7crUQKYGkRECK
          claim_id: c_VsLduK7GZzPa67CgNHjAtR
          source_id: s_f5VtDTcLF87inGDHKgcgGu
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
        id: c_HN8on28frkejxP81EZKTyz
        subject_person_id: p_QQ5XhNR32ojWXjM6ctDChw
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
        - id: cs_Xww16ViJMER7ssDPxVedfG
          claim_id: c_HN8on28frkejxP81EZKTyz
          source_id: s_f5VtDTcLF87inGDHKgcgGu
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

# 王文治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文治 | accepted |
| birth.date | 1730年 | accepted |
| death.date | 1802年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文治（CBDB 54580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54580&o=json)
