---
schema: wang-person/v1
id: p_dpnJqyJTiEFMe8p7srqGaS
status: active
merged_into: null
display_name: 王侍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YS18vdN6jxdWug3jSu79iC
        subject_person_id: p_dpnJqyJTiEFMe8p7srqGaS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6b1rTcibQLNYDAU6VA981K
          claim_id: c_YS18vdN6jxdWug3jSu79iC
          source_id: s_Jbsk4f7FPKqfwJkPP7A1Ha
          stance: supports
          locator: CBDB:636033
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636033）
          source: &a1
            id: s_Jbsk4f7FPKqfwJkPP7A1Ha
            source_type: api_record
            title: 中国历代人物传记资料库：王侍（CBDB 636033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636033&o=json
            external_identifier: CBDB:636033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ky4RU8NLHJVAafBmPoGXr4
        subject_person_id: p_dpnJqyJTiEFMe8p7srqGaS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侍，清人物。籍贯張掖，曾任典史。（中国历代人物传记资料库 CBDB 636033）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lzh8QEvlLP8MTytgRJHghL
          claim_id: c_ky4RU8NLHJVAafBmPoGXr4
          source_id: s_Jbsk4f7FPKqfwJkPP7A1Ha
          stance: supports
          locator: CBDB:636033
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

# 王侍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侍 | accepted |
| bio.summary | 王侍，清人物。籍贯張掖，曾任典史。（中国历代人物传记资料库 CBDB 636033） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王侍（CBDB 636033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636033&o=json)
