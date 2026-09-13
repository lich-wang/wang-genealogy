---
schema: wang-person/v1
id: p_5FaPNgYpE7U714Zubq7h99
status: active
merged_into: null
display_name: 王懷英
cbdb_id: 21987
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uGT6UAmGWb4yw2ND6HrN9Q
        subject_person_id: p_5FaPNgYpE7U714Zubq7h99
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷英，宋人物。籍贯阜城，曾任尚書左右丞。（中国历代人物传记资料库 CBDB 21987）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_B2LU4eHrbwY_NNs8Fc8-ZD
          claim_id: c_uGT6UAmGWb4yw2ND6HrN9Q
          source_id: s_arzVGif6nqPr9g8jo1NDtL
          stance: supports
          locator: CBDB:21987
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_arzVGif6nqPr9g8jo1NDtL
            source_type: api_record
            title: 中国历代人物传记资料库：王懷英（CBDB 21987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21987&o=json
            external_identifier: CBDB:21987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RnkmCDz1qZm3Tis5UPvDVm
        subject_person_id: p_5FaPNgYpE7U714Zubq7h99
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_898xw4Db15DoG48ux821fo
          claim_id: c_RnkmCDz1qZm3Tis5UPvDVm
          source_id: s_arzVGif6nqPr9g8jo1NDtL
          stance: supports
          locator: CBDB:21987
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iXl4USocAHz8XyhCP2fMKC
        subject_person_id: p_aJyucbNuo6SKu4c6Y3x6DY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5FaPNgYpE7U714Zubq7h99
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dl7haNyLMHozKtRERipA7t
          claim_id: c_iXl4USocAHz8XyhCP2fMKC
          source_id: s_arzVGif6nqPr9g8jo1NDtL
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2068：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_arzVGif6nqPr9g8jo1NDtL
            source_type: api_record
            title: 中国历代人物传记资料库：王懷英（CBDB 21987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21987&o=json
            external_identifier: CBDB:21987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_aJyucbNuo6SKu4c6Y3x6DY
        status: active
        display_name: 王昭遠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懷英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王懷英，宋人物。籍贯阜城，曾任尚書左右丞。（中国历代人物传记资料库 CBDB 21987） | accepted |
| name.primary | 王懷英 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aJyucbNuo6SKu4c6Y3x6DY | 王昭遠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷英（CBDB 21987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21987&o=json)
