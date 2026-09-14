---
schema: wang-person/v1
id: p_6G9SoBa4VyqSABa4e5fnX2
status: active
merged_into: null
display_name: 王宇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_urd9BNpC1f4NwJskhpKKmH
        subject_person_id: p_6G9SoBa4VyqSABa4e5fnX2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VjQx6sENBN45hUrzK9nCEc
          claim_id: c_urd9BNpC1f4NwJskhpKKmH
          source_id: s_jCu6ePnRtD9Z28375CF27N
          stance: supports
          locator: CBDB:251902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251902）
          source: &a1
            id: s_jCu6ePnRtD9Z28375CF27N
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 251902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251902&o=json
            external_identifier: CBDB:251902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.257Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BHHrSLfaFxsf7eTUAuP68u
        subject_person_id: p_6G9SoBa4VyqSABa4e5fnX2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇，明人物。成化十四年進士，籍贯日照。（中国历代人物传记资料库 CBDB 251902）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bJQRFI_tfIpG6tNkZ3GP2J
          claim_id: c_BHHrSLfaFxsf7eTUAuP68u
          source_id: s_jCu6ePnRtD9Z28375CF27N
          stance: supports
          locator: CBDB:251902
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WA_HhWPRn_3G23FJEdr6Jv
        subject_person_id: p_6NqQVpARahg4TYnj77m3i2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6G9SoBa4VyqSABa4e5fnX2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2NVQGKcemsfLBc4JWVbPat
          claim_id: c_WA_HhWPRn_3G23FJEdr6Jv
          source_id: s_wm-GKpSg6doPP-Fu5yZCwG
          stance: supports
          locator: CBDB：兄弟 王宏（199956）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王宇 与 王宏 为同胞（CBDB 记「弟」），王宏 之父／母即 王宇 之父／母。
          source:
            id: s_wm-GKpSg6doPP-Fu5yZCwG
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 251902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251902&o=json
            external_identifier: CBDB:251902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6NqQVpARahg4TYnj77m3i2
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_GI5292uQw6MdPjIqdAOXHd
        subject_person_id: p_6G9SoBa4VyqSABa4e5fnX2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cnN8Qwq9XduFw216Ep1U5h
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1z_svBLbVNfULh4V4kC6dV
          claim_id: c_GI5292uQw6MdPjIqdAOXHd
          source_id: s_wm-GKpSg6doPP-Fu5yZCwG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199956 王宏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wm-GKpSg6doPP-Fu5yZCwG
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 251902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251902&o=json
            external_identifier: CBDB:251902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cnN8Qwq9XduFw216Ep1U5h
        status: active
        display_name: 王宏
        merged_into_person_id: null
---

# 王宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宇 | accepted |
| bio.summary | 王宇，明人物。成化十四年進士，籍贯日照。（中国历代人物传记资料库 CBDB 251902） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6NqQVpARahg4TYnj77m3i2 | 王貴 | accepted |
| other | p_cnN8Qwq9XduFw216Ep1U5h | 王宏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宇（CBDB 251902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251902&o=json)
