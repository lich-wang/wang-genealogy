---
schema: wang-person/v1
id: p_BMiUCmkq2aFZ1z1Z26KCPK
status: active
merged_into: null
display_name: 王文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6w7JiWtJZ74coJZUPxMToQ
        subject_person_id: p_BMiUCmkq2aFZ1z1Z26KCPK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZkwcKfzre2sKoUTEQCWHhC
          claim_id: c_6w7JiWtJZ74coJZUPxMToQ
          source_id: s_dP2NWf32wzw5rKGk1QtYp6
          stance: supports
          locator: CBDB:491273
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491273）
          source: &a1
            id: s_dP2NWf32wzw5rKGk1QtYp6
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 491273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491273&o=json
            external_identifier: CBDB:491273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.172Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6k5vz9fbM2QqxhURLqx13e
        subject_person_id: p_BMiUCmkq2aFZ1z1Z26KCPK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 491273）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lcDxvzwwaUEz07j4xJN-d2
          claim_id: c_6k5vz9fbM2QqxhURLqx13e
          source_id: s_dP2NWf32wzw5rKGk1QtYp6
          stance: supports
          locator: CBDB:491273
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

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | 王文，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 491273） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文（CBDB 491273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491273&o=json)
