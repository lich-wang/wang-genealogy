---
schema: wang-person/v1
id: p_dE72cY4c8ZZxZC93SFdLUt
status: active
merged_into: null
display_name: 王杏村
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YED2wQGZiVoGWGcAcr9Nto
        subject_person_id: p_dE72cY4c8ZZxZC93SFdLUt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杏村
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vdCQY47ab7BnyV1gchhPNd
          claim_id: c_YED2wQGZiVoGWGcAcr9Nto
          source_id: s_4in2iDJSBHdxPQMKPa8enn
          stance: supports
          locator: CBDB:638663
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638663）
          source: &a1
            id: s_4in2iDJSBHdxPQMKPa8enn
            source_type: api_record
            title: 中国历代人物传记资料库：王杏村（CBDB 638663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638663&o=json
            external_identifier: CBDB:638663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cZZB9YzSCYYA23Qz2DPSjs
        subject_person_id: p_dE72cY4c8ZZxZC93SFdLUt
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
        - id: cs_k6fFL6tGThmbKj7Qs1zJcE
          claim_id: c_cZZB9YzSCYYA23Qz2DPSjs
          source_id: s_4in2iDJSBHdxPQMKPa8enn
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

# 王杏村

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杏村 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王杏村（CBDB 638663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638663&o=json)
