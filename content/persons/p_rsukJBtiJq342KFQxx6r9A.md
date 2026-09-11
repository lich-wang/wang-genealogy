---
schema: wang-person/v1
id: p_rsukJBtiJq342KFQxx6r9A
status: active
merged_into: null
display_name: 王應鶴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4DFKrUjfZR3mBeX8xESJYQ
        subject_person_id: p_rsukJBtiJq342KFQxx6r9A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鶴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6nE613tva7wqSjLkGRkJeC
          claim_id: c_4DFKrUjfZR3mBeX8xESJYQ
          source_id: s_vu8559ZPLywFinJ6c3boiB
          stance: supports
          locator: CBDB:638007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638007）
          source: &a1
            id: s_vu8559ZPLywFinJ6c3boiB
            source_type: api_record
            title: 中国历代人物传记资料库：王應鶴（CBDB 638007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638007&o=json
            external_identifier: CBDB:638007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WmgkCb17GF5tHej2HxjKq8
        subject_person_id: p_rsukJBtiJq342KFQxx6r9A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鶴，清人物。籍贯太倉直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638007）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YOyCKria5MZBCMXBpTKv2S
          claim_id: c_WmgkCb17GF5tHej2HxjKq8
          source_id: s_vu8559ZPLywFinJ6c3boiB
          stance: supports
          locator: CBDB:638007
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

# 王應鶴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應鶴 | accepted |
| bio.summary | 王應鶴，清人物。籍贯太倉直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638007） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應鶴（CBDB 638007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638007&o=json)
