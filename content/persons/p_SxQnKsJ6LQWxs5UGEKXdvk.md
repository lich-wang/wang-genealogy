---
schema: wang-person/v1
id: p_SxQnKsJ6LQWxs5UGEKXdvk
status: active
merged_into: null
display_name: 王啓宏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YqU2fuB6WtzoMetC94yWL2
        subject_person_id: p_SxQnKsJ6LQWxs5UGEKXdvk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啓宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v6HubgVMFC1b68YbA9TCiv
          claim_id: c_YqU2fuB6WtzoMetC94yWL2
          source_id: s_FTNBRik8jnmwrAqqRHEgrZ
          stance: supports
          locator: CBDB:414069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414069）
          source: &a1
            id: s_FTNBRik8jnmwrAqqRHEgrZ
            source_type: api_record
            title: 中国历代人物传记资料库：王啓宏（CBDB 414069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414069&o=json
            external_identifier: CBDB:414069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z5Yi5cMX997Gvw2Kvi3sCV
        subject_person_id: p_SxQnKsJ6LQWxs5UGEKXdvk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啓宏，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 414069）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-jmd81m7fbdbvV8zYAt1fu
          claim_id: c_z5Yi5cMX997Gvw2Kvi3sCV
          source_id: s_FTNBRik8jnmwrAqqRHEgrZ
          stance: supports
          locator: CBDB:414069
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

# 王啓宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啓宏 | accepted |
| bio.summary | 王啓宏，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 414069） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啓宏（CBDB 414069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414069&o=json)
