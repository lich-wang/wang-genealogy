---
schema: wang-person/v1
id: p_Pu2x9TKf86JgQ9g7MASE5D
status: active
merged_into: null
display_name: 王繼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_emTB9zE8YjaxYygeitSkbQ
        subject_person_id: p_Pu2x9TKf86JgQ9g7MASE5D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6MKJcj734kstMhmF9sWN4N
          claim_id: c_emTB9zE8YjaxYygeitSkbQ
          source_id: s_29iEQ8GXjzhkszQfjf5tCj
          stance: supports
          locator: CBDB:299499
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（299499）
          source: &a1
            id: s_29iEQ8GXjzhkszQfjf5tCj
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 299499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299499&o=json
            external_identifier: CBDB:299499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wJ6B2LQzJgPNFLVW2zZ46B
        subject_person_id: p_Pu2x9TKf86JgQ9g7MASE5D
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
        - id: cs_PXgxPJkg3HiDUCYyhXPAkU
          claim_id: c_wJ6B2LQzJgPNFLVW2zZ46B
          source_id: s_29iEQ8GXjzhkszQfjf5tCj
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
        id: c_y4-sJNIwFI7zR_Wc5KWX_E
        subject_person_id: p_Pu2x9TKf86JgQ9g7MASE5D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VC8bBPzAyQehLYq3eBykXc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l6AfHvdF0ndAqvV1VWYq45
          claim_id: c_y4-sJNIwFI7zR_Wc5KWX_E
          source_id: s_29iEQ8GXjzhkszQfjf5tCj
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第七十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VC8bBPzAyQehLYq3eBykXc
        status: active
        display_name: 王時儉
        merged_into_person_id: null
  other: []
---

# 王繼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_VC8bBPzAyQehLYq3eBykXc | 王時儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼（CBDB 299499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299499&o=json)
