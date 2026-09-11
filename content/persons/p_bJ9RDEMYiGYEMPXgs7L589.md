---
schema: wang-person/v1
id: p_bJ9RDEMYiGYEMPXgs7L589
status: active
merged_into: null
display_name: 王昂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5B3tS5Jg9vwjqzSJ5neDsj
        subject_person_id: p_bJ9RDEMYiGYEMPXgs7L589
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8fWHm2EDL1xJFJivAktDjJ
          claim_id: c_5B3tS5Jg9vwjqzSJ5neDsj
          source_id: s_vF2bHXG8xuHbn24Xt59a2N
          stance: supports
          locator: CBDB:343483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343483）
          source: &a1
            id: s_vF2bHXG8xuHbn24Xt59a2N
            source_type: api_record
            title: 中国历代人物传记资料库：王昂（CBDB 343483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343483&o=json
            external_identifier: CBDB:343483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5t7JP69cE2xS2nximS2538
        subject_person_id: p_bJ9RDEMYiGYEMPXgs7L589
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昂，明人物。明清進士進士，籍贯揭陽，入仕進士。（中国历代人物传记资料库 CBDB 343483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GKixBQskOUMGXsZ9wrNx-K
          claim_id: c_5t7JP69cE2xS2nximS2538
          source_id: s_vF2bHXG8xuHbn24Xt59a2N
          stance: supports
          locator: CBDB:343483
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

# 王昂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昂 | accepted |
| bio.summary | 王昂，明人物。明清進士進士，籍贯揭陽，入仕進士。（中国历代人物传记资料库 CBDB 343483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昂（CBDB 343483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343483&o=json)
