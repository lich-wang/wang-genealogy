---
schema: wang-person/v1
id: p_MiNCJvaDuZFJGT7XCvb1r9
status: active
merged_into: null
display_name: 王秉謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RBtsHVy8tkamrSn4zzgMmb
        subject_person_id: p_MiNCJvaDuZFJGT7XCvb1r9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gVdPC8uBamGvzJg8ed7m4p
          claim_id: c_RBtsHVy8tkamrSn4zzgMmb
          source_id: s_vzBPH3R7UJt7zBCv2X8UBG
          stance: supports
          locator: CBDB:551031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551031）
          source: &a1
            id: s_vzBPH3R7UJt7zBCv2X8UBG
            source_type: api_record
            title: 中国历代人物传记资料库：王秉謙（CBDB 551031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551031&o=json
            external_identifier: CBDB:551031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i3ecV9K7423dufjFfDBEj3
        subject_person_id: p_MiNCJvaDuZFJGT7XCvb1r9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉謙，清人物。籍贯江都。（中国历代人物传记资料库 CBDB 551031）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3tfj4s4t2rXB4lLwCYh5qp
          claim_id: c_i3ecV9K7423dufjFfDBEj3
          source_id: s_vzBPH3R7UJt7zBCv2X8UBG
          stance: supports
          locator: CBDB:551031
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

# 王秉謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉謙 | accepted |
| bio.summary | 王秉謙，清人物。籍贯江都。（中国历代人物传记资料库 CBDB 551031） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉謙（CBDB 551031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551031&o=json)
