---
schema: wang-person/v1
id: p_1RhEisFQ4zpkDJENf6z8aC
status: active
merged_into: null
display_name: 王越賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_po9gwgeqcvVY3biTDeEAdD
        subject_person_id: p_1RhEisFQ4zpkDJENf6z8aC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王越賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nsKMMQext7K8qSsRCNSzzs
          claim_id: c_po9gwgeqcvVY3biTDeEAdD
          source_id: s_LdeS7P8sVHnMuJnjfJ5A4M
          stance: supports
          locator: CBDB:445599
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445599）
          source: &a1
            id: s_LdeS7P8sVHnMuJnjfJ5A4M
            source_type: api_record
            title: 中国历代人物传记资料库：王越賓（CBDB 445599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445599&o=json
            external_identifier: CBDB:445599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.199Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w65T5n3PeVKxL4QCqSqV4L
        subject_person_id: p_1RhEisFQ4zpkDJENf6z8aC
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
        - id: cs_koeRiLd88su3wwpJgcx9pf
          claim_id: c_w65T5n3PeVKxL4QCqSqV4L
          source_id: s_LdeS7P8sVHnMuJnjfJ5A4M
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

# 王越賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王越賓 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王越賓（CBDB 445599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445599&o=json)
