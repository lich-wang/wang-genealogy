---
schema: wang-person/v1
id: p_G8Uk8jX3ziBMSg862Bm6yL
status: active
merged_into: null
display_name: 王邦棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yXnNoNeoMiYQwWia9EyMfj
        subject_person_id: p_G8Uk8jX3ziBMSg862Bm6yL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JaU7MdDxYoS6o6tuC9Xdwi
          claim_id: c_yXnNoNeoMiYQwWia9EyMfj
          source_id: s_qBXk7T3SZVRXNy3v68cPFB
          stance: supports
          locator: CBDB:640482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640482）
          source: &a1
            id: s_qBXk7T3SZVRXNy3v68cPFB
            source_type: api_record
            title: 中国历代人物传记资料库：王邦棟（CBDB 640482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640482&o=json
            external_identifier: CBDB:640482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3WMrdugVpnByAZeCEHPLEP
        subject_person_id: p_G8Uk8jX3ziBMSg862Bm6yL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦棟，清人物。籍贯涇縣，曾任典史。（中国历代人物传记资料库 CBDB 640482）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ypbuFvHRwSx5hkPzgUkJBa
          claim_id: c_3WMrdugVpnByAZeCEHPLEP
          source_id: s_qBXk7T3SZVRXNy3v68cPFB
          stance: supports
          locator: CBDB:640482
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

# 王邦棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦棟 | accepted |
| bio.summary | 王邦棟，清人物。籍贯涇縣，曾任典史。（中国历代人物传记资料库 CBDB 640482） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦棟（CBDB 640482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640482&o=json)
