---
schema: wang-person/v1
id: p_9m7DiW2W1bieMq8Lk514Gi
status: active
merged_into: null
display_name: 王凝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rhXzwEv1tNkGyWyByehSQq
        subject_person_id: p_9m7DiW2W1bieMq8Lk514Gi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yGWM3dqJf5ET3HohHDVFWD
          claim_id: c_rhXzwEv1tNkGyWyByehSQq
          source_id: s_gePR35H1EG591Vhqxt4V3W
          stance: supports
          locator: CBDB:71282
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71282）
          source: &a1
            id: s_gePR35H1EG591Vhqxt4V3W
            source_type: api_record
            title: 中国历代人物传记资料库：王凝（CBDB 71282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71282&o=json
            external_identifier: CBDB:71282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1ngANnv2tpThCbwQt93ZAx
        subject_person_id: p_9m7DiW2W1bieMq8Lk514Gi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1683年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JvwgwJKfHXwQ1iQFRD49wK
          claim_id: c_1ngANnv2tpThCbwQt93ZAx
          source_id: s_gePR35H1EG591Vhqxt4V3W
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
        id: c_ZSq3Uc5gWoKo7exatEmGH2
        subject_person_id: p_9m7DiW2W1bieMq8Lk514Gi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝（生于1683年），清人物。籍贯平定直隸州。（中国历代人物传记资料库 CBDB 71282）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NeEuwsifScmfwrrfwXVgXU
          claim_id: c_ZSq3Uc5gWoKo7exatEmGH2
          source_id: s_gePR35H1EG591Vhqxt4V3W
          stance: supports
          locator: CBDB:71282
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

# 王凝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凝 | accepted |
| birth.date | 1683年 | accepted |
| bio.summary | 王凝（生于1683年），清人物。籍贯平定直隸州。（中国历代人物传记资料库 CBDB 71282） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王凝（CBDB 71282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71282&o=json)
