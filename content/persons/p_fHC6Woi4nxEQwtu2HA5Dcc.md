---
schema: wang-person/v1
id: p_fHC6Woi4nxEQwtu2HA5Dcc
status: active
merged_into: null
display_name: 王慎中
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hwkrEk8aEjYsWQkEc8Q87u
        subject_person_id: p_fHC6Woi4nxEQwtu2HA5Dcc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JsG5nwtEEC8y8AdWSDq3fy
          claim_id: c_hwkrEk8aEjYsWQkEc8Q87u
          source_id: s_ruCEnrKJF5QN1pqVCdgqQF
          stance: supports
          locator: CBDB:34700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34700）
          source: &a1
            id: s_ruCEnrKJF5QN1pqVCdgqQF
            source_type: api_record
            title: 中国历代人物传记资料库：王慎中（CBDB 34700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34700&o=json
            external_identifier: CBDB:34700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.092Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MSovMnJJ3J3h39GYBVomsu
        subject_person_id: p_fHC6Woi4nxEQwtu2HA5Dcc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1509年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EJdAaZEYrbyPQw48sG6H6p
          claim_id: c_MSovMnJJ3J3h39GYBVomsu
          source_id: s_ruCEnrKJF5QN1pqVCdgqQF
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
        id: c_FfQ6goxm4deCivaC14Mhxy
        subject_person_id: p_fHC6Woi4nxEQwtu2HA5Dcc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1559年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GXSyLWFZbNPmHLnJoDSmJ8
          claim_id: c_FfQ6goxm4deCivaC14Mhxy
          source_id: s_ruCEnrKJF5QN1pqVCdgqQF
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
        id: c_8mXpZJGmKX26Xn8M6ZzBFJ
        subject_person_id: p_fHC6Woi4nxEQwtu2HA5Dcc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎中（1509年—1559年），明人物。明清進士進士，籍贯晉江，身份为拒絕出仕，入仕進士。（中国历代人物传记资料库 CBDB 34700）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vdFEusFqVkTTul4DKhdzUh
          claim_id: c_8mXpZJGmKX26Xn8M6ZzBFJ
          source_id: s_ruCEnrKJF5QN1pqVCdgqQF
          stance: supports
          locator: CBDB:34700
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_m-n0oSJay4wFy43tz0Pqrg
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fHC6Woi4nxEQwtu2HA5Dcc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uCIuwCfns5msuSJSW2YM3h
          claim_id: c_m-n0oSJay4wFy43tz0Pqrg
          source_id: s_lAbpmb1pM17sdLf6QWrvJu
          stance: supports
          locator: CBDB：兄弟 王惟中（203400）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王慎中 与 王惟中 为同胞（CBDB 记「弟」），王惟中 之父／母即 王慎中 之父／母。
          source:
            id: s_lAbpmb1pM17sdLf6QWrvJu
            source_type: api_record
            title: 中国历代人物传记资料库：王慎中（CBDB 34700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34700&o=json
            external_identifier: CBDB:34700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EL1xAzh69eBckvCoFLRC2M
        status: active
        display_name: 王紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vozZ2AlNkxRQsPprH0DFDw
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fHC6Woi4nxEQwtu2HA5Dcc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UxP_WLxvLPKCVwIvfOVk9B
          claim_id: c_vozZ2AlNkxRQsPprH0DFDw
          source_id: s_lAbpmb1pM17sdLf6QWrvJu
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203400 王惟中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lAbpmb1pM17sdLf6QWrvJu
            source_type: api_record
            title: 中国历代人物传记资料库：王慎中（CBDB 34700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34700&o=json
            external_identifier: CBDB:34700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V5Z6bC9P1YiqepVeP78NQA
        status: active
        display_name: 王惟中
        merged_into_person_id: null
---

# 王慎中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慎中 | accepted |
| birth.date | 1509年 | accepted |
| death.date | 1559年 | accepted |
| bio.summary | 王慎中（1509年—1559年），明人物。明清進士進士，籍贯晉江，身份为拒絕出仕，入仕進士。（中国历代人物传记资料库 CBDB 34700） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EL1xAzh69eBckvCoFLRC2M | 王紀 | accepted |
| other | p_V5Z6bC9P1YiqepVeP78NQA | 王惟中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慎中（CBDB 34700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34700&o=json)
