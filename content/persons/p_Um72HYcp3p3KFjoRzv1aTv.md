---
schema: wang-person/v1
id: p_Um72HYcp3p3KFjoRzv1aTv
status: active
merged_into: null
display_name: 王沂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Npw9R7H1Bg6kb1DnJ37vJh
        subject_person_id: p_Um72HYcp3p3KFjoRzv1aTv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7oh1AX8N6CXZRY9Rhz7iPA
          claim_id: c_Npw9R7H1Bg6kb1DnJ37vJh
          source_id: s_UiS4midCV1XLhhZbiUM2Qq
          stance: supports
          locator: CBDB:28615
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28615）
          source: &a1
            id: s_UiS4midCV1XLhhZbiUM2Qq
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 28615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28615&o=json
            external_identifier: CBDB:28615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iBNna2438CbefwAdt5MPWA
        subject_person_id: p_Um72HYcp3p3KFjoRzv1aTv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沂，元人物。籍贯真定，入仕進士，曾任國子學博士、翰林國史院待制、翰林國史院國史編修官。（中国历代人物传记资料库 CBDB 28615）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3yZ7OAM27tuyRHpzv6Oa0m
          claim_id: c_iBNna2438CbefwAdt5MPWA
          source_id: s_UiS4midCV1XLhhZbiUM2Qq
          stance: supports
          locator: CBDB:28615
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

# 王沂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沂 | accepted |
| bio.summary | 王沂，元人物。籍贯真定，入仕進士，曾任國子學博士、翰林國史院待制、翰林國史院國史編修官。（中国历代人物传记资料库 CBDB 28615） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沂（CBDB 28615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28615&o=json)
