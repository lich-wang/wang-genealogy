---
schema: wang-person/v1
id: p_25VaYpeLPWHceT3D7GmseE
status: active
merged_into: null
display_name: 王寅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_owHJxpvzx9n4HqstgcLhL4
        subject_person_id: p_25VaYpeLPWHceT3D7GmseE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9vcTBSsBonr6QBgHi4e2MD
          claim_id: c_owHJxpvzx9n4HqstgcLhL4
          source_id: s_9CUvE24twCvbGMAMAh3PzS
          stance: supports
          locator: CBDB:126667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126667）
          source: &a1
            id: s_9CUvE24twCvbGMAMAh3PzS
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 126667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126667&o=json
            external_identifier: CBDB:126667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.105Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8UXMz4jy2TbajQEwZxAU8Y
        subject_person_id: p_25VaYpeLPWHceT3D7GmseE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅，明人物。籍贯高陽，曾任府學訓導、知府。（中国历代人物传记资料库 CBDB 126667）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o_zVeFYxtxkZB8gz_dj472
          claim_id: c_8UXMz4jy2TbajQEwZxAU8Y
          source_id: s_9CUvE24twCvbGMAMAh3PzS
          stance: supports
          locator: CBDB:126667
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

# 王寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅 | accepted |
| bio.summary | 王寅，明人物。籍贯高陽，曾任府學訓導、知府。（中国历代人物传记资料库 CBDB 126667） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寅（CBDB 126667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126667&o=json)
