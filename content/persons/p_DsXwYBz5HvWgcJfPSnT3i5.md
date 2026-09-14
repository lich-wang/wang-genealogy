---
schema: wang-person/v1
id: p_DsXwYBz5HvWgcJfPSnT3i5
status: active
merged_into: null
display_name: 王謙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qUtCWCZTaPqwVo6G6ywy1T
        subject_person_id: p_DsXwYBz5HvWgcJfPSnT3i5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JNKbT8r97qrdL2TjCABdU7
          claim_id: c_qUtCWCZTaPqwVo6G6ywy1T
          source_id: s_UJBdHWxpmY1Lj94BaahuzC
          stance: supports
          locator: CBDB:215745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215745）
          source: &a1
            id: s_UJBdHWxpmY1Lj94BaahuzC
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 215745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215745&o=json
            external_identifier: CBDB:215745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.195Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WdQvEgZQEPt5c2jEyxhTdm
        subject_person_id: p_DsXwYBz5HvWgcJfPSnT3i5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙，明人物。萬曆五年進士，籍贯烏程，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 215745）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aWXeEGqpH-AavOPSssLVCv
          claim_id: c_WdQvEgZQEPt5c2jEyxhTdm
          source_id: s_UJBdHWxpmY1Lj94BaahuzC
          stance: supports
          locator: CBDB:215745
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VSk1bcQBIvhREhNCFffA3S
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DsXwYBz5HvWgcJfPSnT3i5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hp1fQeUJW0D_Uhl-4Elfkv
          claim_id: c_VSk1bcQBIvhREhNCFffA3S
          source_id: s_hRC-ZEr9I6ecBImPHaSvMH
          stance: supports
          locator: CBDB：兄弟 王豫（206279）之父／母 王來聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王謙 与 王豫 为同胞（CBDB 记「弟」），王豫 之父／母即 王謙 之父／母。
          source:
            id: s_hRC-ZEr9I6ecBImPHaSvMH
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 215745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215745&o=json
            external_identifier: CBDB:215745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X44YhNxEhhrLSWmgtLLBJw
        status: active
        display_name: 王來聘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_VNfaPS9hvSXxhjiOh2ZaPC
        subject_person_id: p_DsXwYBz5HvWgcJfPSnT3i5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rOVffZotKo1BX9DJ2__sCa
          claim_id: c_VNfaPS9hvSXxhjiOh2ZaPC
          source_id: s_hRC-ZEr9I6ecBImPHaSvMH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206279 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hRC-ZEr9I6ecBImPHaSvMH
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 215745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215745&o=json
            external_identifier: CBDB:215745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dJSjDNjDHVG2RbXzuMWW8y
        status: active
        display_name: 王豫
        merged_into_person_id: null
---

# 王謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙 | accepted |
| bio.summary | 王謙，明人物。萬曆五年進士，籍贯烏程，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 215745） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X44YhNxEhhrLSWmgtLLBJw | 王來聘 | accepted |
| other | p_dJSjDNjDHVG2RbXzuMWW8y | 王豫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謙（CBDB 215745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215745&o=json)
