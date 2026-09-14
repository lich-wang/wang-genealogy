---
schema: wang-person/v1
id: p_xjHjazWAKiH4Eu3uHvrscf
status: active
merged_into: null
display_name: 王莊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p3nT3XJdNXduTMScjGowM4
        subject_person_id: p_xjHjazWAKiH4Eu3uHvrscf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LE9pGxUd68VZG7Tx16Yvm5
          claim_id: c_p3nT3XJdNXduTMScjGowM4
          source_id: s_FpcaVtWgQFScTDh6fveLzX
          stance: supports
          locator: CBDB:318411
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318411）
          source: &a1
            id: s_FpcaVtWgQFScTDh6fveLzX
            source_type: api_record
            title: 中国历代人物传记资料库：王莊（CBDB 318411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318411&o=json
            external_identifier: CBDB:318411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gx4UMjH3LVbLWxB4Rm67NR
        subject_person_id: p_xjHjazWAKiH4Eu3uHvrscf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莊，明人物。嘉靖三十二年進士，籍贯高陵。（中国历代人物传记资料库 CBDB 318411）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SYShs7Bn8HhrM1dizMF9te
          claim_id: c_Gx4UMjH3LVbLWxB4Rm67NR
          source_id: s_FpcaVtWgQFScTDh6fveLzX
          stance: supports
          locator: CBDB:318411
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6FgCxoPI8BImidHR_zQzis
        subject_person_id: p_JMTBrHHf3Ax27PTfG4rkZA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xjHjazWAKiH4Eu3uHvrscf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VjAR3PNoqHt5oqH7fx23ch
          claim_id: c_6FgCxoPI8BImidHR_zQzis
          source_id: s_fQkfWhB7A-UjxRiS2Nit0K
          stance: supports
          locator: CBDB：兄弟 王業（204388）之父／母 王仲仁
          quotation: null
          interpretation_note: 由兄弟关系推断：王莊 与 王業 为同胞（CBDB 记「兄」），王業 之父／母即 王莊 之父／母。
          source:
            id: s_fQkfWhB7A-UjxRiS2Nit0K
            source_type: api_record
            title: 中国历代人物传记资料库：王莊（CBDB 318411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318411&o=json
            external_identifier: CBDB:318411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JMTBrHHf3Ax27PTfG4rkZA
        status: active
        display_name: 王仲仁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Vr6j46hjeTjg9C3fzBXDu0
        subject_person_id: p_7ZDTot2mHCYEpXe9YLwZZs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xjHjazWAKiH4Eu3uHvrscf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w9w4XzuO87EuSa-_p8dSEg
          claim_id: c_Vr6j46hjeTjg9C3fzBXDu0
          source_id: s_fQkfWhB7A-UjxRiS2Nit0K
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204388 王業）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fQkfWhB7A-UjxRiS2Nit0K
            source_type: api_record
            title: 中国历代人物传记资料库：王莊（CBDB 318411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318411&o=json
            external_identifier: CBDB:318411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7ZDTot2mHCYEpXe9YLwZZs
        status: active
        display_name: 王業
        merged_into_person_id: null
---

# 王莊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王莊 | accepted |
| bio.summary | 王莊，明人物。嘉靖三十二年進士，籍贯高陵。（中国历代人物传记资料库 CBDB 318411） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JMTBrHHf3Ax27PTfG4rkZA | 王仲仁 | accepted |
| other | p_7ZDTot2mHCYEpXe9YLwZZs | 王業 | accepted |

## 外部来源

- [中国历代人物传记资料库：王莊（CBDB 318411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318411&o=json)
