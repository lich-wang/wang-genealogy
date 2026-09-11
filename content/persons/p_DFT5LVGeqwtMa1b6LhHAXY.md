---
schema: wang-person/v1
id: p_DFT5LVGeqwtMa1b6LhHAXY
status: active
merged_into: null
display_name: 王學植
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dEM78xvBW9JXVzcj54E4fK
        subject_person_id: p_DFT5LVGeqwtMa1b6LhHAXY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eAZcYAQLFPka9cQgLPkXiB
          claim_id: c_dEM78xvBW9JXVzcj54E4fK
          source_id: s_2Jrs1treeEQ1n25npSgyFA
          stance: supports
          locator: CBDB:637038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637038）
          source: &a1
            id: s_2Jrs1treeEQ1n25npSgyFA
            source_type: api_record
            title: 中国历代人物传记资料库：王學植（CBDB 637038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637038&o=json
            external_identifier: CBDB:637038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NQArQ3jf6zN2MCW2xmLNDV
        subject_person_id: p_DFT5LVGeqwtMa1b6LhHAXY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學植，清人物。籍贯湖州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637038）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WcGvRtiz5Q5MQtJcP7ccnj
          claim_id: c_NQArQ3jf6zN2MCW2xmLNDV
          source_id: s_2Jrs1treeEQ1n25npSgyFA
          stance: supports
          locator: CBDB:637038
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

# 王學植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學植 | accepted |
| bio.summary | 王學植，清人物。籍贯湖州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637038） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學植（CBDB 637038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637038&o=json)
