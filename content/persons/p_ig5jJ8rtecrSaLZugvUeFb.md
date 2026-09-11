---
schema: wang-person/v1
id: p_ig5jJ8rtecrSaLZugvUeFb
status: active
merged_into: null
display_name: 王傅喜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aHaUNeiABAdVqxWq81Nqnw
        subject_person_id: p_ig5jJ8rtecrSaLZugvUeFb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅喜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x8b4ueCyTmTbzyzj9xxjrb
          claim_id: c_aHaUNeiABAdVqxWq81Nqnw
          source_id: s_kUnFrBn4a5vzQW6PW5e3Pm
          stance: supports
          locator: CBDB:699455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699455）
          source: &a1
            id: s_kUnFrBn4a5vzQW6PW5e3Pm
            source_type: api_record
            title: 中国历代人物传记资料库：王傅喜（CBDB 699455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699455&o=json
            external_identifier: CBDB:699455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uY9z6VDbujMusjUFYMVLnh
        subject_person_id: p_ig5jJ8rtecrSaLZugvUeFb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅喜，史料所见人物。本项目依据《中国历代人物传记资料库：王傅喜（CBDB 699455）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6KbA4ykIUlJ2W5zGx_JruK
          claim_id: c_uY9z6VDbujMusjUFYMVLnh
          source_id: s_kUnFrBn4a5vzQW6PW5e3Pm
          stance: supports
          locator: CBDB:699455
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
  ancestors:
    - claim:
        id: c_8gy4wIxiw3TIaK9Q-MHwKV
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ig5jJ8rtecrSaLZugvUeFb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QQTXXaTiF8hSWVYKljInvq
          claim_id: c_8gy4wIxiw3TIaK9Q-MHwKV
          source_id: s_kUnFrBn4a5vzQW6PW5e3Pm
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P9pk3GX9ak89DEB5HLBBuW
        status: active
        display_name: 王用
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王傅喜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傅喜 | accepted |
| bio.summary | 王傅喜，史料所见人物。本项目依据《中国历代人物传记资料库：王傅喜（CBDB 699455）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_P9pk3GX9ak89DEB5HLBBuW | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傅喜（CBDB 699455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699455&o=json)
