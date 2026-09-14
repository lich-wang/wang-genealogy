---
schema: wang-person/v1
id: p_9WD2WpcaAMBVHNJjVMQ2UR
status: active
merged_into: null
display_name: 王錄
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3rhS6WNVq892uMQvVJeVLF
        subject_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8UqSnpKVK8WXJ4AUPXaD7M
          claim_id: c_3rhS6WNVq892uMQvVJeVLF
          source_id: s_ka4Lzxo7VQGE1wuHHzpki5
          stance: supports
          locator: CBDB:206049
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206049）
          source: &a1
            id: s_ka4Lzxo7VQGE1wuHHzpki5
            source_type: api_record
            title: 中国历代人物传记资料库：王錄（CBDB 206049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206049&o=json
            external_identifier: CBDB:206049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wh7PtiCF3mBsebK3u1BY8Q
        subject_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1543年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X4EjWvhHKPKGMetY84NsGx
          claim_id: c_wh7PtiCF3mBsebK3u1BY8Q
          source_id: s_ka4Lzxo7VQGE1wuHHzpki5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NW4pR4NmU1qHEUMXrS6LMA
        subject_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錄（生于1543年），明人物。明清進士進士，籍贯壽張，入仕進士。（中国历代人物传记资料库 CBDB 206049）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hKfT0ArjJ7OVi0R64DTzYr
          claim_id: c_NW4pR4NmU1qHEUMXrS6LMA
          source_id: s_ka4Lzxo7VQGE1wuHHzpki5
          stance: supports
          locator: CBDB:206049
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lpVixqSmnBZrlfl_Al7np1
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KOoT1wCBm2JI4CVV7FYh8Z
          claim_id: c_lpVixqSmnBZrlfl_Al7np1
          source_id: s_pBmMW6zjhQ8EDiVE2Ntyp1
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pBmMW6zjhQ8EDiVE2Ntyp1
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 212637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212637&o=json
            external_identifier: CBDB:212637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.090Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1XSyusiB7GXwQNmzrNDUf4
        status: active
        display_name: 王謙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_MTBKYP1q81kTnTBjX_ELz6
        subject_person_id: p_GG19HjshvqyvDbfowdsVH9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k2J_WIKEy918PEET7VwwMk
          claim_id: c_MTBKYP1q81kTnTBjX_ELz6
          source_id: s_9WMtxUjBdJzt8NJN96DvG6
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9WMtxUjBdJzt8NJN96DvG6
            source_type: api_record
            title: 中国历代人物传记资料库：王孜（CBDB 212635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212635&o=json
            external_identifier: CBDB:212635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GG19HjshvqyvDbfowdsVH9
        status: active
        display_name: 王孜
        merged_into_person_id: null
    - claim:
        id: c_GAmWlYZOgwh0jO-CVC92rz
        subject_person_id: p_Xx6A1dBFzmqmxvBfyK7Bha
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zT9fGZ6oY8zLD50X6NAhVl
          claim_id: c_GAmWlYZOgwh0jO-CVC92rz
          source_id: s_3sDapsFdJk9xubFbS3R3T4
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3sDapsFdJk9xubFbS3R3T4
            source_type: api_record
            title: 中国历代人物传记资料库：王維（CBDB 212634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212634&o=json
            external_identifier: CBDB:212634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Xx6A1dBFzmqmxvBfyK7Bha
        status: active
        display_name: 王維
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_a-o3WKdlgcBH48Rz5rXomF
        subject_person_id: p_3LbFqpm1y41GseX5pd88Pr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x53Evw4qK17FfkpTs4A7nY
          claim_id: c_a-o3WKdlgcBH48Rz5rXomF
          source_id: s_TE73UzqivWC4FUf3b7OTYE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206049 王錄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TE73UzqivWC4FUf3b7OTYE
            source_type: api_record
            title: 中国历代人物传记资料库：王鈿（CBDB 212641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212641&o=json
            external_identifier: CBDB:212641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3LbFqpm1y41GseX5pd88Pr
        status: active
        display_name: 王鈿
        merged_into_person_id: null
    - claim:
        id: c_4bgl11KXOmdLphSFw8Ebxm
        subject_person_id: p_7aCKMJGMCLmCrY7Kqkq2JB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YRGily-_Xm18Dur-cX430h
          claim_id: c_4bgl11KXOmdLphSFw8Ebxm
          source_id: s_CL0uAurCXkfhlbaUWYAlmF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206049 王錄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CL0uAurCXkfhlbaUWYAlmF
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 212644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212644&o=json
            external_identifier: CBDB:212644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7aCKMJGMCLmCrY7Kqkq2JB
        status: active
        display_name: 王鑰
        merged_into_person_id: null
    - claim:
        id: c_y_Y4euRFhkEkyqZ59EBOtP
        subject_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_E3tk8DEMR1zLFQB7rHGWyc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t-Qca0dWRw1GtWmByaIKIm
          claim_id: c_y_Y4euRFhkEkyqZ59EBOtP
          source_id: s_fnMTAXuMmYEKWs-WUAQmWd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206049 王錄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fnMTAXuMmYEKWs-WUAQmWd
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 212642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212642&o=json
            external_identifier: CBDB:212642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E3tk8DEMR1zLFQB7rHGWyc
        status: active
        display_name: 王鈞
        merged_into_person_id: null
    - claim:
        id: c_fVRoZ1c0bGINBNLi9TMxTH
        subject_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eJ2GShzFDsv3ujhyUYDpAc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dBPe9F3ZHspMbSiupdPgIH
          claim_id: c_fVRoZ1c0bGINBNLi9TMxTH
          source_id: s_wCqTNvLMirj4H7-nbro8OZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206049 王錄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wCqTNvLMirj4H7-nbro8OZ
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 212643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212643&o=json
            external_identifier: CBDB:212643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eJ2GShzFDsv3ujhyUYDpAc
        status: active
        display_name: 王鎬
        merged_into_person_id: null
    - claim:
        id: c_LJOhV_uXdOyq-sH0GVXHZd
        subject_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nEB3YRum4W4j5bfYNUL33t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VIK4zUPlf1ZDU9RtXSWaCT
          claim_id: c_LJOhV_uXdOyq-sH0GVXHZd
          source_id: s_oy8zxW5FuunKe9_20DQ8wt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206049 王錄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oy8zxW5FuunKe9_20DQ8wt
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 212645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212645&o=json
            external_identifier: CBDB:212645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nEB3YRum4W4j5bfYNUL33t
        status: active
        display_name: 王鎮
        merged_into_person_id: null
    - claim:
        id: c_xCtVW-nYfIj8ygBZO4ZUkY
        subject_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nZxuzwuZ74TcymvsCP5xz2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3pSLZJUqF0l3S_LQ6BSwez
          claim_id: c_xCtVW-nYfIj8ygBZO4ZUkY
          source_id: s_02IVmi36FyTJ7hN_8kI8HV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206049 王錄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_02IVmi36FyTJ7hN_8kI8HV
            source_type: api_record
            title: 中国历代人物传记资料库：王鍍（CBDB 212646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212646&o=json
            external_identifier: CBDB:212646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nZxuzwuZ74TcymvsCP5xz2
        status: active
        display_name: 王鍍
        merged_into_person_id: null
---

# 王錄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錄 | accepted |
| birth.date | 1543年 | accepted |
| bio.summary | 王錄（生于1543年），明人物。明清進士進士，籍贯壽張，入仕進士。（中国历代人物传记资料库 CBDB 206049） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1XSyusiB7GXwQNmzrNDUf4 | 王謙 | accepted |
| ancestors | p_GG19HjshvqyvDbfowdsVH9 | 王孜 | accepted |
| ancestors | p_Xx6A1dBFzmqmxvBfyK7Bha | 王維 | accepted |
| other | p_3LbFqpm1y41GseX5pd88Pr | 王鈿 | accepted |
| other | p_7aCKMJGMCLmCrY7Kqkq2JB | 王鑰 | accepted |
| other | p_E3tk8DEMR1zLFQB7rHGWyc | 王鈞 | accepted |
| other | p_eJ2GShzFDsv3ujhyUYDpAc | 王鎬 | accepted |
| other | p_nEB3YRum4W4j5bfYNUL33t | 王鎮 | accepted |
| other | p_nZxuzwuZ74TcymvsCP5xz2 | 王鍍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍍（CBDB 212646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212646&o=json)
- [中国历代人物传记资料库：王鎬（CBDB 212643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212643&o=json)
- [中国历代人物传记资料库：王鈞（CBDB 212642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212642&o=json)
- [中国历代人物传记资料库：王錄（CBDB 206049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206049&o=json)
- [中国历代人物传记资料库：王謙（CBDB 212637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212637&o=json)
- [中国历代人物传记资料库：王鈿（CBDB 212641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212641&o=json)
- [中国历代人物传记资料库：王維（CBDB 212634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212634&o=json)
- [中国历代人物传记资料库：王鑰（CBDB 212644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212644&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 212645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212645&o=json)
- [中国历代人物传记资料库：王孜（CBDB 212635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212635&o=json)
