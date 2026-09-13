---
schema: wang-person/v1
id: p_fSRoLzmGTyVibfPFCP5xFh
status: active
merged_into: null
display_name: 王命爵
cbdb_id: 206334
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mnZ4Rd9kBNL6aaM81uVyu3
        subject_person_id: p_fSRoLzmGTyVibfPFCP5xFh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命爵（生于1549年），明人物。明清進士進士，籍贯廬陵，入仕進士，曾任典史、知府、知縣。（中国历代人物传记资料库 CBDB 206334）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ffvsnJrrDWAkdYVxAOAfoD
          claim_id: c_mnZ4Rd9kBNL6aaM81uVyu3
          source_id: s_SS7muVuDqj1J7yQsMSmkvX
          stance: supports
          locator: CBDB:206334
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SS7muVuDqj1J7yQsMSmkvX
            source_type: api_record
            title: 中国历代人物传记资料库：王命爵（CBDB 206334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206334&o=json
            external_identifier: CBDB:206334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YaztsMNj826DUeCZgyMKGs
        subject_person_id: p_fSRoLzmGTyVibfPFCP5xFh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1549年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1549-01-01
            latest: 1549-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MVz4cZTDqcP17r53XFRtbY
          claim_id: c_YaztsMNj826DUeCZgyMKGs
          source_id: s_SS7muVuDqj1J7yQsMSmkvX
          stance: supports
          locator: CBDB:206334
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1549
          source:
            id: s_SS7muVuDqj1J7yQsMSmkvX
            source_type: api_record
            title: 中国历代人物传记资料库：王命爵（CBDB 206334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206334&o=json
            external_identifier: CBDB:206334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LjD1L5FP65MbajSFBt6tsp
        subject_person_id: p_fSRoLzmGTyVibfPFCP5xFh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6AfMEQTEK87hkKRhWmnRXe
          claim_id: c_LjD1L5FP65MbajSFBt6tsp
          source_id: s_SS7muVuDqj1J7yQsMSmkvX
          stance: supports
          locator: CBDB:206334
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1549
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0yBrG5dN3WsIQKZipFyN68
        subject_person_id: p_F6K893ZAWfJwH2zn9PeMz7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fSRoLzmGTyVibfPFCP5xFh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LAdrvndGjALBLJ57yl5qib
          claim_id: c_0yBrG5dN3WsIQKZipFyN68
          source_id: s_H9jmnw3PYmgkWnnoF3eXnE
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第四十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H9jmnw3PYmgkWnnoF3eXnE
            source_type: api_record
            title: 中国历代人物传记资料库：王文炳（CBDB 216545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216545&o=json
            external_identifier: CBDB:216545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.244Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F6K893ZAWfJwH2zn9PeMz7
        status: active
        display_name: 王文炳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_3Ot_yiJZKeUlArJPmQYSOd
        subject_person_id: p_oXR9CoYRRG9paUDcog9iXP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fSRoLzmGTyVibfPFCP5xFh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1YO3hbW1FM4DRGm-HnJlXV
          claim_id: c_3Ot_yiJZKeUlArJPmQYSOd
          source_id: s_MBt7tiKApQn5a4R9Bp5XZA
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第四十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MBt7tiKApQn5a4R9Bp5XZA
            source_type: api_record
            title: 中国历代人物传记资料库：王慶環（CBDB 216544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216544&o=json
            external_identifier: CBDB:216544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oXR9CoYRRG9paUDcog9iXP
        status: active
        display_name: 王慶環
        merged_into_person_id: null
    - claim:
        id: c_qT17cVonVuCabZA2SF8SXA
        subject_person_id: p_YqFqR3sLDvjx3AxS5JEmvr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fSRoLzmGTyVibfPFCP5xFh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dI0o8enLpT06tkmU13iZcf
          claim_id: c_qT17cVonVuCabZA2SF8SXA
          source_id: s_iSMgdErgRUmYH5aHxrcHe7
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第四十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iSMgdErgRUmYH5aHxrcHe7
            source_type: api_record
            title: 中国历代人物传记资料库：王惟賢（CBDB 216543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216543&o=json
            external_identifier: CBDB:216543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.241Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YqFqR3sLDvjx3AxS5JEmvr
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王命爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王命爵（生于1549年），明人物。明清進士進士，籍贯廬陵，入仕進士，曾任典史、知府、知縣。（中国历代人物传记资料库 CBDB 206334） | accepted |
| birth.date | 1549年 | accepted |
| name.primary | 王命爵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_F6K893ZAWfJwH2zn9PeMz7 | 王文炳 | accepted |
| ancestors | p_oXR9CoYRRG9paUDcog9iXP | 王慶環 | accepted |
| ancestors | p_YqFqR3sLDvjx3AxS5JEmvr | 王惟賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王命爵（CBDB 206334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206334&o=json)
- [中国历代人物传记资料库：王慶環（CBDB 216544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216544&o=json)
- [中国历代人物传记资料库：王惟賢（CBDB 216543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216543&o=json)
- [中国历代人物传记资料库：王文炳（CBDB 216545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216545&o=json)
