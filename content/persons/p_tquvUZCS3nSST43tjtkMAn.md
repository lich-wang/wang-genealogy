---
schema: wang-person/v1
id: p_tquvUZCS3nSST43tjtkMAn
status: active
merged_into: null
display_name: 王順
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fTmuXebaqmPsD3n2JqttKF
        subject_person_id: p_tquvUZCS3nSST43tjtkMAn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5SKKgj3nhw8kLodfyA5JH6
          claim_id: c_fTmuXebaqmPsD3n2JqttKF
          source_id: s_bKA9SWtwZWYidnTJqioYSh
          stance: supports
          locator: CBDB:270647
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270647）
          source: &a1
            id: s_bKA9SWtwZWYidnTJqioYSh
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 270647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270647&o=json
            external_identifier: CBDB:270647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U3NkHTeUY8AEcrXW4Rjo25
        subject_person_id: p_tquvUZCS3nSST43tjtkMAn
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
        - id: cs_qNNh1bLxp2Ba8RS2gMDQuD
          claim_id: c_U3NkHTeUY8AEcrXW4Rjo25
          source_id: s_bKA9SWtwZWYidnTJqioYSh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
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
        id: c_CGtYOEPlAUpCPbXdK_ZjFs
        subject_person_id: p_tquvUZCS3nSST43tjtkMAn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8WX7VCra8JeUacoOlEKWtM
          claim_id: c_CGtYOEPlAUpCPbXdK_ZjFs
          source_id: s_CXUAh52abVRTJgP1MCCsKj
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第八十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CXUAh52abVRTJgP1MCCsKj
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 201331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201331&o=json
            external_identifier: CBDB:201331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kuyuiJHgUznyGsvyFU7zw8
        status: active
        display_name: 王雲
        merged_into_person_id: null
  other: []
---

# 王順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王順 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kuyuiJHgUznyGsvyFU7zw8 | 王雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王順（CBDB 270647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270647&o=json)
- [中国历代人物传记资料库：王雲（CBDB 201331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201331&o=json)
