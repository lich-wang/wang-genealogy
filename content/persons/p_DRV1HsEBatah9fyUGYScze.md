---
schema: wang-person/v1
id: p_DRV1HsEBatah9fyUGYScze
status: active
merged_into: null
display_name: 王忱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YCoQzwBvFpMow1urSdPDEk
        subject_person_id: p_DRV1HsEBatah9fyUGYScze
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4iXWShMBkb47wCmoXN7A18
          claim_id: c_YCoQzwBvFpMow1urSdPDEk
          source_id: s_mp7pNpGWEEPymMCiL7tNm9
          stance: supports
          locator: CBDB:29140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29140）
          source: &a1
            id: s_mp7pNpGWEEPymMCiL7tNm9
            source_type: api_record
            title: 中国历代人物传记资料库：王忱（CBDB 29140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29140&o=json
            external_identifier: CBDB:29140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_V15dKFRfmC6HWq6dG1gdRm
        subject_person_id: p_DRV1HsEBatah9fyUGYScze
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1236年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QviHEGxXyqYTETJr4a41wV
          claim_id: c_V15dKFRfmC6HWq6dG1gdRm
          source_id: s_mp7pNpGWEEPymMCiL7tNm9
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
        id: c_XueL9Kjct7aJ9cJ9Wts2Re
        subject_person_id: p_DRV1HsEBatah9fyUGYScze
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1314年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P44ZTgkBECiKLyYhBrZ4am
          claim_id: c_XueL9Kjct7aJ9cJ9Wts2Re
          source_id: s_mp7pNpGWEEPymMCiL7tNm9
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
        id: c_kymki3LGve9HfXGaoq5Lf6
        subject_person_id: p_DRV1HsEBatah9fyUGYScze
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4v6RUxQzWWrx3kPzZs9Uqc
          claim_id: c_kymki3LGve9HfXGaoq5Lf6
          source_id: s_mp7pNpGWEEPymMCiL7tNm9
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

# 王忱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忱 | accepted |
| birth.date | 1236年 | accepted |
| death.date | 1314年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忱（CBDB 29140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29140&o=json)
