---
schema: wang-person/v1
id: p_mjmQ8fdw2pCEZioXPtfU7q
status: active
merged_into: null
display_name: 王章甫
cbdb_id: 415213
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CS1BwEWH9zW6i6A3mWMnyF
        subject_person_id: p_mjmQ8fdw2pCEZioXPtfU7q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章甫，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 415213）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vjP83niokNxm3y2PWbjpcR
          claim_id: c_CS1BwEWH9zW6i6A3mWMnyF
          source_id: s_ZQbXdvWqToGsg33jELkBiH
          stance: supports
          locator: CBDB:415213
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZQbXdvWqToGsg33jELkBiH
            source_type: api_record
            title: 中国历代人物传记资料库：王章甫（CBDB 415213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415213&o=json
            external_identifier: CBDB:415213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:52.674Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UCcCNPKQmFfyPsH38f7uJJ
        subject_person_id: p_mjmQ8fdw2pCEZioXPtfU7q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C7ZEUGG6vkb7y29MkMYAyE
          claim_id: c_UCcCNPKQmFfyPsH38f7uJJ
          source_id: s_ZQbXdvWqToGsg33jELkBiH
          stance: supports
          locator: CBDB:415213
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6101-6200）｜历史性依据：CBDB 朝代 = 元
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

# 王章甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王章甫，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 415213） | accepted |
| name.primary | 王章甫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王章甫（CBDB 415213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415213&o=json)
