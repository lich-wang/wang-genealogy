---
schema: wang-person/v1
id: p_BvbLRaM2HEL6LTnK4vnUhW
status: active
merged_into: null
display_name: 王襄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKVfY5QqQ53attB1MYcWLU
        subject_person_id: p_BvbLRaM2HEL6LTnK4vnUhW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zZjt4VSi1Z3Xkr7znyfwqE
          claim_id: c_DKVfY5QqQ53attB1MYcWLU
          source_id: s_jn3poT234YkWuArWAgQN2V
          stance: supports
          locator: CBDB:98021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（98021）
          source: &a1
            id: s_jn3poT234YkWuArWAgQN2V
            source_type: api_record
            title: 中国历代人物传记资料库：王襄（CBDB 98021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98021&o=json
            external_identifier: CBDB:98021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j8q5ZsBVud6AaF1FmV3dNH
        subject_person_id: p_BvbLRaM2HEL6LTnK4vnUhW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襄，宋人物。曾任朝請大夫、中大夫、直龍圖閣。（中国历代人物传记资料库 CBDB 98021）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o5LPvv2dF6QGXfVI2c_Z8h
          claim_id: c_j8q5ZsBVud6AaF1FmV3dNH
          source_id: s_jn3poT234YkWuArWAgQN2V
          stance: supports
          locator: CBDB:98021
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

# 王襄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王襄 | accepted |
| bio.summary | 王襄，宋人物。曾任朝請大夫、中大夫、直龍圖閣。（中国历代人物传记资料库 CBDB 98021） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王襄（CBDB 98021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98021&o=json)
