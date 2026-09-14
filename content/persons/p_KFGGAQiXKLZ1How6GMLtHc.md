---
schema: wang-person/v1
id: p_KFGGAQiXKLZ1How6GMLtHc
status: active
merged_into: null
display_name: 王進
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xmFLyQQ5Nh7LfRhWJ8ME8A
        subject_person_id: p_KFGGAQiXKLZ1How6GMLtHc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yWcDT1KH6sUeKGto1Re4eX
          claim_id: c_xmFLyQQ5Nh7LfRhWJ8ME8A
          source_id: s_BHyDZDrrhMhHuHzS97bRPR
          stance: supports
          locator: CBDB:283887
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283887）
          source: &a1
            id: s_BHyDZDrrhMhHuHzS97bRPR
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 283887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283887&o=json
            external_identifier: CBDB:283887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.156Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zeaQwxMVogcsMQDfK5MXsC
        subject_person_id: p_KFGGAQiXKLZ1How6GMLtHc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進，明人物。正德十六年進士，籍贯鄱陽。（中国历代人物传记资料库 CBDB 283887）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9_ef6Yg1CRuF0edGsGPI6X
          claim_id: c_zeaQwxMVogcsMQDfK5MXsC
          source_id: s_BHyDZDrrhMhHuHzS97bRPR
          stance: supports
          locator: CBDB:283887
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8sfMCMypL1Fjw72D2Dc8i1
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KFGGAQiXKLZ1How6GMLtHc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ipma9h2T-iKFnZdGVnOj2H
          claim_id: c_8sfMCMypL1Fjw72D2Dc8i1
          source_id: s_qsLVOt2BpVN6qyJetL34zd
          stance: supports
          locator: CBDB：兄弟 王道（202119）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王進 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王進 之父／母。
          source:
            id: s_qsLVOt2BpVN6qyJetL34zd
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 283887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283887&o=json
            external_identifier: CBDB:283887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oKkzy3873cWFyj79szDYmN
        status: active
        display_name: 王廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZWj-WdJVVXj5uBAocrHmUF
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KFGGAQiXKLZ1How6GMLtHc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OuwTJDURXe6UGZHYWDJ5wB
          claim_id: c_ZWj-WdJVVXj5uBAocrHmUF
          source_id: s_qsLVOt2BpVN6qyJetL34zd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202119 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qsLVOt2BpVN6qyJetL34zd
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 283887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283887&o=json
            external_identifier: CBDB:283887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AfLhoGsLbskzeER6Tw4Mw8
        status: active
        display_name: 王道
        merged_into_person_id: null
---

# 王進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進 | accepted |
| bio.summary | 王進，明人物。正德十六年進士，籍贯鄱陽。（中国历代人物传记资料库 CBDB 283887） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oKkzy3873cWFyj79szDYmN | 王廉 | accepted |
| other | p_AfLhoGsLbskzeER6Tw4Mw8 | 王道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進（CBDB 283887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283887&o=json)
