---
schema: wang-person/v1
id: p_DuaAAPADsWj7PpgCmA93Jg
status: active
merged_into: null
display_name: 王麟兆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CU3fV4YSGaY2MPKFFuvkmT
        subject_person_id: p_DuaAAPADsWj7PpgCmA93Jg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟兆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eNr9Em4nxUDJcrcd5X5a8D
          claim_id: c_CU3fV4YSGaY2MPKFFuvkmT
          source_id: s_E88YiKyDDNUPBL9AACAR3Z
          stance: supports
          locator: CBDB:641032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641032）
          source: &a1
            id: s_E88YiKyDDNUPBL9AACAR3Z
            source_type: api_record
            title: 中国历代人物传记资料库：王麟兆（CBDB 641032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641032&o=json
            external_identifier: CBDB:641032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.446Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZDKFyQi29ubm6u9uKWX6u5
        subject_person_id: p_DuaAAPADsWj7PpgCmA93Jg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟兆，清人物。籍贯宜昌府，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 641032）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZkAvUSDdUonaxPWmayGcoB
          claim_id: c_ZDKFyQi29ubm6u9uKWX6u5
          source_id: s_E88YiKyDDNUPBL9AACAR3Z
          stance: supports
          locator: CBDB:641032
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

# 王麟兆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟兆 | accepted |
| bio.summary | 王麟兆，清人物。籍贯宜昌府，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 641032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麟兆（CBDB 641032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641032&o=json)
