---
schema: wang-person/v1
id: p_3vRsxiKfaTFa2ztS9aVsqB
status: active
merged_into: null
display_name: 王惟新
cbdb_id: 238376
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h8pHfFrbtxfGV6J1zHs25a
        subject_person_id: p_3vRsxiKfaTFa2ztS9aVsqB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟新，明人物。成化二年進士，籍贯新昌。（中国历代人物传记资料库 CBDB 238376）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-91gTUpcnSh6dKiYv_vg_o
          claim_id: c_h8pHfFrbtxfGV6J1zHs25a
          source_id: s_6E624uogy3g32L2hx2KNsn
          stance: supports
          locator: CBDB:238376
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6E624uogy3g32L2hx2KNsn
            source_type: api_record
            title: 中国历代人物传记资料库：王惟新（CBDB 238376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238376&o=json
            external_identifier: CBDB:238376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hWaaDXcWMinzmL2H3K68pQ
        subject_person_id: p_3vRsxiKfaTFa2ztS9aVsqB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nTnE2j7rWQvBYjwfxCUK8F
          claim_id: c_hWaaDXcWMinzmL2H3K68pQ
          source_id: s_6E624uogy3g32L2hx2KNsn
          stance: supports
          locator: CBDB:238376
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_EkeAfaqm08jKAfPExDIk22
        subject_person_id: p_3vRsxiKfaTFa2ztS9aVsqB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b2PRCnVEBsHtgqHZaJPLzQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lO2-u5QkMpufmeSlNAbpiB
          claim_id: c_EkeAfaqm08jKAfPExDIk22
          source_id: s_6F2kLme4CvTS2KW9MauC32
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6F2kLme4CvTS2KW9MauC32
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 68074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68074&o=json
            external_identifier: CBDB:68074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_b2PRCnVEBsHtgqHZaJPLzQ
        status: active
        display_name: 王相
        merged_into_person_id: null
    - claim:
        id: c_p4VOm4kvfVfoo_A1K0SZsI
        subject_person_id: p_3vRsxiKfaTFa2ztS9aVsqB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2muzTf8r13AQgYtXhMPiQM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N1Kez7U0DdvMJFjL1vyjAQ
          claim_id: c_p4VOm4kvfVfoo_A1K0SZsI
          source_id: s_zCgGofG-HpVY4py0MGU-_L
          stance: supports
          locator: CBDB：兄弟 王相（68074）之父／母 王惟新
          quotation: null
          interpretation_note: 由兄弟关系推断：王樂志 与 王相 为同胞（CBDB 记「弟」），王相 之父／母即 王樂志 之父／母。
          source:
            id: s_zCgGofG-HpVY4py0MGU-_L
            source_type: api_record
            title: 中国历代人物传记资料库：王樂志（CBDB 238442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238442&o=json
            external_identifier: CBDB:238442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2muzTf8r13AQgYtXhMPiQM
        status: active
        display_name: 王樂志
        merged_into_person_id: null
    - claim:
        id: c_FODZsiPDdv95ixBbHyqJs8
        subject_person_id: p_3vRsxiKfaTFa2ztS9aVsqB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aCeP3bj5MQzSyc8rZRpmKD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DVqQPx5u9w46ODzbGToGYs
          claim_id: c_FODZsiPDdv95ixBbHyqJs8
          source_id: s_gMPTq3pJL8BViYq0_ZxHVA
          stance: supports
          locator: CBDB：兄弟 王相（68074）之父／母 王惟新
          quotation: null
          interpretation_note: 由兄弟关系推断：王樂耕 与 王相 为同胞（CBDB 记「弟」），王相 之父／母即 王樂耕 之父／母。
          source:
            id: s_gMPTq3pJL8BViYq0_ZxHVA
            source_type: api_record
            title: 中国历代人物传记资料库：王樂耕（CBDB 238431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238431&o=json
            external_identifier: CBDB:238431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aCeP3bj5MQzSyc8rZRpmKD
        status: active
        display_name: 王樂耕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟新，明人物。成化二年進士，籍贯新昌。（中国历代人物传记资料库 CBDB 238376） | accepted |
| name.primary | 王惟新 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_b2PRCnVEBsHtgqHZaJPLzQ | 王相 | accepted |
| children | p_2muzTf8r13AQgYtXhMPiQM | 王樂志 | accepted |
| children | p_aCeP3bj5MQzSyc8rZRpmKD | 王樂耕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樂耕（CBDB 238431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238431&o=json)
- [中国历代人物传记资料库：王樂志（CBDB 238442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238442&o=json)
- [中国历代人物传记资料库：王惟新（CBDB 238376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238376&o=json)
- [中国历代人物传记资料库：王相（CBDB 68074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68074&o=json)
