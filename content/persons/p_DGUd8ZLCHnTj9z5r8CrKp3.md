---
schema: wang-person/v1
id: p_DGUd8ZLCHnTj9z5r8CrKp3
status: active
merged_into: null
display_name: 王時柏
cbdb_id: 308745
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bAdTvUJ6mG5wgBCVnUr2H4
        subject_person_id: p_DGUd8ZLCHnTj9z5r8CrKp3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時柏，明人物。嘉靖二十六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 308745）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3xm9KlHoN0qr5QFvy6YtcV
          claim_id: c_bAdTvUJ6mG5wgBCVnUr2H4
          source_id: s_oMwDfK5mbnLNJtk5iWFbeD
          stance: supports
          locator: CBDB:308745
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oMwDfK5mbnLNJtk5iWFbeD
            source_type: api_record
            title: 中国历代人物传记资料库：王時柏（CBDB 308745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308745&o=json
            external_identifier: CBDB:308745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_81naEMQLBqaMzEdXC4hNPT
        subject_person_id: p_DGUd8ZLCHnTj9z5r8CrKp3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時柏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_V458XBjbwifxQpZhFjPUGs
          claim_id: c_81naEMQLBqaMzEdXC4hNPT
          source_id: s_oMwDfK5mbnLNJtk5iWFbeD
          stance: supports
          locator: CBDB:308745
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4PnskOYndhCcA8RawwR8FK
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DGUd8ZLCHnTj9z5r8CrKp3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ScLmJfjuG1chCwq_J2EX2z
          claim_id: c_4PnskOYndhCcA8RawwR8FK
          source_id: s_3nsK_cqGO5jGxfiwDhviwT
          stance: supports
          locator: CBDB：兄弟 王時槐（126653）之父／母 王一善
          quotation: null
          interpretation_note: 由兄弟关系推断：王時柏 与 王時槐 为同胞（CBDB 记「弟」），王時槐 之父／母即 王時柏 之父／母。
          source:
            id: s_3nsK_cqGO5jGxfiwDhviwT
            source_type: api_record
            title: 中国历代人物传记资料库：王時柏（CBDB 308745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308745&o=json
            external_identifier: CBDB:308745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_irooaMCyG8JBBsSKCCr16W
        status: active
        display_name: 王一善
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rJowIWOVGRyDxXLupNa3-9
        subject_person_id: p_DGUd8ZLCHnTj9z5r8CrKp3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LPzYRgFrvHZtoR8m7zKq9v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wqPa3cxWhRC3j_cazYxsef
          claim_id: c_rJowIWOVGRyDxXLupNa3-9
          source_id: s_3nsK_cqGO5jGxfiwDhviwT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126653 王時槐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3nsK_cqGO5jGxfiwDhviwT
            source_type: api_record
            title: 中国历代人物传记资料库：王時柏（CBDB 308745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308745&o=json
            external_identifier: CBDB:308745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LPzYRgFrvHZtoR8m7zKq9v
        status: active
        display_name: 王時槐
        merged_into_person_id: null
---

# 王時柏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時柏，明人物。嘉靖二十六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 308745） | accepted |
| name.primary | 王時柏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_irooaMCyG8JBBsSKCCr16W | 王一善 | accepted |
| other | p_LPzYRgFrvHZtoR8m7zKq9v | 王時槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時柏（CBDB 308745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308745&o=json)
