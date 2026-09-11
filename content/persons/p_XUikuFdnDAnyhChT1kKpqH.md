---
schema: wang-person/v1
id: p_XUikuFdnDAnyhChT1kKpqH
status: active
merged_into: null
display_name: 王納誨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iu2B2cQCUhSM2HAM7DMHDM
        subject_person_id: p_XUikuFdnDAnyhChT1kKpqH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納誨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mKy3NRes3U54gJwAkS6bBa
          claim_id: c_iu2B2cQCUhSM2HAM7DMHDM
          source_id: s_ncyu1TWT5NS4UgXBcL5bBU
          stance: supports
          locator: CBDB:281216
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281216）
          source: &a1
            id: s_ncyu1TWT5NS4UgXBcL5bBU
            source_type: api_record
            title: 中国历代人物传记资料库：王納誨（CBDB 281216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281216&o=json
            external_identifier: CBDB:281216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H7DvZdQSULZTb1JXfeAPAv
        subject_person_id: p_XUikuFdnDAnyhChT1kKpqH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納誨，明人物。正德十二年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 281216）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nGGNBbul5Zw7qe9OuF0OA9
          claim_id: c_H7DvZdQSULZTb1JXfeAPAv
          source_id: s_ncyu1TWT5NS4UgXBcL5bBU
          stance: supports
          locator: CBDB:281216
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

# 王納誨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王納誨 | accepted |
| bio.summary | 王納誨，明人物。正德十二年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 281216） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王納誨（CBDB 281216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281216&o=json)
