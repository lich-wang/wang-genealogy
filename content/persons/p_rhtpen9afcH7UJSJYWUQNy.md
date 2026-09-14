---
schema: wang-person/v1
id: p_rhtpen9afcH7UJSJYWUQNy
status: active
merged_into: null
display_name: 王瓊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hWd26tRiEJTRA2nMuTUQDq
        subject_person_id: p_rhtpen9afcH7UJSJYWUQNy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rv8dJERi12oUGqyASpWyac
          claim_id: c_hWd26tRiEJTRA2nMuTUQDq
          source_id: s_qeDm4rt2rscWyTPHV25hEm
          stance: supports
          locator: CBDB:242769
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242769）
          source: &a1
            id: s_qeDm4rt2rscWyTPHV25hEm
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 242769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242769&o=json
            external_identifier: CBDB:242769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1t6wcAm5W47HB2xe18vEu3
        subject_person_id: p_rhtpen9afcH7UJSJYWUQNy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242769）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tQwOQLp21nOjGcLEyXSV6_
          claim_id: c_1t6wcAm5W47HB2xe18vEu3
          source_id: s_qeDm4rt2rscWyTPHV25hEm
          stance: supports
          locator: CBDB:242769
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aGrdq4WZKsPedD4_8UeEbI
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rhtpen9afcH7UJSJYWUQNy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iPbpPn6IGLhzndcoOinFw2
          claim_id: c_aGrdq4WZKsPedD4_8UeEbI
          source_id: s_10aSUErAVixRvf4heRLaj0
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓊 与 王瑞 为同胞（CBDB 记「弟」），王瑞 之父／母即 王瓊 之父／母。
          source:
            id: s_10aSUErAVixRvf4heRLaj0
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 242769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242769&o=json
            external_identifier: CBDB:242769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZBwZdB8tEY2KUEfDHqhpeB
        status: active
        display_name: 王景
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_V1C0BCtqoyZyXUumyc7kor
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rhtpen9afcH7UJSJYWUQNy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YMmr4mC4PI46A4DxukTUT2
          claim_id: c_V1C0BCtqoyZyXUumyc7kor
          source_id: s_10aSUErAVixRvf4heRLaj0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_10aSUErAVixRvf4heRLaj0
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 242769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242769&o=json
            external_identifier: CBDB:242769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7nLDqRUiM1HQGsWK6gxVHc
        status: active
        display_name: 王瑞
        merged_into_person_id: null
---

# 王瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊 | accepted |
| bio.summary | 王瓊，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242769） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZBwZdB8tEY2KUEfDHqhpeB | 王景 | accepted |
| other | p_7nLDqRUiM1HQGsWK6gxVHc | 王瑞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 242769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242769&o=json)
