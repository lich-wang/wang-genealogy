---
schema: wang-person/v1
id: p_wuveQpXuW34qTxeuNy3HmT
status: active
merged_into: null
display_name: 王子琛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yq62JoDABSpY1VKu16p6AK
        subject_person_id: p_wuveQpXuW34qTxeuNy3HmT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子琛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sEu8vqT7dJyh6zmc3E5LpU
          claim_id: c_Yq62JoDABSpY1VKu16p6AK
          source_id: s_da6LFQtuLgm1wBcBr1CEf8
          stance: supports
          locator: CBDB:636989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636989）
          source: &a1
            id: s_da6LFQtuLgm1wBcBr1CEf8
            source_type: api_record
            title: 中国历代人物传记资料库：王子琛（CBDB 636989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636989&o=json
            external_identifier: CBDB:636989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.174Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YGQygEi5xbGePFHR1vuPeE
        subject_person_id: p_wuveQpXuW34qTxeuNy3HmT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子琛，清人物。籍贯招遠，曾任縣丞。（中国历代人物传记资料库 CBDB 636989）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vMqLwcRkvc9Mim3UDEqJ36
          claim_id: c_YGQygEi5xbGePFHR1vuPeE
          source_id: s_da6LFQtuLgm1wBcBr1CEf8
          stance: supports
          locator: CBDB:636989
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

# 王子琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子琛 | accepted |
| bio.summary | 王子琛，清人物。籍贯招遠，曾任縣丞。（中国历代人物传记资料库 CBDB 636989） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子琛（CBDB 636989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636989&o=json)
