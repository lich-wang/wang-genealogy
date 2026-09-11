---
schema: wang-person/v1
id: p_xXfU17qq7kWf6RgD1JMA38
status: active
merged_into: null
display_name: 王學韶
cbdb_id: 265188
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ag6QUr9cFJ8E44nTUKcUU6
        subject_person_id: p_xXfU17qq7kWf6RgD1JMA38
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學韶，明人物。中国历代人物传记资料库（CBDB）以人物编号 265188 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_RKMREKHiHuRzvMnrWCN1j1
          claim_id: c_ag6QUr9cFJ8E44nTUKcUU6
          source_id: s_eZpMgsaWRPEHmDLo2QcyCr
          stance: supports
          locator: CBDB:265188
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_eZpMgsaWRPEHmDLo2QcyCr
            source_type: api_record
            title: 中国历代人物传记资料库：王學韶（CBDB 265188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265188&o=json
            external_identifier: CBDB:265188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MuAiaPsaUgzc95F4qpPLaK
        subject_person_id: p_xXfU17qq7kWf6RgD1JMA38
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Cy8gTn6ynZGx1ZRU1DFvYW
          claim_id: c_MuAiaPsaUgzc95F4qpPLaK
          source_id: s_eZpMgsaWRPEHmDLo2QcyCr
          stance: supports
          locator: CBDB:265188
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_eZpMgsaWRPEHmDLo2QcyCr
            source_type: api_record
            title: 中国历代人物传记资料库：王學韶（CBDB 265188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265188&o=json
            external_identifier: CBDB:265188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_PmCEnOIdkK4ND3oGvjfMPv
        subject_person_id: p_xXfU17qq7kWf6RgD1JMA38
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cF1tS83LboioMzgPkBhT2W
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Kccl8EySZ2maXrZjQCws5
          claim_id: c_PmCEnOIdkK4ND3oGvjfMPv
          source_id: s_ycBjaLSCwSA1EL2RDVdTj2
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第四十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ycBjaLSCwSA1EL2RDVdTj2
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 200963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200963&o=json
            external_identifier: CBDB:200963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cF1tS83LboioMzgPkBhT2W
        status: active
        display_name: 王選
        merged_into_person_id: null
  other: []
---

# 王學韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學韶，明人物。中国历代人物传记资料库（CBDB）以人物编号 265188 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王學韶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_cF1tS83LboioMzgPkBhT2W | 王選 | accepted |

## 外部来源

- [中国历代人物传记资料库：王選（CBDB 200963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200963&o=json)
- [中国历代人物传记资料库：王學韶（CBDB 265188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265188&o=json)
