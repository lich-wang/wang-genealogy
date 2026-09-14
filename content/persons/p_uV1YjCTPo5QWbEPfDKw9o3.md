---
schema: wang-person/v1
id: p_uV1YjCTPo5QWbEPfDKw9o3
status: active
merged_into: null
display_name: 王公甫
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YMMD4AjyLM3Q6LLVF1PFng
        subject_person_id: p_uV1YjCTPo5QWbEPfDKw9o3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ftorZRNDUgQz3ShWwa8bMB
          claim_id: c_YMMD4AjyLM3Q6LLVF1PFng
          source_id: s_KDJbvmTbUUJmL4XPJ8cPxZ
          stance: supports
          locator: CBDB:272407
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272407）
          source: &a1
            id: s_KDJbvmTbUUJmL4XPJ8cPxZ
            source_type: api_record
            title: 中国历代人物传记资料库：王公甫（CBDB 272407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272407&o=json
            external_identifier: CBDB:272407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ayH1RbgN1frLnaFrJWqDYJ
        subject_person_id: p_uV1YjCTPo5QWbEPfDKw9o3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公甫，明人物。弘治十五年進士，籍贯武進。（中国历代人物传记资料库 CBDB 272407）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7heexuwRN4rJgMc4TX6JpX
          claim_id: c_ayH1RbgN1frLnaFrJWqDYJ
          source_id: s_KDJbvmTbUUJmL4XPJ8cPxZ
          stance: supports
          locator: CBDB:272407
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nqf9kRKxPT7YA66e6vHHly
        subject_person_id: p_uV1YjCTPo5QWbEPfDKw9o3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DBSpMx5KF2ajdMrE1Fppef
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OWoc5OXqVLIlRRGM-kW-Ys
          claim_id: c_nqf9kRKxPT7YA66e6vHHly
          source_id: s_KDJbvmTbUUJmL4XPJ8cPxZ
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百七十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DBSpMx5KF2ajdMrE1Fppef
        status: active
        display_name: 王奎
        merged_into_person_id: null
    - claim:
        id: c_DyzVJrYyzN93dpd019__r0
        subject_person_id: p_uV1YjCTPo5QWbEPfDKw9o3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jr6pF8cJSR9CuG4WzP69q3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f_oO-QphOkX81q7emdhTNm
          claim_id: c_DyzVJrYyzN93dpd019__r0
          source_id: s_Bj0bNtvQtFY79LsrSRGrhU
          stance: supports
          locator: CBDB：兄弟 王奎（126602）之父／母 王公甫
          quotation: null
          interpretation_note: 由兄弟关系推断：王垔 与 王奎 为同胞（CBDB 记「兄」），王奎 之父／母即 王垔 之父／母。
          source:
            id: s_Bj0bNtvQtFY79LsrSRGrhU
            source_type: api_record
            title: 中国历代人物传记资料库：王垔（CBDB 272411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272411&o=json
            external_identifier: CBDB:272411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jr6pF8cJSR9CuG4WzP69q3
        status: active
        display_name: 王垔
        merged_into_person_id: null
    - claim:
        id: c_W6NlyBPvPsAaTmBVKPQhyy
        subject_person_id: p_uV1YjCTPo5QWbEPfDKw9o3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fT16zdEs2r81u6ykJGTsjM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GHfBTJWPSe-YDgsTdumDaT
          claim_id: c_W6NlyBPvPsAaTmBVKPQhyy
          source_id: s_3EQR1RvwaojUQqLeo663Qi
          stance: supports
          locator: CBDB：兄弟 王奎（126602）之父／母 王公甫
          quotation: null
          interpretation_note: 由兄弟关系推断：王坤 与 王奎 为同胞（CBDB 记「兄」），王奎 之父／母即 王坤 之父／母。
          source:
            id: s_3EQR1RvwaojUQqLeo663Qi
            source_type: api_record
            title: 中国历代人物传记资料库：王坤（CBDB 272412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272412&o=json
            external_identifier: CBDB:272412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fT16zdEs2r81u6ykJGTsjM
        status: active
        display_name: 王坤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公甫 | accepted |
| bio.summary | 王公甫，明人物。弘治十五年進士，籍贯武進。（中国历代人物传记资料库 CBDB 272407） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DBSpMx5KF2ajdMrE1Fppef | 王奎 | accepted |
| children | p_Jr6pF8cJSR9CuG4WzP69q3 | 王垔 | accepted |
| children | p_fT16zdEs2r81u6ykJGTsjM | 王坤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公甫（CBDB 272407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272407&o=json)
- [中国历代人物传记资料库：王坤（CBDB 272412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272412&o=json)
- [中国历代人物传记资料库：王垔（CBDB 272411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272411&o=json)
