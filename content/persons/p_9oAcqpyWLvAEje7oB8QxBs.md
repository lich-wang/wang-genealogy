---
schema: wang-person/v1
id: p_9oAcqpyWLvAEje7oB8QxBs
status: active
merged_into: null
display_name: 王治典
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aWKbXeBeGG92hFzkMJXnNn
        subject_person_id: p_9oAcqpyWLvAEje7oB8QxBs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治典
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AkTE8vdEePa2GZTP3i9CLv
          claim_id: c_aWKbXeBeGG92hFzkMJXnNn
          source_id: s_yMswPKDuEFzWwhqmegCyxP
          stance: supports
          locator: CBDB:639059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639059）
          source: &a1
            id: s_yMswPKDuEFzWwhqmegCyxP
            source_type: api_record
            title: 中国历代人物传记资料库：王治典（CBDB 639059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639059&o=json
            external_identifier: CBDB:639059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NtGtbM8odjhzJq4V43DBs5
        subject_person_id: p_9oAcqpyWLvAEje7oB8QxBs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治典，清人物。籍贯行唐，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639059）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9-zSp_w_IQzqofspOATdbt
          claim_id: c_NtGtbM8odjhzJq4V43DBs5
          source_id: s_yMswPKDuEFzWwhqmegCyxP
          stance: supports
          locator: CBDB:639059
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

# 王治典

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治典 | accepted |
| bio.summary | 王治典，清人物。籍贯行唐，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639059） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王治典（CBDB 639059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639059&o=json)
