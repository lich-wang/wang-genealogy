---
schema: wang-person/v1
id: p_QvmpGGKpmPejSG2VgwKUAo
status: active
merged_into: null
display_name: 王惠風
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4xqWUEaVk4g7hK9PfiCUov
        subject_person_id: p_QvmpGGKpmPejSG2VgwKUAo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠風
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dtPPJ6PrcBnLnpgAetcB7H
          claim_id: c_4xqWUEaVk4g7hK9PfiCUov
          source_id: s_22sDkGjqcPctnCzQ7R64Af
          stance: supports
          locator: CBDB:135460
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（135460）
          source: &a1
            id: s_22sDkGjqcPctnCzQ7R64Af
            source_type: api_record
            title: 中国历代人物传记资料库：王惠風（CBDB 135460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135460&o=json
            external_identifier: CBDB:135460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h4C2UppGBK9KG3MJa1BwNi
        subject_person_id: p_QvmpGGKpmPejSG2VgwKUAo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为西晉人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V3Q3E3SEKgcztxMq12H9nP
          claim_id: c_h4C2UppGBK9KG3MJa1BwNi
          source_id: s_22sDkGjqcPctnCzQ7R64Af
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

# 王惠風

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠風 | accepted |
| bio.summary | CBDB 记载为西晉人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惠風（CBDB 135460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135460&o=json)
