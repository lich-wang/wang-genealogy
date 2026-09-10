---
schema: wang-person/v1
id: p_Eaa5E96QJY1xqYP5Tv5Jqz
status: active
merged_into: null
display_name: 王德普
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rTdCLxCQqgCVtkubhQvJMb
        subject_person_id: p_Eaa5E96QJY1xqYP5Tv5Jqz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德普
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1F9vCX3ZmFWNSPukHE15Gk
          claim_id: c_rTdCLxCQqgCVtkubhQvJMb
          source_id: s_A8HXjU7a2thTA5xDLCY58S
          stance: supports
          locator: CBDB:565091
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（565091）
          source: &a1
            id: s_A8HXjU7a2thTA5xDLCY58S
            source_type: api_record
            title: 中国历代人物传记资料库：王德普（CBDB 565091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565091&o=json
            external_identifier: CBDB:565091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YgCifJ5dgSrzssMFfwZ2Xu
        subject_person_id: p_Eaa5E96QJY1xqYP5Tv5Jqz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LX8CF4sAdpo3JProhtW2sx
          claim_id: c_YgCifJ5dgSrzssMFfwZ2Xu
          source_id: s_A8HXjU7a2thTA5xDLCY58S
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
        id: c_3gxMrqW0ElXctswJ8nLMqJ
        subject_person_id: p_1c4QnLa71e5q3V6XGMHJD9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Eaa5E96QJY1xqYP5Tv5Jqz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NWLLhkfPC14pkUsian5e4o
          claim_id: c_3gxMrqW0ElXctswJ8nLMqJ
          source_id: s_UCHtwePkitJMYP9sF3d9GC
          stance: supports
          locator: 國朝畫徵錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UCHtwePkitJMYP9sF3d9GC
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 565159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565159&o=json
            external_identifier: CBDB:565159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1c4QnLa71e5q3V6XGMHJD9
        status: active
        display_name: 王侃
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德普

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德普 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1c4QnLa71e5q3V6XGMHJD9 | 王侃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德普（CBDB 565091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565091&o=json)
- [中国历代人物传记资料库：王侃（CBDB 565159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565159&o=json)
