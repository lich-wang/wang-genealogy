---
schema: wang-person/v1
id: p_rC3xxVRdLS7Zuu9peALAa6
status: active
merged_into: null
display_name: 王大中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6yyd1V372hTrfvsr7DPEfT
        subject_person_id: p_rC3xxVRdLS7Zuu9peALAa6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6sS4BVFUv3Dzs1Jje44N5Q
          claim_id: c_6yyd1V372hTrfvsr7DPEfT
          source_id: s_VJ5JKHKMht7bd9PPV9k9x3
          stance: supports
          locator: CBDB:686277
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686277）
          source: &a1
            id: s_VJ5JKHKMht7bd9PPV9k9x3
            source_type: api_record
            title: 中国历代人物传记资料库：王大中（CBDB 686277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686277&o=json
            external_identifier: CBDB:686277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.373Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WF6DTrpShVBFvHbzcRGbfe
        subject_person_id: p_rC3xxVRdLS7Zuu9peALAa6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大中，宋人物。籍贯廣安軍，入仕進士。（中国历代人物传记资料库 CBDB 686277）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H9Atny5SV0mN1onHimAEwP
          claim_id: c_WF6DTrpShVBFvHbzcRGbfe
          source_id: s_VJ5JKHKMht7bd9PPV9k9x3
          stance: supports
          locator: CBDB:686277
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

# 王大中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大中 | accepted |
| bio.summary | 王大中，宋人物。籍贯廣安軍，入仕進士。（中国历代人物传记资料库 CBDB 686277） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大中（CBDB 686277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686277&o=json)
