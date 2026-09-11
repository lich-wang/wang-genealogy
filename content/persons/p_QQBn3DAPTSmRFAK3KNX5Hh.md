---
schema: wang-person/v1
id: p_QQBn3DAPTSmRFAK3KNX5Hh
status: active
merged_into: null
display_name: 王漢池
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nJ2QvZKKc3Pr59C3iYMQqx
        subject_person_id: p_QQBn3DAPTSmRFAK3KNX5Hh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢池
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ynndcPGRKDXZT1VA9EFSvi
          claim_id: c_nJ2QvZKKc3Pr59C3iYMQqx
          source_id: s_KjA2np5HCGtkQFqW5Q4xUL
          stance: supports
          locator: CBDB:639195
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639195）
          source: &a1
            id: s_KjA2np5HCGtkQFqW5Q4xUL
            source_type: api_record
            title: 中国历代人物传记资料库：王漢池（CBDB 639195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639195&o=json
            external_identifier: CBDB:639195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U2uLdFuqvSGDf52Rk5sCWx
        subject_person_id: p_QQBn3DAPTSmRFAK3KNX5Hh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢池，清人物。籍贯宛平，入仕行伍，曾任巡捕北營參將、巡捕左營遊擊。（中国历代人物传记资料库 CBDB 639195）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IfhokyFZDrDnDiHM9B841l
          claim_id: c_U2uLdFuqvSGDf52Rk5sCWx
          source_id: s_KjA2np5HCGtkQFqW5Q4xUL
          stance: supports
          locator: CBDB:639195
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

# 王漢池

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢池 | accepted |
| bio.summary | 王漢池，清人物。籍贯宛平，入仕行伍，曾任巡捕北營參將、巡捕左營遊擊。（中国历代人物传记资料库 CBDB 639195） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漢池（CBDB 639195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639195&o=json)
