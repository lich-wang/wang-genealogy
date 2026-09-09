---
schema: wang-person/v1
id: p_dHK6S2CF83o7bsW1omDPPe
status: active
merged_into: null
display_name: 王裕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r8UeJLp4PBYXUnYpNtL3fM
        subject_person_id: p_dHK6S2CF83o7bsW1omDPPe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tkaf41B8NN2jNynDqCDhi8
          claim_id: c_r8UeJLp4PBYXUnYpNtL3fM
          source_id: s_V2fSUyMizNfJqvRAfkJqCX
          stance: supports
          locator: CBDB:144860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（144860）
          source: &a1
            id: s_V2fSUyMizNfJqvRAfkJqCX
            source_type: api_record
            title: 中国历代人物传记资料库：王裕（CBDB 144860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144860&o=json
            external_identifier: CBDB:144860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.636Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8HqLhPM9b1xVU5k3RtFbbq
        subject_person_id: p_dHK6S2CF83o7bsW1omDPPe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 926年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_edFwAoA4efxd2axxPuEbYA
          claim_id: c_8HqLhPM9b1xVU5k3RtFbbq
          source_id: s_V2fSUyMizNfJqvRAfkJqCX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2XNcpkb8qhBAHmPavhv89J
        subject_person_id: p_dHK6S2CF83o7bsW1omDPPe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 980年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kXjFQAcVrXFFcJW1J8bz3t
          claim_id: c_2XNcpkb8qhBAHmPavhv89J
          source_id: s_V2fSUyMizNfJqvRAfkJqCX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uGjr1GAWs2cbLvF5oQyNmy
        subject_person_id: p_dHK6S2CF83o7bsW1omDPPe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CA64jKsBCpPuj37JbkrRMS
          claim_id: c_uGjr1GAWs2cbLvF5oQyNmy
          source_id: s_V2fSUyMizNfJqvRAfkJqCX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕 | accepted |
| birth.date | 926年 | accepted |
| death.date | 980年 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王裕（CBDB 144860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144860&o=json)
