---
schema: wang-person/v1
id: p_atRhzDs4oFYS811oM1atCv
status: active
merged_into: null
display_name: 王碩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gk37DDgX2kC1xYkMLDqRu4
        subject_person_id: p_atRhzDs4oFYS811oM1atCv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2qjo7ZabHKVM2DPAdCCd6f
          claim_id: c_Gk37DDgX2kC1xYkMLDqRu4
          source_id: s_xRkNTXpF2k4ZKYiz3nN2ng
          stance: supports
          locator: CBDB:384841
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（384841）
          source: &a1
            id: s_xRkNTXpF2k4ZKYiz3nN2ng
            source_type: api_record
            title: 中国历代人物传记资料库：王碩（CBDB 384841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384841&o=json
            external_identifier: CBDB:384841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.876Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b184Z1MckeKMCV3MfhFt3A
        subject_person_id: p_atRhzDs4oFYS811oM1atCv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碩，宋人物。籍贯永康，入仕進士。（中国历代人物传记资料库 CBDB 384841）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2ZUIsA0Vqo_gM3euuFyLgy
          claim_id: c_b184Z1MckeKMCV3MfhFt3A
          source_id: s_xRkNTXpF2k4ZKYiz3nN2ng
          stance: supports
          locator: CBDB:384841
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i2Hzu1htltf3SQyhlA7Xi7
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_atRhzDs4oFYS811oM1atCv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5pMc5_c3oMKvsvWnFnffEO
          claim_id: c_i2Hzu1htltf3SQyhlA7Xi7
          source_id: s_xRkNTXpF2k4ZKYiz3nN2ng
          stance: supports
          locator: 全宋文，卷 5677：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WFnoT4AbtuEmwq5jbDJDqe
        status: active
        display_name: 王恬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王碩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王碩 | accepted |
| bio.summary | 王碩，宋人物。籍贯永康，入仕進士。（中国历代人物传记资料库 CBDB 384841） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WFnoT4AbtuEmwq5jbDJDqe | 王恬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王碩（CBDB 384841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384841&o=json)
