---
schema: wang-person/v1
id: p_hozZDXneQ8T8v9FK9fXgsk
status: active
merged_into: null
display_name: 王輿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4FKoCGWAeMz8oS1g4WB7Aq
        subject_person_id: p_hozZDXneQ8T8v9FK9fXgsk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N34qnC6T7fknjFQnETBH5e
          claim_id: c_4FKoCGWAeMz8oS1g4WB7Aq
          source_id: s_RXwEJBdK8CZsK2HEs2bbkj
          stance: supports
          locator: CBDB:45810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45810）
          source: &a1
            id: s_RXwEJBdK8CZsK2HEs2bbkj
            source_type: api_record
            title: 中国历代人物传记资料库：王輿（CBDB 45810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45810&o=json
            external_identifier: CBDB:45810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.666Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JdHhfns6KB31kLUBK2Pq6w
        subject_person_id: p_hozZDXneQ8T8v9FK9fXgsk
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
        - id: cs_PCDLRaR98AreV8K4Ng3YWE
          claim_id: c_JdHhfns6KB31kLUBK2Pq6w
          source_id: s_RXwEJBdK8CZsK2HEs2bbkj
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

# 王輿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輿 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輿（CBDB 45810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45810&o=json)
