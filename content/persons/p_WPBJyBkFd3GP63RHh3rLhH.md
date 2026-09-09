---
schema: wang-person/v1
id: p_WPBJyBkFd3GP63RHh3rLhH
status: active
merged_into: null
display_name: 王世昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c6zK4uCqMW16BmwN5FqwNd
        subject_person_id: p_WPBJyBkFd3GP63RHh3rLhH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fB1kFrGB19E4Qwk4W6QgUX
          claim_id: c_c6zK4uCqMW16BmwN5FqwNd
          source_id: s_hn4s7RofNM1nNoEPfXzjno
          stance: supports
          locator: CBDB:635677
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635677）
          source: &a1
            id: s_hn4s7RofNM1nNoEPfXzjno
            source_type: api_record
            title: 中国历代人物传记资料库：王世昌（CBDB 635677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635677&o=json
            external_identifier: CBDB:635677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nvX9SSZy9goTP9ygpCTAqt
        subject_person_id: p_WPBJyBkFd3GP63RHh3rLhH
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
        - id: cs_e9ybdEK3SeMLETfj44PDhH
          claim_id: c_nvX9SSZy9goTP9ygpCTAqt
          source_id: s_hn4s7RofNM1nNoEPfXzjno
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

# 王世昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世昌 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世昌（CBDB 635677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635677&o=json)
