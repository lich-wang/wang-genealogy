---
schema: wang-person/v1
id: p_Qq16uf7KtBTtL2p4V6ZNwU
status: active
merged_into: null
display_name: 王化成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WY5PuAb7HwkiLmsDb6JavT
        subject_person_id: p_Qq16uf7KtBTtL2p4V6ZNwU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y3ZUN76RG4BPxLuyJc828k
          claim_id: c_WY5PuAb7HwkiLmsDb6JavT
          source_id: s_emYAFHa5yjQJqSYN35hTMa
          stance: supports
          locator: CBDB:574728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574728）
          source: &a1
            id: s_emYAFHa5yjQJqSYN35hTMa
            source_type: api_record
            title: 中国历代人物传记资料库：王化成（CBDB 574728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574728&o=json
            external_identifier: CBDB:574728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TiQFHHiupfQBHCQTQ1y3ij
        subject_person_id: p_Qq16uf7KtBTtL2p4V6ZNwU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化成，清人物。籍贯京山。（中国历代人物传记资料库 CBDB 574728）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NvD_8knAtQSAjAtjQ9Y8Ub
          claim_id: c_TiQFHHiupfQBHCQTQ1y3ij
          source_id: s_emYAFHa5yjQJqSYN35hTMa
          stance: supports
          locator: CBDB:574728
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

# 王化成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化成 | accepted |
| bio.summary | 王化成，清人物。籍贯京山。（中国历代人物传记资料库 CBDB 574728） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化成（CBDB 574728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574728&o=json)
