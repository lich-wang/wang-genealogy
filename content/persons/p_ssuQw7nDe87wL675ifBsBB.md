---
schema: wang-person/v1
id: p_ssuQw7nDe87wL675ifBsBB
status: active
merged_into: null
display_name: 王世良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cD4PHkPEuNSho2LELYXx51
        subject_person_id: p_ssuQw7nDe87wL675ifBsBB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zii87WLWV9ivvz9oEZRy7p
          claim_id: c_cD4PHkPEuNSho2LELYXx51
          source_id: s_D3xQJnge7VuuVtPH9ofTnE
          stance: supports
          locator: CBDB:283510
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283510）
          source: &a1
            id: s_D3xQJnge7VuuVtPH9ofTnE
            source_type: api_record
            title: 中国历代人物传记资料库：王世良（CBDB 283510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283510&o=json
            external_identifier: CBDB:283510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6nvwqHCwPuA5u9rNq5KRNf
        subject_person_id: p_ssuQw7nDe87wL675ifBsBB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世良，明人物。正德十六年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 283510）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zfJA56YOElVzfIeJivSOKu
          claim_id: c_6nvwqHCwPuA5u9rNq5KRNf
          source_id: s_D3xQJnge7VuuVtPH9ofTnE
          stance: supports
          locator: CBDB:283510
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

# 王世良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世良 | accepted |
| bio.summary | 王世良，明人物。正德十六年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 283510） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世良（CBDB 283510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283510&o=json)
