---
schema: wang-person/v1
id: p_AmDcd722ibVALV2DmECxqf
status: active
merged_into: null
display_name: 王輅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aeRei4NzoRjzw1DHQc99B3
        subject_person_id: p_AmDcd722ibVALV2DmECxqf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZzCUQnPdff59XUFgGiCMCA
          claim_id: c_aeRei4NzoRjzw1DHQc99B3
          source_id: s_Mo8fQha1Gn3kGoJm6Cka7h
          stance: supports
          locator: CBDB:510237
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510237）
          source: &a1
            id: s_Mo8fQha1Gn3kGoJm6Cka7h
            source_type: api_record
            title: 中国历代人物传记资料库：王輅（CBDB 510237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510237&o=json
            external_identifier: CBDB:510237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N7BKNcnGR7j78MoWgszpBa
        subject_person_id: p_AmDcd722ibVALV2DmECxqf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅，明人物。曾任州判官。（中国历代人物传记资料库 CBDB 510237）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G-NHVM4pxWjElanK7P1uCG
          claim_id: c_N7BKNcnGR7j78MoWgszpBa
          source_id: s_Mo8fQha1Gn3kGoJm6Cka7h
          stance: supports
          locator: CBDB:510237
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

# 王輅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輅 | accepted |
| bio.summary | 王輅，明人物。曾任州判官。（中国历代人物传记资料库 CBDB 510237） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輅（CBDB 510237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510237&o=json)
