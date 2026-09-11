---
schema: wang-person/v1
id: p_A84W4Qt6NZjv8BXVPciqQL
status: active
merged_into: null
display_name: 王沐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X94Ea6UAQNhsQEs3HXKpdc
        subject_person_id: p_A84W4Qt6NZjv8BXVPciqQL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_55HgwFzXwkR2ma8Vi8hDNF
          claim_id: c_X94Ea6UAQNhsQEs3HXKpdc
          source_id: s_KjPvmEbLxkHkjKH3DvbztH
          stance: supports
          locator: CBDB:165257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（165257）
          source: &a1
            id: s_KjPvmEbLxkHkjKH3DvbztH
            source_type: api_record
            title: 中国历代人物传记资料库：王沐（CBDB 165257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165257&o=json
            external_identifier: CBDB:165257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EDMMLjUZMHymmVtwuCBEUG
        subject_person_id: p_A84W4Qt6NZjv8BXVPciqQL
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
        - id: cs_1puc6bjKtwAnD6E9NPtKSX
          claim_id: c_EDMMLjUZMHymmVtwuCBEUG
          source_id: s_KjPvmEbLxkHkjKH3DvbztH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aPAb25Cg_1_svAtf4__xT4
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A84W4Qt6NZjv8BXVPciqQL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Onff6NKNhJuGKzrp1lfLwq
          claim_id: c_aPAb25Cg_1_svAtf4__xT4
          source_id: s_y7B65XeE2bvCsAck3T9oCY
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dali27：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_y7B65XeE2bvCsAck3T9oCY
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 143108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143108&o=json
            external_identifier: CBDB:143108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7QnGBiPzUFUWD8rSwCwAQh
        status: active
        display_name: 王鈞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王沐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沐 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7QnGBiPzUFUWD8rSwCwAQh | 王鈞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鈞（CBDB 143108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143108&o=json)
- [中国历代人物传记资料库：王沐（CBDB 165257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165257&o=json)
