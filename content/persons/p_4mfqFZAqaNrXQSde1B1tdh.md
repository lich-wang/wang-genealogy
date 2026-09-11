---
schema: wang-person/v1
id: p_4mfqFZAqaNrXQSde1B1tdh
status: active
merged_into: null
display_name: 王公政
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HKmyPh4nhPuA8yG2b2bdrE
        subject_person_id: p_4mfqFZAqaNrXQSde1B1tdh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eCuFoQTjWNagUBNEj8b7QN
          claim_id: c_HKmyPh4nhPuA8yG2b2bdrE
          source_id: s_1xMUgcy4qkABRtK5Kk7NfJ
          stance: supports
          locator: CBDB:146370
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（146370）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_261PqavrNANiTjMwxaNBsA
        subject_person_id: p_4mfqFZAqaNrXQSde1B1tdh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 824年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5VnvttNmDMh931WmG5upTC
          claim_id: c_261PqavrNANiTjMwxaNBsA
          source_id: s_1xMUgcy4qkABRtK5Kk7NfJ
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
        id: c_272PwHnkGJv6n9QUU4bPDJ
        subject_person_id: p_4mfqFZAqaNrXQSde1B1tdh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 855年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ovFgG7RvfJAaZnfVZPdMAm
          claim_id: c_272PwHnkGJv6n9QUU4bPDJ
          source_id: s_1xMUgcy4qkABRtK5Kk7NfJ
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
        id: c_FVb1uRqYb11JuZJvsMcmJM
        subject_person_id: p_4mfqFZAqaNrXQSde1B1tdh
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
        - id: cs_9GbdstaD8uqBJ1baB45DQM
          claim_id: c_FVb1uRqYb11JuZJvsMcmJM
          source_id: s_1xMUgcy4qkABRtK5Kk7NfJ
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
        id: c_NhlUvDxki6199yT31eyWyK
        subject_person_id: p_oDN8zXwLEiLaLbSQ6vv12L
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4mfqFZAqaNrXQSde1B1tdh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hsn853mqAemf0f0D6cYGKN
          claim_id: c_NhlUvDxki6199yT31eyWyK
          source_id: s_1xMUgcy4qkABRtK5Kk7NfJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oDN8zXwLEiLaLbSQ6vv12L
        status: active
        display_name: 王朝倩
        merged_into_person_id: null
  children:
    - claim:
        id: c_1_zJ7jMSH6UV1yM0AhevtD
        subject_person_id: p_4mfqFZAqaNrXQSde1B1tdh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2xFRA1ir6pEtdjnDjvBbC6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oXgA2jRXiSuaTdZT4HXeWj
          claim_id: c_1_zJ7jMSH6UV1yM0AhevtD
          source_id: s_43XPoWwhmSJ8x1EwKdw7WJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_43XPoWwhmSJ8x1EwKdw7WJ
            source_type: api_record
            title: 中国历代人物传记资料库：王小僧（CBDB 191747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191747&o=json
            external_identifier: CBDB:191747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.284Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2xFRA1ir6pEtdjnDjvBbC6
        status: active
        display_name: 王小僧
        merged_into_person_id: null
    - claim:
        id: c_UWOKrppiQYW9NQTfNPkNG2
        subject_person_id: p_4mfqFZAqaNrXQSde1B1tdh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_czF9XHUt5A4cC1osw9EnPx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eAfLSx9yi1Ekleg03oDp0J
          claim_id: c_UWOKrppiQYW9NQTfNPkNG2
          source_id: s_1xMUgcy4qkABRtK5Kk7NfJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_czF9XHUt5A4cC1osw9EnPx
        status: active
        display_name: 王弘楚
        merged_into_person_id: null
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
          source: *a1
      object_person:
        id: p_5MFNtmdjra5Fsfwe2kEr2G
        status: active
        display_name: 王弘立
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公政 | accepted |
| birth.date | 824年 | accepted |
| death.date | 855年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oDN8zXwLEiLaLbSQ6vv12L | 王朝倩 | accepted |
| children | p_2xFRA1ir6pEtdjnDjvBbC6 | 王小僧 | accepted |
| children | p_czF9XHUt5A4cC1osw9EnPx | 王弘楚 | accepted |
| children | p_5MFNtmdjra5Fsfwe2kEr2G | 王弘立 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公政（CBDB 146370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146370&o=json)
- [中国历代人物传记资料库：王小僧（CBDB 191747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191747&o=json)
