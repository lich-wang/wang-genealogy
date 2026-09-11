---
schema: wang-person/v1
id: p_NjtoJJAMntRmNNoMwjg9b6
status: active
merged_into: null
display_name: 王臣璧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QC3uVn3xCZwQ2X7THPbrYw
        subject_person_id: p_NjtoJJAMntRmNNoMwjg9b6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6N7dcsAHJ6rx4bh3UGzxFs
          claim_id: c_QC3uVn3xCZwQ2X7THPbrYw
          source_id: s_1u43TCjXa2F8Fesarj6tcx
          stance: supports
          locator: CBDB:640001
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640001）
          source: &a1
            id: s_1u43TCjXa2F8Fesarj6tcx
            source_type: api_record
            title: 中国历代人物传记资料库：王臣璧（CBDB 640001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640001&o=json
            external_identifier: CBDB:640001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.119Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8HGydEZ6PTfRCFq662icd8
        subject_person_id: p_NjtoJJAMntRmNNoMwjg9b6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣璧，清人物。籍贯羅田，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640001）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dFM277RNbsbJ5CgKeqIxit
          claim_id: c_8HGydEZ6PTfRCFq662icd8
          source_id: s_1u43TCjXa2F8Fesarj6tcx
          stance: supports
          locator: CBDB:640001
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

# 王臣璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣璧 | accepted |
| bio.summary | 王臣璧，清人物。籍贯羅田，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640001） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臣璧（CBDB 640001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640001&o=json)
