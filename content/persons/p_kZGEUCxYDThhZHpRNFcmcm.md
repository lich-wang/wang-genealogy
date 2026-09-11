---
schema: wang-person/v1
id: p_kZGEUCxYDThhZHpRNFcmcm
status: active
merged_into: null
display_name: 王汝玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J6Q7DsXWsN3ZVPzzpPhAwA
        subject_person_id: p_kZGEUCxYDThhZHpRNFcmcm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hD1sDe4vGE2JsKbDrdMr5r
          claim_id: c_J6Q7DsXWsN3ZVPzzpPhAwA
          source_id: s_LDoQJpnrbgFJA1rXbAQsNN
          stance: supports
          locator: CBDB:71610
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71610）
          source: &a1
            id: s_LDoQJpnrbgFJA1rXbAQsNN
            source_type: api_record
            title: 中国历代人物传记资料库：王汝玉（CBDB 71610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71610&o=json
            external_identifier: CBDB:71610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NhgsmVLeA8fHo24zjV4iny
        subject_person_id: p_kZGEUCxYDThhZHpRNFcmcm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yuN6MJH3gpdcqkVpXAR3fA
          claim_id: c_NhgsmVLeA8fHo24zjV4iny
          source_id: s_LDoQJpnrbgFJA1rXbAQsNN
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
        id: c_Fq2eaKFtPaXTjM3TCToVBx
        subject_person_id: p_kZGEUCxYDThhZHpRNFcmcm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uYGaaTHejsvRSLZRedWQK8
          claim_id: c_Fq2eaKFtPaXTjM3TCToVBx
          source_id: s_LDoQJpnrbgFJA1rXbAQsNN
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
        id: c_ZmG8mLE9fiu6Yo17Are4hw
        subject_person_id: p_kZGEUCxYDThhZHpRNFcmcm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王汝玉（1798年—1852年），清人物。籍贯吳縣，身份为詩人，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 71610）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8N2Nox58vyjvnvIdYiP-NF
          claim_id: c_ZmG8mLE9fiu6Yo17Are4hw
          source_id: s_LDoQJpnrbgFJA1rXbAQsNN
          stance: supports
          locator: CBDB:71610
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

# 王汝玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝玉 | accepted |
| birth.date | 1798年 | accepted |
| death.date | 1852年 | accepted |
| bio.summary | 王汝玉（1798年—1852年），清人物。籍贯吳縣，身份为詩人，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 71610） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝玉（CBDB 71610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71610&o=json)
