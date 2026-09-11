---
schema: wang-person/v1
id: p_M2nNnZcK1P4RC6DKLRwypZ
status: active
merged_into: null
display_name: 王元仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mXgmFN9rMMb48RNsJi8TSR
        subject_person_id: p_M2nNnZcK1P4RC6DKLRwypZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_onHKf64jf4cUNNF71xAQ22
          claim_id: c_mXgmFN9rMMb48RNsJi8TSR
          source_id: s_JDAts3PGU3YVjo88D6FY4F
          stance: supports
          locator: CBDB:694060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694060）
          source: &a1
            id: s_JDAts3PGU3YVjo88D6FY4F
            source_type: api_record
            title: 中国历代人物传记资料库：王元仁（CBDB 694060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694060&o=json
            external_identifier: CBDB:694060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.668Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WXVj8jGmzdp3Pu1ZxK9Vqs
        subject_person_id: p_M2nNnZcK1P4RC6DKLRwypZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元仁，清人物。籍贯海鹽，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 694060）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_So_Ow6oTYU8kREOTcvewKk
          claim_id: c_WXVj8jGmzdp3Pu1ZxK9Vqs
          source_id: s_JDAts3PGU3YVjo88D6FY4F
          stance: supports
          locator: CBDB:694060
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

# 王元仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元仁 | accepted |
| bio.summary | 王元仁，清人物。籍贯海鹽，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 694060） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元仁（CBDB 694060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694060&o=json)
