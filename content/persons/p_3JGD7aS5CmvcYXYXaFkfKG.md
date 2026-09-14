---
schema: wang-person/v1
id: p_3JGD7aS5CmvcYXYXaFkfKG
status: active
merged_into: null
display_name: 王壎
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JShg82TihMm4nmEDrsJckx
        subject_person_id: p_3JGD7aS5CmvcYXYXaFkfKG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_37hVA3CyRizTC1iAmH1ofr
          claim_id: c_JShg82TihMm4nmEDrsJckx
          source_id: s_NHvLLy169M9v8zMxmM4Pmf
          stance: supports
          locator: CBDB:236483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236483）
          source: &a1
            id: s_NHvLLy169M9v8zMxmM4Pmf
            source_type: api_record
            title: 中国历代人物传记资料库：王壎（CBDB 236483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236483&o=json
            external_identifier: CBDB:236483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.787Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_84pxJaSP9cWy6oeP2cJW8e
        subject_person_id: p_3JGD7aS5CmvcYXYXaFkfKG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壎，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eOSFZ9aI4zHNgU3S86oer6
          claim_id: c_84pxJaSP9cWy6oeP2cJW8e
          source_id: s_NHvLLy169M9v8zMxmM4Pmf
          stance: supports
          locator: CBDB:236483
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Nf0Gya7y5KfFeBkbN6ufqr
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3JGD7aS5CmvcYXYXaFkfKG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AqQig2oAReStH6fRZ_Gfo-
          claim_id: c_Nf0Gya7y5KfFeBkbN6ufqr
          source_id: s_AuwPsmnNo9YG0LEYEuQF3k
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王壎 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王壎 之父／母。
          source:
            id: s_AuwPsmnNo9YG0LEYEuQF3k
            source_type: api_record
            title: 中国历代人物传记资料库：王壎（CBDB 236483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236483&o=json
            external_identifier: CBDB:236483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qoAdHHLt7NBY3aQndi4h7A
        status: active
        display_name: 王舜卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qcPVN47-bgCAxTv5SuaIyQ
        subject_person_id: p_3JGD7aS5CmvcYXYXaFkfKG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GR7rQPY8-CZ0dVerY0fLbn
          claim_id: c_qcPVN47-bgCAxTv5SuaIyQ
          source_id: s_AuwPsmnNo9YG0LEYEuQF3k
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AuwPsmnNo9YG0LEYEuQF3k
            source_type: api_record
            title: 中国历代人物传记资料库：王壎（CBDB 236483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236483&o=json
            external_identifier: CBDB:236483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nwL2xVd75q361KsBtDP6KW
        status: active
        display_name: 王念祖
        merged_into_person_id: null
---

# 王壎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壎 | accepted |
| bio.summary | 王壎，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qoAdHHLt7NBY3aQndi4h7A | 王舜卿 | accepted |
| other | p_nwL2xVd75q361KsBtDP6KW | 王念祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王壎（CBDB 236483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236483&o=json)
