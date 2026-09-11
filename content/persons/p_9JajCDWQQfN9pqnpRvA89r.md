---
schema: wang-person/v1
id: p_9JajCDWQQfN9pqnpRvA89r
status: active
merged_into: null
display_name: 王啟沃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oWEZTwp83RuZPNPoz8zPCj
        subject_person_id: p_9JajCDWQQfN9pqnpRvA89r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟沃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MsWo5h3xt7Z58aXvWmvi9K
          claim_id: c_oWEZTwp83RuZPNPoz8zPCj
          source_id: s_hDWEpKFAN8q4Fqy4pJoVop
          stance: supports
          locator: CBDB:71714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71714）
          source: &a1
            id: s_hDWEpKFAN8q4Fqy4pJoVop
            source_type: api_record
            title: 中国历代人物传记资料库：王啟沃（CBDB 71714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71714&o=json
            external_identifier: CBDB:71714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EKp86QzpRv5vgcL33mrbrF
        subject_person_id: p_9JajCDWQQfN9pqnpRvA89r
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1643年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WHyDUm7GHPWXj3uFHRqsGc
          claim_id: c_EKp86QzpRv5vgcL33mrbrF
          source_id: s_hDWEpKFAN8q4Fqy4pJoVop
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
        id: c_Qy8n1EiR8CtKzMeqVC6u8G
        subject_person_id: p_9JajCDWQQfN9pqnpRvA89r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟沃（生于1643年），清人物。籍贯新城。（中国历代人物传记资料库 CBDB 71714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kFF6aI38Fezg6W_WCTsg6_
          claim_id: c_Qy8n1EiR8CtKzMeqVC6u8G
          source_id: s_hDWEpKFAN8q4Fqy4pJoVop
          stance: supports
          locator: CBDB:71714
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

# 王啟沃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟沃 | accepted |
| birth.date | 1643年 | accepted |
| bio.summary | 王啟沃（生于1643年），清人物。籍贯新城。（中国历代人物传记资料库 CBDB 71714） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟沃（CBDB 71714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71714&o=json)
