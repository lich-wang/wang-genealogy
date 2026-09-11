---
schema: wang-person/v1
id: p_187DWoH8zWEobdoJKcJQj2
status: active
merged_into: null
display_name: 王邱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_omgrrt4w8XHJ7CyQ7g3JnN
        subject_person_id: p_187DWoH8zWEobdoJKcJQj2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yJcvz78vYpFfWpEqoiHebY
          claim_id: c_omgrrt4w8XHJ7CyQ7g3JnN
          source_id: s_dUsY3yXPhZiXKUefV8j7rr
          stance: supports
          locator: CBDB:91984
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91984）
          source: &a1
            id: s_dUsY3yXPhZiXKUefV8j7rr
            source_type: api_record
            title: 中国历代人物传记资料库：王邱（CBDB 91984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91984&o=json
            external_identifier: CBDB:91984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FMGd1HpHJPmDSYyrrX3xeS
        subject_person_id: p_187DWoH8zWEobdoJKcJQj2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 743年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9vrJnXQTT1bJj8jyHfe1FG
          claim_id: c_FMGd1HpHJPmDSYyrrX3xeS
          source_id: s_dUsY3yXPhZiXKUefV8j7rr
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
        id: c_1hF6Xh3hvqGF2BcXMdFPFK
        subject_person_id: p_187DWoH8zWEobdoJKcJQj2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王邱（卒于743年），唐人物。籍贯安陽，身份为工於文，入仕科舉制舉: 童子舉，曾任奉禮郎、黃門侍郎、監察御史。（中国历代人物传记资料库 CBDB 91984）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DZZPw4yTH3bNQsK7oLvcb2
          claim_id: c_1hF6Xh3hvqGF2BcXMdFPFK
          source_id: s_dUsY3yXPhZiXKUefV8j7rr
          stance: supports
          locator: CBDB:91984
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

# 王邱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邱 | accepted |
| death.date | 743年 | accepted |
| bio.summary | 王邱（卒于743年），唐人物。籍贯安陽，身份为工於文，入仕科舉制舉: 童子舉，曾任奉禮郎、黃門侍郎、監察御史。（中国历代人物传记资料库 CBDB 91984） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邱（CBDB 91984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91984&o=json)
