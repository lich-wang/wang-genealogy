---
schema: wang-person/v1
id: p_mc7KWinz9eERjkDBrVhc1q
status: active
merged_into: null
display_name: 王冀
cbdb_id: 324111
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_49FMAFCTvFygjafTj7forw
        subject_person_id: p_mc7KWinz9eERjkDBrVhc1q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冀，明人物。嘉靖三十八年進士，籍贯祁門。（中国历代人物传记资料库 CBDB 324111）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_11LbpU5w15F9xTx7ICXfLp
          claim_id: c_49FMAFCTvFygjafTj7forw
          source_id: s_5TF3TSXoNXigqKtUQQGXCz
          stance: supports
          locator: CBDB:324111
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5TF3TSXoNXigqKtUQQGXCz
            source_type: api_record
            title: 中国历代人物传记资料库：王冀（CBDB 324111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324111&o=json
            external_identifier: CBDB:324111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pYBmBoJFaxDguJBt32vHH8
        subject_person_id: p_mc7KWinz9eERjkDBrVhc1q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WT8boF4Hm8FxmS8xRwJjih
          claim_id: c_pYBmBoJFaxDguJBt32vHH8
          source_id: s_5TF3TSXoNXigqKtUQQGXCz
          stance: supports
          locator: CBDB:324111
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SprHfF41DprlV46vXl54CP
        subject_person_id: p_mc7KWinz9eERjkDBrVhc1q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8NPdF6bMzdEKeYeQPicyvc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Zn5CFICvvDCDxGlMzip8G
          claim_id: c_SprHfF41DprlV46vXl54CP
          source_id: s_XVT2fw7HKCHNMeu3XYgq3M
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XVT2fw7HKCHNMeu3XYgq3M
            source_type: api_record
            title: 中国历代人物传记资料库：王之翰（CBDB 204787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204787&o=json
            external_identifier: CBDB:204787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8NPdF6bMzdEKeYeQPicyvc
        status: active
        display_name: 王之翰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王冀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王冀，明人物。嘉靖三十八年進士，籍贯祁門。（中国历代人物传记资料库 CBDB 324111） | accepted |
| name.primary | 王冀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8NPdF6bMzdEKeYeQPicyvc | 王之翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冀（CBDB 324111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324111&o=json)
- [中国历代人物传记资料库：王之翰（CBDB 204787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204787&o=json)
