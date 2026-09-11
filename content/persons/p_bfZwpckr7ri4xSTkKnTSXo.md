---
schema: wang-person/v1
id: p_bfZwpckr7ri4xSTkKnTSXo
status: active
merged_into: null
display_name: 王子蘭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mn7s88nLUFPWkBqkNP3HNK
        subject_person_id: p_bfZwpckr7ri4xSTkKnTSXo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eWU6QkddYuCYzrHg6NZ3BE
          claim_id: c_mn7s88nLUFPWkBqkNP3HNK
          source_id: s_3cCRSZpzM7FA5F76SVGYxf
          stance: supports
          locator: CBDB:120363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（120363）
          source: &a1
            id: s_3cCRSZpzM7FA5F76SVGYxf
            source_type: api_record
            title: 中国历代人物传记资料库：王子蘭（CBDB 120363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120363&o=json
            external_identifier: CBDB:120363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CbCrWKRAWguihbvy9vKLM9
        subject_person_id: p_bfZwpckr7ri4xSTkKnTSXo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子蘭，史料所见人物。本项目依据《中国历代人物传记资料库：王子蘭（CBDB 120363）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bw9b84alL_sIcl5_ChvpXa
          claim_id: c_CbCrWKRAWguihbvy9vKLM9
          source_id: s_3cCRSZpzM7FA5F76SVGYxf
          stance: supports
          locator: CBDB:120363
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
  spouses:
    - claim:
        id: c_5zN2og3m15pXQUplFBfDN5
        subject_person_id: p_bfZwpckr7ri4xSTkKnTSXo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_95sRD5xzYEUzc4pYQu6DBU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4GIbwVXAAX1mk7v1ZxYbc6
          claim_id: c_5zN2og3m15pXQUplFBfDN5
          source_id: s_x5vnWrNZhfH1UgIFS3WKZJ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3961：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x5vnWrNZhfH1UgIFS3WKZJ
            source_type: api_record
            title: 中国历代人物传记资料库：陳裴之（CBDB 54716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54716&o=json
            external_identifier: CBDB:54716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_95sRD5xzYEUzc4pYQu6DBU
        status: active
        display_name: 陳裴之
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王子蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子蘭 | accepted |
| bio.summary | 王子蘭，史料所见人物。本项目依据《中国历代人物传记资料库：王子蘭（CBDB 120363）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_95sRD5xzYEUzc4pYQu6DBU | 陳裴之 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳裴之（CBDB 54716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54716&o=json)
- [中国历代人物传记资料库：王子蘭（CBDB 120363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120363&o=json)
