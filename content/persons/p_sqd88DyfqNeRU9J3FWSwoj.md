---
schema: wang-person/v1
id: p_sqd88DyfqNeRU9J3FWSwoj
status: active
merged_into: null
display_name: 王閏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pekGFpGERYw4PBNYizA1dJ
        subject_person_id: p_sqd88DyfqNeRU9J3FWSwoj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LnV9iYwh1rqvRcj7KZw26B
          claim_id: c_pekGFpGERYw4PBNYizA1dJ
          source_id: s_zPP2d44AaW22f2xW423Rv5
          stance: supports
          locator: CBDB:100849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100849）
          source: &a1
            id: s_zPP2d44AaW22f2xW423Rv5
            source_type: api_record
            title: 中国历代人物传记资料库：王閏（CBDB 100849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100849&o=json
            external_identifier: CBDB:100849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.506Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F6MWjH2C49ZEnM2PqLU4JQ
        subject_person_id: p_sqd88DyfqNeRU9J3FWSwoj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閏，元人物。曾任縣主簿。（中国历代人物传记资料库 CBDB 100849）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MjoD3YvwosDZ7CpaPZbQOR
          claim_id: c_F6MWjH2C49ZEnM2PqLU4JQ
          source_id: s_zPP2d44AaW22f2xW423Rv5
          stance: supports
          locator: CBDB:100849
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

# 王閏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王閏 | accepted |
| bio.summary | 王閏，元人物。曾任縣主簿。（中国历代人物传记资料库 CBDB 100849） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王閏（CBDB 100849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100849&o=json)
