---
schema: wang-person/v1
id: p_G2XFpBRY8Ki5ZsVdfBfVZZ
status: active
merged_into: null
display_name: 王府兒
cbdb_id: 148283
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iRK4EmsbBvLd94b4g79cUp
        subject_person_id: p_G2XFpBRY8Ki5ZsVdfBfVZZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王府兒，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148283 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_59w_EKWLQjRecDUaT5cz5L
          claim_id: c_iRK4EmsbBvLd94b4g79cUp
          source_id: s_n8Vax9v2qoXTj5XWxFak2K
          stance: supports
          locator: CBDB:148283
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_n8Vax9v2qoXTj5XWxFak2K
            source_type: api_record
            title: 中国历代人物传记资料库：王府兒（CBDB 148283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148283&o=json
            external_identifier: CBDB:148283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dj5ZCNkUYJ8XiKa88BiHCF
        subject_person_id: p_G2XFpBRY8Ki5ZsVdfBfVZZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王府兒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_55asDPEW859E82Ww2u6kRU
          claim_id: c_dj5ZCNkUYJ8XiKa88BiHCF
          source_id: s_n8Vax9v2qoXTj5XWxFak2K
          stance: supports
          locator: CBDB:148283
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_n8Vax9v2qoXTj5XWxFak2K
            source_type: api_record
            title: 中国历代人物传记资料库：王府兒（CBDB 148283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148283&o=json
            external_identifier: CBDB:148283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pCW0M8HQcu-0QycN_00ThX
        subject_person_id: p_UV3co1QXVmpbgDP6L1Wo4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G2XFpBRY8Ki5ZsVdfBfVZZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dN_2faMH4JV6odZbcA9MfR
          claim_id: c_pCW0M8HQcu-0QycN_00ThX
          source_id: s_n8Vax9v2qoXTj5XWxFak2K
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 55：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UV3co1QXVmpbgDP6L1Wo4p
        status: active
        display_name: 王師
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王府兒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王府兒，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148283 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王府兒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UV3co1QXVmpbgDP6L1Wo4p | 王師 | accepted |

## 外部来源

- [中国历代人物传记资料库：王府兒（CBDB 148283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148283&o=json)
