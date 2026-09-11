---
schema: wang-person/v1
id: p_E6K5e7Xk9yvQnbSUqCD5fD
status: active
merged_into: null
display_name: 王景某
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_645PGXEZ2Erk5fZbR3M4tE
        subject_person_id: p_E6K5e7Xk9yvQnbSUqCD5fD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dhNZYkHLMvP8oxLczFobHY
          claim_id: c_645PGXEZ2Erk5fZbR3M4tE
          source_id: s_s4BZwH7EdFaBv2NjhmXXSk
          stance: supports
          locator: CBDB:250849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250849）
          source: &a1
            id: s_s4BZwH7EdFaBv2NjhmXXSk
            source_type: api_record
            title: 中国历代人物传记资料库：王景某（CBDB 250849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250849&o=json
            external_identifier: CBDB:250849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6ijDNuvkyAzeG6vzBUooYP
        subject_person_id: p_E6K5e7Xk9yvQnbSUqCD5fD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景某，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 250849）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mv4HHuzFTLusXpe-jGxAuX
          claim_id: c_6ijDNuvkyAzeG6vzBUooYP
          source_id: s_s4BZwH7EdFaBv2NjhmXXSk
          stance: supports
          locator: CBDB:250849
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_AHlB8jUnHbxFVk_2WvRQBb
        subject_person_id: p_E6K5e7Xk9yvQnbSUqCD5fD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NCWXMHUiC6tyK4PRKjtWra
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hIAOeZBPn46kDQ05nJ_oHI
          claim_id: c_AHlB8jUnHbxFVk_2WvRQBb
          source_id: s_s4BZwH7EdFaBv2NjhmXXSk
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NCWXMHUiC6tyK4PRKjtWra
        status: active
        display_name: 王欽
        merged_into_person_id: null
  other: []
---

# 王景某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景某 | accepted |
| bio.summary | 王景某，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 250849） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_NCWXMHUiC6tyK4PRKjtWra | 王欽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景某（CBDB 250849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250849&o=json)
