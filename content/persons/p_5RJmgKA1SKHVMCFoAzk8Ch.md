---
schema: wang-person/v1
id: p_5RJmgKA1SKHVMCFoAzk8Ch
status: active
merged_into: null
display_name: 王納言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jVpk3d6V3H59X5cMGZVC7s
        subject_person_id: p_5RJmgKA1SKHVMCFoAzk8Ch
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_68Sonw4emXF4do9FFgHEuC
          claim_id: c_jVpk3d6V3H59X5cMGZVC7s
          source_id: s_WPLYy5Q3w8C88pSSYW3t6q
          stance: supports
          locator: CBDB:126659
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126659）
          source: &a1
            id: s_WPLYy5Q3w8C88pSSYW3t6q
            source_type: api_record
            title: 中国历代人物传记资料库：王納言（CBDB 126659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126659&o=json
            external_identifier: CBDB:126659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TFkZyUybAA1B5G1AwohcSY
        subject_person_id: p_5RJmgKA1SKHVMCFoAzk8Ch
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_69ivG1RR1FrDLXUyhrZwMP
          claim_id: c_TFkZyUybAA1B5G1AwohcSY
          source_id: s_WPLYy5Q3w8C88pSSYW3t6q
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

# 王納言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王納言 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王納言（CBDB 126659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126659&o=json)
