---
schema: wang-person/v1
id: p_JitX9FH1WHsJ8XqCdCxnMb
status: active
merged_into: null
display_name: 王璒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oRm5Hpg6F5LC86rUxGrpfK
        subject_person_id: p_JitX9FH1WHsJ8XqCdCxnMb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bDCHHjyG66WF4x58uDZw6k
          claim_id: c_oRm5Hpg6F5LC86rUxGrpfK
          source_id: s_4NR4HMMYwh4FpGjYCwby7D
          stance: supports
          locator: CBDB:221938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221938）
          source: &a1
            id: s_4NR4HMMYwh4FpGjYCwby7D
            source_type: api_record
            title: 中国历代人物传记资料库：王璒（CBDB 221938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221938&o=json
            external_identifier: CBDB:221938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.355Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1rLbphuQa8c1Nk5Txm4QjQ
        subject_person_id: p_JitX9FH1WHsJ8XqCdCxnMb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璒，明人物。成化二年進士，籍贯大興，曾任戶部主事。（中国历代人物传记资料库 CBDB 221938）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vketUFXE4WHa__UHCDFNmT
          claim_id: c_1rLbphuQa8c1Nk5Txm4QjQ
          source_id: s_4NR4HMMYwh4FpGjYCwby7D
          stance: supports
          locator: CBDB:221938
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

# 王璒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璒 | accepted |
| bio.summary | 王璒，明人物。成化二年進士，籍贯大興，曾任戶部主事。（中国历代人物传记资料库 CBDB 221938） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璒（CBDB 221938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221938&o=json)
