---
schema: wang-person/v1
id: p_wvfBH28vzeBZg3jtDQ5XW7
status: active
merged_into: null
display_name: 王天芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LQEfFzD7cfkkHT6yj9YkgD
        subject_person_id: p_wvfBH28vzeBZg3jtDQ5XW7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4iSB1v7HRAs4ebfsHbLJtc
          claim_id: c_LQEfFzD7cfkkHT6yj9YkgD
          source_id: s_fcrRig3fHrN1mwdG6zLMnE
          stance: supports
          locator: CBDB:698840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698840）
          source: &a1
            id: s_fcrRig3fHrN1mwdG6zLMnE
            source_type: api_record
            title: 中国历代人物传记资料库：王天芳（CBDB 698840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698840&o=json
            external_identifier: CBDB:698840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AkELQBGXcTWFVq2mFb6BiJ
        subject_person_id: p_wvfBH28vzeBZg3jtDQ5XW7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天芳，明人物。籍贯婺源，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 698840）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5FJACMHpwltOqBkW9iIKI9
          claim_id: c_AkELQBGXcTWFVq2mFb6BiJ
          source_id: s_fcrRig3fHrN1mwdG6zLMnE
          stance: supports
          locator: CBDB:698840
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

# 王天芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天芳 | accepted |
| bio.summary | 王天芳，明人物。籍贯婺源，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 698840） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天芳（CBDB 698840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698840&o=json)
