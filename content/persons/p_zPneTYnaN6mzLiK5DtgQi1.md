---
schema: wang-person/v1
id: p_zPneTYnaN6mzLiK5DtgQi1
status: active
merged_into: null
display_name: 王可垠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9UaNi4eehN1Q49Acun1wkJ
        subject_person_id: p_zPneTYnaN6mzLiK5DtgQi1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可垠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1jKG1ZG5XsLBF2UbR9Ld7s
          claim_id: c_9UaNi4eehN1Q49Acun1wkJ
          source_id: s_C7BiyK7HMAfjGRt4QxqP3o
          stance: supports
          locator: CBDB:636479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636479）
          source: &a1
            id: s_C7BiyK7HMAfjGRt4QxqP3o
            source_type: api_record
            title: 中国历代人物传记资料库：王可垠（CBDB 636479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636479&o=json
            external_identifier: CBDB:636479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.007Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mmWuuJxpRMhMG8MSU5F2S7
        subject_person_id: p_zPneTYnaN6mzLiK5DtgQi1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王可垠，清人物。籍贯高密，入仕貢生: 拔貢，曾任訓導、復設教諭。（中国历代人物传记资料库 CBDB 636479）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lxpcnQpIwLmiJohgPt8RfQ
          claim_id: c_mmWuuJxpRMhMG8MSU5F2S7
          source_id: s_C7BiyK7HMAfjGRt4QxqP3o
          stance: supports
          locator: CBDB:636479
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

# 王可垠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可垠 | accepted |
| bio.summary | 王可垠，清人物。籍贯高密，入仕貢生: 拔貢，曾任訓導、復設教諭。（中国历代人物传记资料库 CBDB 636479） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王可垠（CBDB 636479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636479&o=json)
