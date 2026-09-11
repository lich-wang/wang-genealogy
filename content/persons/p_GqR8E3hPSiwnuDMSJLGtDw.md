---
schema: wang-person/v1
id: p_GqR8E3hPSiwnuDMSJLGtDw
status: active
merged_into: null
display_name: 王志灝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pqbDwGbvhZya8sdW7Ci7QB
        subject_person_id: p_GqR8E3hPSiwnuDMSJLGtDw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志灝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NgKyj1aefohuNRac29WYek
          claim_id: c_pqbDwGbvhZya8sdW7Ci7QB
          source_id: s_d8rbh58h5GPuuC3yksqBMs
          stance: supports
          locator: CBDB:637761
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637761）
          source: &a1
            id: s_d8rbh58h5GPuuC3yksqBMs
            source_type: api_record
            title: 中国历代人物传记资料库：王志灝（CBDB 637761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637761&o=json
            external_identifier: CBDB:637761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.413Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uk712REQKtfpuTPkZnmC72
        subject_person_id: p_GqR8E3hPSiwnuDMSJLGtDw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志灝，清人物。籍贯高密，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637761）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JqYRk7NaoSztbjs1L8L28D
          claim_id: c_uk712REQKtfpuTPkZnmC72
          source_id: s_d8rbh58h5GPuuC3yksqBMs
          stance: supports
          locator: CBDB:637761
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

# 王志灝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志灝 | accepted |
| bio.summary | 王志灝，清人物。籍贯高密，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637761） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志灝（CBDB 637761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637761&o=json)
