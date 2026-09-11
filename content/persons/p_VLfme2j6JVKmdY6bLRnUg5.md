---
schema: wang-person/v1
id: p_VLfme2j6JVKmdY6bLRnUg5
status: active
merged_into: null
display_name: 王法
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKtJ2WrtKeHQfy5KK32JcA
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王法
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZxZkCBjN1rRLvyRsBRHXKX
          claim_id: c_DKtJ2WrtKeHQfy5KK32JcA
          source_id: s_bCBKKNkA6YiPxLd61kAJv6
          stance: supports
          locator: CBDB:321152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（321152）
          source: &a1
            id: s_bCBKKNkA6YiPxLd61kAJv6
            source_type: api_record
            title: 中国历代人物传记资料库：王法（CBDB 321152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321152&o=json
            external_identifier: CBDB:321152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.083Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_msSKYkdXygaUiWV2R3GGVL
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
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
        - id: cs_W8TKRrcKGkr2ES47wANFth
          claim_id: c_msSKYkdXygaUiWV2R3GGVL
          source_id: s_bCBKKNkA6YiPxLd61kAJv6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_V1wwuVVBYO1SsLv3ZUSk4b
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4I-fzHW2n8zbFYqzy75taO
          claim_id: c_V1wwuVVBYO1SsLv3ZUSk4b
          source_id: s_bCBKKNkA6YiPxLd61kAJv6
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T3W95sW7SgUDh6EEZUezDy
        status: active
        display_name: 王道充
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王法

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王法 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_T3W95sW7SgUDh6EEZUezDy | 王道充 | accepted |

## 外部来源

- [中国历代人物传记资料库：王法（CBDB 321152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321152&o=json)
