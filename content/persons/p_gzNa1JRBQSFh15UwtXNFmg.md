---
schema: wang-person/v1
id: p_gzNa1JRBQSFh15UwtXNFmg
status: active
merged_into: null
display_name: 王幼曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wdYXYG296Q17pZT5Mpy9Ty
        subject_person_id: p_gzNa1JRBQSFh15UwtXNFmg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幼曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1zH15DzGuB5MiDRsv3frK7
          claim_id: c_wdYXYG296Q17pZT5Mpy9Ty
          source_id: s_8n1iizcv5zBCf7tvjvQxot
          stance: supports
          locator: CBDB:545313
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545313）
          source: &a1
            id: s_8n1iizcv5zBCf7tvjvQxot
            source_type: api_record
            title: 中国历代人物传记资料库：王幼曾（CBDB 545313）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545313&o=json
            external_identifier: CBDB:545313
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_thmKCmsm1Ay6hMVhUoMD4H
        subject_person_id: p_gzNa1JRBQSFh15UwtXNFmg
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
        - id: cs_tszKM1DcGjsB8mxJxo3vfh
          claim_id: c_thmKCmsm1Ay6hMVhUoMD4H
          source_id: s_8n1iizcv5zBCf7tvjvQxot
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

# 王幼曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王幼曾 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王幼曾（CBDB 545313）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545313&o=json)
