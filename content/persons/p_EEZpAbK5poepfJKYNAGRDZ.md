---
schema: wang-person/v1
id: p_EEZpAbK5poepfJKYNAGRDZ
status: active
merged_into: null
display_name: 王群
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nHqYK49fh5ecLJ2TGnkASt
        subject_person_id: p_EEZpAbK5poepfJKYNAGRDZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王群
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6LYEshqUKHJvNXHHWk1dAD
          claim_id: c_nHqYK49fh5ecLJ2TGnkASt
          source_id: s_fJq2QoX3rhHzXm8xAaSF1k
          stance: supports
          locator: CBDB:535269
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（535269）
          source: &a1
            id: s_fJq2QoX3rhHzXm8xAaSF1k
            source_type: api_record
            title: 中国历代人物传记资料库：王群（CBDB 535269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535269&o=json
            external_identifier: CBDB:535269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.395Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xScM7Es1UABSCXxcd5p1nj
        subject_person_id: p_EEZpAbK5poepfJKYNAGRDZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王群，宋人物。籍贯福州，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 535269）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lb8u45dsslBfHqVrZb4ZTb
          claim_id: c_xScM7Es1UABSCXxcd5p1nj
          source_id: s_fJq2QoX3rhHzXm8xAaSF1k
          stance: supports
          locator: CBDB:535269
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

# 王群

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王群 | accepted |
| bio.summary | 王群，宋人物。籍贯福州，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 535269） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王群（CBDB 535269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535269&o=json)
