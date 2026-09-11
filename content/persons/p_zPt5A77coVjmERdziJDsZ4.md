---
schema: wang-person/v1
id: p_zPt5A77coVjmERdziJDsZ4
status: active
merged_into: null
display_name: 王純鏳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M7vN9EAjTSDpeQdTR9nMEX
        subject_person_id: p_zPt5A77coVjmERdziJDsZ4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純鏳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7B6pNdgVJq8m55qWf6z8LH
          claim_id: c_M7vN9EAjTSDpeQdTR9nMEX
          source_id: s_w51DGKSJS45CyoPDAPqeyi
          stance: supports
          locator: CBDB:71725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71725）
          source: &a1
            id: s_w51DGKSJS45CyoPDAPqeyi
            source_type: api_record
            title: 中国历代人物传记资料库：王純鏳（CBDB 71725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71725&o=json
            external_identifier: CBDB:71725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mKYpUxdj1ArabSFuDw1iYD
        subject_person_id: p_zPt5A77coVjmERdziJDsZ4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1685年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NZrzRc14ieYibBxAzQ7nB5
          claim_id: c_mKYpUxdj1ArabSFuDw1iYD
          source_id: s_w51DGKSJS45CyoPDAPqeyi
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
        id: c_8b9iyvFaGxqRijRv1YS2Y5
        subject_person_id: p_zPt5A77coVjmERdziJDsZ4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純鏳（生于1685年），清人物。籍贯攸縣。（中国历代人物传记资料库 CBDB 71725）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tBt-MQVbdd86sSLNCOaPrn
          claim_id: c_8b9iyvFaGxqRijRv1YS2Y5
          source_id: s_w51DGKSJS45CyoPDAPqeyi
          stance: supports
          locator: CBDB:71725
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

# 王純鏳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純鏳 | accepted |
| birth.date | 1685年 | accepted |
| bio.summary | 王純鏳（生于1685年），清人物。籍贯攸縣。（中国历代人物传记资料库 CBDB 71725） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王純鏳（CBDB 71725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71725&o=json)
