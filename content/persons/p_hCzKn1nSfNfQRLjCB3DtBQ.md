---
schema: wang-person/v1
id: p_hCzKn1nSfNfQRLjCB3DtBQ
status: active
merged_into: null
display_name: 王鐲
cbdb_id: 301180
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vGc7jX2UrxP4QV5Hz5PZzV
        subject_person_id: p_hCzKn1nSfNfQRLjCB3DtBQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐲，明人物。嘉靖十七年進士。（中国历代人物传记资料库 CBDB 301180）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_s9OiXUdv_NUb9WqHndZV5A
          claim_id: c_vGc7jX2UrxP4QV5Hz5PZzV
          source_id: s_5P4kTfcHP2vxNPC59kDYm7
          stance: supports
          locator: CBDB:301180
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5P4kTfcHP2vxNPC59kDYm7
            source_type: api_record
            title: 中国历代人物传记资料库：王鐲（CBDB 301180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301180&o=json
            external_identifier: CBDB:301180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UiHLDkXAFsMM76dpX4Vfdx
        subject_person_id: p_hCzKn1nSfNfQRLjCB3DtBQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_etBUfeNeUHfAKCqK5d9CjK
          claim_id: c_UiHLDkXAFsMM76dpX4Vfdx
          source_id: s_5P4kTfcHP2vxNPC59kDYm7
          stance: supports
          locator: CBDB:301180
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
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
        id: c_F4r386s4rIJCuQe7rvXsf4
        subject_person_id: p_hCzKn1nSfNfQRLjCB3DtBQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mge2bcLxJRotiCE7Q-ZXSN
          claim_id: c_F4r386s4rIJCuQe7rvXsf4
          source_id: s_Cw2hEETiUKegMyTEr9G5M1
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第一百四十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Cw2hEETiUKegMyTEr9G5M1
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 68161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68161&o=json
            external_identifier: CBDB:68161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xq77ND3Yirb2ZWfhHcArnK
        status: active
        display_name: 王德
        merged_into_person_id: null
  other: []
---

# 王鐲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鐲，明人物。嘉靖十七年進士。（中国历代人物传记资料库 CBDB 301180） | accepted |
| name.primary | 王鐲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_xq77ND3Yirb2ZWfhHcArnK | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 68161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68161&o=json)
- [中国历代人物传记资料库：王鐲（CBDB 301180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301180&o=json)
