---
schema: wang-person/v1
id: p_yre2FgEJNSjtvN3N5vp7iV
status: active
merged_into: null
display_name: 王仕益
cbdb_id: 69160
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KECbrYJbkMcf3hBYSZMMps
        subject_person_id: p_yre2FgEJNSjtvN3N5vp7iV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕益（卒于1867年），清人物。籍贯湘鄉。（中国历代人物传记资料库 CBDB 69160）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hBGwFvh1B0sIaH_IbjHJzh
          claim_id: c_KECbrYJbkMcf3hBYSZMMps
          source_id: s_TT5v1PMspd345FsWr7eZDL
          stance: supports
          locator: CBDB:69160
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_TT5v1PMspd345FsWr7eZDL
            source_type: api_record
            title: 中国历代人物传记资料库：王仕益（CBDB 69160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69160&o=json
            external_identifier: CBDB:69160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZbjJijCdoLVuccGdhYAMbi
        subject_person_id: p_yre2FgEJNSjtvN3N5vp7iV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1867年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1867-01-01
            latest: 1867-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Vz2WJCSq5Y1mNBAwMnbP2F
          claim_id: c_ZbjJijCdoLVuccGdhYAMbi
          source_id: s_TT5v1PMspd345FsWr7eZDL
          stance: supports
          locator: CBDB:69160
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1867
          source:
            id: s_TT5v1PMspd345FsWr7eZDL
            source_type: api_record
            title: 中国历代人物传记资料库：王仕益（CBDB 69160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69160&o=json
            external_identifier: CBDB:69160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iFdHv53e1WS3qioJtJ6BXo
        subject_person_id: p_yre2FgEJNSjtvN3N5vp7iV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mdBNUjyr7x2pv9NokHF5KL
          claim_id: c_iFdHv53e1WS3qioJtJ6BXo
          source_id: s_TT5v1PMspd345FsWr7eZDL
          stance: supports
          locator: CBDB:69160
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1867
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

# 王仕益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仕益（卒于1867年），清人物。籍贯湘鄉。（中国历代人物传记资料库 CBDB 69160） | accepted |
| death.date | 1867年 | accepted |
| name.primary | 王仕益 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仕益（CBDB 69160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69160&o=json)
