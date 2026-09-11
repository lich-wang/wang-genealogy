---
schema: wang-person/v1
id: p_YsQBC6owjLrUtd7TibPkCx
status: active
merged_into: null
display_name: 王彝寶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4PAxcd6Xaza9P8voXQ5oX4
        subject_person_id: p_YsQBC6owjLrUtd7TibPkCx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qq7wwDGd9aCiPdtYzn1t98
          claim_id: c_4PAxcd6Xaza9P8voXQ5oX4
          source_id: s_Vi2SnbXhWT9DhApMgyHVSs
          stance: supports
          locator: CBDB:637619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637619）
          source: &a1
            id: s_Vi2SnbXhWT9DhApMgyHVSs
            source_type: api_record
            title: 中国历代人物传记资料库：王彝寶（CBDB 637619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637619&o=json
            external_identifier: CBDB:637619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vgopT84xRPZM27Xe19mbmB
        subject_person_id: p_YsQBC6owjLrUtd7TibPkCx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝寶，清人物。籍贯山陰，入仕監生，曾任司獄。（中国历代人物传记资料库 CBDB 637619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9D5zq8PRb0jXmmBFZEv8CY
          claim_id: c_vgopT84xRPZM27Xe19mbmB
          source_id: s_Vi2SnbXhWT9DhApMgyHVSs
          stance: supports
          locator: CBDB:637619
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

# 王彝寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彝寶 | accepted |
| bio.summary | 王彝寶，清人物。籍贯山陰，入仕監生，曾任司獄。（中国历代人物传记资料库 CBDB 637619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彝寶（CBDB 637619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637619&o=json)
