---
schema: wang-person/v1
id: p_ZGLNdCF5BxXbwMLnW5vN2t
status: active
merged_into: null
display_name: 王鏡燾
cbdb_id: 526850
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3dWSNV4FJDP51HFDKxBXyC
        subject_person_id: p_ZGLNdCF5BxXbwMLnW5vN2t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏡燾，清人物。中国历代人物传记资料库（CBDB）以人物编号 526850 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_TLkxRbkfTEF6cGgngdkIiE
          claim_id: c_3dWSNV4FJDP51HFDKxBXyC
          source_id: s_Wq2eDTXcxmk1KHTecDzT6B
          stance: supports
          locator: CBDB:526850
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Wq2eDTXcxmk1KHTecDzT6B
            source_type: api_record
            title: 中国历代人物传记资料库：王鏡燾（CBDB 526850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526850&o=json
            external_identifier: CBDB:526850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fw9qzMYGG89Eve9ucPLBwu
        subject_person_id: p_ZGLNdCF5BxXbwMLnW5vN2t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏡燾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kLfVbyq1dcKiYaCbmwHW14
          claim_id: c_Fw9qzMYGG89Eve9ucPLBwu
          source_id: s_Wq2eDTXcxmk1KHTecDzT6B
          stance: supports
          locator: CBDB:526850
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_Wq2eDTXcxmk1KHTecDzT6B
            source_type: api_record
            title: 中国历代人物传记资料库：王鏡燾（CBDB 526850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526850&o=json
            external_identifier: CBDB:526850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_GEihgxrKF2W4FEUsSK15w4
        subject_person_id: p_2y1eP1nsjw8ciu9GjNsB8J
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZGLNdCF5BxXbwMLnW5vN2t
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CNLQ2ipuzAu2HOZDKQJfDz
          claim_id: c_GEihgxrKF2W4FEUsSK15w4
          source_id: s_Wq2eDTXcxmk1KHTecDzT6B
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13031：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2y1eP1nsjw8ciu9GjNsB8J
        status: active
        display_name: 王恩綬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鏡燾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鏡燾，清人物。中国历代人物传记资料库（CBDB）以人物编号 526850 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王鏡燾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_2y1eP1nsjw8ciu9GjNsB8J | 王恩綬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鏡燾（CBDB 526850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526850&o=json)
