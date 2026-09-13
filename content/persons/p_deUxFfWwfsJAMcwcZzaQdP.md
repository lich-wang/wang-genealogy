---
schema: wang-person/v1
id: p_deUxFfWwfsJAMcwcZzaQdP
status: active
merged_into: null
display_name: 王正真
cbdb_id: 101131
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FnfcXN7qs4F2t949sSQT2n
        subject_person_id: p_deUxFfWwfsJAMcwcZzaQdP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正真，元人物。籍贯杭州路，身份为道士。（中国历代人物传记资料库 CBDB 101131）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3z17YhNx_GDnAhtwIKrZld
          claim_id: c_FnfcXN7qs4F2t949sSQT2n
          source_id: s_dNGU29zTEYj9F7dfUCBsSF
          stance: supports
          locator: CBDB:101131
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dNGU29zTEYj9F7dfUCBsSF
            source_type: api_record
            title: 中国历代人物传记资料库：王正真（CBDB 101131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101131&o=json
            external_identifier: CBDB:101131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:50.362Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vwX2L5fHh1SmrCPBAbfp7d
        subject_person_id: p_deUxFfWwfsJAMcwcZzaQdP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正真
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tha6WAz9nn55yGAmH9D68x
          claim_id: c_vwX2L5fHh1SmrCPBAbfp7d
          source_id: s_dNGU29zTEYj9F7dfUCBsSF
          stance: supports
          locator: CBDB:101131
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1701-1800）｜历史性依据：CBDB 朝代 = 元
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

# 王正真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正真，元人物。籍贯杭州路，身份为道士。（中国历代人物传记资料库 CBDB 101131） | accepted |
| name.primary | 王正真 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正真（CBDB 101131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101131&o=json)
