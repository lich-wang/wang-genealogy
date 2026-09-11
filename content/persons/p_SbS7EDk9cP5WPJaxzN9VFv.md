---
schema: wang-person/v1
id: p_SbS7EDk9cP5WPJaxzN9VFv
status: active
merged_into: null
display_name: 王著
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AXD5MT83a988wirmarFXT1
        subject_person_id: p_SbS7EDk9cP5WPJaxzN9VFv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王著
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Cpn8BovE366unWZMRowZ3L
          claim_id: c_AXD5MT83a988wirmarFXT1
          source_id: s_n6xNx8QGRKPQZCzNFa6yQ1
          stance: supports
          locator: CBDB:38965
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38965）
          source: &a1
            id: s_n6xNx8QGRKPQZCzNFa6yQ1
            source_type: api_record
            title: 中国历代人物传记资料库：王著（CBDB 38965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38965&o=json
            external_identifier: CBDB:38965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.572Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_N2T7C6TiRmJHTHZeELKcJx
        subject_person_id: p_SbS7EDk9cP5WPJaxzN9VFv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 990年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B5uN6jE51eWLh2c5ih5863
          claim_id: c_N2T7C6TiRmJHTHZeELKcJx
          source_id: s_n6xNx8QGRKPQZCzNFa6yQ1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bt8DWcquMs89BRfPuJBmKZ
        subject_person_id: p_SbS7EDk9cP5WPJaxzN9VFv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zHA4xTe8ok5AHYstC8Wgt1
          claim_id: c_bt8DWcquMs89BRfPuJBmKZ
          source_id: s_n6xNx8QGRKPQZCzNFa6yQ1
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
        id: c_RkdHo_L6N_TUpd1t2JW9M7
        subject_person_id: p_SbS7EDk9cP5WPJaxzN9VFv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JsftmCutiY1jUzBJV78ksL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nH_XSdsKaSS25Avl-61pDz
          claim_id: c_RkdHo_L6N_TUpd1t2JW9M7
          source_id: s_eFhswNdB17TrNVr5kjFWB7
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eFhswNdB17TrNVr5kjFWB7
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣復（CBDB 119746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119746&o=json
            external_identifier: CBDB:119746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JsftmCutiY1jUzBJV78ksL
        status: active
        display_name: 王嗣復
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
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
          source:
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
      object_person:
        id: p_8NZNv7f7tQow6sK17omZEp
        status: active
        display_name: 王賁
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王著

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王著 | accepted |
| death.date | 990年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JsftmCutiY1jUzBJV78ksL | 王嗣復 | accepted |
| ancestors | p_8NZNv7f7tQow6sK17omZEp | 王賁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賁（CBDB 38805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38805&o=json)
- [中国历代人物传记资料库：王嗣復（CBDB 119746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119746&o=json)
- [中国历代人物传记资料库：王著（CBDB 38965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38965&o=json)
