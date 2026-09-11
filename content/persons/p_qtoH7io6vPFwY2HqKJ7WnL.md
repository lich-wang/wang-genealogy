---
schema: wang-person/v1
id: p_qtoH7io6vPFwY2HqKJ7WnL
status: active
merged_into: null
display_name: 王慶遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h9Gqc91wKY3tHMYBkN9ViM
        subject_person_id: p_qtoH7io6vPFwY2HqKJ7WnL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZMkFiujkYNhcj21Tb7twTb
          claim_id: c_h9Gqc91wKY3tHMYBkN9ViM
          source_id: s_UE8tH4WGE88sSGhRzppwAA
          stance: supports
          locator: CBDB:637955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637955）
          source: &a1
            id: s_UE8tH4WGE88sSGhRzppwAA
            source_type: api_record
            title: 中国历代人物传记资料库：王慶遠（CBDB 637955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637955&o=json
            external_identifier: CBDB:637955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZBVxQMHRpKi2pUXuPJFMtD
        subject_person_id: p_qtoH7io6vPFwY2HqKJ7WnL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶遠，清人物。籍贯大足，曾任典史。（中国历代人物传记资料库 CBDB 637955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p34vBMNwd2pjDtnW9_9lEq
          claim_id: c_ZBVxQMHRpKi2pUXuPJFMtD
          source_id: s_UE8tH4WGE88sSGhRzppwAA
          stance: supports
          locator: CBDB:637955
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

# 王慶遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶遠 | accepted |
| bio.summary | 王慶遠，清人物。籍贯大足，曾任典史。（中国历代人物传记资料库 CBDB 637955） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶遠（CBDB 637955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637955&o=json)
