---
schema: wang-person/v1
id: p_BvR9iuk6dZ8n1HiR9Mz2Po
status: active
merged_into: null
display_name: 王懋日
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p7XT8RV6JG3ksBwviETCRD
        subject_person_id: p_BvR9iuk6dZ8n1HiR9Mz2Po
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋日
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kssMbwvJyLBfUbLNEwvQGU
          claim_id: c_p7XT8RV6JG3ksBwviETCRD
          source_id: s_W5PiCWjCYxaWtipdZD4UvQ
          stance: supports
          locator: CBDB:692387
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692387）
          source: &a1
            id: s_W5PiCWjCYxaWtipdZD4UvQ
            source_type: api_record
            title: 中国历代人物传记资料库：王懋日（CBDB 692387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692387&o=json
            external_identifier: CBDB:692387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u4sJr4z5KwGKdrANAoS76a
        subject_person_id: p_BvR9iuk6dZ8n1HiR9Mz2Po
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王懋日，清人物。籍贯黟縣，身份为書法家，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 692387）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wuGg0LQDTtu95Te9bsduD4
          claim_id: c_u4sJr4z5KwGKdrANAoS76a
          source_id: s_W5PiCWjCYxaWtipdZD4UvQ
          stance: supports
          locator: CBDB:692387
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

# 王懋日

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋日 | accepted |
| bio.summary | 王懋日，清人物。籍贯黟縣，身份为書法家，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 692387） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋日（CBDB 692387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692387&o=json)
