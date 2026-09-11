---
schema: wang-person/v1
id: p_p3mX8Ebmmc2vafNQTd61am
status: active
merged_into: null
display_name: 王傚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y2mUgkufShDkTHQKtbQW7E
        subject_person_id: p_p3mX8Ebmmc2vafNQTd61am
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aQzxynd6qPWRvF9ET4DNto
          claim_id: c_Y2mUgkufShDkTHQKtbQW7E
          source_id: s_tiC9FYQM2edihb6G2gKYs5
          stance: supports
          locator: CBDB:342456
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342456）
          source: &a1
            id: s_tiC9FYQM2edihb6G2gKYs5
            source_type: api_record
            title: 中国历代人物传记资料库：王傚（CBDB 342456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342456&o=json
            external_identifier: CBDB:342456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v8ijqaxP3BJ4MWT5gxarqV
        subject_person_id: p_p3mX8Ebmmc2vafNQTd61am
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傚，清人物。明清進士進士，籍贯平定直隸州，入仕進士。（中国历代人物传记资料库 CBDB 342456）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i_N4pPwpXksqxObQD6XcBi
          claim_id: c_v8ijqaxP3BJ4MWT5gxarqV
          source_id: s_tiC9FYQM2edihb6G2gKYs5
          stance: supports
          locator: CBDB:342456
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

# 王傚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傚 | accepted |
| bio.summary | 王傚，清人物。明清進士進士，籍贯平定直隸州，入仕進士。（中国历代人物传记资料库 CBDB 342456） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傚（CBDB 342456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342456&o=json)
