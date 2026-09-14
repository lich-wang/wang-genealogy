---
schema: wang-person/v1
id: p_Co38TuriorcDEDV5rGaWUd
status: active
merged_into: null
display_name: 王逵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PWCSfHWoPNoktzk17PiBnc
        subject_person_id: p_Co38TuriorcDEDV5rGaWUd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VdrM58LiSZTpxxJMfNCLL7
          claim_id: c_PWCSfHWoPNoktzk17PiBnc
          source_id: s_L4BKixmCvUpWHiiCFBNFQ6
          stance: supports
          locator: CBDB:296149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296149）
          source: &a1
            id: s_L4BKixmCvUpWHiiCFBNFQ6
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 296149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296149&o=json
            external_identifier: CBDB:296149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VbjZBf93b2XH4nxWLwUtKr
        subject_person_id: p_Co38TuriorcDEDV5rGaWUd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵，明人物。嘉靖十四年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 296149）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UaBmulZ1GVCFrBHYLMSKyO
          claim_id: c_VbjZBf93b2XH4nxWLwUtKr
          source_id: s_L4BKixmCvUpWHiiCFBNFQ6
          stance: supports
          locator: CBDB:296149
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_A-rkPJuqLigBU0fOCjDfs1
        subject_person_id: p_GFBurspQ3EyXZg3MXH57h2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Co38TuriorcDEDV5rGaWUd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NlCr6T1ISHsqwM2dvCa22P
          claim_id: c_A-rkPJuqLigBU0fOCjDfs1
          source_id: s_EQ_cYbUEf3NTZcSUjHJsbi
          stance: supports
          locator: CBDB：兄弟 王達（202886）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王逵 与 王達 为同胞（CBDB 记「弟」），王達 之父／母即 王逵 之父／母。
          source:
            id: s_EQ_cYbUEf3NTZcSUjHJsbi
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 296149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296149&o=json
            external_identifier: CBDB:296149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GFBurspQ3EyXZg3MXH57h2
        status: active
        display_name: 王政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EgD5Lkw0AdEHe2SMnwy5yM
        subject_person_id: p_Co38TuriorcDEDV5rGaWUd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x7zHx1JQBodQZpV9KHxSJL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5TQEROh7KAFXyYt8P7umXZ
          claim_id: c_EgD5Lkw0AdEHe2SMnwy5yM
          source_id: s_EQ_cYbUEf3NTZcSUjHJsbi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202886 王達）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EQ_cYbUEf3NTZcSUjHJsbi
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 296149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296149&o=json
            external_identifier: CBDB:296149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x7zHx1JQBodQZpV9KHxSJL
        status: active
        display_name: 王達
        merged_into_person_id: null
---

# 王逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逵 | accepted |
| bio.summary | 王逵，明人物。嘉靖十四年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 296149） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GFBurspQ3EyXZg3MXH57h2 | 王政 | accepted |
| other | p_x7zHx1JQBodQZpV9KHxSJL | 王達 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逵（CBDB 296149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296149&o=json)
