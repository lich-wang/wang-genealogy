---
schema: wang-person/v1
id: p_Gh9Fwgvp5NWfP65rQQ728z
status: active
merged_into: null
display_name: 王逸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9npB5puYhWALTS5j8TjKHC
        subject_person_id: p_Gh9Fwgvp5NWfP65rQQ728z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vmtHsE2ZjdJhnNGMLmSBGU
          claim_id: c_9npB5puYhWALTS5j8TjKHC
          source_id: s_TeFbgSMi2JQVrEv6DhysqE
          stance: supports
          locator: CBDB:150191
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150191）
          source: &a1
            id: s_TeFbgSMi2JQVrEv6DhysqE
            source_type: api_record
            title: 中国历代人物传记资料库：王逸（CBDB 150191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150191&o=json
            external_identifier: CBDB:150191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G5DmC2SrrRooPNMxTV4kNJ
        subject_person_id: p_Gh9Fwgvp5NWfP65rQQ728z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yGwaykEffKucL3Qs5ECiCD
          claim_id: c_G5DmC2SrrRooPNMxTV4kNJ
          source_id: s_TeFbgSMi2JQVrEv6DhysqE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_H9chnCoUOmbd-fwB35Y8_k
        subject_person_id: p_Gh9Fwgvp5NWfP65rQQ728z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2oAxBsuJQKXAAm52SsY22K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Z7RPfB_JO9MzgduA3nLEB
          claim_id: c_H9chnCoUOmbd-fwB35Y8_k
          source_id: s_rrZQDbmNdXf25Pr9VFLCFN
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengli 46：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rrZQDbmNdXf25Pr9VFLCFN
            source_type: api_record
            title: 中国历代人物传记资料库：王媛（CBDB 140074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140074&o=json
            external_identifier: CBDB:140074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.465Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2oAxBsuJQKXAAm52SsY22K
        status: active
        display_name: 王媛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逸 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2oAxBsuJQKXAAm52SsY22K | 王媛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逸（CBDB 150191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150191&o=json)
- [中国历代人物传记资料库：王媛（CBDB 140074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140074&o=json)
