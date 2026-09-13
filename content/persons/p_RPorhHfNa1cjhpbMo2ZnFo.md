---
schema: wang-person/v1
id: p_RPorhHfNa1cjhpbMo2ZnFo
status: active
merged_into: null
display_name: 王三鍚
cbdb_id: 205426
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xLfv7AeTTnwPsEKvGLhHVF
        subject_person_id: p_RPorhHfNa1cjhpbMo2ZnFo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三鍚（生于1542年），明人物。嘉靖四十四年進士，籍贯內江，入仕進士，曾任典史。（中国历代人物传记资料库 CBDB 205426）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_f-04TxVUt7pphB3AtC99yR
          claim_id: c_xLfv7AeTTnwPsEKvGLhHVF
          source_id: s_azDkex23AB8g7o2H61xPzN
          stance: supports
          locator: CBDB:205426
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_azDkex23AB8g7o2H61xPzN
            source_type: api_record
            title: 中国历代人物传记资料库：王三鍚（CBDB 205426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205426&o=json
            external_identifier: CBDB:205426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iPXnikEPAYoXR97wubR3Fy
        subject_person_id: p_RPorhHfNa1cjhpbMo2ZnFo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1542年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1542-01-01
            latest: 1542-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BEbKQmyfVnejju9e1eKuCr
          claim_id: c_iPXnikEPAYoXR97wubR3Fy
          source_id: s_azDkex23AB8g7o2H61xPzN
          stance: supports
          locator: CBDB:205426
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1542
          source:
            id: s_azDkex23AB8g7o2H61xPzN
            source_type: api_record
            title: 中国历代人物传记资料库：王三鍚（CBDB 205426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205426&o=json
            external_identifier: CBDB:205426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CC9Nq1nUBoifszrdYZqSDM
        subject_person_id: p_RPorhHfNa1cjhpbMo2ZnFo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三鍚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ren86ZkQbRBrtrJxPzUdgi
          claim_id: c_CC9Nq1nUBoifszrdYZqSDM
          source_id: s_azDkex23AB8g7o2H61xPzN
          stance: supports
          locator: CBDB:205426
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1542
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dqeIDkZbMDW88WgnUIc0Iy
        subject_person_id: p_TBNAibWSwiLJagKdPeWqgE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RPorhHfNa1cjhpbMo2ZnFo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2mDSPEYhEgWgd3RsjX0AXD
          claim_id: c_dqeIDkZbMDW88WgnUIc0Iy
          source_id: s_muRRM2VJ9FAaER9LPaKwQF
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百六十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_muRRM2VJ9FAaER9LPaKwQF
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 332995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332995&o=json
            external_identifier: CBDB:332995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TBNAibWSwiLJagKdPeWqgE
        status: active
        display_name: 王一陽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Q65qMl33Loav0rRj_BAzdr
        subject_person_id: p_9krhrKbo8VTou75RLSqpgt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RPorhHfNa1cjhpbMo2ZnFo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HnnO7-QMewau0iASyRIzQ0
          claim_id: c_Q65qMl33Loav0rRj_BAzdr
          source_id: s_vJirFjyo3kJ17dRXgN49io
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百六十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vJirFjyo3kJ17dRXgN49io
            source_type: api_record
            title: 中国历代人物传记资料库：王登雲（CBDB 332994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332994&o=json
            external_identifier: CBDB:332994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.389Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9krhrKbo8VTou75RLSqpgt
        status: active
        display_name: 王登雲
        merged_into_person_id: null
    - claim:
        id: c_gsNaCjWnvMutsHUQ2pmldP
        subject_person_id: p_5WrLnVoNTCh5kCwFcCRHpP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RPorhHfNa1cjhpbMo2ZnFo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xa9aeZOQmSH9C_b6u5hR82
          claim_id: c_gsNaCjWnvMutsHUQ2pmldP
          source_id: s_Zf1VeAbyXM3JdnMjxdoSzs
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百六十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Zf1VeAbyXM3JdnMjxdoSzs
            source_type: api_record
            title: 中国历代人物传记资料库：王加茂（CBDB 332993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332993&o=json
            external_identifier: CBDB:332993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5WrLnVoNTCh5kCwFcCRHpP
        status: active
        display_name: 王加茂
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王三鍚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三鍚（生于1542年），明人物。嘉靖四十四年進士，籍贯內江，入仕進士，曾任典史。（中国历代人物传记资料库 CBDB 205426） | accepted |
| birth.date | 1542年 | accepted |
| name.primary | 王三鍚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TBNAibWSwiLJagKdPeWqgE | 王一陽 | accepted |
| ancestors | p_9krhrKbo8VTou75RLSqpgt | 王登雲 | accepted |
| ancestors | p_5WrLnVoNTCh5kCwFcCRHpP | 王加茂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王登雲（CBDB 332994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332994&o=json)
- [中国历代人物传记资料库：王加茂（CBDB 332993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332993&o=json)
- [中国历代人物传记资料库：王三鍚（CBDB 205426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205426&o=json)
- [中国历代人物传记资料库：王一陽（CBDB 332995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332995&o=json)
