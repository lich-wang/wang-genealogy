---
schema: wang-person/v1
id: p_8ocFApQHDnRg6FzJ59uENp
status: active
merged_into: null
display_name: 王之采
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FNK32jNpdK2f2nyB4KXy5V
        subject_person_id: p_8ocFApQHDnRg6FzJ59uENp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之采
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tPahnAqf7C8aq2G85LNpDC
          claim_id: c_FNK32jNpdK2f2nyB4KXy5V
          source_id: s_MPoVTcAMhExp5zxFA6u8s3
          stance: supports
          locator: CBDB:342552
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342552）
          source: &a1
            id: s_MPoVTcAMhExp5zxFA6u8s3
            source_type: api_record
            title: 中国历代人物传记资料库：王之采（CBDB 342552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342552&o=json
            external_identifier: CBDB:342552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6BbK8Vm6JEdpwBC2aJV2g5
        subject_person_id: p_8ocFApQHDnRg6FzJ59uENp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之采，明人物。明清進士進士，籍贯蒲州，入仕進士。（中国历代人物传记资料库 CBDB 342552）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I3TaplPGSZqLxU8bluIkK6
          claim_id: c_6BbK8Vm6JEdpwBC2aJV2g5
          source_id: s_MPoVTcAMhExp5zxFA6u8s3
          stance: supports
          locator: CBDB:342552
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

# 王之采

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之采 | accepted |
| bio.summary | 王之采，明人物。明清進士進士，籍贯蒲州，入仕進士。（中国历代人物传记资料库 CBDB 342552） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之采（CBDB 342552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342552&o=json)
