---
schema: wang-person/v1
id: p_NvfX7KXmRqS4rEUk8TGHq8
status: active
merged_into: null
display_name: 王體仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hm5Uoe3SfYXNcfi9A39A4x
        subject_person_id: p_NvfX7KXmRqS4rEUk8TGHq8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8RG6wouQ277fpqQS4HGJVU
          claim_id: c_hm5Uoe3SfYXNcfi9A39A4x
          source_id: s_9iH74TYLCD1gzZsaGP15Ya
          stance: supports
          locator: CBDB:343592
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343592）
          source: &a1
            id: s_9iH74TYLCD1gzZsaGP15Ya
            source_type: api_record
            title: 中国历代人物传记资料库：王體仁（CBDB 343592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343592&o=json
            external_identifier: CBDB:343592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rDs3gLfg8QcHbfXLsBbx15
        subject_person_id: p_NvfX7KXmRqS4rEUk8TGHq8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體仁，清人物。明清進士進士，籍贯平定直隸州，入仕進士。（中国历代人物传记资料库 CBDB 343592）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rgsduQrnJlJhMoJwA7upkx
          claim_id: c_rDs3gLfg8QcHbfXLsBbx15
          source_id: s_9iH74TYLCD1gzZsaGP15Ya
          stance: supports
          locator: CBDB:343592
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

# 王體仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王體仁 | accepted |
| bio.summary | 王體仁，清人物。明清進士進士，籍贯平定直隸州，入仕進士。（中国历代人物传记资料库 CBDB 343592） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王體仁（CBDB 343592）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343592&o=json)
