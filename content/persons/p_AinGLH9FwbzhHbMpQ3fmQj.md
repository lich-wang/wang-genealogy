---
schema: wang-person/v1
id: p_AinGLH9FwbzhHbMpQ3fmQj
status: active
merged_into: null
display_name: 王世鈞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rtuDHW46KVvCwtmbSBNoPy
        subject_person_id: p_AinGLH9FwbzhHbMpQ3fmQj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P513JvY4PeBQturVcebhL8
          claim_id: c_rtuDHW46KVvCwtmbSBNoPy
          source_id: s_qwtc1ESVdBVq98uHA1MhtB
          stance: supports
          locator: CBDB:701881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701881）
          source: &a1
            id: s_qwtc1ESVdBVq98uHA1MhtB
            source_type: api_record
            title: 中国历代人物传记资料库：王世鈞（CBDB 701881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701881&o=json
            external_identifier: CBDB:701881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.808Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NoWNmedM7wF6CENv1Q5Ff6
        subject_person_id: p_AinGLH9FwbzhHbMpQ3fmQj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世鈞，清人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 701881）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R7XAI9FC8Uw94Csdas7wAG
          claim_id: c_NoWNmedM7wF6CENv1Q5Ff6
          source_id: s_qwtc1ESVdBVq98uHA1MhtB
          stance: supports
          locator: CBDB:701881
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
  descendants: []
  other: []
---

# 王世鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世鈞 | accepted |
| bio.summary | 王世鈞，清人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 701881） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世鈞（CBDB 701881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701881&o=json)
