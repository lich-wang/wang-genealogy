---
schema: wang-person/v1
id: p_e6VSnZaHMKRSrJ5MbnY2r6
status: active
merged_into: null
display_name: 王信
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_issRzXcmDVXMDLEECfc7m5
        subject_person_id: p_e6VSnZaHMKRSrJ5MbnY2r6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i2gpJ3JsBin5LFERmAfZD2
          claim_id: c_issRzXcmDVXMDLEECfc7m5
          source_id: s_x1uHZ1zeo73E7SdRvY4EKp
          stance: supports
          locator: CBDB:257382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257382）
          source: &a1
            id: s_x1uHZ1zeo73E7SdRvY4EKp
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 257382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257382&o=json
            external_identifier: CBDB:257382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.419Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pbre9tT6AxB8npbNto8Jfa
        subject_person_id: p_e6VSnZaHMKRSrJ5MbnY2r6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，明人物。成化十七年進士，籍贯肥城。（中国历代人物传记资料库 CBDB 257382）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tDER5XJ3TOMD6pAA-M9z0M
          claim_id: c_Pbre9tT6AxB8npbNto8Jfa
          source_id: s_x1uHZ1zeo73E7SdRvY4EKp
          stance: supports
          locator: CBDB:257382
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NywhLM6poZ9jF2DL1IN1EK
        subject_person_id: p_Wyqe2QSiKh31LC5bvKcMQt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e6VSnZaHMKRSrJ5MbnY2r6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CUTDcshQ9hAtB5JUCfg2KQ
          claim_id: c_NywhLM6poZ9jF2DL1IN1EK
          source_id: s_hTjcMsEjBCwUegdbm8rFVm
          stance: supports
          locator: CBDB：兄弟 王佑（67865）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王信 与 王佑 为同胞（CBDB 记「兄」），王佑 之父／母即 王信 之父／母。
          source:
            id: s_hTjcMsEjBCwUegdbm8rFVm
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 257382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257382&o=json
            external_identifier: CBDB:257382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wyqe2QSiKh31LC5bvKcMQt
        status: active
        display_name: 王敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Qe6lJF48LTEhedw0lHHxUZ
        subject_person_id: p_cABDg4AGMJS98TZaoLa2HU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e6VSnZaHMKRSrJ5MbnY2r6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_feSAf_2djYjgE4tgRkq9Rc
          claim_id: c_Qe6lJF48LTEhedw0lHHxUZ
          source_id: s_hTjcMsEjBCwUegdbm8rFVm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67865 王佑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hTjcMsEjBCwUegdbm8rFVm
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 257382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257382&o=json
            external_identifier: CBDB:257382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cABDg4AGMJS98TZaoLa2HU
        status: active
        display_name: 王佑
        merged_into_person_id: null
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，明人物。成化十七年進士，籍贯肥城。（中国历代人物传记资料库 CBDB 257382） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Wyqe2QSiKh31LC5bvKcMQt | 王敬 | accepted |
| other | p_cABDg4AGMJS98TZaoLa2HU | 王佑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 257382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257382&o=json)
