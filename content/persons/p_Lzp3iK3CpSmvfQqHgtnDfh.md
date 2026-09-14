---
schema: wang-person/v1
id: p_Lzp3iK3CpSmvfQqHgtnDfh
status: active
merged_into: null
display_name: 王大賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PGWiHhoDECebbGmuHa914o
        subject_person_id: p_Lzp3iK3CpSmvfQqHgtnDfh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bN9AkiANAQuowEBF5d7fZu
          claim_id: c_PGWiHhoDECebbGmuHa914o
          source_id: s_wDzA71aHd3ZLALsnPh5ZPo
          stance: supports
          locator: CBDB:336881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336881）
          source: &a1
            id: s_wDzA71aHd3ZLALsnPh5ZPo
            source_type: api_record
            title: 中国历代人物传记资料库：王大賓（CBDB 336881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336881&o=json
            external_identifier: CBDB:336881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GUMnXe527HKaByC6AFsnUX
        subject_person_id: p_Lzp3iK3CpSmvfQqHgtnDfh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大賓，明人物。隆慶二年進士，籍贯趙城。（中国历代人物传记资料库 CBDB 336881）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0vt6CreS-YP1o7WWWQRvzs
          claim_id: c_GUMnXe527HKaByC6AFsnUX
          source_id: s_wDzA71aHd3ZLALsnPh5ZPo
          stance: supports
          locator: CBDB:336881
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pBdVJ_mVkFtlSHdRGGV_vZ
        subject_person_id: p_yLx83RnHcixF3ib2M1YL7h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lzp3iK3CpSmvfQqHgtnDfh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lgP1uhcjXPfOkXbFaSbAVV
          claim_id: c_pBdVJ_mVkFtlSHdRGGV_vZ
          source_id: s_oJWUyWlzgzTe-XvX3GB2IN
          stance: supports
          locator: CBDB：兄弟 王大用（205680）之父／母 王堂
          quotation: null
          interpretation_note: 由兄弟关系推断：王大賓 与 王大用 为同胞（CBDB 记「兄」），王大用 之父／母即 王大賓 之父／母。
          source:
            id: s_oJWUyWlzgzTe-XvX3GB2IN
            source_type: api_record
            title: 中国历代人物传记资料库：王大賓（CBDB 336881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336881&o=json
            external_identifier: CBDB:336881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yLx83RnHcixF3ib2M1YL7h
        status: active
        display_name: 王堂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PQJFTcjdnoicJiapIC0psI
        subject_person_id: p_E7LZ9JqaeFU8tKfb1vvmx1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Lzp3iK3CpSmvfQqHgtnDfh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A8sdJob1WWQYtZPSTP3UYK
          claim_id: c_PQJFTcjdnoicJiapIC0psI
          source_id: s_oJWUyWlzgzTe-XvX3GB2IN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205680 王大用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oJWUyWlzgzTe-XvX3GB2IN
            source_type: api_record
            title: 中国历代人物传记资料库：王大賓（CBDB 336881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336881&o=json
            external_identifier: CBDB:336881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E7LZ9JqaeFU8tKfb1vvmx1
        status: active
        display_name: 王大用
        merged_into_person_id: null
---

# 王大賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大賓 | accepted |
| bio.summary | 王大賓，明人物。隆慶二年進士，籍贯趙城。（中国历代人物传记资料库 CBDB 336881） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yLx83RnHcixF3ib2M1YL7h | 王堂 | accepted |
| other | p_E7LZ9JqaeFU8tKfb1vvmx1 | 王大用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大賓（CBDB 336881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336881&o=json)
