---
schema: wang-person/v1
id: p_UCJrhQk7wiKS151v176qHM
status: active
merged_into: null
display_name: 王勝先
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1uoG44wyCtQMUbDF87E47r
        subject_person_id: p_UCJrhQk7wiKS151v176qHM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wdawAj3FPQJ1dpH6iuGppH
          claim_id: c_1uoG44wyCtQMUbDF87E47r
          source_id: s_tEHDnMMETgo5smHDjJ6z8x
          stance: supports
          locator: CBDB:636381
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636381）
          source: &a1
            id: s_tEHDnMMETgo5smHDjJ6z8x
            source_type: api_record
            title: 中国历代人物传记资料库：王勝先（CBDB 636381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636381&o=json
            external_identifier: CBDB:636381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SRk9qkeqdGkcngKPN657PU
        subject_person_id: p_UCJrhQk7wiKS151v176qHM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXAqFx8EkTx5HmWXCRXHBE
          claim_id: c_SRk9qkeqdGkcngKPN657PU
          source_id: s_tEHDnMMETgo5smHDjJ6z8x
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王勝先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勝先 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勝先（CBDB 636381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636381&o=json)
