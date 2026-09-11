---
schema: wang-person/v1
id: p_tdPXs4Cr8eSwrYW1nWN1bF
status: active
merged_into: null
display_name: 王旭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Qv3tU9PHDLtQTJXnaNXNt
        subject_person_id: p_tdPXs4Cr8eSwrYW1nWN1bF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BkCUWspRVfW1oyMVJ5pD5M
          claim_id: c_4Qv3tU9PHDLtQTJXnaNXNt
          source_id: s_Uad6nS6DnjMnUf1a6iCsB1
          stance: supports
          locator: CBDB:500507
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500507）
          source: &a1
            id: s_Uad6nS6DnjMnUf1a6iCsB1
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 500507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500507&o=json
            external_identifier: CBDB:500507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CgrxfEuqt7YBd1nsjS68Nu
        subject_person_id: p_tdPXs4Cr8eSwrYW1nWN1bF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭，清人物。入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 500507）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DZqi9UY5tapRnuxoU9WedV
          claim_id: c_CgrxfEuqt7YBd1nsjS68Nu
          source_id: s_Uad6nS6DnjMnUf1a6iCsB1
          stance: supports
          locator: CBDB:500507
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

# 王旭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旭 | accepted |
| bio.summary | 王旭，清人物。入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 500507） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王旭（CBDB 500507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500507&o=json)
