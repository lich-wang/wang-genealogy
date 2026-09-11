---
schema: wang-person/v1
id: p_rt1JrcakCFEDnGosmXnLBg
status: active
merged_into: null
display_name: 王通
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_frRzS2PTn2E3nBUxD25K3T
        subject_person_id: p_rt1JrcakCFEDnGosmXnLBg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_43E7mUpZdvGftgwcYuzN7G
          claim_id: c_frRzS2PTn2E3nBUxD25K3T
          source_id: s_9udFmVgjToQETV4kaE57DD
          stance: supports
          locator: CBDB:145138
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145138）
          source: &a1
            id: s_9udFmVgjToQETV4kaE57DD
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 145138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145138&o=json
            external_identifier: CBDB:145138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.655Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_s2P9MzNA89Uz8r3ePu1ZAT
        subject_person_id: p_rt1JrcakCFEDnGosmXnLBg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 812年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FE4WG7B5Jp8km6BBth7k6T
          claim_id: c_s2P9MzNA89Uz8r3ePu1ZAT
          source_id: s_9udFmVgjToQETV4kaE57DD
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
        id: c_F7bM6G7CZpkUu5TDn5NvHJ
        subject_person_id: p_rt1JrcakCFEDnGosmXnLBg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通（卒于812年），唐人物。籍贯元城。（中国历代人物传记资料库 CBDB 145138）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KPy6dxpPrNlrQ-YTv9vBbd
          claim_id: c_F7bM6G7CZpkUu5TDn5NvHJ
          source_id: s_9udFmVgjToQETV4kaE57DD
          stance: supports
          locator: CBDB:145138
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xFrk-YXOu6GEkow5inBjIK
        subject_person_id: p_rt1JrcakCFEDnGosmXnLBg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_429Vh8Q7e4J1ixG1dosQzt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__YNiDR4s7fYIFrtnS0JxEX
          claim_id: c_xFrk-YXOu6GEkow5inBjIK
          source_id: s_5UKwp4KLFYW3MifcGfZ29c
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5UKwp4KLFYW3MifcGfZ29c
            source_type: api_record
            title: 中国历代人物传记资料库：王懷德（CBDB 185313）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185313&o=json
            external_identifier: CBDB:185313
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.241Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_429Vh8Q7e4J1ixG1dosQzt
        status: active
        display_name: 王懷德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| death.date | 812年 | accepted |
| bio.summary | 王通（卒于812年），唐人物。籍贯元城。（中国历代人物传记资料库 CBDB 145138） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_429Vh8Q7e4J1ixG1dosQzt | 王懷德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷德（CBDB 185313）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185313&o=json)
- [中国历代人物传记资料库：王通（CBDB 145138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145138&o=json)
