---
schema: wang-person/v1
id: p_KNd82LHS56YymaHHKHQ1Lp
status: active
merged_into: null
display_name: 王振鵬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WeVryRtxnz2YatZmUDDA7M
        subject_person_id: p_KNd82LHS56YymaHHKHQ1Lp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oT25mJyGFtsmNXy7YEaCqw
          claim_id: c_WeVryRtxnz2YatZmUDDA7M
          source_id: s_7HnyeECwVSH6Kx3n5RwE11
          stance: supports
          locator: CBDB:101309
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101309）
          source: &a1
            id: s_7HnyeECwVSH6Kx3n5RwE11
            source_type: api_record
            title: 中国历代人物传记资料库：王振鵬（CBDB 101309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101309&o=json
            external_identifier: CBDB:101309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DCLB24ZSX689y2Jn7dqSNw
        subject_person_id: p_KNd82LHS56YymaHHKHQ1Lp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振鵬，元人物。籍贯永嘉，身份为畫家，曾任祕書監典簿、漕運千戶。（中国历代人物传记资料库 CBDB 101309）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MqUo4Z5z8PyF_dAS-NsvaM
          claim_id: c_DCLB24ZSX689y2Jn7dqSNw
          source_id: s_7HnyeECwVSH6Kx3n5RwE11
          stance: supports
          locator: CBDB:101309
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

# 王振鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振鵬 | accepted |
| bio.summary | 王振鵬，元人物。籍贯永嘉，身份为畫家，曾任祕書監典簿、漕運千戶。（中国历代人物传记资料库 CBDB 101309） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振鵬（CBDB 101309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101309&o=json)
