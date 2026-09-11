---
schema: wang-person/v1
id: p_uK61Gzk7D1C2asQ9Rhtnfb
status: active
merged_into: null
display_name: 王進弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KgnAkLeRaj5tudsDD41hKv
        subject_person_id: p_uK61Gzk7D1C2asQ9Rhtnfb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n3hyAYazGWHGdqDjT8FtWS
          claim_id: c_KgnAkLeRaj5tudsDD41hKv
          source_id: s_zE5BG91egfG322iSMmDNDG
          stance: supports
          locator: CBDB:640388
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640388）
          source: &a1
            id: s_zE5BG91egfG322iSMmDNDG
            source_type: api_record
            title: 中国历代人物传记资料库：王進弼（CBDB 640388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640388&o=json
            external_identifier: CBDB:640388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KGDM3uRczAaBTqByaa39fX
        subject_person_id: p_uK61Gzk7D1C2asQ9Rhtnfb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進弼，清人物。籍贯錦縣，曾任訓導。（中国历代人物传记资料库 CBDB 640388）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ml0c-OXR_sjig3JF0s_RCi
          claim_id: c_KGDM3uRczAaBTqByaa39fX
          source_id: s_zE5BG91egfG322iSMmDNDG
          stance: supports
          locator: CBDB:640388
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

# 王進弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進弼 | accepted |
| bio.summary | 王進弼，清人物。籍贯錦縣，曾任訓導。（中国历代人物传记资料库 CBDB 640388） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王進弼（CBDB 640388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640388&o=json)
