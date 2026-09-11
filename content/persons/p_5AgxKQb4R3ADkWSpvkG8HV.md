---
schema: wang-person/v1
id: p_5AgxKQb4R3ADkWSpvkG8HV
status: active
merged_into: null
display_name: 王節
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_juiLm9cbBzydoqdNWtgZaU
        subject_person_id: p_5AgxKQb4R3ADkWSpvkG8HV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8Qczm6hDttYo7t4VL2ApmD
          claim_id: c_juiLm9cbBzydoqdNWtgZaU
          source_id: s_M91HRw81cLr5TKPJXuF6Ed
          stance: supports
          locator: CBDB:335624
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335624）
          source: &a1
            id: s_M91HRw81cLr5TKPJXuF6Ed
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 335624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335624&o=json
            external_identifier: CBDB:335624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fFEJKdw65sxFsxQnWChqVF
        subject_person_id: p_5AgxKQb4R3ADkWSpvkG8HV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王節，明人物。隆慶二年進士，曾任知縣。（中国历代人物传记资料库 CBDB 335624）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x9HouTXinwyqvIdkgGbsAX
          claim_id: c_fFEJKdw65sxFsxQnWChqVF
          source_id: s_M91HRw81cLr5TKPJXuF6Ed
          stance: supports
          locator: CBDB:335624
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

# 王節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王節 | accepted |
| bio.summary | 王節，明人物。隆慶二年進士，曾任知縣。（中国历代人物传记资料库 CBDB 335624） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王節（CBDB 335624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335624&o=json)
