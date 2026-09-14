---
schema: wang-person/v1
id: p_NNTF9YWYB26rR4f3GScgc3
status: active
merged_into: null
display_name: 王象乾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z2iRiZWdfTU7R8uqhdDA93
        subject_person_id: p_NNTF9YWYB26rR4f3GScgc3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ByMcTW3NPLmydswMeL39mv
          claim_id: c_z2iRiZWdfTU7R8uqhdDA93
          source_id: s_3w21ZBSPxoroG25yAPys1d
          stance: supports
          locator: CBDB:330752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330752）
          source: &a1
            id: s_3w21ZBSPxoroG25yAPys1d
            source_type: api_record
            title: 中国历代人物传记资料库：王象乾（CBDB 330752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330752&o=json
            external_identifier: CBDB:330752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HtVUpEQTyzynDpLp93yjrH
        subject_person_id: p_NNTF9YWYB26rR4f3GScgc3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象乾，明人物。嘉靖四十四年進士，籍贯新城。（中国历代人物传记资料库 CBDB 330752）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m_krAwORH5Puw0xNxxhZQa
          claim_id: c_HtVUpEQTyzynDpLp93yjrH
          source_id: s_3w21ZBSPxoroG25yAPys1d
          stance: supports
          locator: CBDB:330752
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8SYDXAr4BFh3-f-dY_UpWt
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NNTF9YWYB26rR4f3GScgc3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TlM-AZiFdvdT2QOVo3OW8A
          claim_id: c_8SYDXAr4BFh3-f-dY_UpWt
          source_id: s_DRcx4fgZaKTAM1YCgHh4MG
          stance: supports
          locator: CBDB：兄弟 王象坤（205267）之父／母 王之翰
          quotation: null
          interpretation_note: 由兄弟关系推断：王象乾 与 王象坤 为同胞（CBDB 记「弟」），王象坤 之父／母即 王象乾 之父／母。
          source:
            id: s_DRcx4fgZaKTAM1YCgHh4MG
            source_type: api_record
            title: 中国历代人物传记资料库：王象乾（CBDB 330752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330752&o=json
            external_identifier: CBDB:330752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AKu7Q79dhYjH69pKrRtR5y
        status: active
        display_name: 王之翰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_a40qcSD-9JdFnrejBuRc7U
        subject_person_id: p_NNTF9YWYB26rR4f3GScgc3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hkxRnkwdABHFBvtuuQxejY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FV3hKdA68FQwdfBrQMnAh6
          claim_id: c_a40qcSD-9JdFnrejBuRc7U
          source_id: s_DRcx4fgZaKTAM1YCgHh4MG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205267 王象坤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DRcx4fgZaKTAM1YCgHh4MG
            source_type: api_record
            title: 中国历代人物传记资料库：王象乾（CBDB 330752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330752&o=json
            external_identifier: CBDB:330752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hkxRnkwdABHFBvtuuQxejY
        status: active
        display_name: 王象坤
        merged_into_person_id: null
---

# 王象乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象乾 | accepted |
| bio.summary | 王象乾，明人物。嘉靖四十四年進士，籍贯新城。（中国历代人物传记资料库 CBDB 330752） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AKu7Q79dhYjH69pKrRtR5y | 王之翰 | accepted |
| other | p_hkxRnkwdABHFBvtuuQxejY | 王象坤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象乾（CBDB 330752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330752&o=json)
