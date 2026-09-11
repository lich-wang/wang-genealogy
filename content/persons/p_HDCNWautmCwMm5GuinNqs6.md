---
schema: wang-person/v1
id: p_HDCNWautmCwMm5GuinNqs6
status: active
merged_into: null
display_name: 王迪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_69nURrJ344ktydrPyJV8VD
        subject_person_id: p_HDCNWautmCwMm5GuinNqs6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wcqFU954H1Pc9yS83fU4hR
          claim_id: c_69nURrJ344ktydrPyJV8VD
          source_id: s_YgMbZaBtAx5gMUstsua2mX
          stance: supports
          locator: CBDB:310741
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（310741）
          source: &a1
            id: s_YgMbZaBtAx5gMUstsua2mX
            source_type: api_record
            title: 中国历代人物传记资料库：王迪（CBDB 310741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310741&o=json
            external_identifier: CBDB:310741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oSTWQ7AMHMSyBQVPQ2iBoQ
        subject_person_id: p_HDCNWautmCwMm5GuinNqs6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪，明人物。嘉靖二十六年進士，曾任壽官。（中国历代人物传记资料库 CBDB 310741）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jVg-2jmFpoAw2l3o5-C-Lw
          claim_id: c_oSTWQ7AMHMSyBQVPQ2iBoQ
          source_id: s_YgMbZaBtAx5gMUstsua2mX
          stance: supports
          locator: CBDB:310741
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
  descendants:
    - claim:
        id: c_wlBMftiJetbR5ektjQqUhc
        subject_person_id: p_HDCNWautmCwMm5GuinNqs6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vF71zw6QtRwNeJCCHhLGQ3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_abNMtOC5UDkIIAVl_1jqVa
          claim_id: c_wlBMftiJetbR5ektjQqUhc
          source_id: s_YgMbZaBtAx5gMUstsua2mX
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百一十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vF71zw6QtRwNeJCCHhLGQ3
        status: active
        display_name: 王惟善
        merged_into_person_id: null
  other: []
---

# 王迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迪 | accepted |
| bio.summary | 王迪，明人物。嘉靖二十六年進士，曾任壽官。（中国历代人物传记资料库 CBDB 310741） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_vF71zw6QtRwNeJCCHhLGQ3 | 王惟善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王迪（CBDB 310741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310741&o=json)
