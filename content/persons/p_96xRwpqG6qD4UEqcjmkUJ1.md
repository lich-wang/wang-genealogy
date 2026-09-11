---
schema: wang-person/v1
id: p_96xRwpqG6qD4UEqcjmkUJ1
status: active
merged_into: null
display_name: 王嘉善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_trCq5zpxr3JBJ4h9C1v8hT
        subject_person_id: p_96xRwpqG6qD4UEqcjmkUJ1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Prse893X3fUKgCaL7B6hwE
          claim_id: c_trCq5zpxr3JBJ4h9C1v8hT
          source_id: s_LP9NBgeUwUVbxL8xkciH1Y
          stance: supports
          locator: CBDB:72150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72150）
          source: &a1
            id: s_LP9NBgeUwUVbxL8xkciH1Y
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉善（CBDB 72150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72150&o=json
            external_identifier: CBDB:72150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.024Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_862ro1cVducNpmPdkP2RFp
        subject_person_id: p_96xRwpqG6qD4UEqcjmkUJ1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1809年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xZfXKi4A4zk8M7m6wjRvVt
          claim_id: c_862ro1cVducNpmPdkP2RFp
          source_id: s_LP9NBgeUwUVbxL8xkciH1Y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_prW5GGdSpA2fQH6bfUwyHp
        subject_person_id: p_96xRwpqG6qD4UEqcjmkUJ1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1846年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s8TNspTHYmkgxCZH8FB7YF
          claim_id: c_prW5GGdSpA2fQH6bfUwyHp
          source_id: s_LP9NBgeUwUVbxL8xkciH1Y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xjCz34gHSBQ6PGpbXeVMVU
        subject_person_id: p_96xRwpqG6qD4UEqcjmkUJ1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉善（1809年—1846年），清人物。籍贯江都。（中国历代人物传记资料库 CBDB 72150）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nrsdCSHOmI7aHIGw0CPnlM
          claim_id: c_xjCz34gHSBQ6PGpbXeVMVU
          source_id: s_LP9NBgeUwUVbxL8xkciH1Y
          stance: supports
          locator: CBDB:72150
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

# 王嘉善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉善 | accepted |
| birth.date | 1809年 | accepted |
| death.date | 1846年 | accepted |
| bio.summary | 王嘉善（1809年—1846年），清人物。籍贯江都。（中国历代人物传记资料库 CBDB 72150） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉善（CBDB 72150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72150&o=json)
