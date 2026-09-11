---
schema: wang-person/v1
id: p_oqi1heKW1WFKVPv98EW2DQ
status: active
merged_into: null
display_name: 王有畧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VtHBBqBTct2YykfjuQKD1W
        subject_person_id: p_oqi1heKW1WFKVPv98EW2DQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有畧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jj63GRBqxFAi1eZME8R1ec
          claim_id: c_VtHBBqBTct2YykfjuQKD1W
          source_id: s_rWCRzEhwKz5G1u7CVj767t
          stance: supports
          locator: CBDB:638596
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638596）
          source: &a1
            id: s_rWCRzEhwKz5G1u7CVj767t
            source_type: api_record
            title: 中国历代人物传记资料库：王有畧（CBDB 638596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638596&o=json
            external_identifier: CBDB:638596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.688Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KEGWRzBmUBgCCKSZ7WVDSW
        subject_person_id: p_oqi1heKW1WFKVPv98EW2DQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有畧，清人物。籍贯迪化州，曾任訓導、復設訓導。（中国历代人物传记资料库 CBDB 638596）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lJ1DQkJBA2PwuhzjHNofOb
          claim_id: c_KEGWRzBmUBgCCKSZ7WVDSW
          source_id: s_rWCRzEhwKz5G1u7CVj767t
          stance: supports
          locator: CBDB:638596
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

# 王有畧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有畧 | accepted |
| bio.summary | 王有畧，清人物。籍贯迪化州，曾任訓導、復設訓導。（中国历代人物传记资料库 CBDB 638596） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有畧（CBDB 638596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638596&o=json)
