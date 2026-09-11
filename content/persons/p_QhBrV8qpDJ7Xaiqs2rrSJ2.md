---
schema: wang-person/v1
id: p_QhBrV8qpDJ7Xaiqs2rrSJ2
status: active
merged_into: null
display_name: 王魁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LiwCesBoj4DEpBmyvsdL1p
        subject_person_id: p_QhBrV8qpDJ7Xaiqs2rrSJ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RYe6fK96C3LCLPfxHQAt7M
          claim_id: c_LiwCesBoj4DEpBmyvsdL1p
          source_id: s_36x66xdsG3kVLZ2BNA49cA
          stance: supports
          locator: CBDB:556186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556186）
          source: &a1
            id: s_36x66xdsG3kVLZ2BNA49cA
            source_type: api_record
            title: 中国历代人物传记资料库：王魁（CBDB 556186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556186&o=json
            external_identifier: CBDB:556186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VQw4XBcssjA7w6RDG1hkdY
        subject_person_id: p_QhBrV8qpDJ7Xaiqs2rrSJ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魁，清人物。籍贯唐縣。（中国历代人物传记资料库 CBDB 556186）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g2Sg-jkc4o6GZLulzhlfJY
          claim_id: c_VQw4XBcssjA7w6RDG1hkdY
          source_id: s_36x66xdsG3kVLZ2BNA49cA
          stance: supports
          locator: CBDB:556186
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
        id: c_hW314RqYt6un5my4tQEeua
        subject_person_id: p_QhBrV8qpDJ7Xaiqs2rrSJ2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jjq3btaFrJbp49azY8XtZa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wTDcRc7CMOeqAJ4PWvPFgT
          claim_id: c_hW314RqYt6un5my4tQEeua
          source_id: s_ZXb62UGm4TjUJMWOq1z2EJ
          stance: supports
          locator: 南陽府志，lgid=878719：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZXb62UGm4TjUJMWOq1z2EJ
            source_type: api_record
            title: 中国历代人物传记资料库：馮氏(王魁妻)（CBDB 556187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556187&o=json
            external_identifier: CBDB:556187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jjq3btaFrJbp49azY8XtZa
        status: active
        display_name: 馮氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王魁 | accepted |
| bio.summary | 王魁，清人物。籍贯唐縣。（中国历代人物传记资料库 CBDB 556186） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_jjq3btaFrJbp49azY8XtZa | 馮氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：馮氏(王魁妻)（CBDB 556187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556187&o=json)
- [中国历代人物传记资料库：王魁（CBDB 556186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556186&o=json)
