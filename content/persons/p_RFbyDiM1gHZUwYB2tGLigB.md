---
schema: wang-person/v1
id: p_RFbyDiM1gHZUwYB2tGLigB
status: active
merged_into: null
display_name: 王璋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SLkgsGHs9WzgG9icAvujkq
        subject_person_id: p_RFbyDiM1gHZUwYB2tGLigB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dewP7399P6mGR9Qx2YHwkF
          claim_id: c_SLkgsGHs9WzgG9icAvujkq
          source_id: s_oTV4KGSxY15KCWxFxNRpFa
          stance: supports
          locator: CBDB:67229
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67229）
          source: &a1
            id: s_oTV4KGSxY15KCWxFxNRpFa
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 67229）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67229&o=json
            external_identifier: CBDB:67229
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bet4ZMLAEpYkKxkGNVSwZd
        subject_person_id: p_RFbyDiM1gHZUwYB2tGLigB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1686年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JS7nk8QUPSuArT8Hund9o7
          claim_id: c_bet4ZMLAEpYkKxkGNVSwZd
          source_id: s_oTV4KGSxY15KCWxFxNRpFa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pS6xESuKMgpdpTMZy2TUDc
        subject_person_id: p_RFbyDiM1gHZUwYB2tGLigB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋（生于1686年），清人物。籍贯正定。（中国历代人物传记资料库 CBDB 67229）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WrjTBmG50pZ-aX53i0ve2p
          claim_id: c_pS6xESuKMgpdpTMZy2TUDc
          source_id: s_oTV4KGSxY15KCWxFxNRpFa
          stance: supports
          locator: CBDB:67229
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

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璋 | accepted |
| birth.date | 1686年 | accepted |
| bio.summary | 王璋（生于1686年），清人物。籍贯正定。（中国历代人物传记资料库 CBDB 67229） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璋（CBDB 67229）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67229&o=json)
