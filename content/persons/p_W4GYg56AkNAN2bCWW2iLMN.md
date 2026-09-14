---
schema: wang-person/v1
id: p_W4GYg56AkNAN2bCWW2iLMN
status: active
merged_into: null
display_name: 王光泰
cbdb_id: 518984
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1jEnxqzDAL3x5Xqktcp5C9
        subject_person_id: p_W4GYg56AkNAN2bCWW2iLMN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光泰，史料所见人物。本项目依据《中国历代人物传记资料库：王光泰（CBDB 518984）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_pho4FL_h4FQZjMOrtYHRpM
          claim_id: c_1jEnxqzDAL3x5Xqktcp5C9
          source_id: s_gqZP6Uwh5QJ9fZTC23eh2P
          stance: supports
          locator: CBDB:518984
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gqZP6Uwh5QJ9fZTC23eh2P
            source_type: api_record
            title: 中国历代人物传记资料库：王光泰（CBDB 518984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=518984&o=json
            external_identifier: CBDB:518984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_E7s6Y6rsa6E4yJ6DUrXUXA
        subject_person_id: p_W4GYg56AkNAN2bCWW2iLMN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VFPVjLKnE7uwFbJ3N4wCqY
          claim_id: c_E7s6Y6rsa6E4yJ6DUrXUXA
          source_id: s_gqZP6Uwh5QJ9fZTC23eh2P
          stance: supports
          locator: CBDB:518984
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
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
  other:
    - claim:
        id: c_Sms7hEMbHq4uzWepfh6-jd
        subject_person_id: p_LkQPFPTR4KJebCyhPZZdjx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_W4GYg56AkNAN2bCWW2iLMN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_USWtDfx4TQw2gvbL4zNoHL
          claim_id: c_Sms7hEMbHq4uzWepfh6-jd
          source_id: s_f1tZ9YrD5jZRLWH0ODgiSi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 518984 王光泰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_f1tZ9YrD5jZRLWH0ODgiSi
            source_type: api_record
            title: 中国历代人物传记资料库：王光恩（CBDB 59999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59999&o=json
            external_identifier: CBDB:59999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LkQPFPTR4KJebCyhPZZdjx
        status: active
        display_name: 王光恩
        merged_into_person_id: null
---

# 王光泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王光泰，史料所见人物。本项目依据《中国历代人物传记资料库：王光泰（CBDB 518984）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王光泰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_LkQPFPTR4KJebCyhPZZdjx | 王光恩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光恩（CBDB 59999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59999&o=json)
- [中国历代人物传记资料库：王光泰（CBDB 518984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=518984&o=json)
