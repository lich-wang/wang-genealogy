---
schema: wang-person/v1
id: p_j5tPhm57yRfYMhoU5CNpTV
status: active
merged_into: null
display_name: 王佐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3NCn5ocwMsD8gMMsCumKHP
        subject_person_id: p_j5tPhm57yRfYMhoU5CNpTV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pXGTYpf7H3826PSEhUnRna
          claim_id: c_3NCn5ocwMsD8gMMsCumKHP
          source_id: s_XePFF9uiREWFcLAd9fnPf7
          stance: supports
          locator: CBDB:298418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298418）
          source: &a1
            id: s_XePFF9uiREWFcLAd9fnPf7
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 298418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298418&o=json
            external_identifier: CBDB:298418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4nrUpLewWxYQkAz31f38EL
        subject_person_id: p_j5tPhm57yRfYMhoU5CNpTV
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
        - id: cs_mhB6RGkgLyTpJGiwt8i8Zp
          claim_id: c_4nrUpLewWxYQkAz31f38EL
          source_id: s_XePFF9uiREWFcLAd9fnPf7
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
        id: c_fJNscDcDeJp3QQFEjVJUGH
        subject_person_id: p_j5tPhm57yRfYMhoU5CNpTV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_axvKJHczRE94VwEvMVemSc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BCynZjnXNBb0MrtuxGfSwL
          claim_id: c_fJNscDcDeJp3QQFEjVJUGH
          source_id: s_ugxK1xzvCFSxHdB96HR2ap
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二百一十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ugxK1xzvCFSxHdB96HR2ap
            source_type: api_record
            title: 中国历代人物传记资料库：王一言（CBDB 203015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203015&o=json
            external_identifier: CBDB:203015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_axvKJHczRE94VwEvMVemSc
        status: active
        display_name: 王一言
        merged_into_person_id: null
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_axvKJHczRE94VwEvMVemSc | 王一言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一言（CBDB 203015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203015&o=json)
- [中国历代人物传记资料库：王佐（CBDB 298418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298418&o=json)
