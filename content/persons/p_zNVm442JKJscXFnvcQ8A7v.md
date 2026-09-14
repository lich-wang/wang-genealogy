---
schema: wang-person/v1
id: p_zNVm442JKJscXFnvcQ8A7v
status: active
merged_into: null
display_name: 王萃
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_twLmuWPQd7q9pJrpftaBCF
        subject_person_id: p_zNVm442JKJscXFnvcQ8A7v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bnv8x8qoJAeXKtK2SkVNp9
          claim_id: c_twLmuWPQd7q9pJrpftaBCF
          source_id: s_LNoSEY4GiNXiXXrAThPYdE
          stance: supports
          locator: CBDB:286132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286132）
          source: &a1
            id: s_LNoSEY4GiNXiXXrAThPYdE
            source_type: api_record
            title: 中国历代人物传记资料库：王萃（CBDB 286132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286132&o=json
            external_identifier: CBDB:286132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.232Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MaV1GaE1iCKmN6sVHe7Xy8
        subject_person_id: p_zNVm442JKJscXFnvcQ8A7v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萃，明人物。正德十六年進士，籍贯石首。（中国历代人物传记资料库 CBDB 286132）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XSLpdBqQcbp7dWOeXrsIaH
          claim_id: c_MaV1GaE1iCKmN6sVHe7Xy8
          source_id: s_LNoSEY4GiNXiXXrAThPYdE
          stance: supports
          locator: CBDB:286132
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SBx_XNVjFirEKykR_t2yao
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zNVm442JKJscXFnvcQ8A7v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ufC3-EWzztsN6VOZgr2z7
          claim_id: c_SBx_XNVjFirEKykR_t2yao
          source_id: s_BDW29Nw4iLus4LoPo9gAfY
          stance: supports
          locator: CBDB：兄弟 王芳（202288）之父／母 王伯載
          quotation: null
          interpretation_note: 由兄弟关系推断：王萃 与 王芳 为同胞（CBDB 记「弟」），王芳 之父／母即 王萃 之父／母。
          source:
            id: s_BDW29Nw4iLus4LoPo9gAfY
            source_type: api_record
            title: 中国历代人物传记资料库：王萃（CBDB 286132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286132&o=json
            external_identifier: CBDB:286132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1VVqD7EPGnVHF4wrhTw5JU
        status: active
        display_name: 王伯載
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_am6KtVPhdFdi81ePwF6WHG
        subject_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zNVm442JKJscXFnvcQ8A7v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qf8E58A2A4jHNBI7oT7Wg_
          claim_id: c_am6KtVPhdFdi81ePwF6WHG
          source_id: s_BDW29Nw4iLus4LoPo9gAfY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202288 王芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BDW29Nw4iLus4LoPo9gAfY
            source_type: api_record
            title: 中国历代人物传记资料库：王萃（CBDB 286132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286132&o=json
            external_identifier: CBDB:286132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AEPDTFs3e2Ci1GpeDM9fLo
        status: active
        display_name: 王芳
        merged_into_person_id: null
---

# 王萃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萃 | accepted |
| bio.summary | 王萃，明人物。正德十六年進士，籍贯石首。（中国历代人物传记资料库 CBDB 286132） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1VVqD7EPGnVHF4wrhTw5JU | 王伯載 | accepted |
| other | p_AEPDTFs3e2Ci1GpeDM9fLo | 王芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萃（CBDB 286132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286132&o=json)
