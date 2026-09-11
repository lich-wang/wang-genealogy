---
schema: wang-person/v1
id: p_Bsx74AhBPBHyKyjrDtHBaT
status: active
merged_into: null
display_name: 王洋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NsDEghDEVSsT9PGpf6rmx3
        subject_person_id: p_Bsx74AhBPBHyKyjrDtHBaT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wDQNs7cyqxN5qggXVtKDhy
          claim_id: c_NsDEghDEVSsT9PGpf6rmx3
          source_id: s_Gio4yNF7WxQrSJL57K1ECk
          stance: supports
          locator: CBDB:313580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313580）
          source: &a1
            id: s_Gio4yNF7WxQrSJL57K1ECk
            source_type: api_record
            title: 中国历代人物传记资料库：王洋（CBDB 313580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313580&o=json
            external_identifier: CBDB:313580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W8kED5vsv1vm3uYtSNHXYR
        subject_person_id: p_Bsx74AhBPBHyKyjrDtHBaT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洋，明人物。嘉靖二十九年進士，籍贯長垣。（中国历代人物传记资料库 CBDB 313580）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d2jmVuAdtn0Wc1n3ZdPUYH
          claim_id: c_W8kED5vsv1vm3uYtSNHXYR
          source_id: s_Gio4yNF7WxQrSJL57K1ECk
          stance: supports
          locator: CBDB:313580
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

# 王洋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洋 | accepted |
| bio.summary | 王洋，明人物。嘉靖二十九年進士，籍贯長垣。（中国历代人物传记资料库 CBDB 313580） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洋（CBDB 313580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313580&o=json)
