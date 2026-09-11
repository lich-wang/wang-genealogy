---
schema: wang-person/v1
id: p_SJ3k1FHarN1DhUEKZKBi35
status: active
merged_into: null
display_name: 王肇厔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vNrW1q6DVT9C7afVB1w6xQ
        subject_person_id: p_SJ3k1FHarN1DhUEKZKBi35
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇厔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qkvgLyXBEh2gKmQW3zLKdk
          claim_id: c_vNrW1q6DVT9C7afVB1w6xQ
          source_id: s_yGfoBLpfSruGrLS8xcn2uS
          stance: supports
          locator: CBDB:639989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639989）
          source: &a1
            id: s_yGfoBLpfSruGrLS8xcn2uS
            source_type: api_record
            title: 中国历代人物传记资料库：王肇厔（CBDB 639989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639989&o=json
            external_identifier: CBDB:639989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Joe5Y5DNEvUUJou9Xk4nJm
        subject_person_id: p_SJ3k1FHarN1DhUEKZKBi35
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇厔，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 639989）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5lBNJMKdBca2L70AVRMjZk
          claim_id: c_Joe5Y5DNEvUUJou9Xk4nJm
          source_id: s_yGfoBLpfSruGrLS8xcn2uS
          stance: supports
          locator: CBDB:639989
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

# 王肇厔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇厔 | accepted |
| bio.summary | 王肇厔，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 639989） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肇厔（CBDB 639989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639989&o=json)
