---
schema: wang-person/v1
id: p_ZP3Gz6canUFoHeet8nsC9k
status: active
merged_into: null
display_name: 王處厚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ChRuSJ7P1e5bSy95TgEXMM
        subject_person_id: p_ZP3Gz6canUFoHeet8nsC9k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處厚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_drKg5F1JhFNbQDQe3sdcqR
          claim_id: c_ChRuSJ7P1e5bSy95TgEXMM
          source_id: s_HPs7TgL65Xt7uZEX55DiJz
          stance: supports
          locator: CBDB:38119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38119）
          source: &a1
            id: s_HPs7TgL65Xt7uZEX55DiJz
            source_type: api_record
            title: 中国历代人物传记资料库：王處厚（CBDB 38119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38119&o=json
            external_identifier: CBDB:38119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kCQmSCxt22D7S8e7ELHSSL
        subject_person_id: p_ZP3Gz6canUFoHeet8nsC9k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處厚，宋人物。曾任軍器庫副使、翰林醫官使、翰林醫官副使。（中国历代人物传记资料库 CBDB 38119）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RpCGzdrs0dXstoQkSXlZ2v
          claim_id: c_kCQmSCxt22D7S8e7ELHSSL
          source_id: s_HPs7TgL65Xt7uZEX55DiJz
          stance: supports
          locator: CBDB:38119
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

# 王處厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王處厚 | accepted |
| bio.summary | 王處厚，宋人物。曾任軍器庫副使、翰林醫官使、翰林醫官副使。（中国历代人物传记资料库 CBDB 38119） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王處厚（CBDB 38119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38119&o=json)
