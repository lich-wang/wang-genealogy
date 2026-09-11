---
schema: wang-person/v1
id: p_RFkvfMvC7bNXUtCTt5aeQe
status: active
merged_into: null
display_name: 王道弘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3yUJ3GJvYrz6pquk5M2YXC
        subject_person_id: p_RFkvfMvC7bNXUtCTt5aeQe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道弘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PGGD2fJMBiBDemnt6AzhER
          claim_id: c_3yUJ3GJvYrz6pquk5M2YXC
          source_id: s_ESLHPPT5Bc9C46y7Kt7ZTR
          stance: supports
          locator: CBDB:693042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693042）
          source: &a1
            id: s_ESLHPPT5Bc9C46y7Kt7ZTR
            source_type: api_record
            title: 中国历代人物传记资料库：王道弘（CBDB 693042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693042&o=json
            external_identifier: CBDB:693042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1ndJijP6R5oVjHKPS415GW
        subject_person_id: p_RFkvfMvC7bNXUtCTt5aeQe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王道弘，明人物。籍贯固始，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 693042）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GeRR4VTmTEbICJ5Pg8KFIj
          claim_id: c_1ndJijP6R5oVjHKPS415GW
          source_id: s_ESLHPPT5Bc9C46y7Kt7ZTR
          stance: supports
          locator: CBDB:693042
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

# 王道弘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道弘 | accepted |
| bio.summary | 王道弘，明人物。籍贯固始，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 693042） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道弘（CBDB 693042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693042&o=json)
