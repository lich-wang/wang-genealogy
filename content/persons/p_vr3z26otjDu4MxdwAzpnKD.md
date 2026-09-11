---
schema: wang-person/v1
id: p_vr3z26otjDu4MxdwAzpnKD
status: active
merged_into: null
display_name: 王三善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FgTWzQ7quUodsHofQtb73M
        subject_person_id: p_vr3z26otjDu4MxdwAzpnKD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hv1EcTVbkPFVXwTroi7LxW
          claim_id: c_FgTWzQ7quUodsHofQtb73M
          source_id: s_e5vfvpN6n9dL7qu7cgboqP
          stance: supports
          locator: CBDB:341733
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341733）
          source: &a1
            id: s_e5vfvpN6n9dL7qu7cgboqP
            source_type: api_record
            title: 中国历代人物传记资料库：王三善（CBDB 341733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341733&o=json
            external_identifier: CBDB:341733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NE79yJTSmEphcKg8NM6Ntc
        subject_person_id: p_vr3z26otjDu4MxdwAzpnKD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三善，明人物。明清進士進士，籍贯永城，入仕進士，曾任州推官、吏部考功司郎中、吏部考功司主事。（中国历代人物传记资料库 CBDB 341733）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PLUgLEzDTB-asFentwwQQY
          claim_id: c_NE79yJTSmEphcKg8NM6Ntc
          source_id: s_e5vfvpN6n9dL7qu7cgboqP
          stance: supports
          locator: CBDB:341733
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

# 王三善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三善 | accepted |
| bio.summary | 王三善，明人物。明清進士進士，籍贯永城，入仕進士，曾任州推官、吏部考功司郎中、吏部考功司主事。（中国历代人物传记资料库 CBDB 341733） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三善（CBDB 341733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341733&o=json)
