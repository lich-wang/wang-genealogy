---
schema: wang-person/v1
id: p_e66TrFhjcAGLAzEgGsqu9m
status: active
merged_into: null
display_name: 王念祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NFE5jq7Nj1xZzBL6Doys4M
        subject_person_id: p_e66TrFhjcAGLAzEgGsqu9m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GA993bDS4mtKEyqt41NFoJ
          claim_id: c_NFE5jq7Nj1xZzBL6Doys4M
          source_id: s_Vut5b8Mf5vqcTeMDz983WJ
          stance: supports
          locator: CBDB:300375
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300375）
          source: &a1
            id: s_Vut5b8Mf5vqcTeMDz983WJ
            source_type: api_record
            title: 中国历代人物传记资料库：王念祖（CBDB 300375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300375&o=json
            external_identifier: CBDB:300375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BhacBmQN327LewPFvDEU6n
        subject_person_id: p_e66TrFhjcAGLAzEgGsqu9m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念祖，明人物。嘉靖十七年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 300375）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X_W6FzpFLzEQ2SyRh9ypmP
          claim_id: c_BhacBmQN327LewPFvDEU6n
          source_id: s_Vut5b8Mf5vqcTeMDz983WJ
          stance: supports
          locator: CBDB:300375
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

# 王念祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王念祖 | accepted |
| bio.summary | 王念祖，明人物。嘉靖十七年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 300375） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王念祖（CBDB 300375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300375&o=json)
