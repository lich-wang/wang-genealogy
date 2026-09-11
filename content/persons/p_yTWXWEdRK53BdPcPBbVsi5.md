---
schema: wang-person/v1
id: p_yTWXWEdRK53BdPcPBbVsi5
status: active
merged_into: null
display_name: 王上輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GrVd7fNPPuhNmnx11v6PYP
        subject_person_id: p_yTWXWEdRK53BdPcPBbVsi5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王上輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PTUmLtW1sk7PNV7Z3idCdH
          claim_id: c_GrVd7fNPPuhNmnx11v6PYP
          source_id: s_9F5EHLWzTCD5vMq7bGncYu
          stance: supports
          locator: CBDB:537272
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（537272）
          source: &a1
            id: s_9F5EHLWzTCD5vMq7bGncYu
            source_type: api_record
            title: 中国历代人物传记资料库：王上輔（CBDB 537272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537272&o=json
            external_identifier: CBDB:537272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L5rGhAqmtV133CWh4FLHk6
        subject_person_id: p_yTWXWEdRK53BdPcPBbVsi5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王上輔，宋人物。籍贯越州，入仕進士。（中国历代人物传记资料库 CBDB 537272）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sEYFnHD0gx_cuf6yNKMYEH
          claim_id: c_L5rGhAqmtV133CWh4FLHk6
          source_id: s_9F5EHLWzTCD5vMq7bGncYu
          stance: supports
          locator: CBDB:537272
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

# 王上輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王上輔 | accepted |
| bio.summary | 王上輔，宋人物。籍贯越州，入仕進士。（中国历代人物传记资料库 CBDB 537272） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王上輔（CBDB 537272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537272&o=json)
