---
schema: wang-person/v1
id: p_DyeZjFk2Hpu7AtuhGG2g3G
status: active
merged_into: null
display_name: 王琦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_24CTwu6Hy6PyrF51D2gyGK
        subject_person_id: p_DyeZjFk2Hpu7AtuhGG2g3G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NnXQN9BPt486rybcKXj9rc
          claim_id: c_24CTwu6Hy6PyrF51D2gyGK
          source_id: s_YBXiCPepmHQmCRDYE2yXgN
          stance: supports
          locator: CBDB:38422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38422）
          source: &a1
            id: s_YBXiCPepmHQmCRDYE2yXgN
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 38422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38422&o=json
            external_identifier: CBDB:38422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.465Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2tFRpYskN7GYYCCnpCg3pN
        subject_person_id: p_DyeZjFk2Hpu7AtuhGG2g3G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦，宋人物。籍贯樂平。（中国历代人物传记资料库 CBDB 38422）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0NZ-RIfU2BKZyhRRuePtz4
          claim_id: c_2tFRpYskN7GYYCCnpCg3pN
          source_id: s_YBXiCPepmHQmCRDYE2yXgN
          stance: supports
          locator: CBDB:38422
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

# 王琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琦 | accepted |
| bio.summary | 王琦，宋人物。籍贯樂平。（中国历代人物传记资料库 CBDB 38422） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琦（CBDB 38422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38422&o=json)
