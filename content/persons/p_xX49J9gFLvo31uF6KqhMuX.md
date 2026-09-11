---
schema: wang-person/v1
id: p_xX49J9gFLvo31uF6KqhMuX
status: active
merged_into: null
display_name: 王萬傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D43vWURRoD5tZVretmE35o
        subject_person_id: p_xX49J9gFLvo31uF6KqhMuX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bxJ5zEx5mPmrbditDV26Sy
          claim_id: c_D43vWURRoD5tZVretmE35o
          source_id: s_qCLBvKaeBaKUr4JGMUSgLq
          stance: supports
          locator: CBDB:555396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555396）
          source: &a1
            id: s_qCLBvKaeBaKUr4JGMUSgLq
            source_type: api_record
            title: 中国历代人物传记资料库：王萬傑（CBDB 555396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555396&o=json
            external_identifier: CBDB:555396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G5P9NQQ2T9BJvpqtBtv9xr
        subject_person_id: p_xX49J9gFLvo31uF6KqhMuX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬傑，清人物。籍贯南召。（中国历代人物传记资料库 CBDB 555396）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VpHfWMEVThd8LUrmxn3rws
          claim_id: c_G5P9NQQ2T9BJvpqtBtv9xr
          source_id: s_qCLBvKaeBaKUr4JGMUSgLq
          stance: supports
          locator: CBDB:555396
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

# 王萬傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬傑 | accepted |
| bio.summary | 王萬傑，清人物。籍贯南召。（中国历代人物传记资料库 CBDB 555396） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬傑（CBDB 555396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555396&o=json)
