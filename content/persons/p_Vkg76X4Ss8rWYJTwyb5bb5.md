---
schema: wang-person/v1
id: p_Vkg76X4Ss8rWYJTwyb5bb5
status: active
merged_into: null
display_name: 王思賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fKGM9x6772L7VJc5W9maUL
        subject_person_id: p_Vkg76X4Ss8rWYJTwyb5bb5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K3ZM7k1g4KEpBDne6oTsq3
          claim_id: c_fKGM9x6772L7VJc5W9maUL
          source_id: s_aqPanYJ4QGbUr73WB7mCr7
          stance: supports
          locator: CBDB:499257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499257）
          source: &a1
            id: s_aqPanYJ4QGbUr73WB7mCr7
            source_type: api_record
            title: 中国历代人物传记资料库：王思賢（CBDB 499257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499257&o=json
            external_identifier: CBDB:499257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.746Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xjqw1bKvYVUKxe3pGBETtu
        subject_person_id: p_Vkg76X4Ss8rWYJTwyb5bb5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思賢，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 499257）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f4_AkqI06T4WBu518Azx24
          claim_id: c_xjqw1bKvYVUKxe3pGBETtu
          source_id: s_aqPanYJ4QGbUr73WB7mCr7
          stance: supports
          locator: CBDB:499257
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

# 王思賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思賢 | accepted |
| bio.summary | 王思賢，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 499257） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思賢（CBDB 499257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499257&o=json)
