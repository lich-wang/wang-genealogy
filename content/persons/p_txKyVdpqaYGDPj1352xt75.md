---
schema: wang-person/v1
id: p_txKyVdpqaYGDPj1352xt75
status: active
merged_into: null
display_name: 王儒卿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KKK5anDiz4q9mMSJVLESzU
        subject_person_id: p_txKyVdpqaYGDPj1352xt75
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qnBBXcjRT4D9u8HCAUEhJk
          claim_id: c_KKK5anDiz4q9mMSJVLESzU
          source_id: s_HQLXWPDG9Aw9i6YJBnDDBD
          stance: supports
          locator: CBDB:517421
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（517421）
          source: &a1
            id: s_HQLXWPDG9Aw9i6YJBnDDBD
            source_type: api_record
            title: 中国历代人物传记资料库：王儒卿（CBDB 517421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517421&o=json
            external_identifier: CBDB:517421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Fv47jn8WaAMEvqWM2DdGo
        subject_person_id: p_txKyVdpqaYGDPj1352xt75
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒卿，史料所见人物。本项目依据《中国历代人物传记资料库：王儒卿（CBDB 517421）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EU1gPR5yN2FjTUj2EwrzIh
          claim_id: c_4Fv47jn8WaAMEvqWM2DdGo
          source_id: s_HQLXWPDG9Aw9i6YJBnDDBD
          stance: supports
          locator: CBDB:517421
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6RwzQmQO7RCwIPV-P2RBIN
        subject_person_id: p_rmasThSZQpK58DvK4DhFJc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_txKyVdpqaYGDPj1352xt75
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gnRpS8YOxlY_-NXxJnZgSB
          claim_id: c_6RwzQmQO7RCwIPV-P2RBIN
          source_id: s_32jPKE9WJo13pjP5TD4N2Q
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1877：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_32jPKE9WJo13pjP5TD4N2Q
            source_type: api_record
            title: 中国历代人物传记资料库：王凱泰（CBDB 58615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58615&o=json
            external_identifier: CBDB:58615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rmasThSZQpK58DvK4DhFJc
        status: active
        display_name: 王凱泰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王儒卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒卿 | accepted |
| bio.summary | 王儒卿，史料所见人物。本项目依据《中国历代人物传记资料库：王儒卿（CBDB 517421）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rmasThSZQpK58DvK4DhFJc | 王凱泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王凱泰（CBDB 58615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58615&o=json)
- [中国历代人物传记资料库：王儒卿（CBDB 517421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517421&o=json)
