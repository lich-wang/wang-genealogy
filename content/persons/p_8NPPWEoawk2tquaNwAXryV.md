---
schema: wang-person/v1
id: p_8NPPWEoawk2tquaNwAXryV
status: active
merged_into: null
display_name: 王三甲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_URjSM9jiRiroeGF6vKgB9n
        subject_person_id: p_8NPPWEoawk2tquaNwAXryV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三甲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zp1XkkKHSsTCuhFvzBsB9w
          claim_id: c_URjSM9jiRiroeGF6vKgB9n
          source_id: s_7xp2mzRKG1UvdXWjniMrwn
          stance: supports
          locator: CBDB:635632
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635632）
          source: &a1
            id: s_7xp2mzRKG1UvdXWjniMrwn
            source_type: api_record
            title: 中国历代人物传记资料库：王三甲（CBDB 635632）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635632&o=json
            external_identifier: CBDB:635632
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GkGqQT22Q54n3KXqaCZyLg
        subject_person_id: p_8NPPWEoawk2tquaNwAXryV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三甲，清人物。籍贯魯山，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635632）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3qb2XhgVGu2G8DM7wNPhZ_
          claim_id: c_GkGqQT22Q54n3KXqaCZyLg
          source_id: s_7xp2mzRKG1UvdXWjniMrwn
          stance: supports
          locator: CBDB:635632
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

# 王三甲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三甲 | accepted |
| bio.summary | 王三甲，清人物。籍贯魯山，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635632） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三甲（CBDB 635632）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635632&o=json)
