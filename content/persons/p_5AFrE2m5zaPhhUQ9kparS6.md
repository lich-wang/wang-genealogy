---
schema: wang-person/v1
id: p_5AFrE2m5zaPhhUQ9kparS6
status: active
merged_into: null
display_name: 王景中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UZL9CyzgzV9Q14oeZFw14S
        subject_person_id: p_5AFrE2m5zaPhhUQ9kparS6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uMW4ECPX2kMUKX82aF93yd
          claim_id: c_UZL9CyzgzV9Q14oeZFw14S
          source_id: s_sY66RWw9xf7oPrx573j39h
          stance: supports
          locator: CBDB:638469
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638469）
          source: &a1
            id: s_sY66RWw9xf7oPrx573j39h
            source_type: api_record
            title: 中国历代人物传记资料库：王景中（CBDB 638469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638469&o=json
            external_identifier: CBDB:638469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DWFhYh1PENdWU12STabZiy
        subject_person_id: p_5AFrE2m5zaPhhUQ9kparS6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景中，清人物。籍贯慈溪，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638469）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ToaPQYRKORKVhLNxGciKIA
          claim_id: c_DWFhYh1PENdWU12STabZiy
          source_id: s_sY66RWw9xf7oPrx573j39h
          stance: supports
          locator: CBDB:638469
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

# 王景中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景中 | accepted |
| bio.summary | 王景中，清人物。籍贯慈溪，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638469） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景中（CBDB 638469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638469&o=json)
