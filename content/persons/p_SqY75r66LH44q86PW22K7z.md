---
schema: wang-person/v1
id: p_SqY75r66LH44q86PW22K7z
status: active
merged_into: null
display_name: 盧氏
revision: 1
cbdb_id: 284142
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YHFHp6w86ngOOnOLGe-JO4
        subject_person_id: p_SqY75r66LH44q86PW22K7z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盧氏，明人物。正德十六年進士。（中国历代人物传记资料库 CBDB 284142）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i1nGg8o9wYIb77KYxqGSp9
          claim_id: c_YHFHp6w86ngOOnOLGe-JO4
          source_id: s_RrTgTOZYSvSFTFGedoKtXV
          stance: supports
          locator: CBDB:284142
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rFykvvKadC_9Jtzj8U_zxq
        subject_person_id: p_SqY75r66LH44q86PW22K7z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盧氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MfpW-zZ0bMq8Hioo-USr82
          claim_id: c_rFykvvKadC_9Jtzj8U_zxq
          source_id: s_RrTgTOZYSvSFTFGedoKtXV
          stance: supports
          locator: CBDB:284142
          quotation: null
          interpretation_note: CBDB 明确记录的王用賓配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
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
          source: *a1
      object_person:
        id: p_6BcNKRe82htPqYxnsGXoQy
        status: active
        display_name: 王用賓
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 盧氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 盧氏，明人物。正德十六年進士。（中国历代人物传记资料库 CBDB 284142） | accepted |
| name.primary | 盧氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6BcNKRe82htPqYxnsGXoQy | 王用賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：盧氏(王用賓妻)（CBDB 284142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284142&o=json)
