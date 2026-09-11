---
schema: wang-person/v1
id: p_Uu3PhDPTRD4oQGaMJP7i1y
status: active
merged_into: null
display_name: 王繼明
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9DixHM7YJS5np7ka6wiUsW
        subject_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zN1g7BSG6pCjn4gcTe2Weh
          claim_id: c_9DixHM7YJS5np7ka6wiUsW
          source_id: s_SDp6kwAfqUvHiiZnG3xNsg
          stance: supports
          locator: CBDB:126880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126880）
          source: &a1
            id: s_SDp6kwAfqUvHiiZnG3xNsg
            source_type: api_record
            title: 中国历代人物传记资料库：王繼明（CBDB 126880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126880&o=json
            external_identifier: CBDB:126880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tVn7XEJbsmGvv3s3uChgVu
        subject_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
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
        - id: cs_NtD5GS5eiSv7Ufu5y27WAw
          claim_id: c_tVn7XEJbsmGvv3s3uChgVu
          source_id: s_SDp6kwAfqUvHiiZnG3xNsg
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
        id: c_j2NwN8nyXrjP3pOENtZ3Cj
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fzDgg2Xm8C_VpWdHi4646b
          claim_id: c_j2NwN8nyXrjP3pOENtZ3Cj
          source_id: s_EGuP7RatW83eAhWrCGqvxP
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EGuP7RatW83eAhWrCGqvxP
            source_type: api_record
            title: 中国历代人物传记资料库：王允文（CBDB 215078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215078&o=json
            external_identifier: CBDB:215078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.180Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5sMmYXtRexRwYuYUk2GvGP
        status: active
        display_name: 王允文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_wLO9pezThhU0UTRL9MmKcJ
        subject_person_id: p_BLobiWtWVSEQBtE86WxJzT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9UovoVbjKY3inURtmJl6Dy
          claim_id: c_wLO9pezThhU0UTRL9MmKcJ
          source_id: s_1utwdnLN96H8ziLntjTCoV
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百八十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1utwdnLN96H8ziLntjTCoV
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 215077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215077&o=json
            external_identifier: CBDB:215077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.178Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BLobiWtWVSEQBtE86WxJzT
        status: active
        display_name: 王儼
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王繼明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼明 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5sMmYXtRexRwYuYUk2GvGP | 王允文 | accepted |
| ancestors | p_BLobiWtWVSEQBtE86WxJzT | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼明（CBDB 126880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126880&o=json)
- [中国历代人物传记资料库：王儼（CBDB 215077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215077&o=json)
- [中国历代人物传记资料库：王允文（CBDB 215078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215078&o=json)
