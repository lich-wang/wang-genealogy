---
schema: wang-person/v1
id: p_PdVn2Gq4VFNzPRsvfVPDK7
status: active
merged_into: null
display_name: 王文杲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7SUXQ7HvoyEzzPGPUfMMQ1
        subject_person_id: p_PdVn2Gq4VFNzPRsvfVPDK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MSUWqSWnBtmc3kGci4pfdS
          claim_id: c_7SUXQ7HvoyEzzPGPUfMMQ1
          source_id: s_C2epzuK2Z1TQ1sUL4nSmJy
          stance: supports
          locator: CBDB:638233
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638233）
          source: &a1
            id: s_C2epzuK2Z1TQ1sUL4nSmJy
            source_type: api_record
            title: 中国历代人物传记资料库：王文杲（CBDB 638233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638233&o=json
            external_identifier: CBDB:638233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_93WK1e813trBHxFe8gj2PC
        subject_person_id: p_PdVn2Gq4VFNzPRsvfVPDK7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文杲，清人物。籍贯蒲州府，入仕廩貢生，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 638233）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DHVsRjq9CRIh-dkfaVXx0n
          claim_id: c_93WK1e813trBHxFe8gj2PC
          source_id: s_C2epzuK2Z1TQ1sUL4nSmJy
          stance: supports
          locator: CBDB:638233
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

# 王文杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文杲 | accepted |
| bio.summary | 王文杲，清人物。籍贯蒲州府，入仕廩貢生，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 638233） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文杲（CBDB 638233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638233&o=json)
