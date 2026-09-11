---
schema: wang-person/v1
id: p_9WD2WpcaAMBVHNJjVMQ2UR
status: active
merged_into: null
display_name: 王錄
revision: 4
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7iTdb13xA4fD7Xbe8kiNAM
          claim_id: c_NW4pR4NmU1qHEUMXrS6LMA
          source_id: s_ka4Lzxo7VQGE1wuHHzpki5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  other: []
---

# 王錄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錄 | accepted |
| birth.date | 1543年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1XSyusiB7GXwQNmzrNDUf4 | 王謙 | accepted |
| ancestors | p_GG19HjshvqyvDbfowdsVH9 | 王孜 | accepted |
| ancestors | p_Xx6A1dBFzmqmxvBfyK7Bha | 王維 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錄（CBDB 206049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206049&o=json)
- [中国历代人物传记资料库：王謙（CBDB 212637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212637&o=json)
- [中国历代人物传记资料库：王維（CBDB 212634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212634&o=json)
- [中国历代人物传记资料库：王孜（CBDB 212635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212635&o=json)
