---
schema: wang-person/v1
id: p_HBv3gqaCeD9R1p1rseFDcQ
status: active
merged_into: null
display_name: 王立
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f7JpH2eeJ4QUWvxHT6d3Av
        subject_person_id: p_HBv3gqaCeD9R1p1rseFDcQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L9GAJSV3CAXhBzVS3L9xRk
          claim_id: c_f7JpH2eeJ4QUWvxHT6d3Av
          source_id: s_y6Tcp2MNrJLqBDgsYupRms
          stance: supports
          locator: CBDB:38592
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38592）
          source: &a1
            id: s_y6Tcp2MNrJLqBDgsYupRms
            source_type: api_record
            title: 中国历代人物传记资料库：王立（CBDB 38592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38592&o=json
            external_identifier: CBDB:38592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yGR6wR2K6uQ7LCiB2QWFX2
        subject_person_id: p_HBv3gqaCeD9R1p1rseFDcQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立，宋人物。入仕進士，曾任安撫使、太常寺少卿、正將。（中国历代人物传记资料库 CBDB 38592）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HfqPkjh654D2ZyVMbxTrUd
          claim_id: c_yGR6wR2K6uQ7LCiB2QWFX2
          source_id: s_y6Tcp2MNrJLqBDgsYupRms
          stance: supports
          locator: CBDB:38592
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立 | accepted |
| bio.summary | 王立，宋人物。入仕進士，曾任安撫使、太常寺少卿、正將。（中国历代人物传记资料库 CBDB 38592） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立（CBDB 38592）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38592&o=json)
