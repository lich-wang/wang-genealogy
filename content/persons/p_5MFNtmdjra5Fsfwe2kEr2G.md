---
schema: wang-person/v1
id: p_5MFNtmdjra5Fsfwe2kEr2G
status: active
merged_into: null
display_name: 王弘立
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LqTt7Ha3n8rsJbxMQbmKFw
        subject_person_id: p_5MFNtmdjra5Fsfwe2kEr2G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RDJGQ1oFPq2ybLCEbENJsY
          claim_id: c_LqTt7Ha3n8rsJbxMQbmKFw
          source_id: s_R1Si9R92HVccEW3o39SH2K
          stance: supports
          locator: CBDB:191746
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191746）
          source: &a1
            id: s_R1Si9R92HVccEW3o39SH2K
            source_type: api_record
            title: 中国历代人物传记资料库：王弘立（CBDB 191746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191746&o=json
            external_identifier: CBDB:191746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.284Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9JKobF9uMvgMAMkksMccJF
        subject_person_id: p_5MFNtmdjra5Fsfwe2kEr2G
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 920年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1dB3M6qXCybAak4VZqD92a
          claim_id: c_9JKobF9uMvgMAMkksMccJF
          source_id: s_R1Si9R92HVccEW3o39SH2K
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
        id: c_nJ3aC6xuooRNvHkc3YDUgg
        subject_person_id: p_5MFNtmdjra5Fsfwe2kEr2G
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
        - id: cs_kwq4TibAnHriZ2nWX2qoMU
          claim_id: c_nJ3aC6xuooRNvHkc3YDUgg
          source_id: s_R1Si9R92HVccEW3o39SH2K
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
        id: c_1HC7PKbvK1NQ-M6hmeQl1-
        subject_person_id: p_4mfqFZAqaNrXQSde1B1tdh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5MFNtmdjra5Fsfwe2kEr2G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FpLCphO553DkkkSscEvzKw
          claim_id: c_1HC7PKbvK1NQ-M6hmeQl1-
          source_id: s_1xMUgcy4qkABRtK5Kk7NfJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1xMUgcy4qkABRtK5Kk7NfJ
            source_type: api_record
            title: 中国历代人物传记资料库：王公政（CBDB 146370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146370&o=json
            external_identifier: CBDB:146370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.714Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4mfqFZAqaNrXQSde1B1tdh
        status: active
        display_name: 王公政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘立 | accepted |
| death.date | 920年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4mfqFZAqaNrXQSde1B1tdh | 王公政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公政（CBDB 146370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146370&o=json)
- [中国历代人物传记资料库：王弘立（CBDB 191746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191746&o=json)
