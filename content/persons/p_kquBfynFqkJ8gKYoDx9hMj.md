---
schema: wang-person/v1
id: p_kquBfynFqkJ8gKYoDx9hMj
status: active
merged_into: null
display_name: 王嵒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VLmFcN7JJGF4ovyGdRnC43
        subject_person_id: p_kquBfynFqkJ8gKYoDx9hMj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UoqZW3MCqH2PLQSLw3Rh2C
          claim_id: c_VLmFcN7JJGF4ovyGdRnC43
          source_id: s_3KhHVWdQTuSnF6DbDPN9AZ
          stance: supports
          locator: CBDB:506739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506739）
          source: &a1
            id: s_3KhHVWdQTuSnF6DbDPN9AZ
            source_type: api_record
            title: 中国历代人物传记资料库：王嵒（CBDB 506739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506739&o=json
            external_identifier: CBDB:506739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.007Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sM3tpFEaQcTAxYHGyozixW
        subject_person_id: p_kquBfynFqkJ8gKYoDx9hMj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵒，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 506739）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vM_P0qOjmYiQfMOrEKAf-c
          claim_id: c_sM3tpFEaQcTAxYHGyozixW
          source_id: s_3KhHVWdQTuSnF6DbDPN9AZ
          stance: supports
          locator: CBDB:506739
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

# 王嵒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵒 | accepted |
| bio.summary | 王嵒，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 506739） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嵒（CBDB 506739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506739&o=json)
