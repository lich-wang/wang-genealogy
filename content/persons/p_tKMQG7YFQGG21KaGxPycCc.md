---
schema: wang-person/v1
id: p_tKMQG7YFQGG21KaGxPycCc
status: active
merged_into: null
display_name: 王世業
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9NGoDp3E8U9D5ojU4t8Jym
        subject_person_id: p_tKMQG7YFQGG21KaGxPycCc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PSr4P2SBHKgCDQZJ1TKuWZ
          claim_id: c_9NGoDp3E8U9D5ojU4t8Jym
          source_id: s_t8UqHB467khTE2395aTNCb
          stance: supports
          locator: CBDB:325420
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325420）
          source: &a1
            id: s_t8UqHB467khTE2395aTNCb
            source_type: api_record
            title: 中国历代人物传记资料库：王世業（CBDB 325420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325420&o=json
            external_identifier: CBDB:325420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.200Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PG5kNTJa6c57GUsqnTFEUg
        subject_person_id: p_tKMQG7YFQGG21KaGxPycCc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世業，明人物。嘉靖三十八年進士，籍贯崑山，曾任四夷館譯字官。（中国历代人物传记资料库 CBDB 325420）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7pbrzwgpuKRUUe7oKAlz4Q
          claim_id: c_PG5kNTJa6c57GUsqnTFEUg
          source_id: s_t8UqHB467khTE2395aTNCb
          stance: supports
          locator: CBDB:325420
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_l_YsI-epbrxAY6cIRx-XLG
        subject_person_id: p_rhWqaakmtKs2T99dEuZoHh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tKMQG7YFQGG21KaGxPycCc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3fpVYG63oOAf96Y1qLGoKd
          claim_id: c_l_YsI-epbrxAY6cIRx-XLG
          source_id: s_iPV0D_d4j55vSKQU9X3dtH
          stance: supports
          locator: CBDB：兄弟 王世懋（34719）之父／母 王忬
          quotation: null
          interpretation_note: 由兄弟关系推断：王世業 与 王世懋 为同胞（CBDB 记「弟」），王世懋 之父／母即 王世業 之父／母。
          source:
            id: s_iPV0D_d4j55vSKQU9X3dtH
            source_type: api_record
            title: 中国历代人物传记资料库：王世業（CBDB 325420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325420&o=json
            external_identifier: CBDB:325420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rhWqaakmtKs2T99dEuZoHh
        status: active
        display_name: 王忬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_UuB71m4FEmSt_NnveHjZe1
        subject_person_id: p_38CvMQkfBCMzR3DNrBhBQJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tKMQG7YFQGG21KaGxPycCc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OYqiAZZ3qhwCgMXWHaWDLz
          claim_id: c_UuB71m4FEmSt_NnveHjZe1
          source_id: s_iPV0D_d4j55vSKQU9X3dtH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34719 王世懋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iPV0D_d4j55vSKQU9X3dtH
            source_type: api_record
            title: 中国历代人物传记资料库：王世業（CBDB 325420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325420&o=json
            external_identifier: CBDB:325420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_38CvMQkfBCMzR3DNrBhBQJ
        status: active
        display_name: 王世懋
        merged_into_person_id: null
---

# 王世業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世業 | accepted |
| bio.summary | 王世業，明人物。嘉靖三十八年進士，籍贯崑山，曾任四夷館譯字官。（中国历代人物传记资料库 CBDB 325420） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rhWqaakmtKs2T99dEuZoHh | 王忬 | accepted |
| other | p_38CvMQkfBCMzR3DNrBhBQJ | 王世懋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世業（CBDB 325420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325420&o=json)
