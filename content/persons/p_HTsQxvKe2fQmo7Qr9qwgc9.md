---
schema: wang-person/v1
id: p_HTsQxvKe2fQmo7Qr9qwgc9
status: active
merged_into: null
display_name: 王化原
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sCYosA36bFUQumE2n6RyrK
        subject_person_id: p_HTsQxvKe2fQmo7Qr9qwgc9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化原
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bbtvLPvkgQJEJk9goAiZVE
          claim_id: c_sCYosA36bFUQumE2n6RyrK
          source_id: s_4eLZMKBs598es5GtzWXZYB
          stance: supports
          locator: CBDB:542751
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（542751）
          source: &a1
            id: s_4eLZMKBs598es5GtzWXZYB
            source_type: api_record
            title: 中国历代人物传记资料库：王化原（CBDB 542751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=542751&o=json
            external_identifier: CBDB:542751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CusSzVyA98zQ3rPVw4F3GL
        subject_person_id: p_HTsQxvKe2fQmo7Qr9qwgc9
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
        - id: cs_Xm8UnzDpEDABK1YkZr6UNB
          claim_id: c_CusSzVyA98zQ3rPVw4F3GL
          source_id: s_4eLZMKBs598es5GtzWXZYB
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

# 王化原

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化原 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化原（CBDB 542751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=542751&o=json)
