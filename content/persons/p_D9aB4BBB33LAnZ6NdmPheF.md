---
schema: wang-person/v1
id: p_D9aB4BBB33LAnZ6NdmPheF
status: active
merged_into: null
display_name: 王松年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DY9Gb6kSXEPMjG71SHEe1a
        subject_person_id: p_D9aB4BBB33LAnZ6NdmPheF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LCHM5AgVWW93hKjJV51Wmo
          claim_id: c_DY9Gb6kSXEPMjG71SHEe1a
          source_id: s_e77pfCB8K1fP1ALAUzhPfr
          stance: supports
          locator: CBDB:117580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117580）
          source: &a1
            id: s_e77pfCB8K1fP1ALAUzhPfr
            source_type: api_record
            title: 中国历代人物传记资料库：王松年（CBDB 117580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117580&o=json
            external_identifier: CBDB:117580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_r7HQqTGmcjgWTF8bXsUjfs
        subject_person_id: p_D9aB4BBB33LAnZ6NdmPheF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1230年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wGxamVKLPeA6us4wFNAMGB
          claim_id: c_r7HQqTGmcjgWTF8bXsUjfs
          source_id: s_e77pfCB8K1fP1ALAUzhPfr
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
        id: c_tDvs3XzgB3hB22PubuEREU
        subject_person_id: p_D9aB4BBB33LAnZ6NdmPheF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1302年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kQ3TS9A2RJLn36Dn9caqj5
          claim_id: c_tDvs3XzgB3hB22PubuEREU
          source_id: s_e77pfCB8K1fP1ALAUzhPfr
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
        id: c_gRXJ8gU1mZ6bufDUXrPjHP
        subject_person_id: p_D9aB4BBB33LAnZ6NdmPheF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松年（1230年—1302年），史料所见人物。本项目依据《中国历代人物传记资料库：王松年（CBDB 117580）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TqVs5xej3Bxf-jy7HbuOpJ
          claim_id: c_gRXJ8gU1mZ6bufDUXrPjHP
          source_id: s_e77pfCB8K1fP1ALAUzhPfr
          stance: supports
          locator: CBDB:117580
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王松年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松年 | accepted |
| birth.date | 1230年 | accepted |
| death.date | 1302年 | accepted |
| bio.summary | 王松年（1230年—1302年），史料所见人物。本项目依据《中国历代人物传记资料库：王松年（CBDB 117580）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王松年（CBDB 117580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117580&o=json)
