---
schema: wang-person/v1
id: p_qivzHR7xYz6bzgiDCELpcc
status: active
merged_into: null
display_name: 王祝
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rzBdkj1TuWNB5QPvMTNKs1
        subject_person_id: p_qivzHR7xYz6bzgiDCELpcc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uubVdM3yGEFfh2oq3Q3cLT
          claim_id: c_rzBdkj1TuWNB5QPvMTNKs1
          source_id: s_LP44Qjv2T2zr3vYicedm3F
          stance: supports
          locator: CBDB:92053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92053）
          source: &a1
            id: s_LP44Qjv2T2zr3vYicedm3F
            source_type: api_record
            title: 中国历代人物传记资料库：王祝（CBDB 92053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92053&o=json
            external_identifier: CBDB:92053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.105Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EKzkhLuLev9qR7J9UA3PE3
        subject_person_id: p_qivzHR7xYz6bzgiDCELpcc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祝，唐人物。籍贯咸陽，身份为詩人，曾任給事中、州刺史。（中国历代人物传记资料库 CBDB 92053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eCR3OIjFBb_nHDWCbkKIKU
          claim_id: c_EKzkhLuLev9qR7J9UA3PE3
          source_id: s_LP44Qjv2T2zr3vYicedm3F
          stance: supports
          locator: CBDB:92053
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cATFwfwrUAUz-34l-ff-qZ
        subject_person_id: p_PMHDEn49o8y5aW5qiXbb15
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qivzHR7xYz6bzgiDCELpcc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JQfxeX3iCbaOLbHEStL3CO
          claim_id: c_cATFwfwrUAUz-34l-ff-qZ
          source_id: s_LP44Qjv2T2zr3vYicedm3F
          stance: supports
          locator: Pers DB / 唐代人物知識ベース，pers00180：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PMHDEn49o8y5aW5qiXbb15
        status: active
        display_name: 王琳
        merged_into_person_id: null
    - claim:
        id: c_RJsGu9Z0_GDSz0GT7aD8pI
        subject_person_id: p_PyPYdgPJF9TEybjfkDt91f
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qivzHR7xYz6bzgiDCELpcc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f5rEmG_1kGfjqQkG5BDvgj
          claim_id: c_RJsGu9Z0_GDSz0GT7aD8pI
          source_id: s_T1ghCs1VBUTNw5nSgpKgZg
          stance: supports
          locator: Pers DB / 唐代人物知識ベース，pers00180：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T1ghCs1VBUTNw5nSgpKgZg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王琳（91982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91982&o=json
            external_identifier: CBDB:91982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:43.980Z
            metadata_json: null
      object_person:
        id: p_PyPYdgPJF9TEybjfkDt91f
        status: active
        display_name: 王晙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王祝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祝 | accepted |
| bio.summary | 王祝，唐人物。籍贯咸陽，身份为詩人，曾任給事中、州刺史。（中国历代人物传记资料库 CBDB 92053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_PMHDEn49o8y5aW5qiXbb15 | 王琳 | accepted |
| ancestors | p_PyPYdgPJF9TEybjfkDt91f | 王晙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祝（CBDB 92053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92053&o=json)
- [CBDB 中国历代人物传记资料库：王琳（91982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91982&o=json)
