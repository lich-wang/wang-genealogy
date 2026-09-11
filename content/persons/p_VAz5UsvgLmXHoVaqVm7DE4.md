---
schema: wang-person/v1
id: p_VAz5UsvgLmXHoVaqVm7DE4
status: active
merged_into: null
display_name: 王建元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SDuo3f6j8t4jzcQ5bD2XEe
        subject_person_id: p_VAz5UsvgLmXHoVaqVm7DE4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gu615yC9UCSAGpXcEu8tmM
          claim_id: c_SDuo3f6j8t4jzcQ5bD2XEe
          source_id: s_vG9tA7L8BYQQuuKpJ6TaZG
          stance: supports
          locator: CBDB:227353
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227353）
          source: &a1
            id: s_vG9tA7L8BYQQuuKpJ6TaZG
            source_type: api_record
            title: 中国历代人物传记资料库：王建元（CBDB 227353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227353&o=json
            external_identifier: CBDB:227353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x1yekX1xmn8KJaHRiss3aP
        subject_person_id: p_VAz5UsvgLmXHoVaqVm7DE4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建元，明人物。萬曆丙戌科進士進士，籍贯平湖。（中国历代人物传记资料库 CBDB 227353）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-nhuiPCJvLAV_gGY1VynAM
          claim_id: c_x1yekX1xmn8KJaHRiss3aP
          source_id: s_vG9tA7L8BYQQuuKpJ6TaZG
          stance: supports
          locator: CBDB:227353
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

# 王建元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建元 | accepted |
| bio.summary | 王建元，明人物。萬曆丙戌科進士進士，籍贯平湖。（中国历代人物传记资料库 CBDB 227353） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建元（CBDB 227353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227353&o=json)
