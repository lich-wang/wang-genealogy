---
schema: wang-person/v1
id: p_HYyUvME69gA6T2zhKJ2JfN
status: active
merged_into: null
display_name: 王彥章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E3F4BnkRA7gFAnT1ZvDRvx
        subject_person_id: p_HYyUvME69gA6T2zhKJ2JfN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JY1HYuQA3unDAYs88S4Ykd
          claim_id: c_E3F4BnkRA7gFAnT1ZvDRvx
          source_id: s_L1mihoBK6wQJ8ro5KvzwoD
          stance: supports
          locator: CBDB:261602
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261602）
          source: &a1
            id: s_L1mihoBK6wQJ8ro5KvzwoD
            source_type: api_record
            title: 中国历代人物传记资料库：王彥章（CBDB 261602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261602&o=json
            external_identifier: CBDB:261602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rn96zasXV6LBMK81N1aQ28
        subject_person_id: p_HYyUvME69gA6T2zhKJ2JfN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥章，明人物。弘治三年進士，籍贯雲陽。（中国历代人物传记资料库 CBDB 261602）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EHTBBjtXcrVbRvdjT8AnuE
          claim_id: c_rn96zasXV6LBMK81N1aQ28
          source_id: s_L1mihoBK6wQJ8ro5KvzwoD
          stance: supports
          locator: CBDB:261602
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

# 王彥章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥章 | accepted |
| bio.summary | 王彥章，明人物。弘治三年進士，籍贯雲陽。（中国历代人物传记资料库 CBDB 261602） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥章（CBDB 261602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261602&o=json)
