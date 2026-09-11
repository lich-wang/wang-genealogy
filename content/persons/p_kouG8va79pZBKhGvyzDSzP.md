---
schema: wang-person/v1
id: p_kouG8va79pZBKhGvyzDSzP
status: active
merged_into: null
display_name: 王從善
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SunVHqHg8vKJyt95zJPqAa
        subject_person_id: p_kouG8va79pZBKhGvyzDSzP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ux1puCfYZYEjfAB9FQ2kkM
          claim_id: c_SunVHqHg8vKJyt95zJPqAa
          source_id: s_2aoGvaNGVY21wbpWn83Hd3
          stance: supports
          locator: CBDB:252481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252481）
          source: &a1
            id: s_2aoGvaNGVY21wbpWn83Hd3
            source_type: api_record
            title: 中国历代人物传记资料库：王從善（CBDB 252481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252481&o=json
            external_identifier: CBDB:252481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j76BgjCfWzMPuhC8yAiDrd
        subject_person_id: p_kouG8va79pZBKhGvyzDSzP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從善，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 252481）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CRbyJH5xsNIx7LBzxf_k6Z
          claim_id: c_j76BgjCfWzMPuhC8yAiDrd
          source_id: s_2aoGvaNGVY21wbpWn83Hd3
          stance: supports
          locator: CBDB:252481
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_gviObvMxRGHdeSe_SCds16
        subject_person_id: p_kouG8va79pZBKhGvyzDSzP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5841EMmKzggT2c8As9ptEU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZyC7hxAHHe0IRhh2EwntuT
          claim_id: c_gviObvMxRGHdeSe_SCds16
          source_id: s_2aoGvaNGVY21wbpWn83Hd3
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第八十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5841EMmKzggT2c8As9ptEU
        status: active
        display_name: 王鯨
        merged_into_person_id: null
  other: []
---

# 王從善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從善 | accepted |
| bio.summary | 王從善，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 252481） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5841EMmKzggT2c8As9ptEU | 王鯨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從善（CBDB 252481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252481&o=json)
