---
schema: wang-person/v1
id: p_LA8z4NJi3YaXJyQr6yox7a
status: active
merged_into: null
display_name: 王建中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RAmKTP59b8Sj2FiNAaSKvQ
        subject_person_id: p_LA8z4NJi3YaXJyQr6yox7a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r9QJ53jV5fe5GxCML4b3Uv
          claim_id: c_RAmKTP59b8Sj2FiNAaSKvQ
          source_id: s_N9VYkC8zvpJfTm1MLd1AMV
          stance: supports
          locator: CBDB:509449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509449）
          source: &a1
            id: s_N9VYkC8zvpJfTm1MLd1AMV
            source_type: api_record
            title: 中国历代人物传记资料库：王建中（CBDB 509449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509449&o=json
            external_identifier: CBDB:509449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7e55RggPFeKnRMJ7oGQCPi
        subject_person_id: p_LA8z4NJi3YaXJyQr6yox7a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建中，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 509449）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Fa0Sri6i_zKkeWO2WHGubK
          claim_id: c_7e55RggPFeKnRMJ7oGQCPi
          source_id: s_N9VYkC8zvpJfTm1MLd1AMV
          stance: supports
          locator: CBDB:509449
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

# 王建中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建中 | accepted |
| bio.summary | 王建中，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 509449） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建中（CBDB 509449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509449&o=json)
