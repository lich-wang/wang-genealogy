---
schema: wang-person/v1
id: p_jQJkHWv5j7T5jpzRfeeB6e
status: active
merged_into: null
display_name: 王秉寅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q34TQJYjxCBp7j66FEBQZJ
        subject_person_id: p_jQJkHWv5j7T5jpzRfeeB6e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h3TNerLXNzMf5RoJqL7C7Z
          claim_id: c_q34TQJYjxCBp7j66FEBQZJ
          source_id: s_h37FFisTzJ6cb9iYMW4igx
          stance: supports
          locator: CBDB:639643
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639643）
          source: &a1
            id: s_h37FFisTzJ6cb9iYMW4igx
            source_type: api_record
            title: 中国历代人物传记资料库：王秉寅（CBDB 639643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639643&o=json
            external_identifier: CBDB:639643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R6NDUKGeU8RCsog4CtoJPv
        subject_person_id: p_jQJkHWv5j7T5jpzRfeeB6e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉寅，清人物。籍贯山東省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 639643）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o5bjVBBL2VWqXK2DCLJXvF
          claim_id: c_R6NDUKGeU8RCsog4CtoJPv
          source_id: s_h37FFisTzJ6cb9iYMW4igx
          stance: supports
          locator: CBDB:639643
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

# 王秉寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉寅 | accepted |
| bio.summary | 王秉寅，清人物。籍贯山東省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 639643） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉寅（CBDB 639643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639643&o=json)
