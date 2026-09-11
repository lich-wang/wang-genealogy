---
schema: wang-person/v1
id: p_1LTdgvDfeVSkCBUQG6i6QP
status: active
merged_into: null
display_name: 王敬公
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_duVNjXQXQudTvuBBQKsMEo
        subject_person_id: p_1LTdgvDfeVSkCBUQG6i6QP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬公
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C51UAyBA4NQbqfAH9vuorY
          claim_id: c_duVNjXQXQudTvuBBQKsMEo
          source_id: s_rMXaPCrdwq75RwXPNjtgJv
          stance: supports
          locator: CBDB:72045
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72045）
          source: &a1
            id: s_rMXaPCrdwq75RwXPNjtgJv
            source_type: api_record
            title: 中国历代人物传记资料库：王敬公（CBDB 72045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72045&o=json
            external_identifier: CBDB:72045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ux6Hz5aB9HdpbeH8Q4tzV7
        subject_person_id: p_1LTdgvDfeVSkCBUQG6i6QP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1632年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YXRuGc2dHqzdGchucxQNA3
          claim_id: c_Ux6Hz5aB9HdpbeH8Q4tzV7
          source_id: s_rMXaPCrdwq75RwXPNjtgJv
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
        id: c_si44apXBAJSoHBMxoCFA44
        subject_person_id: p_1LTdgvDfeVSkCBUQG6i6QP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬公（生于1632年），清人物。籍贯商河。（中国历代人物传记资料库 CBDB 72045）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XIwdjDKvBSM7pAkL7YdfPC
          claim_id: c_si44apXBAJSoHBMxoCFA44
          source_id: s_rMXaPCrdwq75RwXPNjtgJv
          stance: supports
          locator: CBDB:72045
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

# 王敬公

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬公 | accepted |
| birth.date | 1632年 | accepted |
| bio.summary | 王敬公（生于1632年），清人物。籍贯商河。（中国历代人物传记资料库 CBDB 72045） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬公（CBDB 72045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72045&o=json)
