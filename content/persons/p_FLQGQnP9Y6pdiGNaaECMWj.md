---
schema: wang-person/v1
id: p_FLQGQnP9Y6pdiGNaaECMWj
status: active
merged_into: null
display_name: 王衣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MY4W4XwfiZQpnoiZjP5c9m
        subject_person_id: p_FLQGQnP9Y6pdiGNaaECMWj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JDUZ8LLxnAiFsXGzug8KYE
          claim_id: c_MY4W4XwfiZQpnoiZjP5c9m
          source_id: s_sBEoEx9NZnfVFPbFtT3ccb
          stance: supports
          locator: CBDB:3959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3959）
          source: &a1
            id: s_sBEoEx9NZnfVFPbFtT3ccb
            source_type: api_record
            title: 中国历代人物传记资料库：王衣（CBDB 3959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3959&o=json
            external_identifier: CBDB:3959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8Gtw7MWC5xJcoBvQWzD8Rx
        subject_person_id: p_FLQGQnP9Y6pdiGNaaECMWj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1074年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mu2HsPdRfLzvyBZ2LFSBBk
          claim_id: c_8Gtw7MWC5xJcoBvQWzD8Rx
          source_id: s_sBEoEx9NZnfVFPbFtT3ccb
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
        id: c_8Ka37QK6dKmkqf7H73RbAq
        subject_person_id: p_FLQGQnP9Y6pdiGNaaECMWj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1135年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mjJoMmbgjt9hrQ3VPFkfWD
          claim_id: c_8Ka37QK6dKmkqf7H73RbAq
          source_id: s_sBEoEx9NZnfVFPbFtT3ccb
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
        id: c_kDo6J75sjAmvHvVH4Ay9GS
        subject_person_id: p_FLQGQnP9Y6pdiGNaaECMWj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衣（1074年—1135年），宋人物。籍贯會稽，入仕明法，曾任刑部侍郎、大理寺少卿、大理寺正。（中国历代人物传记资料库 CBDB 3959）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tv8RiC1SjjJp0OfRulJA_z
          claim_id: c_kDo6J75sjAmvHvVH4Ay9GS
          source_id: s_sBEoEx9NZnfVFPbFtT3ccb
          stance: supports
          locator: CBDB:3959
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9t4u4m05PUyvspcoFRFBwc
        subject_person_id: p_8pefMocZcx3Xt1bkSBWgB6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FLQGQnP9Y6pdiGNaaECMWj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mJ_Tret13feBxzVKDLziXt
          claim_id: c_9t4u4m05PUyvspcoFRFBwc
          source_id: s_nrAzHgzjmK1EQzr9DACQnY
          stance: supports
          locator: CBDB 双向互证（子 王衣 ⇄ 父 王宿）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_nrAzHgzjmK1EQzr9DACQnY
            source_type: api_record
            title: 中国历代人物传记资料库：王宿（CBDB 17424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17424&o=json
            external_identifier: CBDB:17424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8pefMocZcx3Xt1bkSBWgB6
        status: active
        display_name: 王宿
        merged_into_person_id: null
  children:
    - claim:
        id: c_vOUMwDuj_wmsz1IARZWb_h
        subject_person_id: p_FLQGQnP9Y6pdiGNaaECMWj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B4L9pSP9ttyTGcwxwKHeQg
          claim_id: c_vOUMwDuj_wmsz1IARZWb_h
          source_id: s_sBEoEx9NZnfVFPbFtT3ccb
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1528：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HPYYkmNEETrV6SW1UZLFZN
        status: active
        display_name: 王次張
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王衣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衣 | accepted |
| birth.date | 1074年 | accepted |
| death.date | 1135年 | accepted |
| bio.summary | 王衣（1074年—1135年），宋人物。籍贯會稽，入仕明法，曾任刑部侍郎、大理寺少卿、大理寺正。（中国历代人物传记资料库 CBDB 3959） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8pefMocZcx3Xt1bkSBWgB6 | 王宿 | accepted |
| children | p_HPYYkmNEETrV6SW1UZLFZN | 王次張 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宿（CBDB 17424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17424&o=json)
- [中国历代人物传记资料库：王衣（CBDB 3959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3959&o=json)
