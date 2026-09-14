---
schema: wang-person/v1
id: p_GjGiibm4LpCUtLELc9X7aj
status: active
merged_into: null
display_name: 王术
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MAndt6EGtfV1o9kPxNayqm
        subject_person_id: p_GjGiibm4LpCUtLELc9X7aj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王术
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i7PQQ1NdmYVkPsh6rXJ4Ph
          claim_id: c_MAndt6EGtfV1o9kPxNayqm
          source_id: s_HSuCzHi2UKsx9FC15ov5xF
          stance: supports
          locator: CBDB:213209
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213209）
          source: &a1
            id: s_HSuCzHi2UKsx9FC15ov5xF
            source_type: api_record
            title: 中国历代人物传记资料库：王术（CBDB 213209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213209&o=json
            external_identifier: CBDB:213209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.108Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h2Rvz6nQRKPh14K651ezpR
        subject_person_id: p_GjGiibm4LpCUtLELc9X7aj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王术，明人物。萬曆二年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 213209）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M3bBdLxLF4sz1bp48isjaK
          claim_id: c_h2Rvz6nQRKPh14K651ezpR
          source_id: s_HSuCzHi2UKsx9FC15ov5xF
          stance: supports
          locator: CBDB:213209
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-uayTPxKGxoKWKn0Mzku6_
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GjGiibm4LpCUtLELc9X7aj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EWFveFUVo6syhs2YMcrx2C
          claim_id: c_-uayTPxKGxoKWKn0Mzku6_
          source_id: s_yk6hAnlnIzCuCZAfF_-87v
          stance: supports
          locator: CBDB：兄弟 王問卿（206092）之父／母 王津
          quotation: null
          interpretation_note: 由兄弟关系推断：王术 与 王問卿 为同胞（CBDB 记「弟」），王問卿 之父／母即 王术 之父／母。
          source:
            id: s_yk6hAnlnIzCuCZAfF_-87v
            source_type: api_record
            title: 中国历代人物传记资料库：王术（CBDB 213209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213209&o=json
            external_identifier: CBDB:213209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LMXRCBjsfzMqaRuKsJc8Wx
        status: active
        display_name: 王津
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XfpiSEjEI76SsIdHCw1zsI
        subject_person_id: p_GjGiibm4LpCUtLELc9X7aj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v7QTG8DDAv27Aki2Sqpnvw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qT5hWLPah3Ze2OFS3Ul4_k
          claim_id: c_XfpiSEjEI76SsIdHCw1zsI
          source_id: s_yk6hAnlnIzCuCZAfF_-87v
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206092 王問卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yk6hAnlnIzCuCZAfF_-87v
            source_type: api_record
            title: 中国历代人物传记资料库：王术（CBDB 213209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213209&o=json
            external_identifier: CBDB:213209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v7QTG8DDAv27Aki2Sqpnvw
        status: active
        display_name: 王問卿
        merged_into_person_id: null
---

# 王术

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王术 | accepted |
| bio.summary | 王术，明人物。萬曆二年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 213209） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LMXRCBjsfzMqaRuKsJc8Wx | 王津 | accepted |
| other | p_v7QTG8DDAv27Aki2Sqpnvw | 王問卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王术（CBDB 213209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213209&o=json)
