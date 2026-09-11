---
schema: wang-person/v1
id: p_eWz6n9dJmmq7bLYGzf43MX
status: active
merged_into: null
display_name: 王高
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_epveM5SxdjXmeYXEBFDbog
        subject_person_id: p_eWz6n9dJmmq7bLYGzf43MX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FDX3t2uWL4i8WgARCi7Uze
          claim_id: c_epveM5SxdjXmeYXEBFDbog
          source_id: s_En37JsZXZdpNPmAGsgyvDS
          stance: supports
          locator: CBDB:297083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297083）
          source: &a1
            id: s_En37JsZXZdpNPmAGsgyvDS
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 297083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297083&o=json
            external_identifier: CBDB:297083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9RvG6KFYgfRF646bH7qeRK
        subject_person_id: p_eWz6n9dJmmq7bLYGzf43MX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王高，明人物。嘉靖十四年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 297083）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O990iVVYR7-vurfaQs5NEJ
          claim_id: c_9RvG6KFYgfRF646bH7qeRK
          source_id: s_En37JsZXZdpNPmAGsgyvDS
          stance: supports
          locator: CBDB:297083
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

# 王高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王高 | accepted |
| bio.summary | 王高，明人物。嘉靖十四年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 297083） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王高（CBDB 297083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297083&o=json)
