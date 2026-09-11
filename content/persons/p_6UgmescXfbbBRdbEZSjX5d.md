---
schema: wang-person/v1
id: p_6UgmescXfbbBRdbEZSjX5d
status: active
merged_into: null
display_name: 王文華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sstvnk8G3cyE8Nt1ZqRPW7
        subject_person_id: p_6UgmescXfbbBRdbEZSjX5d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9YPQK2NkJDno9NmHCKwNnV
          claim_id: c_sstvnk8G3cyE8Nt1ZqRPW7
          source_id: s_CXANJSjF3FWodJBsmDPZ7G
          stance: supports
          locator: CBDB:314486
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314486）
          source: &a1
            id: s_CXANJSjF3FWodJBsmDPZ7G
            source_type: api_record
            title: 中国历代人物传记资料库：王文華（CBDB 314486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314486&o=json
            external_identifier: CBDB:314486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3dNpJC6TTnPNKvG15ytSoe
        subject_person_id: p_6UgmescXfbbBRdbEZSjX5d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文華，明人物。嘉靖二十九年進士，籍贯蒙城。（中国历代人物传记资料库 CBDB 314486）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v6Xs7t9JaevoTpVj-Jhlz2
          claim_id: c_3dNpJC6TTnPNKvG15ytSoe
          source_id: s_CXANJSjF3FWodJBsmDPZ7G
          stance: supports
          locator: CBDB:314486
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

# 王文華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文華 | accepted |
| bio.summary | 王文華，明人物。嘉靖二十九年進士，籍贯蒙城。（中国历代人物传记资料库 CBDB 314486） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文華（CBDB 314486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314486&o=json)
