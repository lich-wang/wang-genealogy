---
schema: wang-person/v1
id: p_X8tF4iMm61ELFNJxEiNo1B
status: active
merged_into: null
display_name: 王慶長
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F5m9jDtSdHgUVfy91W6Fiz
        subject_person_id: p_X8tF4iMm61ELFNJxEiNo1B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶長
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_miBi2MHpHgCwrmM8DEpKPa
          claim_id: c_F5m9jDtSdHgUVfy91W6Fiz
          source_id: s_zAgB2SYhpsEDDeEv9Hgegq
          stance: supports
          locator: CBDB:59019
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（59019）
          source: &a1
            id: s_zAgB2SYhpsEDDeEv9Hgegq
            source_type: api_record
            title: 中国历代人物传记资料库：王慶長（CBDB 59019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59019&o=json
            external_identifier: CBDB:59019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QBoMakH1YfSvp85CwHXwzH
        subject_person_id: p_X8tF4iMm61ELFNJxEiNo1B
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1749年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TwCkys24kre92Gu6C1yni6
          claim_id: c_QBoMakH1YfSvp85CwHXwzH
          source_id: s_zAgB2SYhpsEDDeEv9Hgegq
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
        id: c_t4JE4R1MtKAKtfnsKnKmLM
        subject_person_id: p_X8tF4iMm61ELFNJxEiNo1B
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1791年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_95GG5UtL5AjbBG5uLq4HLD
          claim_id: c_t4JE4R1MtKAKtfnsKnKmLM
          source_id: s_zAgB2SYhpsEDDeEv9Hgegq
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
        id: c_GKPQFdEf3UcGP5FuTVznVS
        subject_person_id: p_X8tF4iMm61ELFNJxEiNo1B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VGfsm9K76Pj7j1mmE2Lmxo
          claim_id: c_GKPQFdEf3UcGP5FuTVznVS
          source_id: s_zAgB2SYhpsEDDeEv9Hgegq
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

# 王慶長

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶長 | accepted |
| birth.date | 1749年 | accepted |
| death.date | 1791年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶長（CBDB 59019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59019&o=json)
