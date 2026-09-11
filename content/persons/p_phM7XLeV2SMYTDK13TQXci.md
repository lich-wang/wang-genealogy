---
schema: wang-person/v1
id: p_phM7XLeV2SMYTDK13TQXci
status: active
merged_into: null
display_name: 王儒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_svN4gNW5TuReW5GECTchDa
        subject_person_id: p_phM7XLeV2SMYTDK13TQXci
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3j1yrYCaxSdB6y54767GWA
          claim_id: c_svN4gNW5TuReW5GECTchDa
          source_id: s_xuS8dfXfxskivPNArysg96
          stance: supports
          locator: CBDB:324559
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324559）
          source: &a1
            id: s_xuS8dfXfxskivPNArysg96
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 324559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324559&o=json
            external_identifier: CBDB:324559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2sEmbimLcPFfmGbZQ14Rwf
        subject_person_id: p_phM7XLeV2SMYTDK13TQXci
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zBTn9QE9DMzjWzhX1yAxdK
          claim_id: c_2sEmbimLcPFfmGbZQ14Rwf
          source_id: s_xuS8dfXfxskivPNArysg96
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants:
    - claim:
        id: c_z8KbF2Dl_ePOWZMQmX6SFz
        subject_person_id: p_phM7XLeV2SMYTDK13TQXci
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SpYi-DmtzG3R9Sft26mt7J
          claim_id: c_z8KbF2Dl_ePOWZMQmX6SFz
          source_id: s_xuS8dfXfxskivPNArysg96
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第六十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hpB2Y5ktFHzZw4LUr2KGvj
        status: active
        display_name: 王用楨
        merged_into_person_id: null
  other: []
---

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hpB2Y5ktFHzZw4LUr2KGvj | 王用楨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 324559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324559&o=json)
