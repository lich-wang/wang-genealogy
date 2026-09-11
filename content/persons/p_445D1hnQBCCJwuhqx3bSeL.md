---
schema: wang-person/v1
id: p_445D1hnQBCCJwuhqx3bSeL
status: active
merged_into: null
display_name: 王朝重
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vSXxExi8LJjpEG5uuJQM6p
        subject_person_id: p_445D1hnQBCCJwuhqx3bSeL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝重
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CDBu4n5amvacogqEiUj96o
          claim_id: c_vSXxExi8LJjpEG5uuJQM6p
          source_id: s_LxLFF13uP13ZaQHnaBN7S4
          stance: supports
          locator: CBDB:638646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638646）
          source: &a1
            id: s_LxLFF13uP13ZaQHnaBN7S4
            source_type: api_record
            title: 中国历代人物传记资料库：王朝重（CBDB 638646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638646&o=json
            external_identifier: CBDB:638646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pkpnmVhKfCC4xRv4EGpyMD
        subject_person_id: p_445D1hnQBCCJwuhqx3bSeL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝重，清人物。籍贯綏德直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 638646）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_24l3By503yUEOfyqg5qFLB
          claim_id: c_pkpnmVhKfCC4xRv4EGpyMD
          source_id: s_LxLFF13uP13ZaQHnaBN7S4
          stance: supports
          locator: CBDB:638646
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

# 王朝重

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝重 | accepted |
| bio.summary | 王朝重，清人物。籍贯綏德直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 638646） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝重（CBDB 638646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638646&o=json)
