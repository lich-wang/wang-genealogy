---
schema: wang-person/v1
id: p_uN57S1enR4fK4uGBvnjG7a
status: active
merged_into: null
display_name: 王彥成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TUm31rM4pSHBVRhRjaho6h
        subject_person_id: p_uN57S1enR4fK4uGBvnjG7a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_igWN25yEXULe46JFBkMxWX
          claim_id: c_TUm31rM4pSHBVRhRjaho6h
          source_id: s_poUYxcUGEG29SbgBaGNbog
          stance: supports
          locator: CBDB:247200
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247200）
          source: &a1
            id: s_poUYxcUGEG29SbgBaGNbog
            source_type: api_record
            title: 中国历代人物传记资料库：王彥成（CBDB 247200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247200&o=json
            external_identifier: CBDB:247200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NvnC9cpCxQYfb6p5BoGTB5
        subject_person_id: p_uN57S1enR4fK4uGBvnjG7a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥成，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 247200）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LhwRapJ79fCv76yLVTVleG
          claim_id: c_NvnC9cpCxQYfb6p5BoGTB5
          source_id: s_poUYxcUGEG29SbgBaGNbog
          stance: supports
          locator: CBDB:247200
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
  descendants:
    - claim:
        id: c_W244DAB3yX6uQDPJb-D1jO
        subject_person_id: p_uN57S1enR4fK4uGBvnjG7a
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SiRDDsb57pG6VTfrkJRXut
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wXLB1jpun6LknvS96a2mGF
          claim_id: c_W244DAB3yX6uQDPJb-D1jO
          source_id: s_poUYxcUGEG29SbgBaGNbog
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百三十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SiRDDsb57pG6VTfrkJRXut
        status: active
        display_name: 王紳
        merged_into_person_id: null
  other: []
---

# 王彥成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥成 | accepted |
| bio.summary | 王彥成，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 247200） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_SiRDDsb57pG6VTfrkJRXut | 王紳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥成（CBDB 247200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247200&o=json)
