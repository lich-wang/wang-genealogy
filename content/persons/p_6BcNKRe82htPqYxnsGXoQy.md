---
schema: wang-person/v1
id: p_6BcNKRe82htPqYxnsGXoQy
status: active
merged_into: null
display_name: 王用賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ebq1pMCSsG4abgXfRY4vF8
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P3iKHSVU34fdy9Vo8F46cV
          claim_id: c_Ebq1pMCSsG4abgXfRY4vF8
          source_id: s_jrE49LbHYi16DqAT581UjL
          stance: supports
          locator: CBDB:202137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202137）
          source: &a1
            id: s_jrE49LbHYi16DqAT581UjL
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 202137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202137&o=json
            external_identifier: CBDB:202137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nFAEqWuy2HwAYvL3orMf7N
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1501年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pXJGWdr8MrULqdDtiXE4K8
          claim_id: c_nFAEqWuy2HwAYvL3orMf7N
          source_id: s_jrE49LbHYi16DqAT581UjL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GDa8jmt2wWJfxnVJAbZWS1
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ZcbvbvEtHHLeTa6BGELLG
          claim_id: c_GDa8jmt2wWJfxnVJAbZWS1
          source_id: s_jrE49LbHYi16DqAT581UjL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7mgjT_ApbHai_E2l2rQxZl
        subject_person_id: p_NuNTQZExjKcTBss2PH1NRS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6BcNKRe82htPqYxnsGXoQy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cc13neTgqZN_zjF6G6jn83
          claim_id: c_7mgjT_ApbHai_E2l2rQxZl
          source_id: s_jrE49LbHYi16DqAT581UjL
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第一百零六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NuNTQZExjKcTBss2PH1NRS
        status: active
        display_name: 王懋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_iLytA5Yn0bKx3ZiFbuIHUd
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SqY75r66LH44q86PW22K7z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bTgjBJGHrXU_j3WOlm_LlA
          claim_id: c_iLytA5Yn0bKx3ZiFbuIHUd
          source_id: s_RrTgTOZYSvSFTFGedoKtXV
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第一百零六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RrTgTOZYSvSFTFGedoKtXV
            source_type: api_record
            title: 中国历代人物传记资料库：盧氏(王用賓妻)（CBDB 284142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284142&o=json
            external_identifier: CBDB:284142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SqY75r66LH44q86PW22K7z
        status: active
        display_name: 盧氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_f4tA2jDkgjaaPkhyeWr5iG
        subject_person_id: p_7aUTPEtKBJQCs2MeHeH92w
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6BcNKRe82htPqYxnsGXoQy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5AV7j_36IaMb_fZjL-qvv3
          claim_id: c_f4tA2jDkgjaaPkhyeWr5iG
          source_id: s_jrE49LbHYi16DqAT581UjL
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第一百零六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7aUTPEtKBJQCs2MeHeH92w
        status: active
        display_name: 王福
        merged_into_person_id: null
    - claim:
        id: c_O-0Rojrn7OskN7p07ucBZd
        subject_person_id: p_NG6up6tyYjPFB9nq4tmUEG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6BcNKRe82htPqYxnsGXoQy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xOEPGEm7uBi8_em6_RKm-x
          claim_id: c_O-0Rojrn7OskN7p07ucBZd
          source_id: s_jrE49LbHYi16DqAT581UjL
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第一百零六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NG6up6tyYjPFB9nq4tmUEG
        status: active
        display_name: 王鑾
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王用賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用賓 | accepted |
| birth.date | 1501年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NuNTQZExjKcTBss2PH1NRS | 王懋 | accepted |
| spouses | p_SqY75r66LH44q86PW22K7z | 盧氏 | accepted |
| ancestors | p_7aUTPEtKBJQCs2MeHeH92w | 王福 | accepted |
| ancestors | p_NG6up6tyYjPFB9nq4tmUEG | 王鑾 | accepted |

## 外部来源

- [中国历代人物传记资料库：盧氏(王用賓妻)（CBDB 284142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284142&o=json)
- [中国历代人物传记资料库：王用賓（CBDB 202137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202137&o=json)
