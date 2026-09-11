---
schema: wang-person/v1
id: p_oz5Q6287XFtSZK2kA9RpiT
status: active
merged_into: null
display_name: 王彙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DScK9fK2rdW8UtTBh1Qh7t
        subject_person_id: p_oz5Q6287XFtSZK2kA9RpiT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KuFLTii7AwT1UsiFLu4KTF
          claim_id: c_DScK9fK2rdW8UtTBh1Qh7t
          source_id: s_qYHqq8So8ZLehdPTPoC36M
          stance: supports
          locator: CBDB:57198
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57198）
          source: &a1
            id: s_qYHqq8So8ZLehdPTPoC36M
            source_type: api_record
            title: 中国历代人物传记资料库：王彙（CBDB 57198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57198&o=json
            external_identifier: CBDB:57198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.800Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uY1j8QCQypSvt9aw7yr2rd
        subject_person_id: p_oz5Q6287XFtSZK2kA9RpiT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1819年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6YNFN7J2VGvF2g4iKQn3B7
          claim_id: c_uY1j8QCQypSvt9aw7yr2rd
          source_id: s_qYHqq8So8ZLehdPTPoC36M
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
        id: c_11A6ccUCXi7HUMHjTGcTXQ
        subject_person_id: p_oz5Q6287XFtSZK2kA9RpiT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彙（卒于1819年），清人物。籍贯漢軍正紅旗，入仕官學生，曾任督標中軍副將、撫標中軍參將、冠軍使。（中国历代人物传记资料库 CBDB 57198）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wWM7Cw39tFlXUmTKcN0W1w
          claim_id: c_11A6ccUCXi7HUMHjTGcTXQ
          source_id: s_qYHqq8So8ZLehdPTPoC36M
          stance: supports
          locator: CBDB:57198
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

# 王彙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彙 | accepted |
| death.date | 1819年 | accepted |
| bio.summary | 王彙（卒于1819年），清人物。籍贯漢軍正紅旗，入仕官學生，曾任督標中軍副將、撫標中軍參將、冠軍使。（中国历代人物传记资料库 CBDB 57198） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彙（CBDB 57198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57198&o=json)
