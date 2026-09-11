---
schema: wang-person/v1
id: p_4ini4VHfM5ZVAjn611xxKA
status: active
merged_into: null
display_name: 王明昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JJAG377MY4hdWU13fLigCJ
        subject_person_id: p_4ini4VHfM5ZVAjn611xxKA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wVCQJagCHMgmkxCBELFTnf
          claim_id: c_JJAG377MY4hdWU13fLigCJ
          source_id: s_oN8FY4DZZ5gy8qSZcZ2MdD
          stance: supports
          locator: CBDB:638383
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638383）
          source: &a1
            id: s_oN8FY4DZZ5gy8qSZcZ2MdD
            source_type: api_record
            title: 中国历代人物传记资料库：王明昌（CBDB 638383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638383&o=json
            external_identifier: CBDB:638383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6gMbHNzijjYWVdnbFpENT1
        subject_person_id: p_4ini4VHfM5ZVAjn611xxKA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明昌，清人物。籍贯陝西省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 638383）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jBjbBv4yE83h0ok65iJ23H
          claim_id: c_6gMbHNzijjYWVdnbFpENT1
          source_id: s_oN8FY4DZZ5gy8qSZcZ2MdD
          stance: supports
          locator: CBDB:638383
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

# 王明昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明昌 | accepted |
| bio.summary | 王明昌，清人物。籍贯陝西省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 638383） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明昌（CBDB 638383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638383&o=json)
