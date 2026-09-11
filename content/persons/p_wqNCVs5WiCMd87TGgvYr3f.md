---
schema: wang-person/v1
id: p_wqNCVs5WiCMd87TGgvYr3f
status: active
merged_into: null
display_name: 王思劭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3z6PPc6J4P7H6XMm4enqKf
        subject_person_id: p_wqNCVs5WiCMd87TGgvYr3f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思劭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_um2PpG7fz6e43QFcYqDiCR
          claim_id: c_3z6PPc6J4P7H6XMm4enqKf
          source_id: s_Rf2wCKo1F9BCiN1NUEiS66
          stance: supports
          locator: CBDB:637794
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637794）
          source: &a1
            id: s_Rf2wCKo1F9BCiN1NUEiS66
            source_type: api_record
            title: 中国历代人物传记资料库：王思劭（CBDB 637794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637794&o=json
            external_identifier: CBDB:637794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UCyp8XF4juqCtbeR28Sutf
        subject_person_id: p_wqNCVs5WiCMd87TGgvYr3f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思劭，清人物。籍贯南昌，曾任典史。（中国历代人物传记资料库 CBDB 637794）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2UZPR4iIZhG4awWcVg8nWt
          claim_id: c_UCyp8XF4juqCtbeR28Sutf
          source_id: s_Rf2wCKo1F9BCiN1NUEiS66
          stance: supports
          locator: CBDB:637794
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

# 王思劭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思劭 | accepted |
| bio.summary | 王思劭，清人物。籍贯南昌，曾任典史。（中国历代人物传记资料库 CBDB 637794） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思劭（CBDB 637794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637794&o=json)
