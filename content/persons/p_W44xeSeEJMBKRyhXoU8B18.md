---
schema: wang-person/v1
id: p_W44xeSeEJMBKRyhXoU8B18
status: active
merged_into: null
display_name: 王寵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7e7tmbhiQefurtAUNwoSri
        subject_person_id: p_W44xeSeEJMBKRyhXoU8B18
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iDKjFnB7EHvvQGVftP6yNe
          claim_id: c_7e7tmbhiQefurtAUNwoSri
          source_id: s_TcKm8aroBrBEvK43S7tZn7
          stance: supports
          locator: CBDB:126867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126867）
          source: &a1
            id: s_TcKm8aroBrBEvK43S7tZn7
            source_type: api_record
            title: 中国历代人物传记资料库：王寵（CBDB 126867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126867&o=json
            external_identifier: CBDB:126867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8mqn4DxVfGaJAwXAE8duyF
        subject_person_id: p_W44xeSeEJMBKRyhXoU8B18
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1494年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d8q9s3CxJKBZQYmgDmJFfB
          claim_id: c_8mqn4DxVfGaJAwXAE8duyF
          source_id: s_TcKm8aroBrBEvK43S7tZn7
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
        id: c_jLzZzhec4pZJU6GuEPMGWp
        subject_person_id: p_W44xeSeEJMBKRyhXoU8B18
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1533年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7QkQHFMoprmVgiS1vZAWKd
          claim_id: c_jLzZzhec4pZJU6GuEPMGWp
          source_id: s_TcKm8aroBrBEvK43S7tZn7
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
        id: c_DjrZRSxsgVNYo4qy75w5fH
        subject_person_id: p_W44xeSeEJMBKRyhXoU8B18
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵（1494年—1533年），明人物。籍贯長洲，身份为書法家、畫家。（中国历代人物传记资料库 CBDB 126867）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oGrLePWnj2ihtYGSDUTQHK
          claim_id: c_DjrZRSxsgVNYo4qy75w5fH
          source_id: s_TcKm8aroBrBEvK43S7tZn7
          stance: supports
          locator: CBDB:126867
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
  other:
    - claim:
        id: c_nAm1G6RFtY2NLRKvMEcfJW
        subject_person_id: p_W44xeSeEJMBKRyhXoU8B18
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tNv3KgPdaAVyWaAFG27kEd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AUiY5e_6JUTj1_CCOlVoHp
          claim_id: c_nAm1G6RFtY2NLRKvMEcfJW
          source_id: s_Cgzr6gWKUb16uFe_xUmc6G
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126507 王守）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Cgzr6gWKUb16uFe_xUmc6G
            source_type: api_record
            title: 中国历代人物传记资料库：王寵（CBDB 126867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126867&o=json
            external_identifier: CBDB:126867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tNv3KgPdaAVyWaAFG27kEd
        status: active
        display_name: 王守
        merged_into_person_id: null
---

# 王寵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寵 | accepted |
| birth.date | 1494年 | accepted |
| death.date | 1533年 | accepted |
| bio.summary | 王寵（1494年—1533年），明人物。籍贯長洲，身份为書法家、畫家。（中国历代人物传记资料库 CBDB 126867） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_tNv3KgPdaAVyWaAFG27kEd | 王守 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寵（CBDB 126867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126867&o=json)
