---
schema: wang-person/v1
id: p_BDKoPPeWLe6xyv11558h58
status: active
merged_into: null
display_name: 王敘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ayzWPSt2AQvbrG8Mj1Z2wC
        subject_person_id: p_BDKoPPeWLe6xyv11558h58
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2tMk7F5n16Vjnez1FG1m5d
          claim_id: c_ayzWPSt2AQvbrG8Mj1Z2wC
          source_id: s_gxdDWGxGtFMuksYGWXi18L
          stance: supports
          locator: CBDB:310367
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（310367）
          source: &a1
            id: s_gxdDWGxGtFMuksYGWXi18L
            source_type: api_record
            title: 中国历代人物传记资料库：王敘（CBDB 310367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310367&o=json
            external_identifier: CBDB:310367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3G7YHFJ9gXaMyVxfu9LJJn
        subject_person_id: p_BDKoPPeWLe6xyv11558h58
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敘，明人物。嘉靖二十六年進士，籍贯霸州。（中国历代人物传记资料库 CBDB 310367）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_liMFKRZokwLxsy7NTkadoK
          claim_id: c_3G7YHFJ9gXaMyVxfu9LJJn
          source_id: s_gxdDWGxGtFMuksYGWXi18L
          stance: supports
          locator: CBDB:310367
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

# 王敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敘 | accepted |
| bio.summary | 王敘，明人物。嘉靖二十六年進士，籍贯霸州。（中国历代人物传记资料库 CBDB 310367） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敘（CBDB 310367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310367&o=json)
