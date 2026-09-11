---
schema: wang-person/v1
id: p_8GuMdtkUp14ewa7dGbg9KB
status: active
merged_into: null
display_name: 王元甫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q29yWUAWHzfzgrC2V9c8wX
        subject_person_id: p_8GuMdtkUp14ewa7dGbg9KB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qCgHW77wTskcLEatuDBXZz
          claim_id: c_Q29yWUAWHzfzgrC2V9c8wX
          source_id: s_J3ctzDutPQZgm6BPEoZ9fd
          stance: supports
          locator: CBDB:38007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38007）
          source: &a1
            id: s_J3ctzDutPQZgm6BPEoZ9fd
            source_type: api_record
            title: 中国历代人物传记资料库：王元甫（CBDB 38007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38007&o=json
            external_identifier: CBDB:38007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.317Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AfkWj3k3BLnXBbHeNHRmtQ
        subject_person_id: p_8GuMdtkUp14ewa7dGbg9KB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元甫，宋人物。籍贯江州，身份为道士、處士。（中国历代人物传记资料库 CBDB 38007）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HMEy0ICxwBp_vV3_RjrAQr
          claim_id: c_AfkWj3k3BLnXBbHeNHRmtQ
          source_id: s_J3ctzDutPQZgm6BPEoZ9fd
          stance: supports
          locator: CBDB:38007
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

# 王元甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元甫 | accepted |
| bio.summary | 王元甫，宋人物。籍贯江州，身份为道士、處士。（中国历代人物传记资料库 CBDB 38007） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元甫（CBDB 38007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38007&o=json)
