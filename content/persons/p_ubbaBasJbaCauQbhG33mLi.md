---
schema: wang-person/v1
id: p_ubbaBasJbaCauQbhG33mLi
status: active
merged_into: null
display_name: 王安仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_De7vsTjhRB96Vq9QnxZWEE
        subject_person_id: p_ubbaBasJbaCauQbhG33mLi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mfc78CBSrf998tkg8khtkj
          claim_id: c_De7vsTjhRB96Vq9QnxZWEE
          source_id: s_LyGRZTKmRTN1w7R4fA8ttR
          stance: supports
          locator: CBDB:101169
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101169）
          source: &a1
            id: s_LyGRZTKmRTN1w7R4fA8ttR
            source_type: api_record
            title: 中国历代人物传记资料库：王安仁（CBDB 101169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101169&o=json
            external_identifier: CBDB:101169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.719Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S3fXyco8NM4Vafavt7ViUL
        subject_person_id: p_ubbaBasJbaCauQbhG33mLi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安仁，元人物。曾任祕書監校書郎。（中国历代人物传记资料库 CBDB 101169）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4WP7nO4J-gXPombRC94ZCZ
          claim_id: c_S3fXyco8NM4Vafavt7ViUL
          source_id: s_LyGRZTKmRTN1w7R4fA8ttR
          stance: supports
          locator: CBDB:101169
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

# 王安仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安仁 | accepted |
| bio.summary | 王安仁，元人物。曾任祕書監校書郎。（中国历代人物传记资料库 CBDB 101169） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安仁（CBDB 101169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101169&o=json)
