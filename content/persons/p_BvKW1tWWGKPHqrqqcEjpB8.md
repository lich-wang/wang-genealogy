---
schema: wang-person/v1
id: p_BvKW1tWWGKPHqrqqcEjpB8
status: active
merged_into: null
display_name: 王恭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zEkEv4DfcFwAEs6yNQJFt5
        subject_person_id: p_BvKW1tWWGKPHqrqqcEjpB8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_46AMGJDo7WK5dvapVC8b1d
          claim_id: c_zEkEv4DfcFwAEs6yNQJFt5
          source_id: s_b55f5pJcLxPDFb6vYjYLW8
          stance: supports
          locator: CBDB:572012
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572012）
          source: &a1
            id: s_b55f5pJcLxPDFb6vYjYLW8
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 572012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572012&o=json
            external_identifier: CBDB:572012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q73PJTSBE5NoAuEphxq5JM
        subject_person_id: p_BvKW1tWWGKPHqrqqcEjpB8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭，明人物。曾任駙馬都尉。（中国历代人物传记资料库 CBDB 572012）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bEpZVgPm4q2oCrZplM2MGr
          claim_id: c_Q73PJTSBE5NoAuEphxq5JM
          source_id: s_b55f5pJcLxPDFb6vYjYLW8
          stance: supports
          locator: CBDB:572012
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
        id: c_S03GLsLmnZ1Vn5KG_-b_29
        subject_person_id: p_BvKW1tWWGKPHqrqqcEjpB8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2p3hyQy38nEgbg9Xoek9Z6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YX2nMEMb5P-qtoItt1M8Ht
          claim_id: c_S03GLsLmnZ1Vn5KG_-b_29
          source_id: s_1XQnNhaXfBx-SA4xr3e74n
          stance: supports
          locator: 紹興府志:八十卷，lgid=317058：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1XQnNhaXfBx-SA4xr3e74n
            source_type: api_record
            title: 中国历代人物传记资料库：朱氏(福成公主)（CBDB 572011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572011&o=json
            external_identifier: CBDB:572011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2p3hyQy38nEgbg9Xoek9Z6
        status: active
        display_name: 朱氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭 | accepted |
| bio.summary | 王恭，明人物。曾任駙馬都尉。（中国历代人物传记资料库 CBDB 572012） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2p3hyQy38nEgbg9Xoek9Z6 | 朱氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 572012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572012&o=json)
- [中国历代人物传记资料库：朱氏(福成公主)（CBDB 572011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572011&o=json)
