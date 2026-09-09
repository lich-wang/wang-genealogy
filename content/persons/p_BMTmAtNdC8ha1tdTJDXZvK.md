---
schema: wang-person/v1
id: p_BMTmAtNdC8ha1tdTJDXZvK
status: active
merged_into: null
display_name: 王繪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FkuxvZmwfpkou6n6Qhw7Mt
        subject_person_id: p_BMTmAtNdC8ha1tdTJDXZvK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B8nBX93a6CMNgPGc5WXytX
          claim_id: c_FkuxvZmwfpkou6n6Qhw7Mt
          source_id: s_p8TowuCDV71kAaLGVCEcZF
          stance: supports
          locator: CBDB:697185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697185）
          source: &a1
            id: s_p8TowuCDV71kAaLGVCEcZF
            source_type: api_record
            title: 中国历代人物传记资料库：王繪（CBDB 697185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697185&o=json
            external_identifier: CBDB:697185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1R5LTsy7hWGDadkGG1S3KJ
        subject_person_id: p_BMTmAtNdC8ha1tdTJDXZvK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DBQ6aPMsEDekdC9gAkc8kR
          claim_id: c_1R5LTsy7hWGDadkGG1S3KJ
          source_id: s_p8TowuCDV71kAaLGVCEcZF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王繪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繪 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繪（CBDB 697185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697185&o=json)
