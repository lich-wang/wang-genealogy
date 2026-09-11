---
schema: wang-person/v1
id: p_JbrJcaN3MdnZ95DCfhnHwS
status: active
merged_into: null
display_name: 王惲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YNSqd3s4f8HeFs4iBRGL3q
        subject_person_id: p_JbrJcaN3MdnZ95DCfhnHwS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C2Gm46LNm5CDvE8cCEHK1A
          claim_id: c_YNSqd3s4f8HeFs4iBRGL3q
          source_id: s_YRUmBec1c1U1MVFLNBi7FK
          stance: supports
          locator: CBDB:141841
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141841）
          source: &a1
            id: s_YRUmBec1c1U1MVFLNBi7FK
            source_type: api_record
            title: 中国历代人物传记资料库：王惲（CBDB 141841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141841&o=json
            external_identifier: CBDB:141841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2zFhjrrsaE7WRAa4uGoJ6G
        subject_person_id: p_JbrJcaN3MdnZ95DCfhnHwS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 789年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cNNQckAGDhQVnYbj8xnu6H
          claim_id: c_2zFhjrrsaE7WRAa4uGoJ6G
          source_id: s_YRUmBec1c1U1MVFLNBi7FK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZzT1yDSMhDv8w2QAJArm2w
        subject_person_id: p_JbrJcaN3MdnZ95DCfhnHwS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 845年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VZnMNMBKk3TyCP9zTS2XLF
          claim_id: c_ZzT1yDSMhDv8w2QAJArm2w
          source_id: s_YRUmBec1c1U1MVFLNBi7FK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FnK9rMQRGjcBJEDhwj7NZG
        subject_person_id: p_JbrJcaN3MdnZ95DCfhnHwS
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
        - id: cs_KozfpZTu9rzYW9aqrZhony
          claim_id: c_FnK9rMQRGjcBJEDhwj7NZG
          source_id: s_YRUmBec1c1U1MVFLNBi7FK
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
        id: c_6_jSvF4RGUwfMj6AfYDPzm
        subject_person_id: p_9V8s84od5ZmB9RMgrFpSAN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JbrJcaN3MdnZ95DCfhnHwS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8sS037RTaY2pwmoyU8zRT1
          claim_id: c_6_jSvF4RGUwfMj6AfYDPzm
          source_id: s_SJCVM2ubkk486ddmMLdHvC
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 56：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SJCVM2ubkk486ddmMLdHvC
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 158867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158867&o=json
            external_identifier: CBDB:158867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9V8s84od5ZmB9RMgrFpSAN
        status: active
        display_name: 王濬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王惲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惲 | accepted |
| birth.date | 789年 | accepted |
| death.date | 845年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_9V8s84od5ZmB9RMgrFpSAN | 王濬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濬（CBDB 158867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158867&o=json)
- [中国历代人物传记资料库：王惲（CBDB 141841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141841&o=json)
