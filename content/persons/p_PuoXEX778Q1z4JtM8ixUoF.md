---
schema: wang-person/v1
id: p_PuoXEX778Q1z4JtM8ixUoF
status: active
merged_into: null
display_name: 王世榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ykbXgzdjSbMynWVMEei6FM
        subject_person_id: p_PuoXEX778Q1z4JtM8ixUoF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kpJZKKKhMieeDjfjZ7FWx7
          claim_id: c_ykbXgzdjSbMynWVMEei6FM
          source_id: s_1YPZrLAygA3Fck7x6cKiFd
          stance: supports
          locator: CBDB:635683
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635683）
          source: &a1
            id: s_1YPZrLAygA3Fck7x6cKiFd
            source_type: api_record
            title: 中国历代人物传记资料库：王世榮（CBDB 635683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635683&o=json
            external_identifier: CBDB:635683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rM9A5ANPFvkqS1kqXJnwoU
        subject_person_id: p_PuoXEX778Q1z4JtM8ixUoF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世榮，清人物。籍贯山陰，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 635683）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wYYIVbSlitdbNHetpo2Bfp
          claim_id: c_rM9A5ANPFvkqS1kqXJnwoU
          source_id: s_1YPZrLAygA3Fck7x6cKiFd
          stance: supports
          locator: CBDB:635683
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

# 王世榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世榮 | accepted |
| bio.summary | 王世榮，清人物。籍贯山陰，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 635683） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世榮（CBDB 635683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635683&o=json)
