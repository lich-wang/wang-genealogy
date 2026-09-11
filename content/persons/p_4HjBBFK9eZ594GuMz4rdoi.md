---
schema: wang-person/v1
id: p_4HjBBFK9eZ594GuMz4rdoi
status: active
merged_into: null
display_name: 王芬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VWeQ1ZWQJVvkpt6adt2r7d
        subject_person_id: p_4HjBBFK9eZ594GuMz4rdoi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qbkA2tMmKvD8cojtFihxSM
          claim_id: c_VWeQ1ZWQJVvkpt6adt2r7d
          source_id: s_rUBuWPcRBYmyMBXn8P6YSi
          stance: supports
          locator: CBDB:562035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562035）
          source: &a1
            id: s_rUBuWPcRBYmyMBXn8P6YSi
            source_type: api_record
            title: 中国历代人物传记资料库：王芬（CBDB 562035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562035&o=json
            external_identifier: CBDB:562035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fx74vHvEqW1eD2kT84Tk36
        subject_person_id: p_4HjBBFK9eZ594GuMz4rdoi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芬，明人物。身份为孝子/孝女。（中国历代人物传记资料库 CBDB 562035）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jF29WR4axg2T3HP1MLeT6i
          claim_id: c_Fx74vHvEqW1eD2kT84Tk36
          source_id: s_rUBuWPcRBYmyMBXn8P6YSi
          stance: supports
          locator: CBDB:562035
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

# 王芬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芬 | accepted |
| bio.summary | 王芬，明人物。身份为孝子/孝女。（中国历代人物传记资料库 CBDB 562035） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芬（CBDB 562035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562035&o=json)
