---
schema: wang-person/v1
id: p_3G2eKWWk1x8mxvmys3xXz9
status: active
merged_into: null
display_name: 王萬魁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eSortR1SWSeQcyvrJaSJuw
        subject_person_id: p_3G2eKWWk1x8mxvmys3xXz9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9tajbDAqUd5KqU8mEiYnNW
          claim_id: c_eSortR1SWSeQcyvrJaSJuw
          source_id: s_HAbNHAvDb7gngH4D5u5JxX
          stance: supports
          locator: CBDB:576139
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576139）
          source: &a1
            id: s_HAbNHAvDb7gngH4D5u5JxX
            source_type: api_record
            title: 中国历代人物传记资料库：王萬魁（CBDB 576139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576139&o=json
            external_identifier: CBDB:576139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.709Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ytZGq316Div233pgdRUgej
        subject_person_id: p_3G2eKWWk1x8mxvmys3xXz9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬魁，清人物。籍贯乾州直隸州直轄地方，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576139）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-PJnbWOmN5W-XOBk7xKbrF
          claim_id: c_ytZGq316Div233pgdRUgej
          source_id: s_HAbNHAvDb7gngH4D5u5JxX
          stance: supports
          locator: CBDB:576139
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

# 王萬魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬魁 | accepted |
| bio.summary | 王萬魁，清人物。籍贯乾州直隸州直轄地方，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576139） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬魁（CBDB 576139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576139&o=json)
