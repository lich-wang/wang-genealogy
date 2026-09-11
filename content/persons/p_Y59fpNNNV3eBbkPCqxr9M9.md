---
schema: wang-person/v1
id: p_Y59fpNNNV3eBbkPCqxr9M9
status: active
merged_into: null
display_name: 王長澤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YQ23SBBJCRJZMBFmhrrYbK
        subject_person_id: p_Y59fpNNNV3eBbkPCqxr9M9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jRoDfGCxpHXgaWd4px92WB
          claim_id: c_YQ23SBBJCRJZMBFmhrrYbK
          source_id: s_6YXfQ13EDGEBB2oTTF9Ts6
          stance: supports
          locator: CBDB:640734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640734）
          source: &a1
            id: s_6YXfQ13EDGEBB2oTTF9Ts6
            source_type: api_record
            title: 中国历代人物传记资料库：王長澤（CBDB 640734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640734&o=json
            external_identifier: CBDB:640734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vsguGB6hjRGCGkJ7aZZh4k
        subject_person_id: p_Y59fpNNNV3eBbkPCqxr9M9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長澤，清人物。籍贯九江府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640734）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hC5EUNHeDfchdL_HVYEIXf
          claim_id: c_vsguGB6hjRGCGkJ7aZZh4k
          source_id: s_6YXfQ13EDGEBB2oTTF9Ts6
          stance: supports
          locator: CBDB:640734
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

# 王長澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長澤 | accepted |
| bio.summary | 王長澤，清人物。籍贯九江府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640734） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長澤（CBDB 640734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640734&o=json)
