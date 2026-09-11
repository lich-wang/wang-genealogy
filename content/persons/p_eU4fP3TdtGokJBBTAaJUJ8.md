---
schema: wang-person/v1
id: p_eU4fP3TdtGokJBBTAaJUJ8
status: active
merged_into: null
display_name: 王晉錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T7qHJb57XBt6NnQ1gn795D
        subject_person_id: p_eU4fP3TdtGokJBBTAaJUJ8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XqtxZiUaP8cUQwnGDUw7mw
          claim_id: c_T7qHJb57XBt6NnQ1gn795D
          source_id: s_1u4VyYJw5H6PrvUaax47XF
          stance: supports
          locator: CBDB:638465
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638465）
          source: &a1
            id: s_1u4VyYJw5H6PrvUaax47XF
            source_type: api_record
            title: 中国历代人物传记资料库：王晉錫（CBDB 638465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638465&o=json
            external_identifier: CBDB:638465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ctktgqs7NJiZpR41ati882
        subject_person_id: p_eU4fP3TdtGokJBBTAaJUJ8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉錫，清人物。籍贯黎城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638465）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MM32HlCZRo1P3FZOGfmBJg
          claim_id: c_ctktgqs7NJiZpR41ati882
          source_id: s_1u4VyYJw5H6PrvUaax47XF
          stance: supports
          locator: CBDB:638465
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

# 王晉錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉錫 | accepted |
| bio.summary | 王晉錫，清人物。籍贯黎城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638465） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉錫（CBDB 638465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638465&o=json)
