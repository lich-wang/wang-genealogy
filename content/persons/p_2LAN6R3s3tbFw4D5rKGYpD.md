---
schema: wang-person/v1
id: p_2LAN6R3s3tbFw4D5rKGYpD
status: active
merged_into: null
display_name: 王震
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FzScP73FJ7e6ZU6G8tFCHR
        subject_person_id: p_2LAN6R3s3tbFw4D5rKGYpD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eKmb8Zuqmte9Np1rHvCF2k
          claim_id: c_FzScP73FJ7e6ZU6G8tFCHR
          source_id: s_7iVv2E87U924khQitZV3Mb
          stance: supports
          locator: CBDB:37849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37849）
          source: &a1
            id: s_7iVv2E87U924khQitZV3Mb
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 37849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37849&o=json
            external_identifier: CBDB:37849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ta6jq73SS4mzjPNsFi4iEG
        subject_person_id: p_2LAN6R3s3tbFw4D5rKGYpD
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
        - id: cs_cCLUMNHkJ8M2J8wuC4rf5T
          claim_id: c_Ta6jq73SS4mzjPNsFi4iEG
          source_id: s_7iVv2E87U924khQitZV3Mb
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

# 王震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王震（CBDB 37849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37849&o=json)
