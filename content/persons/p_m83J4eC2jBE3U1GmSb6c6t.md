---
schema: wang-person/v1
id: p_m83J4eC2jBE3U1GmSb6c6t
status: active
merged_into: null
display_name: 王允昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1aJinSQFvSNFPZ9iNynFze
        subject_person_id: p_m83J4eC2jBE3U1GmSb6c6t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_892mgAXwa2eami7fgMPc8G
          claim_id: c_1aJinSQFvSNFPZ9iNynFze
          source_id: s_GmKpkuKhvkhaqHvNBwGq1C
          stance: supports
          locator: CBDB:472642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472642）
          source: &a1
            id: s_GmKpkuKhvkhaqHvNBwGq1C
            source_type: api_record
            title: 中国历代人物传记资料库：王允昌（CBDB 472642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472642&o=json
            external_identifier: CBDB:472642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8B4JJ2ESpCuF2xfRxu7m9L
        subject_person_id: p_m83J4eC2jBE3U1GmSb6c6t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允昌，清人物。曾任副將。（中国历代人物传记资料库 CBDB 472642）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_skzOkYQbj1vCz9WM0pxwg9
          claim_id: c_8B4JJ2ESpCuF2xfRxu7m9L
          source_id: s_GmKpkuKhvkhaqHvNBwGq1C
          stance: supports
          locator: CBDB:472642
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

# 王允昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允昌 | accepted |
| bio.summary | 王允昌，清人物。曾任副將。（中国历代人物传记资料库 CBDB 472642） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允昌（CBDB 472642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472642&o=json)
