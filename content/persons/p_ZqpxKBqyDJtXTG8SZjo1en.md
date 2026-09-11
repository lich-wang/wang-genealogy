---
schema: wang-person/v1
id: p_ZqpxKBqyDJtXTG8SZjo1en
status: active
merged_into: null
display_name: 王熠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_smZKDrsbrmTADeXSFKVrS2
        subject_person_id: p_ZqpxKBqyDJtXTG8SZjo1en
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6bPpAT3rgDbQbcUoS1NrXA
          claim_id: c_smZKDrsbrmTADeXSFKVrS2
          source_id: s_xfmSrY8o5ZjXvpY59KrvHH
          stance: supports
          locator: CBDB:331799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331799）
          source: &a1
            id: s_xfmSrY8o5ZjXvpY59KrvHH
            source_type: api_record
            title: 中国历代人物传记资料库：王熠（CBDB 331799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331799&o=json
            external_identifier: CBDB:331799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rLrdsTSuhMS5mDdBqRPjsX
        subject_person_id: p_ZqpxKBqyDJtXTG8SZjo1en
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bvpJEZuGhQHMVCUb1NxRCp
          claim_id: c_rLrdsTSuhMS5mDdBqRPjsX
          source_id: s_xfmSrY8o5ZjXvpY59KrvHH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6WCsAw-BVQUYWuCYZ4-IlV
        subject_person_id: p_ZqpxKBqyDJtXTG8SZjo1en
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TugXusNFHFdTE5ayse4kLm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OqIkSnN-ZJ-XeMluWOUlr3
          claim_id: c_6WCsAw-BVQUYWuCYZ4-IlV
          source_id: s_xfmSrY8o5ZjXvpY59KrvHH
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百五十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TugXusNFHFdTE5ayse4kLm
        status: active
        display_name: 王圻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王熠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TugXusNFHFdTE5ayse4kLm | 王圻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王熠（CBDB 331799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331799&o=json)
