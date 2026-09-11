---
schema: wang-person/v1
id: p_YgdQdoLJ96S4CVyccCWu8Q
status: active
merged_into: null
display_name: 王猷新
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q3GfCxUbH5wcpXxKDVinwR
        subject_person_id: p_YgdQdoLJ96S4CVyccCWu8Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王猷新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_utsHGpqfYq58WBPBEh81sM
          claim_id: c_Q3GfCxUbH5wcpXxKDVinwR
          source_id: s_fDSPnC4xnMQfdetfyiuxz3
          stance: supports
          locator: CBDB:698430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698430）
          source: &a1
            id: s_fDSPnC4xnMQfdetfyiuxz3
            source_type: api_record
            title: 中国历代人物传记资料库：王猷新（CBDB 698430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698430&o=json
            external_identifier: CBDB:698430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y7ibhuDrTDqkgAHJmg8ush
        subject_person_id: p_YgdQdoLJ96S4CVyccCWu8Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9fusccri7cq85J2KWJDssf
          claim_id: c_y7ibhuDrTDqkgAHJmg8ush
          source_id: s_fDSPnC4xnMQfdetfyiuxz3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_IB9NF9vP0UBR-15NSOJL59
        subject_person_id: p_5V4dAV7TkZbRUQJ25uU3YR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YgdQdoLJ96S4CVyccCWu8Q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YC7EUdCQDddjbEYzBVy0JI
          claim_id: c_IB9NF9vP0UBR-15NSOJL59
          source_id: s_t2Zq3NdpJ6Zf9XAYbuhRRM
          stance: supports
          locator: 新修菏澤縣志，lgid=725100：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_t2Zq3NdpJ6Zf9XAYbuhRRM
            source_type: api_record
            title: 中国历代人物传记资料库：王士元（CBDB 698406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698406&o=json
            external_identifier: CBDB:698406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5V4dAV7TkZbRUQJ25uU3YR
        status: active
        display_name: 王士元
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王猷新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王猷新 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_5V4dAV7TkZbRUQJ25uU3YR | 王士元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士元（CBDB 698406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698406&o=json)
- [中国历代人物传记资料库：王猷新（CBDB 698430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698430&o=json)
