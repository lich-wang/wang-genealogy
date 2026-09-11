---
schema: wang-person/v1
id: p_s8LdLCAK52JV2SVZFscCwd
status: active
merged_into: null
display_name: 王奇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YrYzQDYRQS4sahTG7GJjz9
        subject_person_id: p_s8LdLCAK52JV2SVZFscCwd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U8Dh9v6vAFFqECNuV6xiCz
          claim_id: c_YrYzQDYRQS4sahTG7GJjz9
          source_id: s_6RHoVb2QfNLp88gDNettBk
          stance: supports
          locator: CBDB:454780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454780）
          source: &a1
            id: s_6RHoVb2QfNLp88gDNettBk
            source_type: api_record
            title: 中国历代人物传记资料库：王奇（CBDB 454780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454780&o=json
            external_identifier: CBDB:454780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z2jvbBRbnRe13uThQFkjs8
        subject_person_id: p_s8LdLCAK52JV2SVZFscCwd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王奇，清人物。入仕貢生: 納貢(例貢,增貢,捐貢)，曾任教諭。（中国历代人物传记资料库 CBDB 454780）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4KTEfx8Zaa4N3tiai4o7O9
          claim_id: c_z2jvbBRbnRe13uThQFkjs8
          source_id: s_6RHoVb2QfNLp88gDNettBk
          stance: supports
          locator: CBDB:454780
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

# 王奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奇 | accepted |
| bio.summary | 王奇，清人物。入仕貢生: 納貢(例貢,增貢,捐貢)，曾任教諭。（中国历代人物传记资料库 CBDB 454780） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奇（CBDB 454780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454780&o=json)
