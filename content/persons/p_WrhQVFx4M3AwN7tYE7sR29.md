---
schema: wang-person/v1
id: p_WrhQVFx4M3AwN7tYE7sR29
status: active
merged_into: null
display_name: 王福
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r7rqM6ZREqLgfSx8VHDnk5
        subject_person_id: p_WrhQVFx4M3AwN7tYE7sR29
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jgDtMPsBMiRs1ZHgnTe4GU
          claim_id: c_r7rqM6ZREqLgfSx8VHDnk5
          source_id: s_GnFXKRHmsR36Fun6ChqNPJ
          stance: supports
          locator: CBDB:557488
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557488）
          source: &a1
            id: s_GnFXKRHmsR36Fun6ChqNPJ
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 557488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557488&o=json
            external_identifier: CBDB:557488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XPEBqteNEYXkUyJB2BDj78
        subject_person_id: p_WrhQVFx4M3AwN7tYE7sR29
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，明人物。籍贯鄧州。（中国历代人物传记资料库 CBDB 557488）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SsAM6iCBMuaRueWC9zvhWx
          claim_id: c_XPEBqteNEYXkUyJB2BDj78
          source_id: s_GnFXKRHmsR36Fun6ChqNPJ
          stance: supports
          locator: CBDB:557488
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TNMjyGIt_Sufnn-j020i5J
        subject_person_id: p_kt2CLjdy44ggWNJFZgTJyK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WrhQVFx4M3AwN7tYE7sR29
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KhaivUVT-0DztjlAwBQRUJ
          claim_id: c_TNMjyGIt_Sufnn-j020i5J
          source_id: s_6rhFB6NwmDJF6rKTWorpen
          stance: supports
          locator: 南陽府志，lgid=878782：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6rhFB6NwmDJF6rKTWorpen
            source_type: api_record
            title: 中国历代人物传记资料库：王之藩（CBDB 557455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557455&o=json
            external_identifier: CBDB:557455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kt2CLjdy44ggWNJFZgTJyK
        status: active
        display_name: 王之藩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，明人物。籍贯鄧州。（中国历代人物传记资料库 CBDB 557488） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kt2CLjdy44ggWNJFZgTJyK | 王之藩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 557488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557488&o=json)
- [中国历代人物传记资料库：王之藩（CBDB 557455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557455&o=json)
