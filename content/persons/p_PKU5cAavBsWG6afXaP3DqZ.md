---
schema: wang-person/v1
id: p_PKU5cAavBsWG6afXaP3DqZ
status: active
merged_into: null
display_name: 孫氏
revision: 1
cbdb_id: 703811
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x4l6yKt8q9aZ_LTcZJHRla
        subject_person_id: p_PKU5cAavBsWG6afXaP3DqZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏，清人物。籍贯平陰。（中国历代人物传记资料库 CBDB 703811）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5doKjYW_AQKAfvcsWver8W
          claim_id: c_x4l6yKt8q9aZ_LTcZJHRla
          source_id: s_bG-vLkgXphx7Lms5FzT52L
          stance: supports
          locator: CBDB:703811
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bG-vLkgXphx7Lms5FzT52L
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王繼貞妻)（CBDB 703811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703811&o=json
            external_identifier: CBDB:703811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zAdH2ARsoNilIJhjBLVer9
        subject_person_id: p_PKU5cAavBsWG6afXaP3DqZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CGklwWiYwpwAvbKAd71oCw
          claim_id: c_zAdH2ARsoNilIJhjBLVer9
          source_id: s_bG-vLkgXphx7Lms5FzT52L
          stance: supports
          locator: CBDB:703811
          quotation: null
          interpretation_note: CBDB 明确记录的王繼貞配偶
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
        id: c_YzZZAcvG5Uc5Fh50RqQuQu
        subject_person_id: p_EJUASUpL4cTQGVdiMqigfg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PKU5cAavBsWG6afXaP3DqZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fuViDklQYMwlAWoiSk5Ml6
          claim_id: c_YzZZAcvG5Uc5Fh50RqQuQu
          source_id: s_bG-vLkgXphx7Lms5FzT52L
          stance: supports
          locator: 平陰縣志，lgid=630889：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EJUASUpL4cTQGVdiMqigfg
        status: active
        display_name: 王繼貞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孫氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孫氏，清人物。籍贯平陰。（中国历代人物传记资料库 CBDB 703811） | accepted |
| name.primary | 孫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_EJUASUpL4cTQGVdiMqigfg | 王繼貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王繼貞妻)（CBDB 703811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703811&o=json)
