---
schema: wang-person/v1
id: p_RYEGLKkGXfYhENWPBwUT4W
status: active
merged_into: null
display_name: 王題雁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U6jCHmTkZE6xLxfSvQNNNj
        subject_person_id: p_RYEGLKkGXfYhENWPBwUT4W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王題雁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AerorxRq8D8KR8mrpjAJ5F
          claim_id: c_U6jCHmTkZE6xLxfSvQNNNj
          source_id: s_arsF1KNHHiz2pxnpN5XHiD
          stance: supports
          locator: CBDB:72186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72186）
          source: &a1
            id: s_arsF1KNHHiz2pxnpN5XHiD
            source_type: api_record
            title: 中国历代人物传记资料库：王題雁（CBDB 72186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72186&o=json
            external_identifier: CBDB:72186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3y18jbrkJrNxBUJLdZWvUo
        subject_person_id: p_RYEGLKkGXfYhENWPBwUT4W
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1823年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v48dxaiWd4pK7BpKQx2H34
          claim_id: c_3y18jbrkJrNxBUJLdZWvUo
          source_id: s_arsF1KNHHiz2pxnpN5XHiD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vxFxMF46QA3dZXrSvP9mAk
        subject_person_id: p_RYEGLKkGXfYhENWPBwUT4W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王題雁（生于1823年），清人物。籍贯獻縣。（中国历代人物传记资料库 CBDB 72186）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NaUgcvprJCDzNfbQdb5XG8
          claim_id: c_vxFxMF46QA3dZXrSvP9mAk
          source_id: s_arsF1KNHHiz2pxnpN5XHiD
          stance: supports
          locator: CBDB:72186
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

# 王題雁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王題雁 | accepted |
| birth.date | 1823年 | accepted |
| bio.summary | 王題雁（生于1823年），清人物。籍贯獻縣。（中国历代人物传记资料库 CBDB 72186） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王題雁（CBDB 72186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72186&o=json)
