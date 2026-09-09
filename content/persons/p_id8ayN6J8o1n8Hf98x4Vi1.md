---
schema: wang-person/v1
id: p_id8ayN6J8o1n8Hf98x4Vi1
status: active
merged_into: null
display_name: 王昉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_txfykEecWrYBGZ6UD3s8tE
        subject_person_id: p_id8ayN6J8o1n8Hf98x4Vi1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BTDNtGQk8j5KZf85mt2DEr
          claim_id: c_txfykEecWrYBGZ6UD3s8tE
          source_id: s_1SwMLcx8yBd6sDBPwrYvP5
          stance: supports
          locator: CBDB:23286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23286）
          source: &a1
            id: s_1SwMLcx8yBd6sDBPwrYvP5
            source_type: api_record
            title: 中国历代人物传记资料库：王昉（CBDB 23286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23286&o=json
            external_identifier: CBDB:23286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QRqfbtezran3dY2hRQiExR
        subject_person_id: p_id8ayN6J8o1n8Hf98x4Vi1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1122年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G4Gyw7B5mEGgHRSqREeno8
          claim_id: c_QRqfbtezran3dY2hRQiExR
          source_id: s_1SwMLcx8yBd6sDBPwrYvP5
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
        id: c_yCZPFYzsL2UojLzE88bcUL
        subject_person_id: p_id8ayN6J8o1n8Hf98x4Vi1
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
        - id: cs_mPuitAPeaoMas1FhX2Dq6C
          claim_id: c_yCZPFYzsL2UojLzE88bcUL
          source_id: s_1SwMLcx8yBd6sDBPwrYvP5
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

# 王昉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昉 | accepted |
| birth.date | 1122年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昉（CBDB 23286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23286&o=json)
