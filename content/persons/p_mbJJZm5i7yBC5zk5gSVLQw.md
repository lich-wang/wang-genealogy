---
schema: wang-person/v1
id: p_mbJJZm5i7yBC5zk5gSVLQw
status: active
merged_into: null
display_name: 王允中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M4HHWBZ5dn4iX3o6WJoZmC
        subject_person_id: p_mbJJZm5i7yBC5zk5gSVLQw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LK86DKK9xNATmv9JkZwtuy
          claim_id: c_M4HHWBZ5dn4iX3o6WJoZmC
          source_id: s_bDd2agbbPEL4LGRLdJcMXM
          stance: supports
          locator: CBDB:71442
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71442）
          source: &a1
            id: s_bDd2agbbPEL4LGRLdJcMXM
            source_type: api_record
            title: 中国历代人物传记资料库：王允中（CBDB 71442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71442&o=json
            external_identifier: CBDB:71442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2uDXJfeFtBJAif3tWqYanG
        subject_person_id: p_mbJJZm5i7yBC5zk5gSVLQw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1741年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nEHAwez9sviD5LNdW2a3Ei
          claim_id: c_2uDXJfeFtBJAif3tWqYanG
          source_id: s_bDd2agbbPEL4LGRLdJcMXM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FgZuDZ2DP9YhVBQziv2CQM
        subject_person_id: p_mbJJZm5i7yBC5zk5gSVLQw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允中（卒于1741年），清人物。籍贯安徽省。（中国历代人物传记资料库 CBDB 71442）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lSNrHy7akZzU2D13OKrKz1
          claim_id: c_FgZuDZ2DP9YhVBQziv2CQM
          source_id: s_bDd2agbbPEL4LGRLdJcMXM
          stance: supports
          locator: CBDB:71442
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

# 王允中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允中 | accepted |
| death.date | 1741年 | accepted |
| bio.summary | 王允中（卒于1741年），清人物。籍贯安徽省。（中国历代人物传记资料库 CBDB 71442） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允中（CBDB 71442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71442&o=json)
