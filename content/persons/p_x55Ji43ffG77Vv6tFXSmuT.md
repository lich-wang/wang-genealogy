---
schema: wang-person/v1
id: p_x55Ji43ffG77Vv6tFXSmuT
status: active
merged_into: null
display_name: 王諧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mL9fUtbQC6SGYeNnP9BCMN
        subject_person_id: p_x55Ji43ffG77Vv6tFXSmuT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X17kmohcUFvRGzknM4FQG8
          claim_id: c_mL9fUtbQC6SGYeNnP9BCMN
          source_id: s_wUUJVAZ65PNCAP4o6UFKRm
          stance: supports
          locator: CBDB:332118
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332118）
          source: &a1
            id: s_wUUJVAZ65PNCAP4o6UFKRm
            source_type: api_record
            title: 中国历代人物传记资料库：王諧（CBDB 332118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332118&o=json
            external_identifier: CBDB:332118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CwGscz6DdF9E5W9T8JVrAW
        subject_person_id: p_x55Ji43ffG77Vv6tFXSmuT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諧，明人物。嘉靖四十四年進士，籍贯什邡。（中国历代人物传记资料库 CBDB 332118）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lVA0uJ4rMg3CPbujgAafJm
          claim_id: c_CwGscz6DdF9E5W9T8JVrAW
          source_id: s_wUUJVAZ65PNCAP4o6UFKRm
          stance: supports
          locator: CBDB:332118
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Rt0aKya-i9M60tFZfaplkW
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x55Ji43ffG77Vv6tFXSmuT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-yL_upjd8MZa_oFcXLnPU2
          claim_id: c_Rt0aKya-i9M60tFZfaplkW
          source_id: s_IiQKvT0O45o7f4CBWerSVt
          stance: supports
          locator: CBDB：兄弟 王謠（205360）之父／母 王本堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王諧 与 王謠 为同胞（CBDB 记「兄」），王謠 之父／母即 王諧 之父／母。
          source:
            id: s_IiQKvT0O45o7f4CBWerSVt
            source_type: api_record
            title: 中国历代人物传记资料库：王諧（CBDB 332118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332118&o=json
            external_identifier: CBDB:332118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qqsY6t9Q8faV4F4CdLeZ5T
        status: active
        display_name: 王本堅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kqATrxBpBCBSR_RI9_-YSU
        subject_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x55Ji43ffG77Vv6tFXSmuT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MBAsIOTLU4BWBVRTGKHznX
          claim_id: c_kqATrxBpBCBSR_RI9_-YSU
          source_id: s_IiQKvT0O45o7f4CBWerSVt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205360 王謠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IiQKvT0O45o7f4CBWerSVt
            source_type: api_record
            title: 中国历代人物传记资料库：王諧（CBDB 332118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332118&o=json
            external_identifier: CBDB:332118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UMUkjo8ahM3AKur1S9jMgA
        status: active
        display_name: 王謠
        merged_into_person_id: null
---

# 王諧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諧 | accepted |
| bio.summary | 王諧，明人物。嘉靖四十四年進士，籍贯什邡。（中国历代人物传记资料库 CBDB 332118） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qqsY6t9Q8faV4F4CdLeZ5T | 王本堅 | accepted |
| other | p_UMUkjo8ahM3AKur1S9jMgA | 王謠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諧（CBDB 332118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332118&o=json)
