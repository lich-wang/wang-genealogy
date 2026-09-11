---
schema: wang-person/v1
id: p_q7uJEAfPZSJ2kuqTLEvg7M
status: active
merged_into: null
display_name: 王楨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HgyjwYBe4QLVFbBaK1RY11
        subject_person_id: p_q7uJEAfPZSJ2kuqTLEvg7M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s84uWSc6QizmM2DMm8595B
          claim_id: c_HgyjwYBe4QLVFbBaK1RY11
          source_id: s_MNTVBPs85KZz8NLDJRFQbq
          stance: supports
          locator: CBDB:139201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139201）
          source: &a1
            id: s_MNTVBPs85KZz8NLDJRFQbq
            source_type: api_record
            title: 中国历代人物传记资料库：王楨（CBDB 139201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139201&o=json
            external_identifier: CBDB:139201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.395Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ur5z4h2QyW5hNMs6Ba7AUU
        subject_person_id: p_q7uJEAfPZSJ2kuqTLEvg7M
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 619年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dStsRx4L6yQ86i3op14N3
          claim_id: c_Ur5z4h2QyW5hNMs6Ba7AUU
          source_id: s_MNTVBPs85KZz8NLDJRFQbq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PUfJD4Sgy1pMvFZrPp14y4
        subject_person_id: p_q7uJEAfPZSJ2kuqTLEvg7M
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 660年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JbWoorkH5QN8QfZGubm4Re
          claim_id: c_PUfJD4Sgy1pMvFZrPp14y4
          source_id: s_MNTVBPs85KZz8NLDJRFQbq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mqatRWTURE44zUK2n9vxMZ
        subject_person_id: p_q7uJEAfPZSJ2kuqTLEvg7M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨（619年—660年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 139201）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_siJAiJvsMbeduO8Jbf0nGz
          claim_id: c_mqatRWTURE44zUK2n9vxMZ
          source_id: s_MNTVBPs85KZz8NLDJRFQbq
          stance: supports
          locator: CBDB:139201
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zK5gc7amng6rdtffEqYwcc
        subject_person_id: p_E4dnAxocC3oFrFk6exvrE2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q7uJEAfPZSJ2kuqTLEvg7M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V7ps0KL7uyjinAcNkAZRn1
          claim_id: c_zK5gc7amng6rdtffEqYwcc
          source_id: s_Vof2n7dtCC7FTNaXPDWyWt
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 134：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Vof2n7dtCC7FTNaXPDWyWt
            source_type: api_record
            title: 中国历代人物传记资料库：王機（CBDB 147615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147615&o=json
            external_identifier: CBDB:147615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_E4dnAxocC3oFrFk6exvrE2
        status: active
        display_name: 王機
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楨 | accepted |
| birth.date | 619年 | accepted |
| death.date | 660年 | accepted |
| bio.summary | 王楨（619年—660年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 139201） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_E4dnAxocC3oFrFk6exvrE2 | 王機 | accepted |

## 外部来源

- [中国历代人物传记资料库：王機（CBDB 147615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147615&o=json)
- [中国历代人物传记资料库：王楨（CBDB 139201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139201&o=json)
