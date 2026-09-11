---
schema: wang-person/v1
id: p_JbpRQSt1DrEE7CQLNxk8tR
status: active
merged_into: null
display_name: 王䋲武
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ogkwpmWhhrUrtTXqcBjx16
        subject_person_id: p_JbpRQSt1DrEE7CQLNxk8tR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䋲武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kPpF8Mo39HuGbNrA9YdG3S
          claim_id: c_ogkwpmWhhrUrtTXqcBjx16
          source_id: s_5TP39wmJkgyFh3UTpwmLBG
          stance: supports
          locator: CBDB:635610
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635610）
          source: &a1
            id: s_5TP39wmJkgyFh3UTpwmLBG
            source_type: api_record
            title: 中国历代人物传记资料库：王䋲武（CBDB 635610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635610&o=json
            external_identifier: CBDB:635610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.738Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e49FeQxHDghtLWvQfgX22e
        subject_person_id: p_JbpRQSt1DrEE7CQLNxk8tR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䋲武，清人物。籍贯皋蘭，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635610）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bmj1thxqNOUJ9yPsfYHRp6
          claim_id: c_e49FeQxHDghtLWvQfgX22e
          source_id: s_5TP39wmJkgyFh3UTpwmLBG
          stance: supports
          locator: CBDB:635610
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

# 王䋲武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王䋲武 | accepted |
| bio.summary | 王䋲武，清人物。籍贯皋蘭，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635610） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王䋲武（CBDB 635610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635610&o=json)
