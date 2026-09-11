---
schema: wang-person/v1
id: p_Ba6XYCQhJwu5XoShbJS7jC
status: active
merged_into: null
display_name: 王蔭槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yxBVExTKAdbSQBQG3EzXki
        subject_person_id: p_Ba6XYCQhJwu5XoShbJS7jC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔭槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mvw6NUj8cZNAESeKzuy3ox
          claim_id: c_yxBVExTKAdbSQBQG3EzXki
          source_id: s_XcmtK2pK8rhDxiS4DNcszS
          stance: supports
          locator: CBDB:71850
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71850）
          source: &a1
            id: s_XcmtK2pK8rhDxiS4DNcszS
            source_type: api_record
            title: 中国历代人物传记资料库：王蔭槐（CBDB 71850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71850&o=json
            external_identifier: CBDB:71850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EvusKXCWTRdo4FHV2xDTDP
        subject_person_id: p_Ba6XYCQhJwu5XoShbJS7jC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1783年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_joiXtqK5ph7ZVDfGyb9DwE
          claim_id: c_EvusKXCWTRdo4FHV2xDTDP
          source_id: s_XcmtK2pK8rhDxiS4DNcszS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LUaLHnRa1ZznrMM5iV7arb
        subject_person_id: p_Ba6XYCQhJwu5XoShbJS7jC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1848年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6o6yQH8RUAQ5cnwnzTWAGh
          claim_id: c_LUaLHnRa1ZznrMM5iV7arb
          source_id: s_XcmtK2pK8rhDxiS4DNcszS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GeHrc9bD1PGDvPGhR48ydB
        subject_person_id: p_Ba6XYCQhJwu5XoShbJS7jC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔭槐（1783年—1848年），清人物。籍贯盱眙。（中国历代人物传记资料库 CBDB 71850）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Dxf__sH9D5r6-qTgmZetqM
          claim_id: c_GeHrc9bD1PGDvPGhR48ydB
          source_id: s_XcmtK2pK8rhDxiS4DNcszS
          stance: supports
          locator: CBDB:71850
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

# 王蔭槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蔭槐 | accepted |
| birth.date | 1783年 | accepted |
| death.date | 1848年 | accepted |
| bio.summary | 王蔭槐（1783年—1848年），清人物。籍贯盱眙。（中国历代人物传记资料库 CBDB 71850） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蔭槐（CBDB 71850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71850&o=json)
