---
schema: wang-person/v1
id: p_Qxs8xLAy5j28JycsVeCn1x
status: active
merged_into: null
display_name: 王聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EhyD981UbTjKWttZNs4hC1
        subject_person_id: p_Qxs8xLAy5j28JycsVeCn1x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PctMPA5Z4CEJGMo5aaBHdu
          claim_id: c_EhyD981UbTjKWttZNs4hC1
          source_id: s_1LDznUkD7L8e93KJQMPRv6
          stance: supports
          locator: CBDB:544680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（544680）
          source: &a1
            id: s_1LDznUkD7L8e93KJQMPRv6
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 544680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544680&o=json
            external_identifier: CBDB:544680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KkNvejEfBoVa6NKE2iF9pd
        subject_person_id: p_Qxs8xLAy5j28JycsVeCn1x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聘，宋人物。籍贯龍溪，入仕進士。（中国历代人物传记资料库 CBDB 544680）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CmbFtW6fy29lSfAe2nx3Q_
          claim_id: c_KkNvejEfBoVa6NKE2iF9pd
          source_id: s_1LDznUkD7L8e93KJQMPRv6
          stance: supports
          locator: CBDB:544680
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

# 王聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聘 | accepted |
| bio.summary | 王聘，宋人物。籍贯龍溪，入仕進士。（中国历代人物传记资料库 CBDB 544680） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聘（CBDB 544680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544680&o=json)
