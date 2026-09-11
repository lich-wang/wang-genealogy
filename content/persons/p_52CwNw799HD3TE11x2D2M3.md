---
schema: wang-person/v1
id: p_52CwNw799HD3TE11x2D2M3
status: active
merged_into: null
display_name: 王嵩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B8pGmfM5zL9kPdLbDcsoWs
        subject_person_id: p_52CwNw799HD3TE11x2D2M3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hzeLc839DMcVqXhWXAunYK
          claim_id: c_B8pGmfM5zL9kPdLbDcsoWs
          source_id: s_BKjAbKTMyvVyCu4csAt1qP
          stance: supports
          locator: CBDB:329622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329622）
          source: &a1
            id: s_BKjAbKTMyvVyCu4csAt1qP
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 329622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329622&o=json
            external_identifier: CBDB:329622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YsuE5RHLiUEneWSQuPxnhk
        subject_person_id: p_52CwNw799HD3TE11x2D2M3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NZHyLM7Sox87Jc4VQnHXnE
          claim_id: c_YsuE5RHLiUEneWSQuPxnhk
          source_id: s_BKjAbKTMyvVyCu4csAt1qP
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
  descendants:
    - claim:
        id: c_xuMq0O0kVAGoENY_R2jlZV
        subject_person_id: p_52CwNw799HD3TE11x2D2M3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Lha1sy2QN5ZZFX6JESvChc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MopQtjg9yw_-Ive3krCzED
          claim_id: c_xuMq0O0kVAGoENY_R2jlZV
          source_id: s_BKjAbKTMyvVyCu4csAt1qP
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第二十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Lha1sy2QN5ZZFX6JESvChc
        status: active
        display_name: 王基
        merged_into_person_id: null
  other: []
---

# 王嵩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Lha1sy2QN5ZZFX6JESvChc | 王基 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嵩（CBDB 329622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329622&o=json)
