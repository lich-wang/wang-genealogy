---
schema: wang-person/v1
id: p_NzNZhB7Cxkc5rM6RPENRuk
status: active
merged_into: null
display_name: 王文顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kbFMQwCH2ksKCoGEKTDyN3
        subject_person_id: p_NzNZhB7Cxkc5rM6RPENRuk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EcE9bR1NQkDAxPGM6ATGs9
          claim_id: c_kbFMQwCH2ksKCoGEKTDyN3
          source_id: s_MX5JecDY4pAMwRAg31A1KZ
          stance: supports
          locator: CBDB:38003
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38003）
          source: &a1
            id: s_MX5JecDY4pAMwRAg31A1KZ
            source_type: api_record
            title: 中国历代人物传记资料库：王文顯（CBDB 38003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38003&o=json
            external_identifier: CBDB:38003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MdmDQXPAy5PKUQ9B7Ak4ja
        subject_person_id: p_NzNZhB7Cxkc5rM6RPENRuk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文顯，宋人物。曾任供備庫副使。（中国历代人物传记资料库 CBDB 38003）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0IMLkHoWd8owRRj6Q-QtWG
          claim_id: c_MdmDQXPAy5PKUQ9B7Ak4ja
          source_id: s_MX5JecDY4pAMwRAg31A1KZ
          stance: supports
          locator: CBDB:38003
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

# 王文顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文顯 | accepted |
| bio.summary | 王文顯，宋人物。曾任供備庫副使。（中国历代人物传记资料库 CBDB 38003） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文顯（CBDB 38003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38003&o=json)
