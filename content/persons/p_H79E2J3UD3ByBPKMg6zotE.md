---
schema: wang-person/v1
id: p_H79E2J3UD3ByBPKMg6zotE
status: active
merged_into: null
display_name: 王佐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EFsiSJJ4t2YDD5L5iBerjt
        subject_person_id: p_H79E2J3UD3ByBPKMg6zotE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_krwJUyQ98zJoZJP2yb1ve7
          claim_id: c_EFsiSJJ4t2YDD5L5iBerjt
          source_id: s_hcmdpRBCaV1kCG4i3bFoGq
          stance: supports
          locator: CBDB:244028
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244028）
          source: &a1
            id: s_hcmdpRBCaV1kCG4i3bFoGq
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 244028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244028&o=json
            external_identifier: CBDB:244028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bk9thWsWwbGgfW9R8KdbGG
        subject_person_id: p_H79E2J3UD3ByBPKMg6zotE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。成化五年進士，籍贯華容。（中国历代人物传记资料库 CBDB 244028）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wjLRhm0EYJS-mcANOXCTYA
          claim_id: c_bk9thWsWwbGgfW9R8KdbGG
          source_id: s_hcmdpRBCaV1kCG4i3bFoGq
          stance: supports
          locator: CBDB:244028
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OktEFi-CYXrs6EODu_Zv_a
        subject_person_id: p_1G549N2d23KvV8NGLNV5ym
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H79E2J3UD3ByBPKMg6zotE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1bnU7aT-AkLS3DaYg0FFv9
          claim_id: c_OktEFi-CYXrs6EODu_Zv_a
          source_id: s_KbsI4MzEoH3PdfsgO-yq0e
          stance: supports
          locator: CBDB：兄弟 王儼（126889）之父／母 王致中
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王儼 为同胞（CBDB 记「弟」），王儼 之父／母即 王佐 之父／母。
          source:
            id: s_KbsI4MzEoH3PdfsgO-yq0e
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 244028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244028&o=json
            external_identifier: CBDB:244028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1G549N2d23KvV8NGLNV5ym
        status: active
        display_name: 王致中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_E3wJS2iFTzKBgqz_xrFP3R
        subject_person_id: p_8P5PCH5aTQeZpUfSAM9z5q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_H79E2J3UD3ByBPKMg6zotE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eBAlkoMPZ_THpSPCv_7mR5
          claim_id: c_E3wJS2iFTzKBgqz_xrFP3R
          source_id: s_KbsI4MzEoH3PdfsgO-yq0e
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126889 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KbsI4MzEoH3PdfsgO-yq0e
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 244028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244028&o=json
            external_identifier: CBDB:244028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8P5PCH5aTQeZpUfSAM9z5q
        status: active
        display_name: 王儼
        merged_into_person_id: null
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。成化五年進士，籍贯華容。（中国历代人物传记资料库 CBDB 244028） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1G549N2d23KvV8NGLNV5ym | 王致中 | accepted |
| other | p_8P5PCH5aTQeZpUfSAM9z5q | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 244028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244028&o=json)
