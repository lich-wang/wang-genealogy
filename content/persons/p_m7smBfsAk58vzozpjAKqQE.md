---
schema: wang-person/v1
id: p_m7smBfsAk58vzozpjAKqQE
status: active
merged_into: null
display_name: 王昌緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PZ9JhxFx7mY9uCRw96E7ca
        subject_person_id: p_m7smBfsAk58vzozpjAKqQE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dx5RT4kzMRoX8mgMkVuM18
          claim_id: c_PZ9JhxFx7mY9uCRw96E7ca
          source_id: s_jBEP1S43eLvz81mwEVF8RC
          stance: supports
          locator: CBDB:638378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638378）
          source: &a1
            id: s_jBEP1S43eLvz81mwEVF8RC
            source_type: api_record
            title: 中国历代人物传记资料库：王昌緒（CBDB 638378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638378&o=json
            external_identifier: CBDB:638378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zG9dHcE449GZbsb6R7Duxo
        subject_person_id: p_m7smBfsAk58vzozpjAKqQE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CUDL9XeEQ9CKjs1adsKoHA
          claim_id: c_zG9dHcE449GZbsb6R7Duxo
          source_id: s_jBEP1S43eLvz81mwEVF8RC
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
  descendants: []
  other: []
---

# 王昌緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌緒 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌緒（CBDB 638378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638378&o=json)
