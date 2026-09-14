---
schema: wang-person/v1
id: p_uPMjhauhT8ZcPTwE45WUiB
status: active
merged_into: null
display_name: 王汝明
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A4Zhhb3fBuAkKrPMx5nSj3
        subject_person_id: p_uPMjhauhT8ZcPTwE45WUiB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4E4QwZDRtriL33m2GZV5M1
          claim_id: c_A4Zhhb3fBuAkKrPMx5nSj3
          source_id: s_vqWoB4noK8iLWaZs1yYawb
          stance: supports
          locator: CBDB:265942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265942）
          source: &a1
            id: s_vqWoB4noK8iLWaZs1yYawb
            source_type: api_record
            title: 中国历代人物传记资料库：王汝明（CBDB 265942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265942&o=json
            external_identifier: CBDB:265942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.708Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bwZEEakZDiRayBuofWWFV6
        subject_person_id: p_uPMjhauhT8ZcPTwE45WUiB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝明，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 265942）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mvjJoNuSPd4RB3GwH7wuOW
          claim_id: c_bwZEEakZDiRayBuofWWFV6
          source_id: s_vqWoB4noK8iLWaZs1yYawb
          stance: supports
          locator: CBDB:265942
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_U1n4roiIGAw_WcKIcFjrGy
        subject_person_id: p_czhtiwqBMu1RGkzhciwNgo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uPMjhauhT8ZcPTwE45WUiB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6qBsgTCJVgYnU9tECAhdj1
          claim_id: c_U1n4roiIGAw_WcKIcFjrGy
          source_id: s_I8PPAaYYbTHy5O2d1vMvaK
          stance: supports
          locator: CBDB：兄弟 王德（201011）之父／母 王昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝明 与 王德 为同胞（CBDB 记「弟」），王德 之父／母即 王汝明 之父／母。
          source:
            id: s_I8PPAaYYbTHy5O2d1vMvaK
            source_type: api_record
            title: 中国历代人物传记资料库：王汝明（CBDB 265942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265942&o=json
            external_identifier: CBDB:265942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_czhtiwqBMu1RGkzhciwNgo
        status: active
        display_name: 王昌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QOwZoITNO_PKOw4p1Co1KV
        subject_person_id: p_bVh1otR2HH59HH7rfKSMH9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uPMjhauhT8ZcPTwE45WUiB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TYeqcatOJI16bWHRBnyf4w
          claim_id: c_QOwZoITNO_PKOw4p1Co1KV
          source_id: s_I8PPAaYYbTHy5O2d1vMvaK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201011 王德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I8PPAaYYbTHy5O2d1vMvaK
            source_type: api_record
            title: 中国历代人物传记资料库：王汝明（CBDB 265942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265942&o=json
            external_identifier: CBDB:265942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bVh1otR2HH59HH7rfKSMH9
        status: active
        display_name: 王德
        merged_into_person_id: null
---

# 王汝明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝明 | accepted |
| bio.summary | 王汝明，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 265942） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_czhtiwqBMu1RGkzhciwNgo | 王昌 | accepted |
| other | p_bVh1otR2HH59HH7rfKSMH9 | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝明（CBDB 265942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265942&o=json)
