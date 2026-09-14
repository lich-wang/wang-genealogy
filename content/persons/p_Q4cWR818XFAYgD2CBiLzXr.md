---
schema: wang-person/v1
id: p_Q4cWR818XFAYgD2CBiLzXr
status: active
merged_into: null
display_name: 王訥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UNezQYX18QnSu5ZfVX2fXs
        subject_person_id: p_Q4cWR818XFAYgD2CBiLzXr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1SM5fA8LH7h5J3JT6FyvLF
          claim_id: c_UNezQYX18QnSu5ZfVX2fXs
          source_id: s_SL17YxW4ehCCUrC7BcdsYh
          stance: supports
          locator: CBDB:215875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215875）
          source: &a1
            id: s_SL17YxW4ehCCUrC7BcdsYh
            source_type: api_record
            title: 中国历代人物传记资料库：王訥（CBDB 215875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215875&o=json
            external_identifier: CBDB:215875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.207Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wUfGfpGTa2nsYPd8hsJQhC
        subject_person_id: p_Q4cWR818XFAYgD2CBiLzXr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訥，明人物。萬曆五年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 215875）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hPoL9UqgIuvjKWLLeD3-r3
          claim_id: c_wUfGfpGTa2nsYPd8hsJQhC
          source_id: s_SL17YxW4ehCCUrC7BcdsYh
          stance: supports
          locator: CBDB:215875
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oH1MjxLixVv2ejvqHf13iI
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q4cWR818XFAYgD2CBiLzXr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SBXaNaTkY6z_Tl9pIujaSZ
          claim_id: c_oH1MjxLixVv2ejvqHf13iI
          source_id: s_u-Z1hARzTQlLTVti3XsXys
          stance: supports
          locator: CBDB：兄弟 王謙（124982）之父／母 王崇古
          quotation: null
          interpretation_note: 由兄弟关系推断：王訥 与 王謙 为同胞（CBDB 记「兄」），王謙 之父／母即 王訥 之父／母。
          source:
            id: s_u-Z1hARzTQlLTVti3XsXys
            source_type: api_record
            title: 中国历代人物传记资料库：王訥（CBDB 215875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215875&o=json
            external_identifier: CBDB:215875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uRxHoeETPENUnB4UpGZ636
        status: active
        display_name: 王崇古
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5PZpuuIOcFDzu747e5ZgaH
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Q4cWR818XFAYgD2CBiLzXr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3DgrpyqbqVII48jW6FurXv
          claim_id: c_5PZpuuIOcFDzu747e5ZgaH
          source_id: s_u-Z1hARzTQlLTVti3XsXys
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124982 王謙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_u-Z1hARzTQlLTVti3XsXys
            source_type: api_record
            title: 中国历代人物传记资料库：王訥（CBDB 215875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215875&o=json
            external_identifier: CBDB:215875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_68bfPNUHA98KKMwPnJ12C3
        status: active
        display_name: 王謙
        merged_into_person_id: null
---

# 王訥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訥 | accepted |
| bio.summary | 王訥，明人物。萬曆五年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 215875） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uRxHoeETPENUnB4UpGZ636 | 王崇古 | accepted |
| other | p_68bfPNUHA98KKMwPnJ12C3 | 王謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訥（CBDB 215875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215875&o=json)
