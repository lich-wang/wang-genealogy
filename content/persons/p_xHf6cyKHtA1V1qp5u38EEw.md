---
schema: wang-person/v1
id: p_xHf6cyKHtA1V1qp5u38EEw
status: active
merged_into: null
display_name: 王與敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p34fAAQt92NH91Yq6qXXCh
        subject_person_id: p_xHf6cyKHtA1V1qp5u38EEw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zsYPFb12um7wCEHipKDJrN
          claim_id: c_p34fAAQt92NH91Yq6qXXCh
          source_id: s_BgM3XLt76epJ2A9H6xsEVb
          stance: supports
          locator: CBDB:101404
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101404）
          source: &a1
            id: s_BgM3XLt76epJ2A9H6xsEVb
            source_type: api_record
            title: 中国历代人物传记资料库：王與敬（CBDB 101404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101404&o=json
            external_identifier: CBDB:101404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L4cNAC46iFWnoGb23WMfcq
        subject_person_id: p_xHf6cyKHtA1V1qp5u38EEw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與敬，元人物。曾任典吏、都鎮撫司都鎮撫、宣使。（中国历代人物传记资料库 CBDB 101404）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_anRwY2ZpQFa5I_BWbNrYNn
          claim_id: c_L4cNAC46iFWnoGb23WMfcq
          source_id: s_BgM3XLt76epJ2A9H6xsEVb
          stance: supports
          locator: CBDB:101404
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

# 王與敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王與敬 | accepted |
| bio.summary | 王與敬，元人物。曾任典吏、都鎮撫司都鎮撫、宣使。（中国历代人物传记资料库 CBDB 101404） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王與敬（CBDB 101404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101404&o=json)
