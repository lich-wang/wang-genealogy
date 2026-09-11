---
schema: wang-person/v1
id: p_m7wuTvutYDwVYSD1DD7hTD
status: active
merged_into: null
display_name: 王觀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_givGvaSye48g7HJfkrBjQy
        subject_person_id: p_m7wuTvutYDwVYSD1DD7hTD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x6TScN2j9cKt44UAKYA6UF
          claim_id: c_givGvaSye48g7HJfkrBjQy
          source_id: s_g99DDPP485EbSQsbVA5VbF
          stance: supports
          locator: CBDB:343240
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343240）
          source: &a1
            id: s_g99DDPP485EbSQsbVA5VbF
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 343240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343240&o=json
            external_identifier: CBDB:343240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.252Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_62vZMWUri7oZHKcZGNG6NN
        subject_person_id: p_m7wuTvutYDwVYSD1DD7hTD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀，明人物。明清進士進士，籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 343240）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sHURqJLY9ABZAsurDEv2PF
          claim_id: c_62vZMWUri7oZHKcZGNG6NN
          source_id: s_g99DDPP485EbSQsbVA5VbF
          stance: supports
          locator: CBDB:343240
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

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| bio.summary | 王觀，明人物。明清進士進士，籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 343240） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 343240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343240&o=json)
