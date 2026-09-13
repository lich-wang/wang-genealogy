---
schema: wang-person/v1
id: p_P33RYgqY1FK4DDnEQWNQTK
status: active
merged_into: null
display_name: 王甑
cbdb_id: 157221
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_98bfbvaGSrmQqq48UXLp23
        subject_person_id: p_P33RYgqY1FK4DDnEQWNQTK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甑，唐人物。籍贯冀州。（中国历代人物传记资料库 CBDB 157221）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_uIN7uoQddtKx2EYGVjlB7T
          claim_id: c_98bfbvaGSrmQqq48UXLp23
          source_id: s_s2qoiFBFxGRHuppuK458Xb
          stance: supports
          locator: CBDB:157221
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_s2qoiFBFxGRHuppuK458Xb
            source_type: api_record
            title: 中国历代人物传记资料库：王甑（CBDB 157221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157221&o=json
            external_identifier: CBDB:157221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QS249QdGbBkB2DUABwPCM9
        subject_person_id: p_P33RYgqY1FK4DDnEQWNQTK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tuPQKnT8LUxb1yQntUb46F
          claim_id: c_QS249QdGbBkB2DUABwPCM9
          source_id: s_s2qoiFBFxGRHuppuK458Xb
          stance: supports
          locator: CBDB:157221
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rUTdNdijW1JIxCxGVc8D8s
        subject_person_id: p_P33RYgqY1FK4DDnEQWNQTK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LZDyxwkDn7hMScsFxGBinn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FCjxJDrzdrzueSB_WdV0Z4
          claim_id: c_rUTdNdijW1JIxCxGVc8D8s
          source_id: s_KQEbMKSZa9BLKNscTj9VYb
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KQEbMKSZa9BLKNscTj9VYb
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 157222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157222&o=json
            external_identifier: CBDB:157222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LZDyxwkDn7hMScsFxGBinn
        status: active
        display_name: 王金
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_OAvQPBxktJGA0O-Q_ckLdg
        subject_person_id: p_P33RYgqY1FK4DDnEQWNQTK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_z5fd9doZBpHnhM7XG6sUvg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TLse3kW0V9e6_nTV_N3dZb
          claim_id: c_OAvQPBxktJGA0O-Q_ckLdg
          source_id: s_s2qoiFBFxGRHuppuK458Xb
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 148：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_s2qoiFBFxGRHuppuK458Xb
            source_type: api_record
            title: 中国历代人物传记资料库：王甑（CBDB 157221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157221&o=json
            external_identifier: CBDB:157221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_z5fd9doZBpHnhM7XG6sUvg
        status: active
        display_name: 王佺
        merged_into_person_id: null
  other: []
---

# 王甑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王甑，唐人物。籍贯冀州。（中国历代人物传记资料库 CBDB 157221） | accepted |
| name.primary | 王甑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LZDyxwkDn7hMScsFxGBinn | 王金 | accepted |
| descendants | p_z5fd9doZBpHnhM7XG6sUvg | 王佺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王金（CBDB 157222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157222&o=json)
- [中国历代人物传记资料库：王甑（CBDB 157221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157221&o=json)
