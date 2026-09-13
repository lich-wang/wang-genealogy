---
schema: wang-person/v1
id: p_UGaGhPWmvj6EjNvZiQaTd5
status: active
merged_into: null
display_name: 王津祖
cbdb_id: 519011
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_occbBAxuX33a1qmf8efrT3
        subject_person_id: p_UGaGhPWmvj6EjNvZiQaTd5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王津祖，史料所见人物。本项目依据《中国历代人物传记资料库：王津祖（CBDB 519011）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_mYcnpI1WII5xGFBPvGsr6u
          claim_id: c_occbBAxuX33a1qmf8efrT3
          source_id: s_DTXgrXKEB3of8xcJSkJ3v1
          stance: supports
          locator: CBDB:519011
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_DTXgrXKEB3of8xcJSkJ3v1
            source_type: api_record
            title: 中国历代人物传记资料库：王津祖（CBDB 519011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=519011&o=json
            external_identifier: CBDB:519011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4BFsT7oT1n67hvP7cNVPop
        subject_person_id: p_UGaGhPWmvj6EjNvZiQaTd5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王津祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VNK96ibiJNRYRJPYEeiNn1
          claim_id: c_4BFsT7oT1n67hvP7cNVPop
          source_id: s_DTXgrXKEB3of8xcJSkJ3v1
          stance: supports
          locator: CBDB:519011
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vsoye67euOSaTzw0tKCVq2
        subject_person_id: p_tapatn7J8aLwDcU5rhYqTc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UGaGhPWmvj6EjNvZiQaTd5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-yPbrh-m82vaV7mZ5KxkNx
          claim_id: c_vsoye67euOSaTzw0tKCVq2
          source_id: s_SkXwt4af77XQNkaAWmM9t4
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），3350：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SkXwt4af77XQNkaAWmM9t4
            source_type: api_record
            title: 中国历代人物传记资料库：王廷極（CBDB 60041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60041&o=json
            external_identifier: CBDB:60041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tapatn7J8aLwDcU5rhYqTc
        status: active
        display_name: 王廷極
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王津祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王津祖，史料所见人物。本项目依据《中国历代人物传记资料库：王津祖（CBDB 519011）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王津祖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tapatn7J8aLwDcU5rhYqTc | 王廷極 | accepted |

## 外部来源

- [中国历代人物传记资料库：王津祖（CBDB 519011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=519011&o=json)
- [中国历代人物传记资料库：王廷極（CBDB 60041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60041&o=json)
