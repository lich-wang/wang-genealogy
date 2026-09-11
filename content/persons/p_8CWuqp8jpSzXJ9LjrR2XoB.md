---
schema: wang-person/v1
id: p_8CWuqp8jpSzXJ9LjrR2XoB
status: active
merged_into: null
display_name: 王縉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H5h3psEy1HVTubb1D1G8hM
        subject_person_id: p_8CWuqp8jpSzXJ9LjrR2XoB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oGnNnVdRGNVDYCBu6epmko
          claim_id: c_H5h3psEy1HVTubb1D1G8hM
          source_id: s_fNr1jR56tQCvTUJnQW7gjA
          stance: supports
          locator: CBDB:37850
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37850）
          source: &a1
            id: s_fNr1jR56tQCvTUJnQW7gjA
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 37850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37850&o=json
            external_identifier: CBDB:37850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Qf5ogPuP92xKCzbxk18LzC
        subject_person_id: p_8CWuqp8jpSzXJ9LjrR2XoB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1073年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jAKQBhtB3Jx14ecHjFkwzi
          claim_id: c_Qf5ogPuP92xKCzbxk18LzC
          source_id: s_fNr1jR56tQCvTUJnQW7gjA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Qw21MpGSycFME5JsLBU4pv
        subject_person_id: p_8CWuqp8jpSzXJ9LjrR2XoB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1159年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A1RWD5mNr7253B8jEJSFXA
          claim_id: c_Qw21MpGSycFME5JsLBU4pv
          source_id: s_fNr1jR56tQCvTUJnQW7gjA
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
        id: c_ZDKPB3i5PfEe9ji2bxnGoG
        subject_person_id: p_8CWuqp8jpSzXJ9LjrR2XoB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉（1073年—1159年），宋人物。籍贯分水，入仕進士，曾任左朝奉大夫、左朝奉郎、左朝請郎。（中国历代人物传记资料库 CBDB 37850）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JR3TvYRMWYGon__eTi5KhR
          claim_id: c_ZDKPB3i5PfEe9ji2bxnGoG
          source_id: s_fNr1jR56tQCvTUJnQW7gjA
          stance: supports
          locator: CBDB:37850
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

# 王縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縉 | accepted |
| birth.date | 1073年 | accepted |
| death.date | 1159年 | accepted |
| bio.summary | 王縉（1073年—1159年），宋人物。籍贯分水，入仕進士，曾任左朝奉大夫、左朝奉郎、左朝請郎。（中国历代人物传记资料库 CBDB 37850） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 37850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37850&o=json)
