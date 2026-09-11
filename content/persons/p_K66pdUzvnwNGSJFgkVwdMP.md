---
schema: wang-person/v1
id: p_K66pdUzvnwNGSJFgkVwdMP
status: active
merged_into: null
display_name: 王錫臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GCFr23PHQyXzWuJdWQLz7r
        subject_person_id: p_K66pdUzvnwNGSJFgkVwdMP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aDFfTKjemzNM9tiQumrXMc
          claim_id: c_GCFr23PHQyXzWuJdWQLz7r
          source_id: s_Nkik5Rv4EqPFyfc1XrkUnk
          stance: supports
          locator: CBDB:640642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640642）
          source: &a1
            id: s_Nkik5Rv4EqPFyfc1XrkUnk
            source_type: api_record
            title: 中国历代人物传记资料库：王錫臣（CBDB 640642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640642&o=json
            external_identifier: CBDB:640642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.166Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AtFQ5ew5LD7DGDnBsoNRQs
        subject_person_id: p_K66pdUzvnwNGSJFgkVwdMP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王錫臣，清人物。籍贯貴陽府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 640642）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a14zD-eXtd9XYtlzg4PuhJ
          claim_id: c_AtFQ5ew5LD7DGDnBsoNRQs
          source_id: s_Nkik5Rv4EqPFyfc1XrkUnk
          stance: supports
          locator: CBDB:640642
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

# 王錫臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫臣 | accepted |
| bio.summary | 王錫臣，清人物。籍贯貴陽府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 640642） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫臣（CBDB 640642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640642&o=json)
