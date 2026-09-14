---
schema: wang-person/v1
id: p_n7nxF5sMDAtTGPfHz31BSS
status: active
merged_into: null
display_name: 王如塈
cbdb_id: 226073
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NCX4R6ZmJiT8ZJcRDF3w4h
        subject_person_id: p_n7nxF5sMDAtTGPfHz31BSS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如塈，明人物。萬曆丙戌科進士進士，籍贯安福。（中国历代人物传记资料库 CBDB 226073）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_GvMnCQTvvFOWLB3u6k4DUm
          claim_id: c_NCX4R6ZmJiT8ZJcRDF3w4h
          source_id: s_PqgmsRCMPuMS8np3vfmQzY
          stance: supports
          locator: CBDB:226073
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PqgmsRCMPuMS8np3vfmQzY
            source_type: api_record
            title: 中国历代人物传记资料库：王如塈（CBDB 226073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226073&o=json
            external_identifier: CBDB:226073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ApE39f5gJHACe9Bbe3kyt1
        subject_person_id: p_n7nxF5sMDAtTGPfHz31BSS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如塈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_d9yqfB8EMekEGpmKpKV2Xi
          claim_id: c_ApE39f5gJHACe9Bbe3kyt1
          source_id: s_PqgmsRCMPuMS8np3vfmQzY
          stance: supports
          locator: CBDB:226073
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_awvT2Kn_ItB51OiNMU_sXa
        subject_person_id: p_F5hazwzcVncNtpZFL7kuXD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n7nxF5sMDAtTGPfHz31BSS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nx0B0-mu_-LRnxc0kH4QRA
          claim_id: c_awvT2Kn_ItB51OiNMU_sXa
          source_id: s_E4pjA5H96BLkM0hWZAZGZL
          stance: supports
          locator: CBDB：兄弟 王如堅（126521）之父／母 王端昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王如塈 与 王如堅 为同胞（CBDB 记「兄」），王如堅 之父／母即 王如塈 之父／母。
          source:
            id: s_E4pjA5H96BLkM0hWZAZGZL
            source_type: api_record
            title: 中国历代人物传记资料库：王如塈（CBDB 226073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226073&o=json
            external_identifier: CBDB:226073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F5hazwzcVncNtpZFL7kuXD
        status: active
        display_name: 王端昌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6KGDeyesEGZcocpuD6N-Kf
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_n7nxF5sMDAtTGPfHz31BSS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a_d_kH4fAQ1PA_8S5r4stR
          claim_id: c_6KGDeyesEGZcocpuD6N-Kf
          source_id: s_E4pjA5H96BLkM0hWZAZGZL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126521 王如堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_E4pjA5H96BLkM0hWZAZGZL
            source_type: api_record
            title: 中国历代人物传记资料库：王如塈（CBDB 226073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226073&o=json
            external_identifier: CBDB:226073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4A86HEw8MTfsRuaTJeDAXg
        status: active
        display_name: 王如堅
        merged_into_person_id: null
---

# 王如塈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王如塈，明人物。萬曆丙戌科進士進士，籍贯安福。（中国历代人物传记资料库 CBDB 226073） | accepted |
| name.primary | 王如塈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_F5hazwzcVncNtpZFL7kuXD | 王端昌 | accepted |
| other | p_4A86HEw8MTfsRuaTJeDAXg | 王如堅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王如塈（CBDB 226073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226073&o=json)
