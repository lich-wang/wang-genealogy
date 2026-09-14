---
schema: wang-person/v1
id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
status: active
merged_into: null
display_name: 王三接
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SXssbAwF9A5ujTQuzN8jJ7
        subject_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三接
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PVadR1zeKjdS6GSE3KEt11
          claim_id: c_SXssbAwF9A5ujTQuzN8jJ7
          source_id: s_3hzjaTJXFfi4drhQVLSG4V
          stance: supports
          locator: CBDB:126450
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126450）
          source: &a1
            id: s_3hzjaTJXFfi4drhQVLSG4V
            source_type: api_record
            title: 中国历代人物传记资料库：王三接（CBDB 126450）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126450&o=json
            external_identifier: CBDB:126450
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rs3Z619gs1B4DctkvVbpXU
        subject_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1506年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7kKm5BU5Kh2nFnMA4te4oF
          claim_id: c_rs3Z619gs1B4DctkvVbpXU
          source_id: s_3hzjaTJXFfi4drhQVLSG4V
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
        id: c_xcDNeUBRHBy2atieusvbnN
        subject_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1587年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FdjkVYrCKWQVhdbratg8R1
          claim_id: c_xcDNeUBRHBy2atieusvbnN
          source_id: s_3hzjaTJXFfi4drhQVLSG4V
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
        id: c_FuA7mVjxNpJdfuMN1KowJN
        subject_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三接（1506年—1587年），明人物。明清進士進士，籍贯崑山，入仕進士，曾任禮部主事、縣令。（中国历代人物传记资料库 CBDB 126450）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SDgWU_pzQDHtB7c2Sbly2x
          claim_id: c_FuA7mVjxNpJdfuMN1KowJN
          source_id: s_3hzjaTJXFfi4drhQVLSG4V
          stance: supports
          locator: CBDB:126450
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_F7mLk6-swGWvZYZvBFxF-f
        subject_person_id: p_VmxMBQPfyxUr32ATQz1Ta9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kt0ccZx9ELYO5K2RA7Yp18
          claim_id: c_F7mLk6-swGWvZYZvBFxF-f
          source_id: s_nzk1LkMaJ3Y57RJ5HrP1cC
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百二十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nzk1LkMaJ3Y57RJ5HrP1cC
            source_type: api_record
            title: 中国历代人物传记资料库：王時暘（CBDB 287524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287524&o=json
            external_identifier: CBDB:287524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_VmxMBQPfyxUr32ATQz1Ta9
        status: active
        display_name: 王時暘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_9STe0cVdFRdWsCuGUU-VdT
        subject_person_id: p_7DDdFFCB5CtuqJpi5fHXjA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_350yWh562_3s4Wm0GlqJfm
          claim_id: c_9STe0cVdFRdWsCuGUU-VdT
          source_id: s_SMYRcTQ4b2UCV7mMiFspqq
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百二十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SMYRcTQ4b2UCV7mMiFspqq
            source_type: api_record
            title: 中国历代人物传记资料库：王恢（CBDB 287523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287523&o=json
            external_identifier: CBDB:287523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.264Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7DDdFFCB5CtuqJpi5fHXjA
        status: active
        display_name: 王恢
        merged_into_person_id: null
    - claim:
        id: c_F2X-3xLCDFdRpMMSti7YET
        subject_person_id: p_EceEHftq1dAuWXPD2WaHe8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tujwpC4HGe9BqE1_wuxuLg
          claim_id: c_F2X-3xLCDFdRpMMSti7YET
          source_id: s_U9Q7JHAntALJujZ1eiyVy8
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百二十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U9Q7JHAntALJujZ1eiyVy8
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 287522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287522&o=json
            external_identifier: CBDB:287522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EceEHftq1dAuWXPD2WaHe8
        status: active
        display_name: 王訓
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Vpr1kRiGqOBni2yVGQMWL8
        subject_person_id: p_F4mEENCe5fqMjF9B3i9Jc5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0mxDo6AH45K_EQfhuh-crI
          claim_id: c_Vpr1kRiGqOBni2yVGQMWL8
          source_id: s_vNrnECc7km1ko-slX1INls
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126450 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vNrnECc7km1ko-slX1INls
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 297446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297446&o=json
            external_identifier: CBDB:297446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F4mEENCe5fqMjF9B3i9Jc5
        status: active
        display_name: 王三重
        merged_into_person_id: null
    - claim:
        id: c_03V4cO3in_Gwy3sads4RgW
        subject_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Hsu6GW2N5ZuX4ke5idnMuG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GJjmtn9QLfqfeiuGpisH-t
          claim_id: c_03V4cO3in_Gwy3sads4RgW
          source_id: s_KHTK5I1LGrj_VghOQ-G0WU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126450 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KHTK5I1LGrj_VghOQ-G0WU
            source_type: api_record
            title: 中国历代人物传记资料库：王三顧（CBDB 287530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287530&o=json
            external_identifier: CBDB:287530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hsu6GW2N5ZuX4ke5idnMuG
        status: active
        display_name: 王三顧
        merged_into_person_id: null
    - claim:
        id: c_eRcwSsONIPrsRBZ3eulTs7
        subject_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dd6GmTW3dYfUwhtHVftk8d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r5t1UgHQOt7Dx_6VXXbwoS
          claim_id: c_eRcwSsONIPrsRBZ3eulTs7
          source_id: s_IfgZgNcYG0qp0yAdsxZERG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126450 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IfgZgNcYG0qp0yAdsxZERG
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 287531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287531&o=json
            external_identifier: CBDB:287531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dd6GmTW3dYfUwhtHVftk8d
        status: active
        display_name: 王三聘
        merged_into_person_id: null
    - claim:
        id: c_89IMeMsWx47s8EHuwKB4vJ
        subject_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ig2JoQCfVj1gy83tSkXmVm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bp6hIEyjfuvde29yRGEy-j
          claim_id: c_89IMeMsWx47s8EHuwKB4vJ
          source_id: s_YqLIpDIK5YqWhH90iKi3uD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126450 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YqLIpDIK5YqWhH90iKi3uD
            source_type: api_record
            title: 中国历代人物传记资料库：王任用（CBDB 287527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287527&o=json
            external_identifier: CBDB:287527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ig2JoQCfVj1gy83tSkXmVm
        status: active
        display_name: 王任用
        merged_into_person_id: null
---

# 王三接

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三接 | accepted |
| birth.date | 1506年 | accepted |
| death.date | 1587年 | accepted |
| bio.summary | 王三接（1506年—1587年），明人物。明清進士進士，籍贯崑山，入仕進士，曾任禮部主事、縣令。（中国历代人物传记资料库 CBDB 126450） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VmxMBQPfyxUr32ATQz1Ta9 | 王時暘 | accepted |
| ancestors | p_7DDdFFCB5CtuqJpi5fHXjA | 王恢 | accepted |
| ancestors | p_EceEHftq1dAuWXPD2WaHe8 | 王訓 | accepted |
| other | p_F4mEENCe5fqMjF9B3i9Jc5 | 王三重 | accepted |
| other | p_Hsu6GW2N5ZuX4ke5idnMuG | 王三顧 | accepted |
| other | p_dd6GmTW3dYfUwhtHVftk8d | 王三聘 | accepted |
| other | p_ig2JoQCfVj1gy83tSkXmVm | 王任用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恢（CBDB 287523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287523&o=json)
- [中国历代人物传记资料库：王任用（CBDB 287527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287527&o=json)
- [中国历代人物传记资料库：王三顧（CBDB 287530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287530&o=json)
- [中国历代人物传记资料库：王三接（CBDB 126450）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126450&o=json)
- [中国历代人物传记资料库：王三聘（CBDB 287531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287531&o=json)
- [中国历代人物传记资料库：王三重（CBDB 297446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297446&o=json)
- [中国历代人物传记资料库：王時暘（CBDB 287524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287524&o=json)
- [中国历代人物传记资料库：王訓（CBDB 287522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287522&o=json)
