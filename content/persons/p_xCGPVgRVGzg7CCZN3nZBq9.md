---
schema: wang-person/v1
id: p_xCGPVgRVGzg7CCZN3nZBq9
status: active
merged_into: null
display_name: 王秉彝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LbMMtenKRezJXwny9QGDPG
        subject_person_id: p_xCGPVgRVGzg7CCZN3nZBq9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bshAUhTjKwNW2JrroKLmW3
          claim_id: c_LbMMtenKRezJXwny9QGDPG
          source_id: s_yzux9vhoQK3oByn9KQ4RGj
          stance: supports
          locator: CBDB:493603
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（493603）
          source: &a1
            id: s_yzux9vhoQK3oByn9KQ4RGj
            source_type: api_record
            title: 中国历代人物传记资料库：王秉彝（CBDB 493603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493603&o=json
            external_identifier: CBDB:493603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zUjCL5chbzsFZJBcfXMdRL
        subject_person_id: p_xCGPVgRVGzg7CCZN3nZBq9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉彝，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭。（中国历代人物传记资料库 CBDB 493603）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ebQzaf3UHYNX7zZKQeMXdW
          claim_id: c_zUjCL5chbzsFZJBcfXMdRL
          source_id: s_yzux9vhoQK3oByn9KQ4RGj
          stance: supports
          locator: CBDB:493603
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

# 王秉彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉彝 | accepted |
| bio.summary | 王秉彝，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭。（中国历代人物传记资料库 CBDB 493603） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉彝（CBDB 493603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493603&o=json)
