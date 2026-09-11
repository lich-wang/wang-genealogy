---
schema: wang-person/v1
id: p_MyWCWuYLm94BLDEMq9j1j5
status: active
merged_into: null
display_name: 王序賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DVeKJYzLAydGfqEanmMCA3
        subject_person_id: p_MyWCWuYLm94BLDEMq9j1j5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k5TpWG4twa4g9kKU41nomt
          claim_id: c_DVeKJYzLAydGfqEanmMCA3
          source_id: s_6EP72TbvMu97KEyg1iPhD9
          stance: supports
          locator: CBDB:71703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71703）
          source: &a1
            id: s_6EP72TbvMu97KEyg1iPhD9
            source_type: api_record
            title: 中国历代人物传记资料库：王序賓（CBDB 71703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71703&o=json
            external_identifier: CBDB:71703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FpysT3XczN3b2UvJxQYGTF
        subject_person_id: p_MyWCWuYLm94BLDEMq9j1j5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1818年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HzY8SKPBPXoc4hBVZMxEJK
          claim_id: c_FpysT3XczN3b2UvJxQYGTF
          source_id: s_6EP72TbvMu97KEyg1iPhD9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sLJzNEVT2vumDcMNLwDiMm
        subject_person_id: p_MyWCWuYLm94BLDEMq9j1j5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序賓（生于1818年），清人物。籍贯榆次。（中国历代人物传记资料库 CBDB 71703）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9p_8MnmmbbQ2oSn9xgWLuz
          claim_id: c_sLJzNEVT2vumDcMNLwDiMm
          source_id: s_6EP72TbvMu97KEyg1iPhD9
          stance: supports
          locator: CBDB:71703
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

# 王序賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王序賓 | accepted |
| birth.date | 1818年 | accepted |
| bio.summary | 王序賓（生于1818年），清人物。籍贯榆次。（中国历代人物传记资料库 CBDB 71703） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王序賓（CBDB 71703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71703&o=json)
