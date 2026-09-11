---
schema: wang-person/v1
id: p_9E2mDGKwTK9PnmoDvsMqS1
status: active
merged_into: null
display_name: 王廷璽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XKmtiCei8yKr1bhHgxV3Ca
        subject_person_id: p_9E2mDGKwTK9PnmoDvsMqS1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bfNG4exioLbT8ZYnKe6Q3V
          claim_id: c_XKmtiCei8yKr1bhHgxV3Ca
          source_id: s_u2WyK7tuW6hy2fo7Ld17iQ
          stance: supports
          locator: CBDB:561648
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561648）
          source: &a1
            id: s_u2WyK7tuW6hy2fo7Ld17iQ
            source_type: api_record
            title: 中国历代人物传记资料库：王廷璽（CBDB 561648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561648&o=json
            external_identifier: CBDB:561648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Eno1GuVKumckCmkWKFwdXP
        subject_person_id: p_9E2mDGKwTK9PnmoDvsMqS1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷璽，清人物。籍贯淅川。（中国历代人物传记资料库 CBDB 561648）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wCYgLw7hzI0HQZxKEbUa2I
          claim_id: c_Eno1GuVKumckCmkWKFwdXP
          source_id: s_u2WyK7tuW6hy2fo7Ld17iQ
          stance: supports
          locator: CBDB:561648
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
  spouses:
    - claim:
        id: c_tYDqG5Ege44aEtK_gHSEJ4
        subject_person_id: p_9E2mDGKwTK9PnmoDvsMqS1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_hXvLETRHA2FM9fWtb9ACsn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SIx3JJwpRnGU46zXm25Z4q
          claim_id: c_tYDqG5Ege44aEtK_gHSEJ4
          source_id: s_4bmCQoUx4FGAQ-Qa6Jizfy
          stance: supports
          locator: 南陽府志，lgid=878867：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4bmCQoUx4FGAQ-Qa6Jizfy
            source_type: api_record
            title: 中国历代人物传记资料库：龔氏(王廷璽妻)（CBDB 561649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561649&o=json
            external_identifier: CBDB:561649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hXvLETRHA2FM9fWtb9ACsn
        status: active
        display_name: 龔氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王廷璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷璽 | accepted |
| bio.summary | 王廷璽，清人物。籍贯淅川。（中国历代人物传记资料库 CBDB 561648） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hXvLETRHA2FM9fWtb9ACsn | 龔氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：龔氏(王廷璽妻)（CBDB 561649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561649&o=json)
- [中国历代人物传记资料库：王廷璽（CBDB 561648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561648&o=json)
