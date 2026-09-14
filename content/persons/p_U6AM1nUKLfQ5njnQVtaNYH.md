---
schema: wang-person/v1
id: p_U6AM1nUKLfQ5njnQVtaNYH
status: active
merged_into: null
display_name: 王肇林
cbdb_id: 205462
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_75GrvGKX5YtucvQ4TaY8bj
        subject_person_id: p_U6AM1nUKLfQ5njnQVtaNYH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇林（生于1531年），明人物。嘉靖四十四年進士，籍贯掖縣，入仕進士。（中国历代人物传记资料库 CBDB 205462）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_CF1cQTYC1IkxMNFTBuWDds
          claim_id: c_75GrvGKX5YtucvQ4TaY8bj
          source_id: s_sEFXSJLv92KyMh864wL5t7
          stance: supports
          locator: CBDB:205462
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sEFXSJLv92KyMh864wL5t7
            source_type: api_record
            title: 中国历代人物传记资料库：王肇林（CBDB 205462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205462&o=json
            external_identifier: CBDB:205462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TfCxKYEXpHMdkVoNDPMc65
        subject_person_id: p_U6AM1nUKLfQ5njnQVtaNYH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1531-01-01
            latest: 1531-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tkckxKbKpi41AJmdDpfcHF
          claim_id: c_TfCxKYEXpHMdkVoNDPMc65
          source_id: s_sEFXSJLv92KyMh864wL5t7
          stance: supports
          locator: CBDB:205462
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1531
          source:
            id: s_sEFXSJLv92KyMh864wL5t7
            source_type: api_record
            title: 中国历代人物传记资料库：王肇林（CBDB 205462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205462&o=json
            external_identifier: CBDB:205462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FqBwPc1jWS8xGpx68tQswJ
        subject_person_id: p_U6AM1nUKLfQ5njnQVtaNYH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ed745U4h25uowEAWwEuEZ6
          claim_id: c_FqBwPc1jWS8xGpx68tQswJ
          source_id: s_sEFXSJLv92KyMh864wL5t7
          stance: supports
          locator: CBDB:205462
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1531
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oTPX1GMTidRCJKwYNUvLqU
        subject_person_id: p_DZDgMAJW6oNAC7MVuAcThi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U6AM1nUKLfQ5njnQVtaNYH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OvrjHLPw-ZqAaRsBbqMLmJ
          claim_id: c_oTPX1GMTidRCJKwYNUvLqU
          source_id: s_35E6xFgK6BZA6GzBnHdK7E
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第三百一十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_35E6xFgK6BZA6GzBnHdK7E
            source_type: api_record
            title: 中国历代人物传记资料库：王都（CBDB 333534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333534&o=json
            external_identifier: CBDB:333534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.414Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DZDgMAJW6oNAC7MVuAcThi
        status: active
        display_name: 王都
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_3dFN8FjsffyWSF0a5dh8q4
        subject_person_id: p_DSNv22AjexaVDNmXJfwfXJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_U6AM1nUKLfQ5njnQVtaNYH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1UFi9dLOlk0NjdeK5Ft2Wz
          claim_id: c_3dFN8FjsffyWSF0a5dh8q4
          source_id: s_mh9VMpcf66YGaf3Y7LLURB
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第三百一十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mh9VMpcf66YGaf3Y7LLURB
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 333533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333533&o=json
            external_identifier: CBDB:333533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.413Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DSNv22AjexaVDNmXJfwfXJ
        status: active
        display_name: 王聰
        merged_into_person_id: null
    - claim:
        id: c_oUAnBc_X-LDM6DyfWK6dBM
        subject_person_id: p_h15MMC3D4umBbLAEXyqKii
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_U6AM1nUKLfQ5njnQVtaNYH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D30t2_b7yCvG_XIpaljfGc
          claim_id: c_oUAnBc_X-LDM6DyfWK6dBM
          source_id: s_oK8NAZy5x78PfKhGNR2xSd
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第三百一十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oK8NAZy5x78PfKhGNR2xSd
            source_type: api_record
            title: 中国历代人物传记资料库：王喆（CBDB 333531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333531&o=json
            external_identifier: CBDB:333531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_h15MMC3D4umBbLAEXyqKii
        status: active
        display_name: 王喆
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_OWxBxztNMM7uzIo8BY-Dkn
        subject_person_id: p_BZjpMTM6bqEHaPLLDNWSEG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_U6AM1nUKLfQ5njnQVtaNYH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kUQU8pbCLOlVp_qDwlBGAn
          claim_id: c_OWxBxztNMM7uzIo8BY-Dkn
          source_id: s_phcw18a_9CjXRa9SgUnV6j
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205462 王肇林）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_phcw18a_9CjXRa9SgUnV6j
            source_type: api_record
            title: 中国历代人物传记资料库：王儒林（CBDB 333540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333540&o=json
            external_identifier: CBDB:333540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BZjpMTM6bqEHaPLLDNWSEG
        status: active
        display_name: 王儒林
        merged_into_person_id: null
    - claim:
        id: c_GyLeLnmm7tg0deZBeJpoD9
        subject_person_id: p_Hniauc3XNXBtTW3DuxaoQT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_U6AM1nUKLfQ5njnQVtaNYH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jwQ0N5xndBmLhEe49UR6l-
          claim_id: c_GyLeLnmm7tg0deZBeJpoD9
          source_id: s_7lgCW3yI0z6jjdxhtiMULm
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205462 王肇林）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7lgCW3yI0z6jjdxhtiMULm
            source_type: api_record
            title: 中国历代人物传记资料库：王文林（CBDB 333539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333539&o=json
            external_identifier: CBDB:333539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hniauc3XNXBtTW3DuxaoQT
        status: active
        display_name: 王文林
        merged_into_person_id: null
    - claim:
        id: c_do7zkUxJlLbFPSy_ZjMtqe
        subject_person_id: p_U6AM1nUKLfQ5njnQVtaNYH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xMWcKhAdocE2ePvPUisLBH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AmLefUfCZihceF13V0Som6
          claim_id: c_do7zkUxJlLbFPSy_ZjMtqe
          source_id: s_25acYVJ7-NUwN0XwQSDjHz
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205462 王肇林）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_25acYVJ7-NUwN0XwQSDjHz
            source_type: api_record
            title: 中国历代人物传记资料库：王上林（CBDB 333538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333538&o=json
            external_identifier: CBDB:333538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xMWcKhAdocE2ePvPUisLBH
        status: active
        display_name: 王上林
        merged_into_person_id: null
---

# 王肇林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王肇林（生于1531年），明人物。嘉靖四十四年進士，籍贯掖縣，入仕進士。（中国历代人物传记资料库 CBDB 205462） | accepted |
| birth.date | 1531年 | accepted |
| name.primary | 王肇林 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DZDgMAJW6oNAC7MVuAcThi | 王都 | accepted |
| ancestors | p_DSNv22AjexaVDNmXJfwfXJ | 王聰 | accepted |
| ancestors | p_h15MMC3D4umBbLAEXyqKii | 王喆 | accepted |
| other | p_BZjpMTM6bqEHaPLLDNWSEG | 王儒林 | accepted |
| other | p_Hniauc3XNXBtTW3DuxaoQT | 王文林 | accepted |
| other | p_xMWcKhAdocE2ePvPUisLBH | 王上林 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 333533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333533&o=json)
- [中国历代人物传记资料库：王都（CBDB 333534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333534&o=json)
- [中国历代人物传记资料库：王儒林（CBDB 333540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333540&o=json)
- [中国历代人物传记资料库：王上林（CBDB 333538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333538&o=json)
- [中国历代人物传记资料库：王文林（CBDB 333539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333539&o=json)
- [中国历代人物传记资料库：王肇林（CBDB 205462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205462&o=json)
- [中国历代人物传记资料库：王喆（CBDB 333531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333531&o=json)
