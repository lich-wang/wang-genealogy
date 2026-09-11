---
schema: wang-person/v1
id: p_1c4QnLa71e5q3V6XGMHJD9
status: active
merged_into: null
display_name: 王侃
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h4DZMrZNkzvgLxEnqAywC6
        subject_person_id: p_1c4QnLa71e5q3V6XGMHJD9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q2njKcfFKyg8rAFLjZ7XBT
          claim_id: c_h4DZMrZNkzvgLxEnqAywC6
          source_id: s_UCHtwePkitJMYP9sF3d9GC
          stance: supports
          locator: CBDB:565159
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（565159）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HYGDx83hob2dGBiTuJXbxW
        subject_person_id: p_1c4QnLa71e5q3V6XGMHJD9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃，清人物。籍贯秀水，身份为畫家。（中国历代人物传记资料库 CBDB 565159）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dzmaSNbBqRCKnkbqw4Y9QL
          claim_id: c_HYGDx83hob2dGBiTuJXbxW
          source_id: s_UCHtwePkitJMYP9sF3d9GC
          stance: supports
          locator: CBDB:565159
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_Eaa5E96QJY1xqYP5Tv5Jqz
        status: active
        display_name: 王德普
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王侃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侃 | accepted |
| bio.summary | 王侃，清人物。籍贯秀水，身份为畫家。（中国历代人物传记资料库 CBDB 565159） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Eaa5E96QJY1xqYP5Tv5Jqz | 王德普 | accepted |

## 外部来源

- [中国历代人物传记资料库：王侃（CBDB 565159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565159&o=json)
