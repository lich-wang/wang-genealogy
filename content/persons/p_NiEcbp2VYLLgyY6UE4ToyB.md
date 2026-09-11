---
schema: wang-person/v1
id: p_NiEcbp2VYLLgyY6UE4ToyB
status: active
merged_into: null
display_name: 王于亶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7rpGdbfwEUgZ7BqV5VgjJF
        subject_person_id: p_NiEcbp2VYLLgyY6UE4ToyB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王于亶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FAPgazAUYhCsAc9aTzjd5K
          claim_id: c_7rpGdbfwEUgZ7BqV5VgjJF
          source_id: s_SGjGAQLFfxBToeoteq2K2x
          stance: supports
          locator: CBDB:574706
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574706）
          source: &a1
            id: s_SGjGAQLFfxBToeoteq2K2x
            source_type: api_record
            title: 中国历代人物传记资料库：王于亶（CBDB 574706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574706&o=json
            external_identifier: CBDB:574706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cK1EvK4fJQkmm39MDEmpSR
        subject_person_id: p_NiEcbp2VYLLgyY6UE4ToyB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王于亶，清人物。籍贯京山。（中国历代人物传记资料库 CBDB 574706）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PgvvH4RAgbjfrdRmXogoqS
          claim_id: c_cK1EvK4fJQkmm39MDEmpSR
          source_id: s_SGjGAQLFfxBToeoteq2K2x
          stance: supports
          locator: CBDB:574706
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

# 王于亶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王于亶 | accepted |
| bio.summary | 王于亶，清人物。籍贯京山。（中国历代人物传记资料库 CBDB 574706） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王于亶（CBDB 574706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574706&o=json)
