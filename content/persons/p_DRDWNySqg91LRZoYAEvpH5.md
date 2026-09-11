---
schema: wang-person/v1
id: p_DRDWNySqg91LRZoYAEvpH5
status: active
merged_into: null
display_name: 王輝彤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qqJb487fzV7uZ24LptYMgD
        subject_person_id: p_DRDWNySqg91LRZoYAEvpH5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輝彤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oACTb2uAEE3zNDXAcdiFec
          claim_id: c_qqJb487fzV7uZ24LptYMgD
          source_id: s_Yi5B4YDnPrU6TtYp5opuvw
          stance: supports
          locator: CBDB:640373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640373）
          source: &a1
            id: s_Yi5B4YDnPrU6TtYp5opuvw
            source_type: api_record
            title: 中国历代人物传记资料库：王輝彤（CBDB 640373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640373&o=json
            external_identifier: CBDB:640373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.239Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zMB11MAwzFvc6oUzSfGGe6
        subject_person_id: p_DRDWNySqg91LRZoYAEvpH5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輝彤，清人物。籍贯萊州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640373）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1JcncjUFdd76JiGxYlKUCX
          claim_id: c_zMB11MAwzFvc6oUzSfGGe6
          source_id: s_Yi5B4YDnPrU6TtYp5opuvw
          stance: supports
          locator: CBDB:640373
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

# 王輝彤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輝彤 | accepted |
| bio.summary | 王輝彤，清人物。籍贯萊州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640373） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輝彤（CBDB 640373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640373&o=json)
