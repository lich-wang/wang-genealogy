---
schema: wang-person/v1
id: p_QkVjCs2adG3HPFyMu98fVN
status: active
merged_into: null
display_name: 王謨
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q95e1miN72AuqvN4KSmWkE
        subject_person_id: p_QkVjCs2adG3HPFyMu98fVN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5kQ8X75X5wp6Y6KLWdx94Y
          claim_id: c_Q95e1miN72AuqvN4KSmWkE
          source_id: s_YeMYkaHsH1uJyKF1cpFocr
          stance: supports
          locator: CBDB:238056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238056）
          source: &a1
            id: s_YeMYkaHsH1uJyKF1cpFocr
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 238056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238056&o=json
            external_identifier: CBDB:238056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PPWXMmbcNd4JQMhP3Vzyfp
        subject_person_id: p_QkVjCs2adG3HPFyMu98fVN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謨，明人物。正统七年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 238056）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6VfjJsVmKrxQQRGtzWiWBv
          claim_id: c_PPWXMmbcNd4JQMhP3Vzyfp
          source_id: s_YeMYkaHsH1uJyKF1cpFocr
          stance: supports
          locator: CBDB:238056
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cu2SvT-MkJvjz5unuOhfgC
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QkVjCs2adG3HPFyMu98fVN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WA9zKo6G5UiiSdnz1wfaGf
          claim_id: c_cu2SvT-MkJvjz5unuOhfgC
          source_id: s_2KhHCcws643IKxHW_NFpxH
          stance: supports
          locator: CBDB：兄弟 王詔（67953）之父／母 王仕復
          quotation: null
          interpretation_note: 由兄弟关系推断：王謨 与 王詔 为同胞（CBDB 记「弟」），王詔 之父／母即 王謨 之父／母。
          source:
            id: s_2KhHCcws643IKxHW_NFpxH
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 238056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238056&o=json
            external_identifier: CBDB:238056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zr3cc57cGmUXGbD4psHLyS
        status: active
        display_name: 王仕復
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PfgpzrUZ89CvxXYC4-NqPR
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QkVjCs2adG3HPFyMu98fVN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gkEDyXo_6nC56E6efVolbk
          claim_id: c_PfgpzrUZ89CvxXYC4-NqPR
          source_id: s_2KhHCcws643IKxHW_NFpxH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67953 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2KhHCcws643IKxHW_NFpxH
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 238056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238056&o=json
            external_identifier: CBDB:238056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8Sfy82F6BmihArAucn9Vuw
        status: active
        display_name: 王詔
        merged_into_person_id: null
---

# 王謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謨 | accepted |
| bio.summary | 王謨，明人物。正统七年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 238056） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Zr3cc57cGmUXGbD4psHLyS | 王仕復 | accepted |
| other | p_8Sfy82F6BmihArAucn9Vuw | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謨（CBDB 238056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238056&o=json)
