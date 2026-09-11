---
schema: wang-person/v1
id: p_KUcgVPwt9iQhhYXV9p9LRT
status: active
merged_into: null
display_name: 王秉直
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NeeLcUoX9N55QRiFysE6Zc
        subject_person_id: p_KUcgVPwt9iQhhYXV9p9LRT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2pVKH8WQFsXq2Gh1GW2HW9
          claim_id: c_NeeLcUoX9N55QRiFysE6Zc
          source_id: s_zx1U2EsbCEDKHbs4K6X5do
          stance: supports
          locator: CBDB:510278
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510278）
          source: &a1
            id: s_zx1U2EsbCEDKHbs4K6X5do
            source_type: api_record
            title: 中国历代人物传记资料库：王秉直（CBDB 510278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510278&o=json
            external_identifier: CBDB:510278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G3quPYaKxgBgBy7Hiw6xHK
        subject_person_id: p_KUcgVPwt9iQhhYXV9p9LRT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王秉直，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 510278）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4Xt6mkMP9tbKsQihf3hakI
          claim_id: c_G3quPYaKxgBgBy7Hiw6xHK
          source_id: s_zx1U2EsbCEDKHbs4K6X5do
          stance: supports
          locator: CBDB:510278
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

# 王秉直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉直 | accepted |
| bio.summary | 王秉直，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 510278） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉直（CBDB 510278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510278&o=json)
