---
schema: wang-person/v1
id: p_YfGfq9AoVGaZrUzrpdWjhw
status: active
merged_into: null
display_name: 王與汶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DD5RLtHhiVr14bzfYe5QNj
        subject_person_id: p_YfGfq9AoVGaZrUzrpdWjhw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與汶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UYqrYNZPXGXeeC1dhgeWAx
          claim_id: c_DD5RLtHhiVr14bzfYe5QNj
          source_id: s_dZU4dk4CEFimkKVQY7YtQG
          stance: supports
          locator: CBDB:71341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71341）
          source: &a1
            id: s_dZU4dk4CEFimkKVQY7YtQG
            source_type: api_record
            title: 中国历代人物传记资料库：王與汶（CBDB 71341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71341&o=json
            external_identifier: CBDB:71341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HZqXEnfdB35eVkia5A4kGW
        subject_person_id: p_YfGfq9AoVGaZrUzrpdWjhw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1805年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sK3zXeqKai9uE2eVX3851Z
          claim_id: c_HZqXEnfdB35eVkia5A4kGW
          source_id: s_dZU4dk4CEFimkKVQY7YtQG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1BKWtAV816TC8va18rF2dD
        subject_person_id: p_YfGfq9AoVGaZrUzrpdWjhw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1861年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MDXgn7ff6f9THnxcQXpcAK
          claim_id: c_1BKWtAV816TC8va18rF2dD
          source_id: s_dZU4dk4CEFimkKVQY7YtQG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vQFyLLKW68BSD58CREFTWM
        subject_person_id: p_YfGfq9AoVGaZrUzrpdWjhw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與汶（1805年—1861年），清人物。籍贯吳江。（中国历代人物传记资料库 CBDB 71341）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-INvgICP08zAkWXxSiHQdl
          claim_id: c_vQFyLLKW68BSD58CREFTWM
          source_id: s_dZU4dk4CEFimkKVQY7YtQG
          stance: supports
          locator: CBDB:71341
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

# 王與汶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王與汶 | accepted |
| birth.date | 1805年 | accepted |
| death.date | 1861年 | accepted |
| bio.summary | 王與汶（1805年—1861年），清人物。籍贯吳江。（中国历代人物传记资料库 CBDB 71341） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王與汶（CBDB 71341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71341&o=json)
