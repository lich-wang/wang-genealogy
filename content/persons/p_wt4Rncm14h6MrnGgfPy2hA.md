---
schema: wang-person/v1
id: p_wt4Rncm14h6MrnGgfPy2hA
status: active
merged_into: null
display_name: 王用才
cbdb_id: 201069
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kp5wsZsodiJdfvTBBusjQb
        subject_person_id: p_wt4Rncm14h6MrnGgfPy2hA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用才（生于1460年），明人物。明清進士進士，籍贯彭山，入仕進士。（中国历代人物传记资料库 CBDB 201069）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vx2xRucPmKIAZyzXoMPGj1
          claim_id: c_Kp5wsZsodiJdfvTBBusjQb
          source_id: s_mW69eP1deciiVZemAPprPT
          stance: supports
          locator: CBDB:201069
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mW69eP1deciiVZemAPprPT
            source_type: api_record
            title: 中国历代人物传记资料库：王用才（CBDB 201069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201069&o=json
            external_identifier: CBDB:201069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_t7i9r5BeFNWhx2a27YRGh3
        subject_person_id: p_wt4Rncm14h6MrnGgfPy2hA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1460年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1460-01-01
            latest: 1460-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8eEdq8MyxP4QYfw4UdMnnC
          claim_id: c_t7i9r5BeFNWhx2a27YRGh3
          source_id: s_mW69eP1deciiVZemAPprPT
          stance: supports
          locator: CBDB:201069
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1460
          source:
            id: s_mW69eP1deciiVZemAPprPT
            source_type: api_record
            title: 中国历代人物传记资料库：王用才（CBDB 201069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201069&o=json
            external_identifier: CBDB:201069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7uPEhA3ADfmXrcVwrtcwoc
        subject_person_id: p_wt4Rncm14h6MrnGgfPy2hA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dNfRWjYbHwp3mpp8BDPJVs
          claim_id: c_7uPEhA3ADfmXrcVwrtcwoc
          source_id: s_mW69eP1deciiVZemAPprPT
          stance: supports
          locator: CBDB:201069
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1460
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_E7XYkbbS7Mkik-JZkekl_J
        subject_person_id: p_gXfhfHsBNGd6LAU2tNCWn5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wt4Rncm14h6MrnGgfPy2hA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OVyGYbIwzBDyACvFQsd9ck
          claim_id: c_E7XYkbbS7Mkik-JZkekl_J
          source_id: s_pHu9k6Y75PDtaZ1SxCc1fc
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百九十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pHu9k6Y75PDtaZ1SxCc1fc
            source_type: api_record
            title: 中国历代人物传记资料库：王輪（CBDB 266620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266620&o=json
            external_identifier: CBDB:266620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gXfhfHsBNGd6LAU2tNCWn5
        status: active
        display_name: 王輪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-LfH4TNCnT5oeM4-uRBVXr
        subject_person_id: p_Kh33dUoJaJZLSbXRtcKgR3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wt4Rncm14h6MrnGgfPy2hA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ra0dUmp1T7wlDHmhVMTfeM
          claim_id: c_-LfH4TNCnT5oeM4-uRBVXr
          source_id: s_aWrn7T2o945NLH28EKcsRJ
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百九十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aWrn7T2o945NLH28EKcsRJ
            source_type: api_record
            title: 中国历代人物传记资料库：王子秀（CBDB 266619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266619&o=json
            external_identifier: CBDB:266619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.724Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Kh33dUoJaJZLSbXRtcKgR3
        status: active
        display_name: 王子秀
        merged_into_person_id: null
    - claim:
        id: c_Z9lHY_7BGIlmdeIMVVsapJ
        subject_person_id: p_BtWvuGRFMDiFf3wNmLonU8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wt4Rncm14h6MrnGgfPy2hA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__KJ4nI75D-UqO_kOxrD0cN
          claim_id: c_Z9lHY_7BGIlmdeIMVVsapJ
          source_id: s_mNwbC98JoKYdVthNo7ZA5S
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百九十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mNwbC98JoKYdVthNo7ZA5S
            source_type: api_record
            title: 中国历代人物传记资料库：王仕通（CBDB 266618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266618&o=json
            external_identifier: CBDB:266618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_BtWvuGRFMDiFf3wNmLonU8
        status: active
        display_name: 王仕通
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_j53hX14RTeUEuo0qdS2NPI
        subject_person_id: p_5iaX7DSScmrC23GFCU66NX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wt4Rncm14h6MrnGgfPy2hA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EqPrJZdJTkfD_wUoiBnD6r
          claim_id: c_j53hX14RTeUEuo0qdS2NPI
          source_id: s_q1sug0m1_46MpFTXDeAtaN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201069 王用才）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_q1sug0m1_46MpFTXDeAtaN
            source_type: api_record
            title: 中国历代人物传记资料库：王用中（CBDB 266623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266623&o=json
            external_identifier: CBDB:266623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5iaX7DSScmrC23GFCU66NX
        status: active
        display_name: 王用中
        merged_into_person_id: null
---

# 王用才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用才（生于1460年），明人物。明清進士進士，籍贯彭山，入仕進士。（中国历代人物传记资料库 CBDB 201069） | accepted |
| birth.date | 1460年 | accepted |
| name.primary | 王用才 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gXfhfHsBNGd6LAU2tNCWn5 | 王輪 | accepted |
| ancestors | p_Kh33dUoJaJZLSbXRtcKgR3 | 王子秀 | accepted |
| ancestors | p_BtWvuGRFMDiFf3wNmLonU8 | 王仕通 | accepted |
| other | p_5iaX7DSScmrC23GFCU66NX | 王用中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輪（CBDB 266620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266620&o=json)
- [中国历代人物传记资料库：王仕通（CBDB 266618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266618&o=json)
- [中国历代人物传记资料库：王用才（CBDB 201069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201069&o=json)
- [中国历代人物传记资料库：王用中（CBDB 266623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266623&o=json)
- [中国历代人物传记资料库：王子秀（CBDB 266619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266619&o=json)
