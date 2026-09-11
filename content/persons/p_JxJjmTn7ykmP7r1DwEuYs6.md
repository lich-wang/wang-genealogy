---
schema: wang-person/v1
id: p_JxJjmTn7ykmP7r1DwEuYs6
status: active
merged_into: null
display_name: 王之翯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fcdhhe1qjaKa5RvJtqERQt
        subject_person_id: p_JxJjmTn7ykmP7r1DwEuYs6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hz1sKt15Hp667vAEbXxY38
          claim_id: c_Fcdhhe1qjaKa5RvJtqERQt
          source_id: s_RnViXPCFoPG2wfUCs7gsEX
          stance: supports
          locator: CBDB:635815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635815）
          source: &a1
            id: s_RnViXPCFoPG2wfUCs7gsEX
            source_type: api_record
            title: 中国历代人物传记资料库：王之翯（CBDB 635815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635815&o=json
            external_identifier: CBDB:635815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.800Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_24kP2YmJLkUuM9G7B3oEac
        subject_person_id: p_JxJjmTn7ykmP7r1DwEuYs6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翯，清人物。籍贯嘉定，曾任訓導。（中国历代人物传记资料库 CBDB 635815）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gYes2Ht63pDRL_f5D3I3fI
          claim_id: c_24kP2YmJLkUuM9G7B3oEac
          source_id: s_RnViXPCFoPG2wfUCs7gsEX
          stance: supports
          locator: CBDB:635815
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

# 王之翯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之翯 | accepted |
| bio.summary | 王之翯，清人物。籍贯嘉定，曾任訓導。（中国历代人物传记资料库 CBDB 635815） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之翯（CBDB 635815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635815&o=json)
