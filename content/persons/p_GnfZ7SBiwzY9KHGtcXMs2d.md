---
schema: wang-person/v1
id: p_GnfZ7SBiwzY9KHGtcXMs2d
status: active
merged_into: null
display_name: 王德宿
cbdb_id: 218712
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sQc5J8r3pdbdCvihKaAuZV
        subject_person_id: p_GnfZ7SBiwzY9KHGtcXMs2d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德宿，明人物。萬曆八年進士，籍贯安福。（中国历代人物传记资料库 CBDB 218712）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_n5EgfmzwAVt39giW2149vi
          claim_id: c_sQc5J8r3pdbdCvihKaAuZV
          source_id: s_KSzT5F2JhjFD4jWGpsRs6F
          stance: supports
          locator: CBDB:218712
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KSzT5F2JhjFD4jWGpsRs6F
            source_type: api_record
            title: 中国历代人物传记资料库：王德宿（CBDB 218712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218712&o=json
            external_identifier: CBDB:218712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4ezMiADHCGQ97RE1WjSpXz
        subject_person_id: p_GnfZ7SBiwzY9KHGtcXMs2d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德宿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AZZiTYJY7iaLTtTBKqeCiZ
          claim_id: c_4ezMiADHCGQ97RE1WjSpXz
          source_id: s_KSzT5F2JhjFD4jWGpsRs6F
          stance: supports
          locator: CBDB:218712
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vZHeRbpA1abjDpb0mBxE1S
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GnfZ7SBiwzY9KHGtcXMs2d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_btRMCd_NgyLpS8zrU8N0dZ
          claim_id: c_vZHeRbpA1abjDpb0mBxE1S
          source_id: s_TOuJP5ePwwXX8k8qhw5n-r
          stance: supports
          locator: CBDB：兄弟 王德新（126819）之父／母 王士望
          quotation: null
          interpretation_note: 由兄弟关系推断：王德宿 与 王德新 为同胞（CBDB 记「兄」），王德新 之父／母即 王德宿 之父／母。
          source:
            id: s_TOuJP5ePwwXX8k8qhw5n-r
            source_type: api_record
            title: 中国历代人物传记资料库：王德宿（CBDB 218712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218712&o=json
            external_identifier: CBDB:218712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_heKv1Lrv2nNs2FP242e8RP
        status: active
        display_name: 王士望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_E3OqkFTlG4a8hM03PVVpuT
        subject_person_id: p_GnfZ7SBiwzY9KHGtcXMs2d
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_21fEcV181W-_wC4DFDgJjh
          claim_id: c_E3OqkFTlG4a8hM03PVVpuT
          source_id: s_TOuJP5ePwwXX8k8qhw5n-r
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126819 王德新）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TOuJP5ePwwXX8k8qhw5n-r
            source_type: api_record
            title: 中国历代人物传记资料库：王德宿（CBDB 218712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218712&o=json
            external_identifier: CBDB:218712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P62PwvTysFNxEPkUXBg1Fm
        status: active
        display_name: 王德新
        merged_into_person_id: null
---

# 王德宿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王德宿，明人物。萬曆八年進士，籍贯安福。（中国历代人物传记资料库 CBDB 218712） | accepted |
| name.primary | 王德宿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_heKv1Lrv2nNs2FP242e8RP | 王士望 | accepted |
| other | p_P62PwvTysFNxEPkUXBg1Fm | 王德新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德宿（CBDB 218712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218712&o=json)
