---
schema: wang-person/v1
id: p_dtfxxQD6WPUNAn2Z7EEP2P
status: active
merged_into: null
display_name: 王立
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z5nmsbYvUwQSRkeJ9e8NEg
        subject_person_id: p_dtfxxQD6WPUNAn2Z7EEP2P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bZmn1L5E6UyvAgUyhDU4bP
          claim_id: c_Z5nmsbYvUwQSRkeJ9e8NEg
          source_id: s_BPKSgKVTfXPqvabsdq399Z
          stance: supports
          locator: CBDB:301186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301186）
          source: &a1
            id: s_BPKSgKVTfXPqvabsdq399Z
            source_type: api_record
            title: 中国历代人物传记资料库：王立（CBDB 301186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301186&o=json
            external_identifier: CBDB:301186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_39UYMmuA6MmfDvW8jLM8Tf
        subject_person_id: p_dtfxxQD6WPUNAn2Z7EEP2P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立，明人物。嘉靖十七年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 301186）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RObYLmuWBdxG8smSltWUTA
          claim_id: c_39UYMmuA6MmfDvW8jLM8Tf
          source_id: s_BPKSgKVTfXPqvabsdq399Z
          stance: supports
          locator: CBDB:301186
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e9EWHl2rXtcGRY-hwjEk58
        subject_person_id: p_rdQpvSEbMvzFVt6su4bz6E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dtfxxQD6WPUNAn2Z7EEP2P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K6J--fZ35Wi_8sdcNZbYbJ
          claim_id: c_e9EWHl2rXtcGRY-hwjEk58
          source_id: s_3Ff-bR2YBXM67pvmZa8IQ7
          stance: supports
          locator: CBDB：兄弟 王德（68161）之父／母 王浥
          quotation: null
          interpretation_note: 由兄弟关系推断：王立 与 王德 为同胞（CBDB 记「弟」），王德 之父／母即 王立 之父／母。
          source:
            id: s_3Ff-bR2YBXM67pvmZa8IQ7
            source_type: api_record
            title: 中国历代人物传记资料库：王立（CBDB 301186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301186&o=json
            external_identifier: CBDB:301186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rdQpvSEbMvzFVt6su4bz6E
        status: active
        display_name: 王浥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1ayS_1cXDVxT_SZjy9aLoC
        subject_person_id: p_dtfxxQD6WPUNAn2Z7EEP2P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TFHjZ9pbVFtz9OdN8ziPpd
          claim_id: c_1ayS_1cXDVxT_SZjy9aLoC
          source_id: s_3Ff-bR2YBXM67pvmZa8IQ7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68161 王德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3Ff-bR2YBXM67pvmZa8IQ7
            source_type: api_record
            title: 中国历代人物传记资料库：王立（CBDB 301186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301186&o=json
            external_identifier: CBDB:301186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xq77ND3Yirb2ZWfhHcArnK
        status: active
        display_name: 王德
        merged_into_person_id: null
---

# 王立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立 | accepted |
| bio.summary | 王立，明人物。嘉靖十七年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 301186） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rdQpvSEbMvzFVt6su4bz6E | 王浥 | accepted |
| other | p_xq77ND3Yirb2ZWfhHcArnK | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立（CBDB 301186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301186&o=json)
