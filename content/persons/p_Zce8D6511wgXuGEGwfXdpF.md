---
schema: wang-person/v1
id: p_Zce8D6511wgXuGEGwfXdpF
status: active
merged_into: null
display_name: 王敬修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fVWPJsyv5GEbzfR6rBreMm
        subject_person_id: p_Zce8D6511wgXuGEGwfXdpF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TtEAW7AkiRYpwAPnL8y34b
          claim_id: c_fVWPJsyv5GEbzfR6rBreMm
          source_id: s_R3x2CCH8JxoXrzoKWu91UY
          stance: supports
          locator: CBDB:699510
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699510）
          source: &a1
            id: s_R3x2CCH8JxoXrzoKWu91UY
            source_type: api_record
            title: 中国历代人物传记资料库：王敬修（CBDB 699510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699510&o=json
            external_identifier: CBDB:699510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.763Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PiZJb1nGjHZz59z49q53qi
        subject_person_id: p_Zce8D6511wgXuGEGwfXdpF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬修，明人物。籍贯渮澤，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 699510）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ws7tFeUwpMmow595UILXIF
          claim_id: c_PiZJb1nGjHZz59z49q53qi
          source_id: s_R3x2CCH8JxoXrzoKWu91UY
          stance: supports
          locator: CBDB:699510
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

# 王敬修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬修 | accepted |
| bio.summary | 王敬修，明人物。籍贯渮澤，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 699510） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬修（CBDB 699510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699510&o=json)
