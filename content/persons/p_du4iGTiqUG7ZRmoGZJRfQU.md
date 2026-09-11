---
schema: wang-person/v1
id: p_du4iGTiqUG7ZRmoGZJRfQU
status: active
merged_into: null
display_name: 宋氏
revision: 1
cbdb_id: 571648
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L5LAHUXFRxZDBxbSenErgN
        subject_person_id: p_du4iGTiqUG7ZRmoGZJRfQU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IBNAAJ_LobcCRU8z2gl6nK
          claim_id: c_L5LAHUXFRxZDBxbSenErgN
          source_id: s_73hHw0bDnXifQmDd3aFeRe
          stance: supports
          locator: CBDB:571648
          quotation: null
          interpretation_note: CBDB 明确记录的王彭配偶
          source: &a1
            id: s_73hHw0bDnXifQmDd3aFeRe
            source_type: api_record
            title: 中国历代人物传记资料库：宋氏(王彭妻)（CBDB 571648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571648&o=json
            external_identifier: CBDB:571648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_3wOInyvBsDTaGk_qd7GBVB
        subject_person_id: p_x7QK6Yqt4A5YCYRDZUuZNJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_du4iGTiqUG7ZRmoGZJRfQU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__xQF-4rwe2BqMGA5y4ZTG4
          claim_id: c_3wOInyvBsDTaGk_qd7GBVB
          source_id: s_73hHw0bDnXifQmDd3aFeRe
          stance: supports
          locator: 芒洛冢墓遺文，王彭墓志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x7QK6Yqt4A5YCYRDZUuZNJ
        status: active
        display_name: 王彭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 宋氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 宋氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_x7QK6Yqt4A5YCYRDZUuZNJ | 王彭 | accepted |

## 外部来源

- [中国历代人物传记资料库：宋氏(王彭妻)（CBDB 571648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571648&o=json)
