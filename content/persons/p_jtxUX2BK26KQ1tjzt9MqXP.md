---
schema: wang-person/v1
id: p_jtxUX2BK26KQ1tjzt9MqXP
status: active
merged_into: null
display_name: 王光昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wWnvan46MgT4TWCFEUE9YP
        subject_person_id: p_jtxUX2BK26KQ1tjzt9MqXP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L6RR23GuxhjQ5aiP3M7Ybd
          claim_id: c_wWnvan46MgT4TWCFEUE9YP
          source_id: s_9fDVRiQ6oAFA3DhVNyoGq1
          stance: supports
          locator: CBDB:636250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636250）
          source: &a1
            id: s_9fDVRiQ6oAFA3DhVNyoGq1
            source_type: api_record
            title: 中国历代人物传记资料库：王光昌（CBDB 636250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636250&o=json
            external_identifier: CBDB:636250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.931Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B23ipdGKMuj5fFdJAX3Pcd
        subject_person_id: p_jtxUX2BK26KQ1tjzt9MqXP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王光昌，清人物。籍贯鎮遠府，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 636250）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W10VmgUV8ER3s57lQfoqG6
          claim_id: c_B23ipdGKMuj5fFdJAX3Pcd
          source_id: s_9fDVRiQ6oAFA3DhVNyoGq1
          stance: supports
          locator: CBDB:636250
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

# 王光昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光昌 | accepted |
| bio.summary | 王光昌，清人物。籍贯鎮遠府，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 636250） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光昌（CBDB 636250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636250&o=json)
