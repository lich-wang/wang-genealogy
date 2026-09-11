---
schema: wang-person/v1
id: p_4vtJFE653h1eJhrFECEA11
status: active
merged_into: null
display_name: 王見炯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cUrzv3qUZb324Z7G9GXsPd
        subject_person_id: p_4vtJFE653h1eJhrFECEA11
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王見炯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tEgVRwDNMDRmgXoAJGCczi
          claim_id: c_cUrzv3qUZb324Z7G9GXsPd
          source_id: s_5PnSvERicw5CSoBDkEcKUE
          stance: supports
          locator: CBDB:640230
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640230）
          source: &a1
            id: s_5PnSvERicw5CSoBDkEcKUE
            source_type: api_record
            title: 中国历代人物传记资料库：王見炯（CBDB 640230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640230&o=json
            external_identifier: CBDB:640230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.193Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3yF8uiEMrSP3WbypyTj9wn
        subject_person_id: p_4vtJFE653h1eJhrFECEA11
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王見炯，清人物。籍贯武昌，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640230）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EgNoDb7T6ihdqWk6mnot5I
          claim_id: c_3yF8uiEMrSP3WbypyTj9wn
          source_id: s_5PnSvERicw5CSoBDkEcKUE
          stance: supports
          locator: CBDB:640230
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

# 王見炯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王見炯 | accepted |
| bio.summary | 王見炯，清人物。籍贯武昌，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640230） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王見炯（CBDB 640230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640230&o=json)
