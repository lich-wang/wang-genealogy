---
schema: wang-person/v1
id: p_8NZNv7f7tQow6sK17omZEp
status: active
merged_into: null
display_name: 王賁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cJnLHYj9ptaEfpZnUaGFmP
        subject_person_id: p_8NZNv7f7tQow6sK17omZEp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QfzkrLT5RuHSw97AbgerEX
          claim_id: c_cJnLHYj9ptaEfpZnUaGFmP
          source_id: s_3PyZyN6h8HcUYRAL73RnY7
          stance: supports
          locator: CBDB:38805
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38805）
          source: &a1
            id: s_3PyZyN6h8HcUYRAL73RnY7
            source_type: api_record
            title: 中国历代人物传记资料库：王賁（CBDB 38805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38805&o=json
            external_identifier: CBDB:38805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_48W4DgJRreL1NDiLfY8dJc
        subject_person_id: p_8NZNv7f7tQow6sK17omZEp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賁，宋人物。籍贯台州，曾任書院堂長。（中国历代人物传记资料库 CBDB 38805）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z3yEvN76wogpKgERCN1Ll-
          claim_id: c_48W4DgJRreL1NDiLfY8dJc
          source_id: s_3PyZyN6h8HcUYRAL73RnY7
          stance: supports
          locator: CBDB:38805
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
        id: c_PtwxRY3Cxck0YJhVtzgnEG
        subject_person_id: p_8NZNv7f7tQow6sK17omZEp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PuVEHMVH38vEwm28eSyeVn
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FKfG0GD2SN-j-zvHCWBN34
          claim_id: c_PtwxRY3Cxck0YJhVtzgnEG
          source_id: s_3PyZyN6h8HcUYRAL73RnY7
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PuVEHMVH38vEwm28eSyeVn
        status: active
        display_name: 王欽若
        merged_into_person_id: null
    - claim:
        id: c_HeszQ6UARr4mXfZFwB518W
        subject_person_id: p_8NZNv7f7tQow6sK17omZEp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SbS7EDk9cP5WPJaxzN9VFv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YdAclwFLN1kfM-AC47-IAB
          claim_id: c_HeszQ6UARr4mXfZFwB518W
          source_id: s_3PyZyN6h8HcUYRAL73RnY7
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SbS7EDk9cP5WPJaxzN9VFv
        status: active
        display_name: 王著
        merged_into_person_id: null
  other: []
---

# 王賁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賁 | accepted |
| bio.summary | 王賁，宋人物。籍贯台州，曾任書院堂長。（中国历代人物传记资料库 CBDB 38805） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_PuVEHMVH38vEwm28eSyeVn | 王欽若 | accepted |
| descendants | p_SbS7EDk9cP5WPJaxzN9VFv | 王著 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賁（CBDB 38805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38805&o=json)
