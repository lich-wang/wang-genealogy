---
schema: wang-person/v1
id: p_DLVwM3GTMXP3G33Htfjbmp
status: active
merged_into: null
display_name: 王樽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S1a8aTh9Z7XGNtT14q1gRK
        subject_person_id: p_DLVwM3GTMXP3G33Htfjbmp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2QUnnBHb8i8grsLs84veAf
          claim_id: c_S1a8aTh9Z7XGNtT14q1gRK
          source_id: s_HxRPHKpP4z7F43TF95F5Zs
          stance: supports
          locator: CBDB:69466
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69466）
          source: &a1
            id: s_HxRPHKpP4z7F43TF95F5Zs
            source_type: api_record
            title: 中国历代人物传记资料库：王樽（CBDB 69466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69466&o=json
            external_identifier: CBDB:69466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_F4wyaWEDX7M3AsGnt78JeX
        subject_person_id: p_DLVwM3GTMXP3G33Htfjbmp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1797年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NVMid97676t2ssjFB2xCGn
          claim_id: c_F4wyaWEDX7M3AsGnt78JeX
          source_id: s_HxRPHKpP4z7F43TF95F5Zs
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
        id: c_Zd311mFF1CRx5yBbuUsZxg
        subject_person_id: p_DLVwM3GTMXP3G33Htfjbmp
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
        - id: cs_TRCyLc9kv5QTRT1UPfKrYy
          claim_id: c_Zd311mFF1CRx5yBbuUsZxg
          source_id: s_HxRPHKpP4z7F43TF95F5Zs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8jdxkPc4atDjiVs8XrhKEy
        subject_person_id: p_DLVwM3GTMXP3G33Htfjbmp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AssDbojyKkuUvaxA5hTWA3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zUlhODK2Y5caN89IVZQg6Z
          claim_id: c_8jdxkPc4atDjiVs8XrhKEy
          source_id: s_HidNKi4G1TQGDh9aF7Axci
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13178：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HidNKi4G1TQGDh9aF7Axci
            source_type: api_record
            title: 中国历代人物传记资料库：王懿洪（CBDB 527014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527014&o=json
            external_identifier: CBDB:527014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AssDbojyKkuUvaxA5hTWA3
        status: active
        display_name: 王懿洪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王樽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樽 | accepted |
| death.date | 1797年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AssDbojyKkuUvaxA5hTWA3 | 王懿洪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懿洪（CBDB 527014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527014&o=json)
- [中国历代人物传记资料库：王樽（CBDB 69466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69466&o=json)
