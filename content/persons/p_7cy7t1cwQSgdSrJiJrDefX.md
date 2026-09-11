---
schema: wang-person/v1
id: p_7cy7t1cwQSgdSrJiJrDefX
status: active
merged_into: null
display_name: 王遠慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ru1zLwt74Hq16XTp5PTGz8
        subject_person_id: p_7cy7t1cwQSgdSrJiJrDefX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遠慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_69vAQAd97ANPey6W2d3Reu
          claim_id: c_Ru1zLwt74Hq16XTp5PTGz8
          source_id: s_jfALcT9iph7jhg3kVFxwDT
          stance: supports
          locator: CBDB:640431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640431）
          source: &a1
            id: s_jfALcT9iph7jhg3kVFxwDT
            source_type: api_record
            title: 中国历代人物传记资料库：王遠慶（CBDB 640431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640431&o=json
            external_identifier: CBDB:640431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SCDQ2YSrVSzMgn9G34gitf
        subject_person_id: p_7cy7t1cwQSgdSrJiJrDefX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遠慶，清人物。籍贯諸城，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 640431）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Gpsxevf4bf8CqZobE25Y55
          claim_id: c_SCDQ2YSrVSzMgn9G34gitf
          source_id: s_jfALcT9iph7jhg3kVFxwDT
          stance: supports
          locator: CBDB:640431
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

# 王遠慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遠慶 | accepted |
| bio.summary | 王遠慶，清人物。籍贯諸城，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 640431） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遠慶（CBDB 640431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640431&o=json)
