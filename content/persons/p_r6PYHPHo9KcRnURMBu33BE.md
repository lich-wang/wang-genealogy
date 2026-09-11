---
schema: wang-person/v1
id: p_r6PYHPHo9KcRnURMBu33BE
status: active
merged_into: null
display_name: 王丹成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pf9enWSwP6GibcFYpzVGWQ
        subject_person_id: p_r6PYHPHo9KcRnURMBu33BE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丹成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vBqRso61AfSHHUMAxVzDG4
          claim_id: c_Pf9enWSwP6GibcFYpzVGWQ
          source_id: s_JMjrLZWfZqYMT8qGYaPC17
          stance: supports
          locator: CBDB:635755
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635755）
          source: &a1
            id: s_JMjrLZWfZqYMT8qGYaPC17
            source_type: api_record
            title: 中国历代人物传记资料库：王丹成（CBDB 635755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635755&o=json
            external_identifier: CBDB:635755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DQqWS4oN25mUKDewbQCRxi
        subject_person_id: p_r6PYHPHo9KcRnURMBu33BE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丹成，清人物。籍贯開封府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 635755）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Eaql0yAOqQqbYNlH-K_hKn
          claim_id: c_DQqWS4oN25mUKDewbQCRxi
          source_id: s_JMjrLZWfZqYMT8qGYaPC17
          stance: supports
          locator: CBDB:635755
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

# 王丹成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丹成 | accepted |
| bio.summary | 王丹成，清人物。籍贯開封府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 635755） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丹成（CBDB 635755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635755&o=json)
