---
schema: wang-person/v1
id: p_e56Y7RzQiiCrv9cpgr1N2N
status: active
merged_into: null
display_name: 王一鍔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ALRiy5G8EGLnz4yqstuaAS
        subject_person_id: p_e56Y7RzQiiCrv9cpgr1N2N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鍔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y2Q1NZjTCKvxcPyBsJv2cp
          claim_id: c_ALRiy5G8EGLnz4yqstuaAS
          source_id: s_B6hcW6CqzhGb2q7sHvBNpB
          stance: supports
          locator: CBDB:541760
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（541760）
          source: &a1
            id: s_B6hcW6CqzhGb2q7sHvBNpB
            source_type: api_record
            title: 中国历代人物传记资料库：王一鍔（CBDB 541760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541760&o=json
            external_identifier: CBDB:541760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4CZ2XRYqAfsZuzY4hQvSdt
        subject_person_id: p_e56Y7RzQiiCrv9cpgr1N2N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鍔，宋人物。籍贯樂平，入仕進士。（中国历代人物传记资料库 CBDB 541760）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QQ7d2AxGEbXhuky_fP9QUL
          claim_id: c_4CZ2XRYqAfsZuzY4hQvSdt
          source_id: s_B6hcW6CqzhGb2q7sHvBNpB
          stance: supports
          locator: CBDB:541760
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

# 王一鍔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一鍔 | accepted |
| bio.summary | 王一鍔，宋人物。籍贯樂平，入仕進士。（中国历代人物传记资料库 CBDB 541760） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一鍔（CBDB 541760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541760&o=json)
