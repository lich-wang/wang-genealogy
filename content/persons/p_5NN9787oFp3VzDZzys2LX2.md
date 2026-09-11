---
schema: wang-person/v1
id: p_5NN9787oFp3VzDZzys2LX2
status: active
merged_into: null
display_name: 王子唐
cbdb_id: 162294
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DKH95GKVKvXKRcqckky8NK
        subject_person_id: p_5NN9787oFp3VzDZzys2LX2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子唐，唐人物。中国历代人物传记资料库（CBDB）以人物编号 162294 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs__Nbh5wDKUcu8QwjzgG1t00
          claim_id: c_DKH95GKVKvXKRcqckky8NK
          source_id: s_4XnX4SnoqPLr22ecH7fg4p
          stance: supports
          locator: CBDB:162294
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_4XnX4SnoqPLr22ecH7fg4p
            source_type: api_record
            title: 中国历代人物传记资料库：王子唐（CBDB 162294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162294&o=json
            external_identifier: CBDB:162294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LnAwqN1QdjiLQvqv1iFdnG
        subject_person_id: p_5NN9787oFp3VzDZzys2LX2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子唐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5A2mEAi2zoiPdqjJ7X8zLa
          claim_id: c_LnAwqN1QdjiLQvqv1iFdnG
          source_id: s_4XnX4SnoqPLr22ecH7fg4p
          stance: supports
          locator: CBDB:162294
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_4XnX4SnoqPLr22ecH7fg4p
            source_type: api_record
            title: 中国历代人物传记资料库：王子唐（CBDB 162294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162294&o=json
            external_identifier: CBDB:162294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_34CvCS-cNy5u06xWMa7i_Z
        subject_person_id: p_5NN9787oFp3VzDZzys2LX2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B5KZt7a7y3pDdyg18Yfg3Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CC9M83t6Y7fw3yulPZ_9PN
          claim_id: c_34CvCS-cNy5u06xWMa7i_Z
          source_id: s_hhLZZVAQJy3rSAS5gYjS5Y
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Longshuo27：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hhLZZVAQJy3rSAS5gYjS5Y
            source_type: api_record
            title: 中国历代人物传记资料库：王方大（CBDB 142534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142534&o=json
            external_identifier: CBDB:142534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B5KZt7a7y3pDdyg18Yfg3Y
        status: active
        display_name: 王方大
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子唐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子唐，唐人物。中国历代人物传记资料库（CBDB）以人物编号 162294 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王子唐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_B5KZt7a7y3pDdyg18Yfg3Y | 王方大 | accepted |

## 外部来源

- [中国历代人物传记资料库：王方大（CBDB 142534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142534&o=json)
- [中国历代人物传记资料库：王子唐（CBDB 162294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162294&o=json)
