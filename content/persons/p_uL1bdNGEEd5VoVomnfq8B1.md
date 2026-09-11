---
schema: wang-person/v1
id: p_uL1bdNGEEd5VoVomnfq8B1
status: active
merged_into: null
display_name: 王汝翼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QGSF5tACJ9XY5jg9MP4vwE
        subject_person_id: p_uL1bdNGEEd5VoVomnfq8B1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝翼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6Zgs46AkCyCG8WM8KMo7Qw
          claim_id: c_QGSF5tACJ9XY5jg9MP4vwE
          source_id: s_YZCZgsuZ3Fqm5JK7Q6SSh3
          stance: supports
          locator: CBDB:688842
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688842）
          source: &a1
            id: s_YZCZgsuZ3Fqm5JK7Q6SSh3
            source_type: api_record
            title: 中国历代人物传记资料库：王汝翼（CBDB 688842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688842&o=json
            external_identifier: CBDB:688842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qgBZYKi1WntfnfzsB6SkC5
        subject_person_id: p_uL1bdNGEEd5VoVomnfq8B1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝翼，宋人物。籍贯遂昌，入仕進士。（中国历代人物传记资料库 CBDB 688842）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gPksr9QXFa6AaxqWtK6p16
          claim_id: c_qgBZYKi1WntfnfzsB6SkC5
          source_id: s_YZCZgsuZ3Fqm5JK7Q6SSh3
          stance: supports
          locator: CBDB:688842
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

# 王汝翼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝翼 | accepted |
| bio.summary | 王汝翼，宋人物。籍贯遂昌，入仕進士。（中国历代人物传记资料库 CBDB 688842） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝翼（CBDB 688842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688842&o=json)
