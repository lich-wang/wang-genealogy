---
schema: wang-person/v1
id: p_4wv1yLC4dBTzNwodXFcqeM
status: active
merged_into: null
display_name: 王詔德
cbdb_id: 16693
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zMGFN3g6i4X2jZgSe3idWV
        subject_person_id: p_4wv1yLC4dBTzNwodXFcqeM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔德，宋人物。籍贯婺源，身份为士人。（中国历代人物传记资料库 CBDB 16693）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FQsTABJ3JTUfKhpuIbcjzl
          claim_id: c_zMGFN3g6i4X2jZgSe3idWV
          source_id: s_bphoKM2R8QJhHNVWG6zCFC
          stance: supports
          locator: CBDB:16693
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bphoKM2R8QJhHNVWG6zCFC
            source_type: api_record
            title: 中国历代人物传记资料库：王詔德（CBDB 16693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16693&o=json
            external_identifier: CBDB:16693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wAN8T6sAeDFyawjPC7QBDZ
        subject_person_id: p_4wv1yLC4dBTzNwodXFcqeM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DMfj1c7XoEiqsGVMSZbJPB
          claim_id: c_wAN8T6sAeDFyawjPC7QBDZ
          source_id: s_bphoKM2R8QJhHNVWG6zCFC
          stance: supports
          locator: CBDB:16693
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3w3seqf6oB-IGwgLyiBLW7
        subject_person_id: p_HJ3wsmqgAjiXeZYuaSpD4x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4wv1yLC4dBTzNwodXFcqeM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DblWjirtG2RmMisMHf4fyx
          claim_id: c_3w3seqf6oB-IGwgLyiBLW7
          source_id: s_bphoKM2R8QJhHNVWG6zCFC
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1079;1081：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bphoKM2R8QJhHNVWG6zCFC
            source_type: api_record
            title: 中国历代人物传记资料库：王詔德（CBDB 16693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16693&o=json
            external_identifier: CBDB:16693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_HJ3wsmqgAjiXeZYuaSpD4x
        status: active
        display_name: 王愈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王詔德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王詔德，宋人物。籍贯婺源，身份为士人。（中国历代人物传记资料库 CBDB 16693） | accepted |
| name.primary | 王詔德 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HJ3wsmqgAjiXeZYuaSpD4x | 王愈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詔德（CBDB 16693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16693&o=json)
