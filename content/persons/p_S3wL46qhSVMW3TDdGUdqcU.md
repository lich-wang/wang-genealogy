---
schema: wang-person/v1
id: p_S3wL46qhSVMW3TDdGUdqcU
status: active
merged_into: null
display_name: 王緯之
cbdb_id: 326825
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5AaCv3LsZH2eYG5449Jqrp
        subject_person_id: p_S3wL46qhSVMW3TDdGUdqcU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緯之，明人物。嘉靖四十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 326825）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XZzvqiLpcK1oaAWvEcYiYh
          claim_id: c_5AaCv3LsZH2eYG5449Jqrp
          source_id: s_gByPJjWaePZ7owLnLKoFST
          stance: supports
          locator: CBDB:326825
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gByPJjWaePZ7owLnLKoFST
            source_type: api_record
            title: 中国历代人物传记资料库：王緯之（CBDB 326825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326825&o=json
            external_identifier: CBDB:326825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dFL5FAJ2CbwU1Qrqc6bQ1E
        subject_person_id: p_S3wL46qhSVMW3TDdGUdqcU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緯之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pwCUxNSrkGTSyvXQqw4aL2
          claim_id: c_dFL5FAJ2CbwU1Qrqc6bQ1E
          source_id: s_gByPJjWaePZ7owLnLKoFST
          stance: supports
          locator: CBDB:326825
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LWG92JNPVePgiG_MimQGPs
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S3wL46qhSVMW3TDdGUdqcU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0HBHF_zAQSLUMBxC7ErqPt
          claim_id: c_LWG92JNPVePgiG_MimQGPs
          source_id: s_jF_SUsWTNuqb66aI_X8oG_
          stance: supports
          locator: CBDB：兄弟 王續之（204986）之父／母 王廷
          quotation: null
          interpretation_note: 由兄弟关系推断：王緯之 与 王續之 为同胞（CBDB 记「兄」），王續之 之父／母即 王緯之 之父／母。
          source:
            id: s_jF_SUsWTNuqb66aI_X8oG_
            source_type: api_record
            title: 中国历代人物传记资料库：王緯之（CBDB 326825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326825&o=json
            external_identifier: CBDB:326825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vK3QABJxLZ3CGaf98onw4k
        status: active
        display_name: 王廷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qmLgx56vYn9kjpWZRqtOjc
        subject_person_id: p_LNAKBPYt9PQCz44835GtLD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_S3wL46qhSVMW3TDdGUdqcU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E4iJO2STyTfhnu-J8ug4wY
          claim_id: c_qmLgx56vYn9kjpWZRqtOjc
          source_id: s_jF_SUsWTNuqb66aI_X8oG_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204986 王續之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jF_SUsWTNuqb66aI_X8oG_
            source_type: api_record
            title: 中国历代人物传记资料库：王緯之（CBDB 326825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326825&o=json
            external_identifier: CBDB:326825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LNAKBPYt9PQCz44835GtLD
        status: active
        display_name: 王續之
        merged_into_person_id: null
---

# 王緯之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王緯之，明人物。嘉靖四十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 326825） | accepted |
| name.primary | 王緯之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vK3QABJxLZ3CGaf98onw4k | 王廷 | accepted |
| other | p_LNAKBPYt9PQCz44835GtLD | 王續之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王緯之（CBDB 326825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326825&o=json)
