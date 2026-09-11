---
schema: wang-person/v1
id: p_ZYeqtaSdZjfrCJQ4PeVEY2
status: active
merged_into: null
display_name: 王瞻洛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fVY6Q4bWQn1AD2BD59Kuk4
        subject_person_id: p_ZYeqtaSdZjfrCJQ4PeVEY2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瞻洛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xomuhCAAQAGr8iGSp72o7H
          claim_id: c_fVY6Q4bWQn1AD2BD59Kuk4
          source_id: s_WL9tqz8XYi1DEL2MpBuyoW
          stance: supports
          locator: CBDB:639551
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639551）
          source: &a1
            id: s_WL9tqz8XYi1DEL2MpBuyoW
            source_type: api_record
            title: 中国历代人物传记资料库：王瞻洛（CBDB 639551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639551&o=json
            external_identifier: CBDB:639551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3BKCrt4HFqB11YpGukhnhi
        subject_person_id: p_ZYeqtaSdZjfrCJQ4PeVEY2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瞻洛，清人物。籍贯諸城，入仕監生，曾任典史、司獄。（中国历代人物传记资料库 CBDB 639551）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NHwN2znkrByvkBFSHOml7U
          claim_id: c_3BKCrt4HFqB11YpGukhnhi
          source_id: s_WL9tqz8XYi1DEL2MpBuyoW
          stance: supports
          locator: CBDB:639551
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

# 王瞻洛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瞻洛 | accepted |
| bio.summary | 王瞻洛，清人物。籍贯諸城，入仕監生，曾任典史、司獄。（中国历代人物传记资料库 CBDB 639551） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瞻洛（CBDB 639551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639551&o=json)
