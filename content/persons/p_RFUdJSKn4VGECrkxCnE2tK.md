---
schema: wang-person/v1
id: p_RFUdJSKn4VGECrkxCnE2tK
status: active
merged_into: null
display_name: 王國器
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jk4aaoxFNHjHcpZz4sxjyj
        subject_person_id: p_RFUdJSKn4VGECrkxCnE2tK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國器
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9bvNNUxxxoXKk3CvpmDBN8
          claim_id: c_Jk4aaoxFNHjHcpZz4sxjyj
          source_id: s_g3KfYhnrrX2G6tv4V55GPC
          stance: supports
          locator: CBDB:101330
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101330）
          source: &a1
            id: s_g3KfYhnrrX2G6tv4V55GPC
            source_type: api_record
            title: 中国历代人物传记资料库：王國器（CBDB 101330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101330&o=json
            external_identifier: CBDB:101330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_U3BX52mAW5A92H9NqhsFLt
        subject_person_id: p_RFUdJSKn4VGECrkxCnE2tK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1284年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zoqTqH5MfekmamyxhQ62sG
          claim_id: c_U3BX52mAW5A92H9NqhsFLt
          source_id: s_g3KfYhnrrX2G6tv4V55GPC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xraark4L3idMEDiiRYnddk
        subject_person_id: p_RFUdJSKn4VGECrkxCnE2tK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國器（生于1284年），元人物。籍贯湖州路，身份为詞人。（中国历代人物传记资料库 CBDB 101330）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C60h1-GiR5p2qqUIjuHWie
          claim_id: c_Xraark4L3idMEDiiRYnddk
          source_id: s_g3KfYhnrrX2G6tv4V55GPC
          stance: supports
          locator: CBDB:101330
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-TLCzEwIpFfapOdukculk3
        subject_person_id: p_RFUdJSKn4VGECrkxCnE2tK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2CBEJZP6KnEPocwqbihWx3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KaipQs9Cb_RfvFJogK9UDw
          claim_id: c_-TLCzEwIpFfapOdukculk3
          source_id: s_RmaebJj8faNFAEyMCTLkY8
          stance: supports
          locator: 元人傳記資料索引，1178：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RmaebJj8faNFAEyMCTLkY8
            source_type: api_record
            title: 中国历代人物传记资料库：王蒙（CBDB 100923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100923&o=json
            external_identifier: CBDB:100923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2CBEJZP6KnEPocwqbihWx3
        status: active
        display_name: 王蒙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國器

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國器 | accepted |
| birth.date | 1284年 | accepted |
| bio.summary | 王國器（生于1284年），元人物。籍贯湖州路，身份为詞人。（中国历代人物传记资料库 CBDB 101330） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2CBEJZP6KnEPocwqbihWx3 | 王蒙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國器（CBDB 101330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101330&o=json)
- [中国历代人物传记资料库：王蒙（CBDB 100923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100923&o=json)
