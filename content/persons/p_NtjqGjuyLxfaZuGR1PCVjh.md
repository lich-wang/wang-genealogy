---
schema: wang-person/v1
id: p_NtjqGjuyLxfaZuGR1PCVjh
status: active
merged_into: null
display_name: 王宣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K6Gk66n42GQra3e1bDbgYf
        subject_person_id: p_NtjqGjuyLxfaZuGR1PCVjh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_De3jvvGPy2T89wC4X9HbiF
          claim_id: c_K6Gk66n42GQra3e1bDbgYf
          source_id: s_9yFcVPeLWjYawJn54TYyAm
          stance: supports
          locator: CBDB:158494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158494）
          source: &a1
            id: s_9yFcVPeLWjYawJn54TYyAm
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 158494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158494&o=json
            external_identifier: CBDB:158494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qx928BSsdFAYvSAnxsVi75
        subject_person_id: p_NtjqGjuyLxfaZuGR1PCVjh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RCdR6p3MaTDpqach77hFDr
          claim_id: c_qx928BSsdFAYvSAnxsVi75
          source_id: s_9yFcVPeLWjYawJn54TYyAm
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
        id: c_DjzCCu72FQvZG9NxvXzXQm
        subject_person_id: p_yyG5m7BqW1DAadHkjg2Ep9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NtjqGjuyLxfaZuGR1PCVjh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IcZ9caGnldqK2ZNq4eke7c
          claim_id: c_DjzCCu72FQvZG9NxvXzXQm
          source_id: s_9yFcVPeLWjYawJn54TYyAm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yyG5m7BqW1DAadHkjg2Ep9
        status: active
        display_name: 王擇從
        merged_into_person_id: null
  children:
    - claim:
        id: c_ZCan-2DUmMSLf77uXDVxRx
        subject_person_id: p_NtjqGjuyLxfaZuGR1PCVjh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SSu9FS73zewgolKrTkFsVC
          claim_id: c_ZCan-2DUmMSLf77uXDVxRx
          source_id: s_9yFcVPeLWjYawJn54TYyAm
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 54：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vZnDcXFqAU9qkQZwwP1LXd
        status: active
        display_name: 王鍊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yyG5m7BqW1DAadHkjg2Ep9 | 王擇從 | accepted |
| children | p_vZnDcXFqAU9qkQZwwP1LXd | 王鍊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 158494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158494&o=json)
