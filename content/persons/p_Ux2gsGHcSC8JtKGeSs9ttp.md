---
schema: wang-person/v1
id: p_Ux2gsGHcSC8JtKGeSs9ttp
status: active
merged_into: null
display_name: 王緘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u8q8rPZB6L6TjhNETQN3xN
        subject_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S72ToRht3UYN3GHSqVw4GE
          claim_id: c_u8q8rPZB6L6TjhNETQN3xN
          source_id: s_E78mJpLEwT13keLvJqAiyD
          stance: supports
          locator: CBDB:68345
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68345）
          source: &a1
            id: s_E78mJpLEwT13keLvJqAiyD
            source_type: api_record
            title: 中国历代人物传记资料库：王緘（CBDB 68345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68345&o=json
            external_identifier: CBDB:68345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MbKH59WduoLJCbDD2tMTim
        subject_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
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
        - id: cs_xhjVG8FEFdfRrGzo69YdKV
          claim_id: c_MbKH59WduoLJCbDD2tMTim
          source_id: s_E78mJpLEwT13keLvJqAiyD
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
        id: c_Z_NwSl8NVkwuuYC0DKH-mS
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IJfNIjvMLWVvsb5FHkfQ8j
          claim_id: c_Z_NwSl8NVkwuuYC0DKH-mS
          source_id: s_LhLdZ1qqvScxSavV2YX4Dm
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LhLdZ1qqvScxSavV2YX4Dm
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 209198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209198&o=json
            external_identifier: CBDB:209198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_s94RydQTdDQooKZ8AoB28k
        status: active
        display_name: 王儀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_shfJagwFBZW1vE1IB9g00t
        subject_person_id: p_AkrRJo2uGtxGuXdXFmLbLr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-yNUYQpVE_z6YuA8t4F7gJ
          claim_id: c_shfJagwFBZW1vE1IB9g00t
          source_id: s_jMuZnBF7GVv2W1W3CiPsTH
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jMuZnBF7GVv2W1W3CiPsTH
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 209196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209196&o=json
            external_identifier: CBDB:209196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AkrRJo2uGtxGuXdXFmLbLr
        status: active
        display_name: 王能
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王緘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_s94RydQTdDQooKZ8AoB28k | 王儀 | accepted |
| ancestors | p_AkrRJo2uGtxGuXdXFmLbLr | 王能 | accepted |

## 外部来源

- [中国历代人物传记资料库：王緘（CBDB 68345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68345&o=json)
- [中国历代人物传记资料库：王能（CBDB 209196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209196&o=json)
- [中国历代人物传记资料库：王儀（CBDB 209198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209198&o=json)
