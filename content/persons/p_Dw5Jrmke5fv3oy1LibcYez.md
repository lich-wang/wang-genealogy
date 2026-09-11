---
schema: wang-person/v1
id: p_Dw5Jrmke5fv3oy1LibcYez
status: active
merged_into: null
display_name: 王福多
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X7eoFY6AqU4K3XcAPWCFYM
        subject_person_id: p_Dw5Jrmke5fv3oy1LibcYez
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福多
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J77WDEcEKeMui5E9CVJVbf
          claim_id: c_X7eoFY6AqU4K3XcAPWCFYM
          source_id: s_gQa1mo1Jw4bMkCJSEs6wp5
          stance: supports
          locator: CBDB:639603
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639603）
          source: &a1
            id: s_gQa1mo1Jw4bMkCJSEs6wp5
            source_type: api_record
            title: 中国历代人物传记资料库：王福多（CBDB 639603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639603&o=json
            external_identifier: CBDB:639603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cQxDpAPRsz3pJ3iyTYdpsj
        subject_person_id: p_Dw5Jrmke5fv3oy1LibcYez
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福多，清人物。籍贯處州府，曾任訓導。（中国历代人物传记资料库 CBDB 639603）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hq_pZdRkZ8KEr9uXfjpQEW
          claim_id: c_cQxDpAPRsz3pJ3iyTYdpsj
          source_id: s_gQa1mo1Jw4bMkCJSEs6wp5
          stance: supports
          locator: CBDB:639603
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

# 王福多

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福多 | accepted |
| bio.summary | 王福多，清人物。籍贯處州府，曾任訓導。（中国历代人物传记资料库 CBDB 639603） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福多（CBDB 639603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639603&o=json)
