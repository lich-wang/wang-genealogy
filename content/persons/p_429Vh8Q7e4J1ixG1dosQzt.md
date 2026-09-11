---
schema: wang-person/v1
id: p_429Vh8Q7e4J1ixG1dosQzt
status: active
merged_into: null
display_name: 王懷德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bgmGMBUeu17zeG52HkmMYj
        subject_person_id: p_429Vh8Q7e4J1ixG1dosQzt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MCEYDANfkyBA5QUr1YtKNA
          claim_id: c_bgmGMBUeu17zeG52HkmMYj
          source_id: s_5UKwp4KLFYW3MifcGfZ29c
          stance: supports
          locator: CBDB:185313
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185313）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nDHP6PfkhgYerTLHReG3Su
        subject_person_id: p_429Vh8Q7e4J1ixG1dosQzt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 849年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_75vQJ1HSKV2dxhEZHfTh7g
          claim_id: c_nDHP6PfkhgYerTLHReG3Su
          source_id: s_5UKwp4KLFYW3MifcGfZ29c
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
        id: c_57sSW4tMwytpjpGEfHzUsM
        subject_person_id: p_429Vh8Q7e4J1ixG1dosQzt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hCmhKmXxfWGkuebrYoQLEJ
          claim_id: c_57sSW4tMwytpjpGEfHzUsM
          source_id: s_5UKwp4KLFYW3MifcGfZ29c
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_rt1JrcakCFEDnGosmXnLBg
        status: active
        display_name: 王通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懷德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷德 | accepted |
| death.date | 849年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rt1JrcakCFEDnGosmXnLBg | 王通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷德（CBDB 185313）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185313&o=json)
