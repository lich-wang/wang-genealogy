---
schema: wang-person/v1
id: p_JkeLMGGi6umWovuh9Bmc6a
status: active
merged_into: null
display_name: 王志元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dzet86XfoPLTadWnzvqhGe
        subject_person_id: p_JkeLMGGi6umWovuh9Bmc6a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1AuPqf4TpppkCBr2ALJMNF
          claim_id: c_Dzet86XfoPLTadWnzvqhGe
          source_id: s_JqApbTe7uhm2UiRChaSGUo
          stance: supports
          locator: CBDB:573336
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573336）
          source: &a1
            id: s_JqApbTe7uhm2UiRChaSGUo
            source_type: api_record
            title: 中国历代人物传记资料库：王志元（CBDB 573336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573336&o=json
            external_identifier: CBDB:573336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HGJ9GMY5ZvHaCCyuPFucrs
        subject_person_id: p_JkeLMGGi6umWovuh9Bmc6a
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1868年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a84hybrwef5Vn8KB2qKvB5
          claim_id: c_HGJ9GMY5ZvHaCCyuPFucrs
          source_id: s_JqApbTe7uhm2UiRChaSGUo
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
        id: c_y5sdXJrKbYUb7RmqPd3ZZH
        subject_person_id: p_JkeLMGGi6umWovuh9Bmc6a
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1897年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4MfQNzZuNbjd13tif9eYAP
          claim_id: c_y5sdXJrKbYUb7RmqPd3ZZH
          source_id: s_JqApbTe7uhm2UiRChaSGUo
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
        id: c_rFUxJDNR9gz1d4KLNvpj6u
        subject_person_id: p_JkeLMGGi6umWovuh9Bmc6a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志元（1868年—1897年），清人物。籍贯浙江省。（中国历代人物传记资料库 CBDB 573336）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tvs1M35h8ZT3bYCXGOGAXL
          claim_id: c_rFUxJDNR9gz1d4KLNvpj6u
          source_id: s_JqApbTe7uhm2UiRChaSGUo
          stance: supports
          locator: CBDB:573336
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

# 王志元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志元 | accepted |
| birth.date | 1868年 | accepted |
| death.date | 1897年 | accepted |
| bio.summary | 王志元（1868年—1897年），清人物。籍贯浙江省。（中国历代人物传记资料库 CBDB 573336） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志元（CBDB 573336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573336&o=json)
