---
schema: wang-person/v1
id: p_GUSUrt9str7wJ1e8NF4iHf
status: active
merged_into: null
display_name: 王宓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6t2sV2xGFRvfLPB8wAUf6F
        subject_person_id: p_GUSUrt9str7wJ1e8NF4iHf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RxHC4ydNFvo2yzCDH1NHiN
          claim_id: c_6t2sV2xGFRvfLPB8wAUf6F
          source_id: s_tMwXF55iF1AL6RVRDpqX7t
          stance: supports
          locator: CBDB:688502
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688502）
          source: &a1
            id: s_tMwXF55iF1AL6RVRDpqX7t
            source_type: api_record
            title: 中国历代人物传记资料库：王宓（CBDB 688502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688502&o=json
            external_identifier: CBDB:688502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HfSjrp1EHbQ3BpbPW3w7YD
        subject_person_id: p_GUSUrt9str7wJ1e8NF4iHf
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
        - id: cs_dCjpx2jsop27HSrT7WXju6
          claim_id: c_HfSjrp1EHbQ3BpbPW3w7YD
          source_id: s_tMwXF55iF1AL6RVRDpqX7t
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

# 王宓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宓 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宓（CBDB 688502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688502&o=json)
