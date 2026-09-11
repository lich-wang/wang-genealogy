---
schema: wang-person/v1
id: p_V9z28q7xFQboxf8eXAj8XN
status: active
merged_into: null
display_name: 王沼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DuZKrskt4Y1XLBtDGSdhn9
        subject_person_id: p_V9z28q7xFQboxf8eXAj8XN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nnpG7kV9MCaPnvL3G7Jjyq
          claim_id: c_DuZKrskt4Y1XLBtDGSdhn9
          source_id: s_5mtZf4NqV4PucV3nU1ZTGz
          stance: supports
          locator: CBDB:342794
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342794）
          source: &a1
            id: s_5mtZf4NqV4PucV3nU1ZTGz
            source_type: api_record
            title: 中国历代人物传记资料库：王沼（CBDB 342794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342794&o=json
            external_identifier: CBDB:342794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zwsBj51EkewDjZW8ic3GtM
        subject_person_id: p_V9z28q7xFQboxf8eXAj8XN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沼，明人物。明清進士進士，籍贯安肅，入仕進士。（中国历代人物传记资料库 CBDB 342794）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PAcK0XQD5vNMGI7hsFf4N5
          claim_id: c_zwsBj51EkewDjZW8ic3GtM
          source_id: s_5mtZf4NqV4PucV3nU1ZTGz
          stance: supports
          locator: CBDB:342794
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

# 王沼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沼 | accepted |
| bio.summary | 王沼，明人物。明清進士進士，籍贯安肅，入仕進士。（中国历代人物传记资料库 CBDB 342794） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沼（CBDB 342794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342794&o=json)
