---
schema: wang-person/v1
id: p_DAT2oaZe5xq2nTqafppyW2
status: active
merged_into: null
display_name: 王恭修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nfT5ycApUH186npEsF4G8b
        subject_person_id: p_DAT2oaZe5xq2nTqafppyW2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V4hM6yu6NhdYQQGwvp9R2c
          claim_id: c_nfT5ycApUH186npEsF4G8b
          source_id: s_Q8xVBt78fgTiHMiSzCBkka
          stance: supports
          locator: CBDB:637874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637874）
          source: &a1
            id: s_Q8xVBt78fgTiHMiSzCBkka
            source_type: api_record
            title: 中国历代人物传记资料库：王恭修（CBDB 637874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637874&o=json
            external_identifier: CBDB:637874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vf8jmmiMdhuP48AtJ9PV5M
        subject_person_id: p_DAT2oaZe5xq2nTqafppyW2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭修，清人物。籍贯青陽，入仕監生，曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 637874）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZlQrN826eqyjy6VipbSQrM
          claim_id: c_Vf8jmmiMdhuP48AtJ9PV5M
          source_id: s_Q8xVBt78fgTiHMiSzCBkka
          stance: supports
          locator: CBDB:637874
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

# 王恭修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭修 | accepted |
| bio.summary | 王恭修，清人物。籍贯青陽，入仕監生，曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 637874） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恭修（CBDB 637874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637874&o=json)
