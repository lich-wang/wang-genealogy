---
schema: wang-person/v1
id: p_pC326BtrBuDhum9RhixZiW
status: active
merged_into: null
display_name: 王能
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DqfYZHhDj3hfcDNMnR2sup
        subject_person_id: p_pC326BtrBuDhum9RhixZiW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tuM7wxWbGZYxwkacyoAVer
          claim_id: c_DqfYZHhDj3hfcDNMnR2sup
          source_id: s_XDNJ97WTm5W8SptHdNZoBA
          stance: supports
          locator: CBDB:38168
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38168）
          source: &a1
            id: s_XDNJ97WTm5W8SptHdNZoBA
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 38168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38168&o=json
            external_identifier: CBDB:38168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qyjbDg4DT4nk7cckYXE1Nb
        subject_person_id: p_pC326BtrBuDhum9RhixZiW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 942年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mcusMKYANXE469LHRPoTDd
          claim_id: c_qyjbDg4DT4nk7cckYXE1Nb
          source_id: s_XDNJ97WTm5W8SptHdNZoBA
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
        id: c_BugzvYopKLhWotF2hz6C8H
        subject_person_id: p_pC326BtrBuDhum9RhixZiW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1019年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ayBAJQ3cZ3Xxpi4rE3boDd
          claim_id: c_BugzvYopKLhWotF2hz6C8H
          source_id: s_XDNJ97WTm5W8SptHdNZoBA
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
        id: c_m6Q4CxKcpHc7A4gfqTNFGt
        subject_person_id: p_pC326BtrBuDhum9RhixZiW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Z3AGc2RxsPzTF9BAJctc5
          claim_id: c_m6Q4CxKcpHc7A4gfqTNFGt
          source_id: s_XDNJ97WTm5W8SptHdNZoBA
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

# 王能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王能 | accepted |
| birth.date | 942年 | accepted |
| death.date | 1019年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王能（CBDB 38168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38168&o=json)
