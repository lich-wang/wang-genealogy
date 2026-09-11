---
schema: wang-person/v1
id: p_8rr68g8cnLvivKeGYTCMFh
status: active
merged_into: null
display_name: 王美
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RGukHxK3Xh9BMfh3xN7upZ
        subject_person_id: p_8rr68g8cnLvivKeGYTCMFh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_swAGq7KMBu1kFP6CRLqzLv
          claim_id: c_RGukHxK3Xh9BMfh3xN7upZ
          source_id: s_77A4dW2ey4uhVsp6WzwGG7
          stance: supports
          locator: CBDB:329102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329102）
          source: &a1
            id: s_77A4dW2ey4uhVsp6WzwGG7
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 329102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329102&o=json
            external_identifier: CBDB:329102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hCnvzm3dA1jN9m1cwjBeLL
        subject_person_id: p_8rr68g8cnLvivKeGYTCMFh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wrTpxfy2wQj9KzfJMWAxos
          claim_id: c_hCnvzm3dA1jN9m1cwjBeLL
          source_id: s_77A4dW2ey4uhVsp6WzwGG7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_9io_i65ZiZNolTkBpzxyds
        subject_person_id: p_8rr68g8cnLvivKeGYTCMFh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oCU6m3KhN1qYCRgVAU6mzE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yk5WRBrMWu_UvDxmANhznx
          claim_id: c_9io_i65ZiZNolTkBpzxyds
          source_id: s_77A4dW2ey4uhVsp6WzwGG7
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百八十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oCU6m3KhN1qYCRgVAU6mzE
        status: active
        display_name: 王嘉賓
        merged_into_person_id: null
  other: []
---

# 王美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王美 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oCU6m3KhN1qYCRgVAU6mzE | 王嘉賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王美（CBDB 329102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329102&o=json)
