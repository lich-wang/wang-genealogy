---
schema: wang-person/v1
id: p_CFNv5fCLpuGJs9jFS75j8B
status: active
merged_into: null
display_name: 王彥思
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4qeoyw5uH7YtN1iiTTcJPg
        subject_person_id: p_CFNv5fCLpuGJs9jFS75j8B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mh1G8Mas2CEjLqB7PjFYN9
          claim_id: c_4qeoyw5uH7YtN1iiTTcJPg
          source_id: s_RfU7AcKARENqrCcdPXEKAQ
          stance: supports
          locator: CBDB:464972
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（464972）
          source: &a1
            id: s_RfU7AcKARENqrCcdPXEKAQ
            source_type: api_record
            title: 中国历代人物传记资料库：王彥思（CBDB 464972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464972&o=json
            external_identifier: CBDB:464972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_35fmtH6eoi4DgMKf1Q3jrs
        subject_person_id: p_CFNv5fCLpuGJs9jFS75j8B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥思，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 464972）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qOUiR_bnAF0uI9NMB1Rtk5
          claim_id: c_35fmtH6eoi4DgMKf1Q3jrs
          source_id: s_RfU7AcKARENqrCcdPXEKAQ
          stance: supports
          locator: CBDB:464972
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

# 王彥思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥思 | accepted |
| bio.summary | 王彥思，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 464972） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥思（CBDB 464972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464972&o=json)
