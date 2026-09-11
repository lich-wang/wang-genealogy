---
schema: wang-person/v1
id: p_zCbWF6CJ6KC4k63KFLLK3D
status: active
merged_into: null
display_name: 王仁皎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tj2TmWvb3DZbVN5FzoQuNR
        subject_person_id: p_zCbWF6CJ6KC4k63KFLLK3D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁皎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xv7o4j42zfKfYRRj1tdCTF
          claim_id: c_tj2TmWvb3DZbVN5FzoQuNR
          source_id: s_mKNaBm6LX6p9CTg6W1GP9k
          stance: supports
          locator: CBDB:23512
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23512）
          source: &a1
            id: s_mKNaBm6LX6p9CTg6W1GP9k
            source_type: api_record
            title: 中国历代人物传记资料库：王仁皎（CBDB 23512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23512&o=json
            external_identifier: CBDB:23512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d98tPoa5N3KdD55WDunGq6
        subject_person_id: p_zCbWF6CJ6KC4k63KFLLK3D
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
        - id: cs_YpVwKrLUQmZ64xefaa2wCR
          claim_id: c_d98tPoa5N3KdD55WDunGq6
          source_id: s_mKNaBm6LX6p9CTg6W1GP9k
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
        id: c_-e4ysxXuYsuH2hxKObr0U1
        subject_person_id: p_zCbWF6CJ6KC4k63KFLLK3D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oShGPWRUUN6brzr17EdqQw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ujDOHyoYVTbg40eh51hVjE
          claim_id: c_-e4ysxXuYsuH2hxKObr0U1
          source_id: s_jPPBL33UjgyaXvD48g7NHg
          stance: supports
          locator: CBDB 双向互证（父 王仁皎 ⇄ 子 王應期）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_jPPBL33UjgyaXvD48g7NHg
            source_type: api_record
            title: 中国历代人物传记资料库：王應期（CBDB 23513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23513&o=json
            external_identifier: CBDB:23513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oShGPWRUUN6brzr17EdqQw
        status: active
        display_name: 王應期
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁皎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁皎 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oShGPWRUUN6brzr17EdqQw | 王應期 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁皎（CBDB 23512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23512&o=json)
- [中国历代人物传记资料库：王應期（CBDB 23513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23513&o=json)
