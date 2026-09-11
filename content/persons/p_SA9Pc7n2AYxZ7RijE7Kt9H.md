---
schema: wang-person/v1
id: p_SA9Pc7n2AYxZ7RijE7Kt9H
status: active
merged_into: null
display_name: 王通
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CkKUGyTetQJNLAbQRcFBYX
        subject_person_id: p_SA9Pc7n2AYxZ7RijE7Kt9H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_totYHV31qexxGMr6y3au6q
          claim_id: c_CkKUGyTetQJNLAbQRcFBYX
          source_id: s_PVDfZkNi6V7tkvGQhDe6Pj
          stance: supports
          locator: CBDB:270648
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270648）
          source: &a1
            id: s_PVDfZkNi6V7tkvGQhDe6Pj
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 270648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270648&o=json
            external_identifier: CBDB:270648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CEMX8q1PvyE1zhNKJ4hv7n
        subject_person_id: p_SA9Pc7n2AYxZ7RijE7Kt9H
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
        - id: cs_uHFLk48m9SFP6a5ywA9BTr
          claim_id: c_CEMX8q1PvyE1zhNKJ4hv7n
          source_id: s_PVDfZkNi6V7tkvGQhDe6Pj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_oOKKpRPx_0HTG9yJpankss
        subject_person_id: p_SA9Pc7n2AYxZ7RijE7Kt9H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hOWVO3RQOsLEGlb1Xa66C_
          claim_id: c_oOKKpRPx_0HTG9yJpankss
          source_id: s_CXUAh52abVRTJgP1MCCsKj
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第八十八名：父
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kuyuiJHgUznyGsvyFU7zw8 | 王雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王通（CBDB 270648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270648&o=json)
- [中国历代人物传记资料库：王雲（CBDB 201331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201331&o=json)
