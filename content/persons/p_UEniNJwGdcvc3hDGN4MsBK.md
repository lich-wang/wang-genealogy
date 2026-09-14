---
schema: wang-person/v1
id: p_UEniNJwGdcvc3hDGN4MsBK
status: active
merged_into: null
display_name: 王三賢
cbdb_id: 292747
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C7TCsAouuDzBQU1ibyuuNu
        subject_person_id: p_UEniNJwGdcvc3hDGN4MsBK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三賢，明人物。嘉靖十一年進士，籍贯中江。（中国历代人物传记资料库 CBDB 292747）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zQs8ze7or3CMONaLG1SmU4
          claim_id: c_C7TCsAouuDzBQU1ibyuuNu
          source_id: s_N2e59RxcvuFevAjj7hHVJc
          stance: supports
          locator: CBDB:292747
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_N2e59RxcvuFevAjj7hHVJc
            source_type: api_record
            title: 中国历代人物传记资料库：王三賢（CBDB 292747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292747&o=json
            external_identifier: CBDB:292747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aZ1fzuvteFPFgW7Xoyba2d
        subject_person_id: p_UEniNJwGdcvc3hDGN4MsBK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tC1WtBJPjaJhYYXiUEMNQe
          claim_id: c_aZ1fzuvteFPFgW7Xoyba2d
          source_id: s_N2e59RxcvuFevAjj7hHVJc
          stance: supports
          locator: CBDB:292747
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K3inV2F4yD7fALgs-epWSU
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UEniNJwGdcvc3hDGN4MsBK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cZ4Ly-ElQ_ItkgvolOeB_N
          claim_id: c_K3inV2F4yD7fALgs-epWSU
          source_id: s_yRneHzBuITCXm7EvsyPslJ
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王三賢 与 王惟賢 为同胞（CBDB 记「兄」），王惟賢 之父／母即 王三賢 之父／母。
          source:
            id: s_yRneHzBuITCXm7EvsyPslJ
            source_type: api_record
            title: 中国历代人物传记资料库：王三賢（CBDB 292747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292747&o=json
            external_identifier: CBDB:292747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MfVeb7fgPLZUX4FfJniEs9
        status: active
        display_name: 王錫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_szXhr-xvq2IIRLcMpmaepB
        subject_person_id: p_UEniNJwGdcvc3hDGN4MsBK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GOP0f0mHy7v2eg9fOYGW6d
          claim_id: c_szXhr-xvq2IIRLcMpmaepB
          source_id: s_yRneHzBuITCXm7EvsyPslJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yRneHzBuITCXm7EvsyPslJ
            source_type: api_record
            title: 中国历代人物传记资料库：王三賢（CBDB 292747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292747&o=json
            external_identifier: CBDB:292747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gyNUeFDDZGNowk91dtAr1B
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
---

# 王三賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三賢，明人物。嘉靖十一年進士，籍贯中江。（中国历代人物传记资料库 CBDB 292747） | accepted |
| name.primary | 王三賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MfVeb7fgPLZUX4FfJniEs9 | 王錫 | accepted |
| other | p_gyNUeFDDZGNowk91dtAr1B | 王惟賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三賢（CBDB 292747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292747&o=json)
