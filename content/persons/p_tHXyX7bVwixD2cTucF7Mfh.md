---
schema: wang-person/v1
id: p_tHXyX7bVwixD2cTucF7Mfh
status: active
merged_into: null
display_name: 王之民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P7BgboRfYhmkqsMFfMPtVL
        subject_person_id: p_tHXyX7bVwixD2cTucF7Mfh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p6nnByv4MHDoNaXBnMxY4v
          claim_id: c_P7BgboRfYhmkqsMFfMPtVL
          source_id: s_RSm11nJHdkAhnENushaTqE
          stance: supports
          locator: CBDB:300173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300173）
          source: &a1
            id: s_RSm11nJHdkAhnENushaTqE
            source_type: api_record
            title: 中国历代人物传记资料库：王之民（CBDB 300173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300173&o=json
            external_identifier: CBDB:300173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FyaW7GQFjjCnKTtdhZkHu7
        subject_person_id: p_tHXyX7bVwixD2cTucF7Mfh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之民，明人物。嘉靖十七年進士，籍贯南充。（中国历代人物传记资料库 CBDB 300173）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hLCr8HuOsg3jO4hL4lUC5f
          claim_id: c_FyaW7GQFjjCnKTtdhZkHu7
          source_id: s_RSm11nJHdkAhnENushaTqE
          stance: supports
          locator: CBDB:300173
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

# 王之民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之民 | accepted |
| bio.summary | 王之民，明人物。嘉靖十七年進士，籍贯南充。（中国历代人物传记资料库 CBDB 300173） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之民（CBDB 300173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300173&o=json)
