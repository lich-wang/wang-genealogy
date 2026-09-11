---
schema: wang-person/v1
id: p_td2wNFCKJpVe8Ea9UqvA8h
status: active
merged_into: null
display_name: 周氏
revision: 1
cbdb_id: 135955
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QVcCe-UpxjAIRMU3KlBqJR
        subject_person_id: p_td2wNFCKJpVe8Ea9UqvA8h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏，史料所见人物。本项目依据《中国历代人物传记资料库：周氏(王滋妻)（CBDB 135955）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X4XzoaHZSnHejbFnC_vuWN
          claim_id: c_QVcCe-UpxjAIRMU3KlBqJR
          source_id: s_AQCNqHYwekkSTu48cj2Bsb
          stance: supports
          locator: CBDB:135955
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_AQCNqHYwekkSTu48cj2Bsb
            source_type: api_record
            title: 中国历代人物传记资料库：周氏(王滋妻)（CBDB 135955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135955&o=json
            external_identifier: CBDB:135955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TakAGuA6XumyB6YFlk_s6g
        subject_person_id: p_td2wNFCKJpVe8Ea9UqvA8h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y4jn0Z6x94uDYrk1Cr4qAF
          claim_id: c_TakAGuA6XumyB6YFlk_s6g
          source_id: s_AQCNqHYwekkSTu48cj2Bsb
          stance: supports
          locator: CBDB:135955
          quotation: null
          interpretation_note: CBDB 明确记录的王滋配偶
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
        id: c_DOk2RnTmvrpj_795SfU9nR
        subject_person_id: p_DaceSCoivWKakaLS5hN3i4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_td2wNFCKJpVe8Ea9UqvA8h
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tgbW4jSfZzbSb55opWiJv4
          claim_id: c_DOk2RnTmvrpj_795SfU9nR
          source_id: s_AQCNqHYwekkSTu48cj2Bsb
          stance: supports
          locator: 紹興十八年同年小錄，309：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DaceSCoivWKakaLS5hN3i4
        status: active
        display_name: 王滋
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 周氏，史料所见人物。本项目依据《中国历代人物传记资料库：周氏(王滋妻)（CBDB 135955）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 周氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_DaceSCoivWKakaLS5hN3i4 | 王滋 | accepted |

## 外部来源

- [中国历代人物传记资料库：周氏(王滋妻)（CBDB 135955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135955&o=json)
