---
schema: wang-person/v1
id: p_BDGbLxvCTFWSUvdwVPuxPV
status: active
merged_into: null
display_name: 王見賓
cbdb_id: 206099
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AV1PnR2pDKcgY7AEFTvCvi
        subject_person_id: p_BDGbLxvCTFWSUvdwVPuxPV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王見賓（生于1540年），明人物。明清進士進士，籍贯濟南衛，入仕進士。（中国历代人物传记资料库 CBDB 206099）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_48U24yJfTq8e2DIQ-Y5hat
          claim_id: c_AV1PnR2pDKcgY7AEFTvCvi
          source_id: s_uj372oM5nRe2ksNwsxDH4M
          stance: supports
          locator: CBDB:206099
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uj372oM5nRe2ksNwsxDH4M
            source_type: api_record
            title: 中国历代人物传记资料库：王見賓（CBDB 206099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206099&o=json
            external_identifier: CBDB:206099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nArywehSjJdq5WbrL7xNN6
        subject_person_id: p_BDGbLxvCTFWSUvdwVPuxPV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1540年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1540-01-01
            latest: 1540-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_539ogdBa5fgY5DDB7cQrfu
          claim_id: c_nArywehSjJdq5WbrL7xNN6
          source_id: s_uj372oM5nRe2ksNwsxDH4M
          stance: supports
          locator: CBDB:206099
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1540
          source:
            id: s_uj372oM5nRe2ksNwsxDH4M
            source_type: api_record
            title: 中国历代人物传记资料库：王見賓（CBDB 206099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206099&o=json
            external_identifier: CBDB:206099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Uo4x9N6D7zB8qM7Sc48kH
        subject_person_id: p_BDGbLxvCTFWSUvdwVPuxPV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王見賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_etHX8pPETPXHPr3UtdCFU1
          claim_id: c_3Uo4x9N6D7zB8qM7Sc48kH
          source_id: s_uj372oM5nRe2ksNwsxDH4M
          stance: supports
          locator: CBDB:206099
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1540
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QTUh8Er-YLAyRV45KGPpTw
        subject_person_id: p_Nmqd5S7jpjuKcCBWFdU9w5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BDGbLxvCTFWSUvdwVPuxPV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GU9YXgIWkswuuwAbkvIl6N
          claim_id: c_QTUh8Er-YLAyRV45KGPpTw
          source_id: s_A9BkoK1nBj3UpCZDsQB2bw
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A9BkoK1nBj3UpCZDsQB2bw
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 213300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213300&o=json
            external_identifier: CBDB:213300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Nmqd5S7jpjuKcCBWFdU9w5
        status: active
        display_name: 王儒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_bboOuT6zGYvwbo-d5H2WEL
        subject_person_id: p_2NwHNFLfCfq3mSTEyrq4Cx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BDGbLxvCTFWSUvdwVPuxPV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gs91lnIBQMoHdma0aUWaXJ
          claim_id: c_bboOuT6zGYvwbo-d5H2WEL
          source_id: s_EVHfsA7TWh9EWHVxePtiCX
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EVHfsA7TWh9EWHVxePtiCX
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 213298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213298&o=json
            external_identifier: CBDB:213298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2NwHNFLfCfq3mSTEyrq4Cx
        status: active
        display_name: 王珍
        merged_into_person_id: null
    - claim:
        id: c_mxcqcwBKVcBq8dHkHoBb1I
        subject_person_id: p_GNgyF1YGejU7VgCefvHJUf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BDGbLxvCTFWSUvdwVPuxPV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_my28x4Kzy8k57XuQkHVc5Y
          claim_id: c_mxcqcwBKVcBq8dHkHoBb1I
          source_id: s_9Ph4GU2PY8xqYRFAZ6yAKL
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9Ph4GU2PY8xqYRFAZ6yAKL
            source_type: api_record
            title: 中国历代人物传记资料库：王睿（CBDB 213299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213299&o=json
            external_identifier: CBDB:213299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GNgyF1YGejU7VgCefvHJUf
        status: active
        display_name: 王睿
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_h6XrGjJBl3Pp81U3Si1lqz
        subject_person_id: p_BDGbLxvCTFWSUvdwVPuxPV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NzL4F281vP2ZiqQ55NiAZ7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MQEc44Q8US2OsCIf9wjp3o
          claim_id: c_h6XrGjJBl3Pp81U3Si1lqz
          source_id: s_5zcngZmRkiY6S7mjRXDphh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206099 王見賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5zcngZmRkiY6S7mjRXDphh
            source_type: api_record
            title: 中国历代人物传记资料库：王用召（CBDB 213304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213304&o=json
            external_identifier: CBDB:213304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NzL4F281vP2ZiqQ55NiAZ7
        status: active
        display_name: 王用召
        merged_into_person_id: null
    - claim:
        id: c_FCrTZxJjDeTCuxlKX8jCFa
        subject_person_id: p_BDGbLxvCTFWSUvdwVPuxPV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SddaHheWGUieb7FEFMobS6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wJ-4PGZMEHsWvReDMdcQsK
          claim_id: c_FCrTZxJjDeTCuxlKX8jCFa
          source_id: s_HJHf_iZoiqcl-mqME5U3jf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206099 王見賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HJHf_iZoiqcl-mqME5U3jf
            source_type: api_record
            title: 中国历代人物传记资料库：王用畢（CBDB 213305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213305&o=json
            external_identifier: CBDB:213305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SddaHheWGUieb7FEFMobS6
        status: active
        display_name: 王用畢
        merged_into_person_id: null
---

# 王見賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王見賓（生于1540年），明人物。明清進士進士，籍贯濟南衛，入仕進士。（中国历代人物传记资料库 CBDB 206099） | accepted |
| birth.date | 1540年 | accepted |
| name.primary | 王見賓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Nmqd5S7jpjuKcCBWFdU9w5 | 王儒 | accepted |
| ancestors | p_2NwHNFLfCfq3mSTEyrq4Cx | 王珍 | accepted |
| ancestors | p_GNgyF1YGejU7VgCefvHJUf | 王睿 | accepted |
| other | p_NzL4F281vP2ZiqQ55NiAZ7 | 王用召 | accepted |
| other | p_SddaHheWGUieb7FEFMobS6 | 王用畢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王見賓（CBDB 206099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206099&o=json)
- [中国历代人物传记资料库：王儒（CBDB 213300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213300&o=json)
- [中国历代人物传记资料库：王睿（CBDB 213299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213299&o=json)
- [中国历代人物传记资料库：王用畢（CBDB 213305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213305&o=json)
- [中国历代人物传记资料库：王用召（CBDB 213304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213304&o=json)
- [中国历代人物传记资料库：王珍（CBDB 213298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213298&o=json)
