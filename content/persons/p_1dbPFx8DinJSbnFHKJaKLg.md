---
schema: wang-person/v1
id: p_1dbPFx8DinJSbnFHKJaKLg
status: active
merged_into: null
display_name: 王之結
cbdb_id: 137842
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HRvSBDfErEhDLHYnhL1vGb
        subject_person_id: p_1dbPFx8DinJSbnFHKJaKLg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之結，宋人物。寶祐進士，籍贯資陽。（中国历代人物传记资料库 CBDB 137842）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_QEV1wAqh3ChP1RZJ-3Jc4F
          claim_id: c_HRvSBDfErEhDLHYnhL1vGb
          source_id: s_UcVCtCYEUmDYJZRBW9pJed
          stance: supports
          locator: CBDB:137842
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UcVCtCYEUmDYJZRBW9pJed
            source_type: api_record
            title: 中国历代人物传记资料库：王之結（CBDB 137842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137842&o=json
            external_identifier: CBDB:137842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wB5uKvGhbCiKQdXRjPqBrM
        subject_person_id: p_1dbPFx8DinJSbnFHKJaKLg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之結
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_u8Lo4gr5N3XDZuqHspcRQK
          claim_id: c_wB5uKvGhbCiKQdXRjPqBrM
          source_id: s_UcVCtCYEUmDYJZRBW9pJed
          stance: supports
          locator: CBDB:137842
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 宋
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
        id: c_x55StrIop2bmDXbHr3ZaLN
        subject_person_id: p_1dbPFx8DinJSbnFHKJaKLg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pv61XtHSxxg2PJ1X8CE9a2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8XCA4TGbOPvZ9kDz5MiUAu
          claim_id: c_x55StrIop2bmDXbHr3ZaLN
          source_id: s_wKTwhruwXx5t81q3BiBCST
          stance: supports
          locator: 寶祐登科錄：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wKTwhruwXx5t81q3BiBCST
            source_type: api_record
            title: 中国历代人物传记资料库：王昌辰（CBDB 136387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136387&o=json
            external_identifier: CBDB:136387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pv61XtHSxxg2PJ1X8CE9a2
        status: active
        display_name: 王昌辰
        merged_into_person_id: null
    - claim:
        id: c_bPMSmHWm8BXkCE8Tzs6ngW
        subject_person_id: p_1dbPFx8DinJSbnFHKJaKLg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jPaziDtaCGEkP8PcqETeGP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5d4gREeqleQohgLiwS8lv6
          claim_id: c_bPMSmHWm8BXkCE8Tzs6ngW
          source_id: s_UcVCtCYEUmDYJZRBW9pJed
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UcVCtCYEUmDYJZRBW9pJed
            source_type: api_record
            title: 中国历代人物传记资料库：王之結（CBDB 137842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137842&o=json
            external_identifier: CBDB:137842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_jPaziDtaCGEkP8PcqETeGP
        status: active
        display_name: 王遇龍
        merged_into_person_id: null
  other: []
---

# 王之結

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之結，宋人物。寶祐進士，籍贯資陽。（中国历代人物传记资料库 CBDB 137842） | accepted |
| name.primary | 王之結 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_pv61XtHSxxg2PJ1X8CE9a2 | 王昌辰 | accepted |
| descendants | p_jPaziDtaCGEkP8PcqETeGP | 王遇龍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌辰（CBDB 136387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136387&o=json)
- [中国历代人物传记资料库：王之結（CBDB 137842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137842&o=json)
