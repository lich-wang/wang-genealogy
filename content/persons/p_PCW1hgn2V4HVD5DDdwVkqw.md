---
schema: wang-person/v1
id: p_PCW1hgn2V4HVD5DDdwVkqw
status: active
merged_into: null
display_name: 王鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AW4HKr9AuDJq3MyzFJY7LC
        subject_person_id: p_PCW1hgn2V4HVD5DDdwVkqw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J6JMtsP7ckBuTu1XAV69eD
          claim_id: c_AW4HKr9AuDJq3MyzFJY7LC
          source_id: s_zJS3aGkWq2KrxfQv6axDBd
          stance: supports
          locator: CBDB:38924
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38924）
          source: &a1
            id: s_zJS3aGkWq2KrxfQv6axDBd
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 38924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38924&o=json
            external_identifier: CBDB:38924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ezF6YjfEeHnfso31KHmbyD
        subject_person_id: p_PCW1hgn2V4HVD5DDdwVkqw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎，宋人物。籍贯襄陽，身份为行醫、醫學。（中国历代人物传记资料库 CBDB 38924）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vduB7J1z2IgF9Dm9w_wrFW
          claim_id: c_ezF6YjfEeHnfso31KHmbyD
          source_id: s_zJS3aGkWq2KrxfQv6axDBd
          stance: supports
          locator: CBDB:38924
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

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | 王鼎，宋人物。籍贯襄陽，身份为行醫、醫學。（中国历代人物传记资料库 CBDB 38924） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 38924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38924&o=json)
