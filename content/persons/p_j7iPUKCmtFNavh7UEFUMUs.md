---
schema: wang-person/v1
id: p_j7iPUKCmtFNavh7UEFUMUs
status: active
merged_into: null
display_name: 王正中
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NKXHPuoWAzJsQJeG1rWx57
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mCo4tn6DhNwzjCzTCHx5Z9
          claim_id: c_NKXHPuoWAzJsQJeG1rWx57
          source_id: s_QQb8J2bNZyaHPZtgdP6fTm
          stance: supports
          locator: CBDB:7078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7078）
          source: &a1
            id: s_QQb8J2bNZyaHPZtgdP6fTm
            source_type: api_record
            title: 中国历代人物传记资料库：王正中（CBDB 7078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7078&o=json
            external_identifier: CBDB:7078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_My6PqoJV2r9WnNabECfQ2j
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 973年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9463UeSthPLMNk5DMsJgcz
          claim_id: c_My6PqoJV2r9WnNabECfQ2j
          source_id: s_QQb8J2bNZyaHPZtgdP6fTm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YBXCTT6hXPUzVpT1jU7RA4
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1044年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kWyQqe6wZQErcHQaDBnbTP
          claim_id: c_YBXCTT6hXPUzVpT1jU7RA4
          source_id: s_QQb8J2bNZyaHPZtgdP6fTm
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
        id: c_xPVAfDV3Pp7sMnhG84QEby
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正中（973年—1044年），宋人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 7078）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Ahx20ABIHSAPKeW1pqda3
          claim_id: c_xPVAfDV3Pp7sMnhG84QEby
          source_id: s_QQb8J2bNZyaHPZtgdP6fTm
          stance: supports
          locator: CBDB:7078
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7U_yQqT2zWvg7lCqgp5Ijk
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KjpCv4XTKSD8e8UJt9vvop
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LXmwdgG1TnV_3CXGdGpV4j
          claim_id: c_7U_yQqT2zWvg7lCqgp5Ijk
          source_id: s_38boZDntWojT3_9GVkmIwB
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7078）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_38boZDntWojT3_9GVkmIwB
            source_type: api_record
            title: 中国历代人物传记资料库：王宗瓘（CBDB 30555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30555&o=json
            external_identifier: CBDB:30555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KjpCv4XTKSD8e8UJt9vvop
        status: active
        display_name: 王宗瓘
        merged_into_person_id: null
    - claim:
        id: c_h9xrrYVwYVA6ZZYBUKtMP0
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TPy7Luf7wmXQ4CyGHoAm6B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oMgJ-c1Cpmo6Dz7nlnoMQp
          claim_id: c_h9xrrYVwYVA6ZZYBUKtMP0
          source_id: s_p668FgdTloEECPfYt5XIRz
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7078）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_p668FgdTloEECPfYt5XIRz
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 30558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30558&o=json
            external_identifier: CBDB:30558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TPy7Luf7wmXQ4CyGHoAm6B
        status: active
        display_name: 王宗
        merged_into_person_id: null
    - claim:
        id: c_jIDRjA_rkaQ-GDpUrWSy9F
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ui9Ki5EFvcLxHes45dtePo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YTrp3OeZGKqG3dy1_qWA_U
          claim_id: c_jIDRjA_rkaQ-GDpUrWSy9F
          source_id: s_bPnUkvQgrNzRl69uH1vj7B
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7078）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_bPnUkvQgrNzRl69uH1vj7B
            source_type: api_record
            title: 中国历代人物传记资料库：王宗瑾（CBDB 30554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30554&o=json
            external_identifier: CBDB:30554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ui9Ki5EFvcLxHes45dtePo
        status: active
        display_name: 王宗瑾
        merged_into_person_id: null
    - claim:
        id: c_6VE_y9d2PFap91i3T1QKPT
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zc3opFAfp8935y2N6iwNuX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vUaHqD9okrsbVt_4z2GwKP
          claim_id: c_6VE_y9d2PFap91i3T1QKPT
          source_id: s_Vwef7rwjXLLiD-PmuypW1X
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7078）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Vwef7rwjXLLiD-PmuypW1X
            source_type: api_record
            title: 中国历代人物传记资料库：王宗瑗（CBDB 30553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30553&o=json
            external_identifier: CBDB:30553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zc3opFAfp8935y2N6iwNuX
        status: active
        display_name: 王宗瑗
        merged_into_person_id: null
    - claim:
        id: c_rhAmmOzfxrZ0ylXkSp8FIi
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mkMSbH4C1pziHHicLBPTcQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XM33cD67o5a4kLei1gdkUi
          claim_id: c_rhAmmOzfxrZ0ylXkSp8FIi
          source_id: s_Kd1xh01w04p5vGLBYzTpsC
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7078）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Kd1xh01w04p5vGLBYzTpsC
            source_type: api_record
            title: 中国历代人物传记资料库：王宗瑀（CBDB 30557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30557&o=json
            external_identifier: CBDB:30557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mkMSbH4C1pziHHicLBPTcQ
        status: active
        display_name: 王宗瑀
        merged_into_person_id: null
    - claim:
        id: c_fcvEls_MZa8xzExrYYMSWR
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vtFbMQ92ShQczekuTjgGu6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yovXtffitP8Pom4KTh0F5c
          claim_id: c_fcvEls_MZa8xzExrYYMSWR
          source_id: s_MblakrjyraZpv_toCB8TUP
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7078）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_MblakrjyraZpv_toCB8TUP
            source_type: api_record
            title: 中国历代人物传记资料库：王宗琳（CBDB 30556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30556&o=json
            external_identifier: CBDB:30556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vtFbMQ92ShQczekuTjgGu6
        status: active
        display_name: 王宗琳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_NlZgaMMiwOyONzigt-QCXW
        subject_person_id: p_iDKWDJMk6aBELAydymjF7H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lgvn3VdcC8V463koBbDIi9
          claim_id: c_NlZgaMMiwOyONzigt-QCXW
          source_id: s_tVNJBtDHPngb3641MK8g9R
          stance: supports
          locator: CBDB 双向互证（孫 王正中 ⇄ 祖父 王秉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_tVNJBtDHPngb3641MK8g9R
            source_type: api_record
            title: 中国历代人物传记资料库：王秉（CBDB 21971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21971&o=json
            external_identifier: CBDB:21971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iDKWDJMk6aBELAydymjF7H
        status: active
        display_name: 王秉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王正中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正中 | accepted |
| birth.date | 973年 | accepted |
| death.date | 1044年 | accepted |
| bio.summary | 王正中（973年—1044年），宋人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 7078） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_KjpCv4XTKSD8e8UJt9vvop | 王宗瓘 | accepted |
| children | p_TPy7Luf7wmXQ4CyGHoAm6B | 王宗 | accepted |
| children | p_Ui9Ki5EFvcLxHes45dtePo | 王宗瑾 | accepted |
| children | p_Zc3opFAfp8935y2N6iwNuX | 王宗瑗 | accepted |
| children | p_mkMSbH4C1pziHHicLBPTcQ | 王宗瑀 | accepted |
| children | p_vtFbMQ92ShQczekuTjgGu6 | 王宗琳 | accepted |
| ancestors | p_iDKWDJMk6aBELAydymjF7H | 王秉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉（CBDB 21971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21971&o=json)
- [中国历代人物传记资料库：王正中（CBDB 7078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7078&o=json)
- [中国历代人物传记资料库：王宗（CBDB 30558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30558&o=json)
- [中国历代人物传记资料库：王宗瓘（CBDB 30555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30555&o=json)
- [中国历代人物传记资料库：王宗瑾（CBDB 30554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30554&o=json)
- [中国历代人物传记资料库：王宗琳（CBDB 30556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30556&o=json)
- [中国历代人物传记资料库：王宗瑀（CBDB 30557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30557&o=json)
- [中国历代人物传记资料库：王宗瑗（CBDB 30553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30553&o=json)
