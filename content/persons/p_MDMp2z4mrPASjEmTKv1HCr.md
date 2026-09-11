---
schema: wang-person/v1
id: p_MDMp2z4mrPASjEmTKv1HCr
status: active
merged_into: null
display_name: 王耒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AZyVGccKCoNe51Dtpm5gfe
        subject_person_id: p_MDMp2z4mrPASjEmTKv1HCr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_refdCPqgVWhNo4JGjQcD4t
          claim_id: c_AZyVGccKCoNe51Dtpm5gfe
          source_id: s_TKg9LhfZvx2ErHHaYyx6Zp
          stance: supports
          locator: CBDB:527062
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527062）
          source: &a1
            id: s_TKg9LhfZvx2ErHHaYyx6Zp
            source_type: api_record
            title: 中国历代人物传记资料库：王耒（CBDB 527062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527062&o=json
            external_identifier: CBDB:527062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_13nvauG4663Mf8AZX6et1N
        subject_person_id: p_MDMp2z4mrPASjEmTKv1HCr
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
        - id: cs_8fXJhAYGwQz5p3f7XGpsVE
          claim_id: c_13nvauG4663Mf8AZX6et1N
          source_id: s_TKg9LhfZvx2ErHHaYyx6Zp
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
  ancestors:
    - claim:
        id: c_MabjdP2zeMSL6WiT5g1u7W
        subject_person_id: p_oZS1XpKQaQAcuLEyVp74rc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MDMp2z4mrPASjEmTKv1HCr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jy9P__p1CrbGwCJEA9TYJd
          claim_id: c_MabjdP2zeMSL6WiT5g1u7W
          source_id: s_TKg9LhfZvx2ErHHaYyx6Zp
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13223：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oZS1XpKQaQAcuLEyVp74rc
        status: active
        display_name: 王繻
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王耒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耒 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_oZS1XpKQaQAcuLEyVp74rc | 王繻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王耒（CBDB 527062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527062&o=json)
