---
schema: wang-person/v1
id: p_3S9LFxPRigqjLYx36NCaFZ
status: active
merged_into: null
display_name: 王晞曾
cbdb_id: 37372
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UZ2KY3vUNpEoYAiDQkgEk5
        subject_person_id: p_3S9LFxPRigqjLYx36NCaFZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晞曾，宋人物。籍贯崑山。（中国历代人物传记资料库 CBDB 37372）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ej4KVmWQkHRjRGgJjr0pAE
          claim_id: c_UZ2KY3vUNpEoYAiDQkgEk5
          source_id: s_EkiEe5PDgQnrZBqSgpCFYz
          stance: supports
          locator: CBDB:37372
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EkiEe5PDgQnrZBqSgpCFYz
            source_type: api_record
            title: 中国历代人物传记资料库：王晞曾（CBDB 37372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37372&o=json
            external_identifier: CBDB:37372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AQjX81abTePW1M87oKUhLL
        subject_person_id: p_3S9LFxPRigqjLYx36NCaFZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晞曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fz12RbLkcPBXYxjd4wG3iR
          claim_id: c_AQjX81abTePW1M87oKUhLL
          source_id: s_EkiEe5PDgQnrZBqSgpCFYz
          stance: supports
          locator: CBDB:37372
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_C78Ep2lW0Uhf41tnoK3T3B
        subject_person_id: p_odmAS5uD5U3o962JZ4YbCD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3S9LFxPRigqjLYx36NCaFZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_00CKldfcKODouCJp6FQM8f
          claim_id: c_C78Ep2lW0Uhf41tnoK3T3B
          source_id: s_OQoRPvGzxqmX-wMFXZ3efr
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37370）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_OQoRPvGzxqmX-wMFXZ3efr
            source_type: api_record
            title: 中国历代人物传记资料库：王晞曾（CBDB 37372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37372&o=json
            external_identifier: CBDB:37372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_odmAS5uD5U3o962JZ4YbCD
        status: active
        display_name: 王陔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晞曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晞曾，宋人物。籍贯崑山。（中国历代人物传记资料库 CBDB 37372） | accepted |
| name.primary | 王晞曾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_odmAS5uD5U3o962JZ4YbCD | 王陔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晞曾（CBDB 37372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37372&o=json)
