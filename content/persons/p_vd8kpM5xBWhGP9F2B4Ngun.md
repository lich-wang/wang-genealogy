---
schema: wang-person/v1
id: p_vd8kpM5xBWhGP9F2B4Ngun
status: active
merged_into: null
display_name: 王楊姐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NfeSMrfqek5y64HJaUB9hK
        subject_person_id: p_vd8kpM5xBWhGP9F2B4Ngun
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楊姐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iVC9xwLFKC5nq4uKCKStz9
          claim_id: c_NfeSMrfqek5y64HJaUB9hK
          source_id: s_KmxyPRug37GLea5TsuJMhR
          stance: supports
          locator: CBDB:699423
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699423）
          source: &a1
            id: s_KmxyPRug37GLea5TsuJMhR
            source_type: api_record
            title: 中国历代人物传记资料库：王楊姐（CBDB 699423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699423&o=json
            external_identifier: CBDB:699423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3yhFmxcxymLtqs9HoQwPjJ
        subject_person_id: p_vd8kpM5xBWhGP9F2B4Ngun
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
        - id: cs_GNz7D6XdSkuhVQLaZ7DhHe
          claim_id: c_3yhFmxcxymLtqs9HoQwPjJ
          source_id: s_KmxyPRug37GLea5TsuJMhR
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

# 王楊姐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楊姐 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楊姐（CBDB 699423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699423&o=json)
