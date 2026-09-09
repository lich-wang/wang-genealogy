---
schema: wang-person/v1
id: p_6EgJgDfq47oAUNwQ4fsuqj
status: active
merged_into: null
display_name: 王建昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7vcrx7mR9W813ex414V4QS
        subject_person_id: p_6EgJgDfq47oAUNwQ4fsuqj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mph8uDy78GXaBCjrJxzqmN
          claim_id: c_7vcrx7mR9W813ex414V4QS
          source_id: s_QTN6Wqwv1UqBiJTm62Fiq9
          stance: supports
          locator: CBDB:637592
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637592）
          source: &a1
            id: s_QTN6Wqwv1UqBiJTm62Fiq9
            source_type: api_record
            title: 中国历代人物传记资料库：王建昌（CBDB 637592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637592&o=json
            external_identifier: CBDB:637592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8D3UTqzbjeN6CEynFce71J
        subject_person_id: p_6EgJgDfq47oAUNwQ4fsuqj
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
        - id: cs_54JrUUncu2V74dGixAquqH
          claim_id: c_8D3UTqzbjeN6CEynFce71J
          source_id: s_QTN6Wqwv1UqBiJTm62Fiq9
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

# 王建昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建昌 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建昌（CBDB 637592）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637592&o=json)
