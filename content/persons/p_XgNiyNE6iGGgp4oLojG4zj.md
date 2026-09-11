---
schema: wang-person/v1
id: p_XgNiyNE6iGGgp4oLojG4zj
status: active
merged_into: null
display_name: 王森文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CmMoWWTn1qANozyYnUPDz4
        subject_person_id: p_XgNiyNE6iGGgp4oLojG4zj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hQt9ws8P9EkLkx7P5AnBLk
          claim_id: c_CmMoWWTn1qANozyYnUPDz4
          source_id: s_1o27mAY2FJ67RtH176a5c4
          stance: supports
          locator: CBDB:72056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72056）
          source: &a1
            id: s_1o27mAY2FJ67RtH176a5c4
            source_type: api_record
            title: 中国历代人物传记资料库：王森文（CBDB 72056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72056&o=json
            external_identifier: CBDB:72056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cFdqgodWFvZzC8NKV2csM2
        subject_person_id: p_XgNiyNE6iGGgp4oLojG4zj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1759年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DF6zXD2FYQD634xBaHEpDw
          claim_id: c_cFdqgodWFvZzC8NKV2csM2
          source_id: s_1o27mAY2FJ67RtH176a5c4
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
        id: c_2R4pJq4S5NEjnT4GJqUg1B
        subject_person_id: p_XgNiyNE6iGGgp4oLojG4zj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森文（生于1759年），清人物。籍贯諸城。（中国历代人物传记资料库 CBDB 72056）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cCa1AUXnY-ZcnyWqYFm4Pv
          claim_id: c_2R4pJq4S5NEjnT4GJqUg1B
          source_id: s_1o27mAY2FJ67RtH176a5c4
          stance: supports
          locator: CBDB:72056
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

# 王森文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王森文 | accepted |
| birth.date | 1759年 | accepted |
| bio.summary | 王森文（生于1759年），清人物。籍贯諸城。（中国历代人物传记资料库 CBDB 72056） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王森文（CBDB 72056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72056&o=json)
