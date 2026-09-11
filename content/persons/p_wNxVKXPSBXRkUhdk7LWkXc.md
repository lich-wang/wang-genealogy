---
schema: wang-person/v1
id: p_wNxVKXPSBXRkUhdk7LWkXc
status: active
merged_into: null
display_name: 王禕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9FKQ6DJtKbWxAc8MFof9kx
        subject_person_id: p_wNxVKXPSBXRkUhdk7LWkXc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M94Qr4jDT5sJLe79WBgqHC
          claim_id: c_9FKQ6DJtKbWxAc8MFof9kx
          source_id: s_4UtKzKaL9zs2X3Nabiv6xH
          stance: supports
          locator: CBDB:483708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483708）
          source: &a1
            id: s_4UtKzKaL9zs2X3Nabiv6xH
            source_type: api_record
            title: 中国历代人物传记资料库：王禕（CBDB 483708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483708&o=json
            external_identifier: CBDB:483708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ewLfRg9MvdhWHEK18xFznM
        subject_person_id: p_wNxVKXPSBXRkUhdk7LWkXc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禕，明人物。曾任通判。（中国历代人物传记资料库 CBDB 483708）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EN3RqdA9ERapKreQAFHG7t
          claim_id: c_ewLfRg9MvdhWHEK18xFznM
          source_id: s_4UtKzKaL9zs2X3Nabiv6xH
          stance: supports
          locator: CBDB:483708
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

# 王禕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禕 | accepted |
| bio.summary | 王禕，明人物。曾任通判。（中国历代人物传记资料库 CBDB 483708） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禕（CBDB 483708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483708&o=json)
