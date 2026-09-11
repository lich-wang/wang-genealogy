---
schema: wang-person/v1
id: p_tahnpH55TA84B89LjG18rL
status: active
merged_into: null
display_name: 王惠林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q2QZefdWbqSgFVFnNaE5mk
        subject_person_id: p_tahnpH55TA84B89LjG18rL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3iguSzDGWVyckcHBEswPj3
          claim_id: c_q2QZefdWbqSgFVFnNaE5mk
          source_id: s_UWF6DV47gq5TxLFY2njoxg
          stance: supports
          locator: CBDB:637898
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637898）
          source: &a1
            id: s_UWF6DV47gq5TxLFY2njoxg
            source_type: api_record
            title: 中国历代人物传记资料库：王惠林（CBDB 637898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637898&o=json
            external_identifier: CBDB:637898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.450Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bLUSC7ZG3kX7XQxppCAo1A
        subject_person_id: p_tahnpH55TA84B89LjG18rL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠林，清人物。籍贯大興，入仕監生，曾任司獄。（中国历代人物传记资料库 CBDB 637898）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qw1zV2C0k2NmGxRVhJmD_A
          claim_id: c_bLUSC7ZG3kX7XQxppCAo1A
          source_id: s_UWF6DV47gq5TxLFY2njoxg
          stance: supports
          locator: CBDB:637898
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

# 王惠林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠林 | accepted |
| bio.summary | 王惠林，清人物。籍贯大興，入仕監生，曾任司獄。（中国历代人物传记资料库 CBDB 637898） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惠林（CBDB 637898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637898&o=json)
