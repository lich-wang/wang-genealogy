---
schema: wang-person/v1
id: p_5wJSfvhwiQaqtpQNLNJgEs
status: active
merged_into: null
display_name: 王顯周
cbdb_id: 232793
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RgLDb1dPfZLGFh7fKUA5WC
        subject_person_id: p_5wJSfvhwiQaqtpQNLNJgEs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯周，明人物。籍贯河內。（中国历代人物传记资料库 CBDB 232793）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_g4HcxXcmgGcBy3_Hvoqp-c
          claim_id: c_RgLDb1dPfZLGFh7fKUA5WC
          source_id: s_qG1a9zQat7upAUrH1uxfDR
          stance: supports
          locator: CBDB:232793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qG1a9zQat7upAUrH1uxfDR
            source_type: api_record
            title: 中国历代人物传记资料库：王顯周（CBDB 232793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232793&o=json
            external_identifier: CBDB:232793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iuvdHngtoZo1B4CXsSLCKS
        subject_person_id: p_5wJSfvhwiQaqtpQNLNJgEs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fGj4NQ7tTXBpxjoQrnzcMk
          claim_id: c_iuvdHngtoZo1B4CXsSLCKS
          source_id: s_qG1a9zQat7upAUrH1uxfDR
          stance: supports
          locator: CBDB:232793
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Unjfbtv3gj4vVZciluadAu
        subject_person_id: p_gEPN4Y1sSEhqz6ktqB2iGE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5wJSfvhwiQaqtpQNLNJgEs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kqFXBlU4oendfi7ldHrb-l
          claim_id: c_Unjfbtv3gj4vVZciluadAu
          source_id: s_qG1a9zQat7upAUrH1uxfDR
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第二十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qG1a9zQat7upAUrH1uxfDR
            source_type: api_record
            title: 中国历代人物传记资料库：王顯周（CBDB 232793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232793&o=json
            external_identifier: CBDB:232793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_gEPN4Y1sSEhqz6ktqB2iGE
        status: active
        display_name: 王所用
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王顯周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王顯周，明人物。籍贯河內。（中国历代人物传记资料库 CBDB 232793） | accepted |
| name.primary | 王顯周 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gEPN4Y1sSEhqz6ktqB2iGE | 王所用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王顯周（CBDB 232793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232793&o=json)
