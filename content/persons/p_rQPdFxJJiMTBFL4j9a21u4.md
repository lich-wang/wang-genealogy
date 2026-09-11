---
schema: wang-person/v1
id: p_rQPdFxJJiMTBFL4j9a21u4
status: active
merged_into: null
display_name: 王沂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nde93JoT3HezGtjUia5fZW
        subject_person_id: p_rQPdFxJJiMTBFL4j9a21u4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MjnQYNmvJmZaDE7NaCqYBr
          claim_id: c_Nde93JoT3HezGtjUia5fZW
          source_id: s_QK7b56SQB1CJuFMNLysA72
          stance: supports
          locator: CBDB:100679
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100679）
          source: &a1
            id: s_QK7b56SQB1CJuFMNLysA72
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 100679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100679&o=json
            external_identifier: CBDB:100679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.364Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gTKFCQqoJUp3MQv5KXgTo2
        subject_person_id: p_rQPdFxJJiMTBFL4j9a21u4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1317年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2tiC2Nk4ie21SZ5mVXj2cs
          claim_id: c_gTKFCQqoJUp3MQv5KXgTo2
          source_id: s_QK7b56SQB1CJuFMNLysA72
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
        id: c_quyM95s97Mqe1yiGLMM3fF
        subject_person_id: p_rQPdFxJJiMTBFL4j9a21u4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1383年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UPQYcTyZp27wMsrJL4BXTD
          claim_id: c_quyM95s97Mqe1yiGLMM3fF
          source_id: s_QK7b56SQB1CJuFMNLysA72
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
        id: c_XKBCKAiQAZm2ooKMWKzAQZ
        subject_person_id: p_rQPdFxJJiMTBFL4j9a21u4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沂（1317年—1383年），明人物。籍贯太和州，身份为鄉先生、拒絕出仕，入仕鄉貢舉人，曾任都轉運鹽使司都轉運鹽使、說書。（中国历代人物传记资料库 CBDB 100679）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qW4_4KZ3MHNHn-C7eKYm1Q
          claim_id: c_XKBCKAiQAZm2ooKMWKzAQZ
          source_id: s_QK7b56SQB1CJuFMNLysA72
          stance: supports
          locator: CBDB:100679
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

# 王沂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沂 | accepted |
| birth.date | 1317年 | accepted |
| death.date | 1383年 | accepted |
| bio.summary | 王沂（1317年—1383年），明人物。籍贯太和州，身份为鄉先生、拒絕出仕，入仕鄉貢舉人，曾任都轉運鹽使司都轉運鹽使、說書。（中国历代人物传记资料库 CBDB 100679） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沂（CBDB 100679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100679&o=json)
