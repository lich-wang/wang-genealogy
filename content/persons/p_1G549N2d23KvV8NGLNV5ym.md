---
schema: wang-person/v1
id: p_1G549N2d23KvV8NGLNV5ym
status: active
merged_into: null
display_name: 王致中
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6BaHTdgBdcKjRSk2PWQiwr
        subject_person_id: p_1G549N2d23KvV8NGLNV5ym
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RWKQkM31LfPmRaVyFB9HGy
          claim_id: c_6BaHTdgBdcKjRSk2PWQiwr
          source_id: s_fHVpEmNtpRDNxz599Hg8re
          stance: supports
          locator: CBDB:244025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244025）
          source: &a1
            id: s_fHVpEmNtpRDNxz599Hg8re
            source_type: api_record
            title: 中国历代人物传记资料库：王致中（CBDB 244025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244025&o=json
            external_identifier: CBDB:244025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QBT4WgF7F59ZqoFVhvmt1w
        subject_person_id: p_1G549N2d23KvV8NGLNV5ym
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致中，明人物。成化五年進士，籍贯華容，曾任醫學訓科。（中国历代人物传记资料库 CBDB 244025）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_skvGMALba5ca5VNO74daeR
          claim_id: c_QBT4WgF7F59ZqoFVhvmt1w
          source_id: s_fHVpEmNtpRDNxz599Hg8re
          stance: supports
          locator: CBDB:244025
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_bXkFTYuTFHtUyV4blEix18
        subject_person_id: p_1G549N2d23KvV8NGLNV5ym
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8P5PCH5aTQeZpUfSAM9z5q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fHm8F9Me1Zsl9FLjFs7y5Y
          claim_id: c_bXkFTYuTFHtUyV4blEix18
          source_id: s_fHVpEmNtpRDNxz599Hg8re
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第六十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8P5PCH5aTQeZpUfSAM9z5q
        status: active
        display_name: 王儼
        merged_into_person_id: null
    - claim:
        id: c_OktEFi-CYXrs6EODu_Zv_a
        subject_person_id: p_1G549N2d23KvV8NGLNV5ym
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H79E2J3UD3ByBPKMg6zotE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1bnU7aT-AkLS3DaYg0FFv9
          claim_id: c_OktEFi-CYXrs6EODu_Zv_a
          source_id: s_KbsI4MzEoH3PdfsgO-yq0e
          stance: supports
          locator: CBDB：兄弟 王儼（126889）之父／母 王致中
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王儼 为同胞（CBDB 记「弟」），王儼 之父／母即 王佐 之父／母。
          source:
            id: s_KbsI4MzEoH3PdfsgO-yq0e
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 244028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244028&o=json
            external_identifier: CBDB:244028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H79E2J3UD3ByBPKMg6zotE
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_vggMna7dMOrYNe_3g8e29h
        subject_person_id: p_1G549N2d23KvV8NGLNV5ym
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NgjQSpqLAjBED7fZd64vVd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b7r01izcmYhpPUKJyfgiH8
          claim_id: c_vggMna7dMOrYNe_3g8e29h
          source_id: s_L_6wUw31k5w1_Qrdafk7jO
          stance: supports
          locator: CBDB：兄弟 王儼（126889）之父／母 王致中
          quotation: null
          interpretation_note: 由兄弟关系推断：王倬 与 王儼 为同胞（CBDB 记「兄」），王儼 之父／母即 王倬 之父／母。
          source:
            id: s_L_6wUw31k5w1_Qrdafk7jO
            source_type: api_record
            title: 中国历代人物传记资料库：王倬（CBDB 244032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244032&o=json
            external_identifier: CBDB:244032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NgjQSpqLAjBED7fZd64vVd
        status: active
        display_name: 王倬
        merged_into_person_id: null
    - claim:
        id: c_ZZ772H8Q2BSRFHr-fyPNHs
        subject_person_id: p_1G549N2d23KvV8NGLNV5ym
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PvZ7cBcD4cQCsJ3pGVxsFN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8dnHZe8aLPvQirHXViUmVt
          claim_id: c_ZZ772H8Q2BSRFHr-fyPNHs
          source_id: s_uaM2ltNY-61YfFklYagJZL
          stance: supports
          locator: CBDB：兄弟 王儼（126889）之父／母 王致中
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王儼 为同胞（CBDB 记「兄」），王儼 之父／母即 王傑 之父／母。
          source:
            id: s_uaM2ltNY-61YfFklYagJZL
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 244031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244031&o=json
            external_identifier: CBDB:244031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PvZ7cBcD4cQCsJ3pGVxsFN
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_pQDtIK4VmjLN4FahuwWlLm
        subject_person_id: p_1G549N2d23KvV8NGLNV5ym
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pgLBGCwwfvD5o1ggdN92mm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WUGlj055a9L7QoZOiEqcbJ
          claim_id: c_pQDtIK4VmjLN4FahuwWlLm
          source_id: s_SQuzuMsWL2pR4zdrXwNPPm
          stance: supports
          locator: CBDB：兄弟 王儼（126889）之父／母 王致中
          quotation: null
          interpretation_note: 由兄弟关系推断：王偉 与 王儼 为同胞（CBDB 记「兄」），王儼 之父／母即 王偉 之父／母。
          source:
            id: s_SQuzuMsWL2pR4zdrXwNPPm
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 244029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244029&o=json
            external_identifier: CBDB:244029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pgLBGCwwfvD5o1ggdN92mm
        status: active
        display_name: 王偉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王致中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致中 | accepted |
| bio.summary | 王致中，明人物。成化五年進士，籍贯華容，曾任醫學訓科。（中国历代人物传记资料库 CBDB 244025） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8P5PCH5aTQeZpUfSAM9z5q | 王儼 | accepted |
| children | p_H79E2J3UD3ByBPKMg6zotE | 王佐 | accepted |
| children | p_NgjQSpqLAjBED7fZd64vVd | 王倬 | accepted |
| children | p_PvZ7cBcD4cQCsJ3pGVxsFN | 王傑 | accepted |
| children | p_pgLBGCwwfvD5o1ggdN92mm | 王偉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 244031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244031&o=json)
- [中国历代人物传记资料库：王偉（CBDB 244029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244029&o=json)
- [中国历代人物传记资料库：王致中（CBDB 244025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244025&o=json)
- [中国历代人物传记资料库：王倬（CBDB 244032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244032&o=json)
- [中国历代人物传记资料库：王佐（CBDB 244028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244028&o=json)
