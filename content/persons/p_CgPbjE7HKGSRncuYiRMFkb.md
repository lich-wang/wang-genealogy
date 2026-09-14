---
schema: wang-person/v1
id: p_CgPbjE7HKGSRncuYiRMFkb
status: active
merged_into: null
display_name: 王環
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZvzRguEX1ZRLmFL2ZrFGv7
        subject_person_id: p_CgPbjE7HKGSRncuYiRMFkb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王環
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LRXcQ5u8p9K5DTLXULcGmu
          claim_id: c_ZvzRguEX1ZRLmFL2ZrFGv7
          source_id: s_TMpRP7VCcPM48jk92Gx4RC
          stance: supports
          locator: CBDB:282505
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282505）
          source: &a1
            id: s_TMpRP7VCcPM48jk92Gx4RC
            source_type: api_record
            title: 中国历代人物传记资料库：王環（CBDB 282505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282505&o=json
            external_identifier: CBDB:282505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.090Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gJyKhY6QhuBvTZ54XrVknH
        subject_person_id: p_CgPbjE7HKGSRncuYiRMFkb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王環，明人物。正德十二年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 282505）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Be-A_v_proozGjFPYK2loq
          claim_id: c_gJyKhY6QhuBvTZ54XrVknH
          source_id: s_TMpRP7VCcPM48jk92Gx4RC
          stance: supports
          locator: CBDB:282505
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gEnoRNMpTdV4pQb_cFNjXV
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CgPbjE7HKGSRncuYiRMFkb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZAVh83ojLX5Dk_9jBUntTY
          claim_id: c_gEnoRNMpTdV4pQb_cFNjXV
          source_id: s_NRBL1dLOFQW_HWmPX4kPJN
          stance: supports
          locator: CBDB：兄弟 王瑄（126752）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王環 与 王瑄 为同胞（CBDB 记「兄」），王瑄 之父／母即 王環 之父／母。
          source:
            id: s_NRBL1dLOFQW_HWmPX4kPJN
            source_type: api_record
            title: 中国历代人物传记资料库：王環（CBDB 282505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282505&o=json
            external_identifier: CBDB:282505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rP2yOV1qJa_AD7Zbns8UrD
        subject_person_id: p_CgPbjE7HKGSRncuYiRMFkb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CvexZGJpSfjjALu2joPK1N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xc_R2ax1RyjT81k8gggq9B
          claim_id: c_rP2yOV1qJa_AD7Zbns8UrD
          source_id: s_NRBL1dLOFQW_HWmPX4kPJN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126752 王瑄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NRBL1dLOFQW_HWmPX4kPJN
            source_type: api_record
            title: 中国历代人物传记资料库：王環（CBDB 282505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282505&o=json
            external_identifier: CBDB:282505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CvexZGJpSfjjALu2joPK1N
        status: active
        display_name: 王瑄
        merged_into_person_id: null
---

# 王環

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王環 | accepted |
| bio.summary | 王環，明人物。正德十二年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 282505） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ws6vwZFsXZUpBYjSrkcdGJ | 王言 | accepted |
| other | p_CvexZGJpSfjjALu2joPK1N | 王瑄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王環（CBDB 282505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282505&o=json)
