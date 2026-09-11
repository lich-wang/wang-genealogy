---
schema: wang-person/v1
id: p_p62jpgbjq4YmTP2P3TcH54
status: active
merged_into: null
display_name: 王諫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8vDDwFxudjJN9F7SfLhxtH
        subject_person_id: p_p62jpgbjq4YmTP2P3TcH54
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BvBcWBUF7XyZZH5uyLSTUM
          claim_id: c_8vDDwFxudjJN9F7SfLhxtH
          source_id: s_AoASzPKGRp4M3DsPWWLtoR
          stance: supports
          locator: CBDB:21966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21966）
          source: &a1
            id: s_AoASzPKGRp4M3DsPWWLtoR
            source_type: api_record
            title: 中国历代人物传记资料库：王諫（CBDB 21966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21966&o=json
            external_identifier: CBDB:21966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.778Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_es7kmosEM6LUuiNMoFWWqU
        subject_person_id: p_p62jpgbjq4YmTP2P3TcH54
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諫，宋人物。籍贯濟陰。（中国历代人物传记资料库 CBDB 21966）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Auy6zhHXaZTXRUsGRHtH8j
          claim_id: c_es7kmosEM6LUuiNMoFWWqU
          source_id: s_AoASzPKGRp4M3DsPWWLtoR
          stance: supports
          locator: CBDB:21966
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DJcK0L2pvIDnqW8X8gDgIh
        subject_person_id: p_p62jpgbjq4YmTP2P3TcH54
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t6rLTMJwf5cwSMhPEVCWp6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SqtJY7y-7CIevbTwucStVK
          claim_id: c_DJcK0L2pvIDnqW8X8gDgIh
          source_id: s_AoASzPKGRp4M3DsPWWLtoR
          stance: supports
          locator: CBDB 双向互证（子 王士安 ⇄ 父 王諫）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_t6rLTMJwf5cwSMhPEVCWp6
        status: active
        display_name: 王士安
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諫 | accepted |
| bio.summary | 王諫，宋人物。籍贯濟陰。（中国历代人物传记资料库 CBDB 21966） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_t6rLTMJwf5cwSMhPEVCWp6 | 王士安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諫（CBDB 21966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21966&o=json)
