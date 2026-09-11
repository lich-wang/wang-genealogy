---
schema: wang-person/v1
id: p_brAX6iJgSLXNAWYFVTrNj2
status: active
merged_into: null
display_name: 王思敬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ju2XR5v48GJjuDCjBMVr7p
        subject_person_id: p_brAX6iJgSLXNAWYFVTrNj2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_si8V2cPqkxjSNRGQ49doKa
          claim_id: c_Ju2XR5v48GJjuDCjBMVr7p
          source_id: s_gqnqFQKHQg8RhCHv8E9AuX
          stance: supports
          locator: CBDB:158363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158363）
          source: &a1
            id: s_gqnqFQKHQg8RhCHv8E9AuX
            source_type: api_record
            title: 中国历代人物传记资料库：王思敬（CBDB 158363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158363&o=json
            external_identifier: CBDB:158363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T5sCDcEFM8vN3kDbRqd6Sb
        subject_person_id: p_brAX6iJgSLXNAWYFVTrNj2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思敬，唐人物。籍贯高平。（中国历代人物传记资料库 CBDB 158363）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bikrru2FrLmEKlx29CPuH2
          claim_id: c_T5sCDcEFM8vN3kDbRqd6Sb
          source_id: s_gqnqFQKHQg8RhCHv8E9AuX
          stance: supports
          locator: CBDB:158363
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hPbODIyZywCtKcHNBbZkLK
        subject_person_id: p_xDHPR2Kj84VvoDTL88JAeh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_brAX6iJgSLXNAWYFVTrNj2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9te_W-D-ZmVdX8aR6JB71S
          claim_id: c_hPbODIyZywCtKcHNBbZkLK
          source_id: s_gqnqFQKHQg8RhCHv8E9AuX
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xDHPR2Kj84VvoDTL88JAeh
        status: active
        display_name: 王懷仁
        merged_into_person_id: null
  children:
    - claim:
        id: c_CfAY4vvoJrJ9pOPZBAluim
        subject_person_id: p_brAX6iJgSLXNAWYFVTrNj2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rUMuK7CzfJfHKJ88kFi4jQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NP1aMPwdfOCZJt7zZ8Ow0A
          claim_id: c_CfAY4vvoJrJ9pOPZBAluim
          source_id: s_gqnqFQKHQg8RhCHv8E9AuX
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 37：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rUMuK7CzfJfHKJ88kFi4jQ
        status: active
        display_name: 王如琬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思敬 | accepted |
| bio.summary | 王思敬，唐人物。籍贯高平。（中国历代人物传记资料库 CBDB 158363） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xDHPR2Kj84VvoDTL88JAeh | 王懷仁 | accepted |
| children | p_rUMuK7CzfJfHKJ88kFi4jQ | 王如琬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思敬（CBDB 158363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158363&o=json)
