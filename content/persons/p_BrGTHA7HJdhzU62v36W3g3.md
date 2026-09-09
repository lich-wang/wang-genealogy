---
schema: wang-person/v1
id: p_BrGTHA7HJdhzU62v36W3g3
status: active
merged_into: null
display_name: 王頊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TCYhkov44FvxYk9REHEmEv
        subject_person_id: p_BrGTHA7HJdhzU62v36W3g3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aZCoTjyZMmkV2gH6sSNUDa
          claim_id: c_TCYhkov44FvxYk9REHEmEv
          source_id: s_3cQDMBrAtKXoLxVZEmJQRD
          stance: supports
          locator: CBDB:380188
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380188）
          source: &a1
            id: s_3cQDMBrAtKXoLxVZEmJQRD
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 380188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380188&o=json
            external_identifier: CBDB:380188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.715Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2SQya1BEHkQgN9VaYyARsC
        subject_person_id: p_BrGTHA7HJdhzU62v36W3g3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EoHBpaNz7PLEW3HA7w6bBT
          claim_id: c_2SQya1BEHkQgN9VaYyARsC
          source_id: s_3cQDMBrAtKXoLxVZEmJQRD
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
  descendants: []
  other: []
---

# 王頊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頊 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王頊（CBDB 380188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380188&o=json)
