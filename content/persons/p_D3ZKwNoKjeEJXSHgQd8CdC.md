---
schema: wang-person/v1
id: p_D3ZKwNoKjeEJXSHgQd8CdC
status: merged
merged_into: p_TQiMhGLRXGBc7HWBFHEr7P
display_name: 王守仁
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_72Srk8RpsqaYtnWrdccvkL
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C4sGvYvRTbu5WUyGMiBMor
          claim_id: c_72Srk8RpsqaYtnWrdccvkL
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: CBDB:30374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30374）
          source: &a1
            id: s_yUmzrSxNNCC7j1D7AdYPLL
            source_type: api_record
            title: 中国历代人物传记资料库：王守仁（CBDB 30374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30374&o=json
            external_identifier: CBDB:30374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6RCum6J5oscqyw919GLeg6
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1472年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ztNojQ6TbmHPrHjtssrBDw
          claim_id: c_6RCum6J5oscqyw919GLeg6
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
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
        id: c_9eBPyNif7JxU6R7zrXNG56
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MA1EwxHnQqmfKAii1o7Fre
          claim_id: c_9eBPyNif7JxU6R7zrXNG56
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
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
        id: c_jd3Pa9BEiKckuF1sv7fQzk
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守仁（1472年—1528年），明人物。明清進士進士，籍贯餘姚，身份为詩人、理學家 — 陽明學派，入仕進士。（中国历代人物传记资料库 CBDB 30374）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lyyFSjixMBdipzJsA850yb
          claim_id: c_jd3Pa9BEiKckuF1sv7fQzk
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: CBDB:30374
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

# 王守仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守仁 | accepted |
| birth.date | 1472年 | accepted |
| death.date | 1528年 | accepted |
| bio.summary | 王守仁（1472年—1528年），明人物。明清進士進士，籍贯餘姚，身份为詩人、理學家 — 陽明學派，入仕進士。（中国历代人物传记资料库 CBDB 30374） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守仁（CBDB 30374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30374&o=json)
