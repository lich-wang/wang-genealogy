---
schema: wang-person/v1
id: p_KdQpPo4Mc67dFEQ6BS1ADk
status: active
merged_into: null
display_name: 王佐臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1z4BtZbW4PAUVVpB1roT7X
        subject_person_id: p_KdQpPo4Mc67dFEQ6BS1ADk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ndf4fcjApTeM99Lpmz5w3L
          claim_id: c_1z4BtZbW4PAUVVpB1roT7X
          source_id: s_xwKVmFjz6DuxVvMRw1LGa9
          stance: supports
          locator: CBDB:574133
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574133）
          source: &a1
            id: s_xwKVmFjz6DuxVvMRw1LGa9
            source_type: api_record
            title: 中国历代人物传记资料库：王佐臣（CBDB 574133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574133&o=json
            external_identifier: CBDB:574133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_in3se7ffKoUi5ySFwmnv4P
        subject_person_id: p_KdQpPo4Mc67dFEQ6BS1ADk
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
        - id: cs_TecJ1e1bpXx4Lvd4aKXNd2
          claim_id: c_in3se7ffKoUi5ySFwmnv4P
          source_id: s_xwKVmFjz6DuxVvMRw1LGa9
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

# 王佐臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐臣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐臣（CBDB 574133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574133&o=json)
