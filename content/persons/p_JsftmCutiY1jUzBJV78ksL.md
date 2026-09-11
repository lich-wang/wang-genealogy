---
schema: wang-person/v1
id: p_JsftmCutiY1jUzBJV78ksL
status: active
merged_into: null
display_name: 王嗣復
cbdb_id: 119746
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CHzu1dz1bGHYNzbzsHvkRV
        subject_person_id: p_JsftmCutiY1jUzBJV78ksL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣復，宋人物。中国历代人物传记资料库（CBDB）以人物编号 119746 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Sz4xzUJNN3jw7Dj8oZzMHu
          claim_id: c_CHzu1dz1bGHYNzbzsHvkRV
          source_id: s_eFhswNdB17TrNVr5kjFWB7
          stance: supports
          locator: CBDB:119746
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bi4z72fuQb1h5FM6cKsS6h
        subject_person_id: p_JsftmCutiY1jUzBJV78ksL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MsLYvyrMZkwQpecSsFPC2p
          claim_id: c_Bi4z72fuQb1h5FM6cKsS6h
          source_id: s_eFhswNdB17TrNVr5kjFWB7
          stance: supports
          locator: CBDB:119746
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 宋
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_SbS7EDk9cP5WPJaxzN9VFv
        status: active
        display_name: 王著
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嗣復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嗣復，宋人物。中国历代人物传记资料库（CBDB）以人物编号 119746 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王嗣復 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SbS7EDk9cP5WPJaxzN9VFv | 王著 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嗣復（CBDB 119746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119746&o=json)
