---
schema: wang-person/v1
id: p_QKjH8cQ42HVUE7TkJiacZZ
status: active
merged_into: null
display_name: 王崇貴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SssFc3R8p8hbfuK2KNSiJY
        subject_person_id: p_QKjH8cQ42HVUE7TkJiacZZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f2UydLouCwEpiXvuiKhDsr
          claim_id: c_SssFc3R8p8hbfuK2KNSiJY
          source_id: s_5wMfZkKY667qtw1U69Rq2P
          stance: supports
          locator: CBDB:637354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637354）
          source: &a1
            id: s_5wMfZkKY667qtw1U69Rq2P
            source_type: api_record
            title: 中国历代人物传记资料库：王崇貴（CBDB 637354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637354&o=json
            external_identifier: CBDB:637354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u9C4qqjMyWc43iGtY2TTeS
        subject_person_id: p_QKjH8cQ42HVUE7TkJiacZZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇貴，清人物。籍贯寧陽，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637354）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q4kMxQ_yEY05zoHjS7KI1J
          claim_id: c_u9C4qqjMyWc43iGtY2TTeS
          source_id: s_5wMfZkKY667qtw1U69Rq2P
          stance: supports
          locator: CBDB:637354
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

# 王崇貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇貴 | accepted |
| bio.summary | 王崇貴，清人物。籍贯寧陽，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637354） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇貴（CBDB 637354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637354&o=json)
