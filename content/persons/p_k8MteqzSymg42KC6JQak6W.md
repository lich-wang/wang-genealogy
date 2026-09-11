---
schema: wang-person/v1
id: p_k8MteqzSymg42KC6JQak6W
status: active
merged_into: null
display_name: 王宙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zSZDG5JDV5gy2ctVUZaa63
        subject_person_id: p_k8MteqzSymg42KC6JQak6W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_18wrHRoUW997UaVMTDeSCh
          claim_id: c_zSZDG5JDV5gy2ctVUZaa63
          source_id: s_BU6G7Wp9iyMTBEBLFLxaoD
          stance: supports
          locator: CBDB:169232
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169232）
          source: &a1
            id: s_BU6G7Wp9iyMTBEBLFLxaoD
            source_type: api_record
            title: 中国历代人物传记资料库：王宙（CBDB 169232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169232&o=json
            external_identifier: CBDB:169232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.013Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PtNeAwr7NSzFdv9VA7qCsM
        subject_person_id: p_k8MteqzSymg42KC6JQak6W
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 773年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L3pKqET2Jtpkb91T34H6vC
          claim_id: c_PtNeAwr7NSzFdv9VA7qCsM
          source_id: s_BU6G7Wp9iyMTBEBLFLxaoD
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
        id: c_F4ACBLcF3D572J5cP5P4fU
        subject_person_id: p_k8MteqzSymg42KC6JQak6W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宙（卒于773年），唐人物。籍贯武進。（中国历代人物传记资料库 CBDB 169232）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lVvSHnMl_C3ruFY2sYv3zs
          claim_id: c_F4ACBLcF3D572J5cP5P4fU
          source_id: s_BU6G7Wp9iyMTBEBLFLxaoD
          stance: supports
          locator: CBDB:169232
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IyslP-_4VrB_wurW-vGCK6
        subject_person_id: p_StpRQqqgHhK5fWuKMf7Cn3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k8MteqzSymg42KC6JQak6W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fjwsh2q7o1Nh49dvXSLd1a
          claim_id: c_IyslP-_4VrB_wurW-vGCK6
          source_id: s_BU6G7Wp9iyMTBEBLFLxaoD
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_StpRQqqgHhK5fWuKMf7Cn3
        status: active
        display_name: 王思本
        merged_into_person_id: null
  children:
    - claim:
        id: c_c-CiajuFfUZcE2GV6JC4f4
        subject_person_id: p_k8MteqzSymg42KC6JQak6W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UHQ83RNHQcEz6ALsbjLwK3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O_RSvqHiqdsia1rpIvGMX1
          claim_id: c_c-CiajuFfUZcE2GV6JC4f4
          source_id: s_BU6G7Wp9iyMTBEBLFLxaoD
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UHQ83RNHQcEz6ALsbjLwK3
        status: active
        display_name: 王甫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宙 | accepted |
| death.date | 773年 | accepted |
| bio.summary | 王宙（卒于773年），唐人物。籍贯武進。（中国历代人物传记资料库 CBDB 169232） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_StpRQqqgHhK5fWuKMf7Cn3 | 王思本 | accepted |
| children | p_UHQ83RNHQcEz6ALsbjLwK3 | 王甫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宙（CBDB 169232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169232&o=json)
