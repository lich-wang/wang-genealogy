---
schema: wang-person/v1
id: p_VoaruXoEie1KQRFAAj192T
status: active
merged_into: null
display_name: 王士俊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FRGWCcuJ9NdoLFzKADADYw
        subject_person_id: p_VoaruXoEie1KQRFAAj192T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8tBh3rP9Rgyjb3LPeGKo2q
          claim_id: c_FRGWCcuJ9NdoLFzKADADYw
          source_id: s_FoDhaRB9GFvh3wk1L7KdR3
          stance: supports
          locator: CBDB:299916
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（299916）
          source: &a1
            id: s_FoDhaRB9GFvh3wk1L7KdR3
            source_type: api_record
            title: 中国历代人物传记资料库：王士俊（CBDB 299916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299916&o=json
            external_identifier: CBDB:299916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TNbfLrKcCN5sNi6PsQDyG4
        subject_person_id: p_VoaruXoEie1KQRFAAj192T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士俊，明人物。嘉靖十七年進士，籍贯安福，曾任知府。（中国历代人物传记资料库 CBDB 299916）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cTgj-eEdp5NaLhKjJVWELJ
          claim_id: c_TNbfLrKcCN5sNi6PsQDyG4
          source_id: s_FoDhaRB9GFvh3wk1L7KdR3
          stance: supports
          locator: CBDB:299916
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TmEhxQet3jyLyFWty5J0Tk
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VoaruXoEie1KQRFAAj192T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uc4kPK2WorbTMg4BPmIKfS
          claim_id: c_TmEhxQet3jyLyFWty5J0Tk
          source_id: s_i22HDqyNwpSFfpUVlwR-oT
          stance: supports
          locator: CBDB：兄弟 王士翹（203106）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王士俊 与 王士翹 为同胞（CBDB 记「弟」），王士翹 之父／母即 王士俊 之父／母。
          source:
            id: s_i22HDqyNwpSFfpUVlwR-oT
            source_type: api_record
            title: 中国历代人物传记资料库：王士俊（CBDB 299916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299916&o=json
            external_identifier: CBDB:299916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EBfbydRv4JZEiVZULEada1
        status: active
        display_name: 王寬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_r5RcJFFuqlDg2Y_qBuOhLS
        subject_person_id: p_VoaruXoEie1KQRFAAj192T
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_acwBn4E2ueYuXmC3T9fy34
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FQ4fpDsab3BqXscWsJnVjt
          claim_id: c_r5RcJFFuqlDg2Y_qBuOhLS
          source_id: s_i22HDqyNwpSFfpUVlwR-oT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203106 王士翹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_i22HDqyNwpSFfpUVlwR-oT
            source_type: api_record
            title: 中国历代人物传记资料库：王士俊（CBDB 299916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299916&o=json
            external_identifier: CBDB:299916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_acwBn4E2ueYuXmC3T9fy34
        status: active
        display_name: 王士翹
        merged_into_person_id: null
---

# 王士俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士俊 | accepted |
| bio.summary | 王士俊，明人物。嘉靖十七年進士，籍贯安福，曾任知府。（中国历代人物传记资料库 CBDB 299916） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EBfbydRv4JZEiVZULEada1 | 王寬 | accepted |
| other | p_acwBn4E2ueYuXmC3T9fy34 | 王士翹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士俊（CBDB 299916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299916&o=json)
