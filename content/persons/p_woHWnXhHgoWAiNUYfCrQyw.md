---
schema: wang-person/v1
id: p_woHWnXhHgoWAiNUYfCrQyw
status: active
merged_into: null
display_name: 王觀昉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B9YQfKAWp2kfkpiGfC5nit
        subject_person_id: p_woHWnXhHgoWAiNUYfCrQyw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀昉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NfedLLdFPoqdb8NwngV7U4
          claim_id: c_B9YQfKAWp2kfkpiGfC5nit
          source_id: s_tVCJEZ8Vmr78CoAiKBLdLT
          stance: supports
          locator: CBDB:560372
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（560372）
          source: &a1
            id: s_tVCJEZ8Vmr78CoAiKBLdLT
            source_type: api_record
            title: 中国历代人物传记资料库：王觀昉（CBDB 560372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560372&o=json
            external_identifier: CBDB:560372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vnWZvWtySnEG8P7DK5CEYZ
        subject_person_id: p_woHWnXhHgoWAiNUYfCrQyw
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
        - id: cs_xLLK5Ua66y7DTCKF7Jckj2
          claim_id: c_vnWZvWtySnEG8P7DK5CEYZ
          source_id: s_tVCJEZ8Vmr78CoAiKBLdLT
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
        id: c_LgRzWxIB3bog4JZcClEy3G
        subject_person_id: p_uS7V4P4KMenpgfUZzDHcZ5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_woHWnXhHgoWAiNUYfCrQyw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_or-8as4kiyRhMEI5SsT6Ct
          claim_id: c_LgRzWxIB3bog4JZcClEy3G
          source_id: s_tVCJEZ8Vmr78CoAiKBLdLT
          stance: supports
          locator: 紹興府志:八十卷，Igid=316416：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uS7V4P4KMenpgfUZzDHcZ5
        status: active
        display_name: 王應遴
        merged_into_person_id: null
  children:
    - claim:
        id: c_iP02Cq0LHSoNUBuiRx96Cq
        subject_person_id: p_woHWnXhHgoWAiNUYfCrQyw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oD3PJjMLUawsYEVt6qw1j1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_owdsuQvcdry86-4FvOV_pq
          claim_id: c_iP02Cq0LHSoNUBuiRx96Cq
          source_id: s_Heu5x25QQ1h2pK2oPcnqFx
          stance: supports
          locator: 紹興府志:八十卷，lgid=316492：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Heu5x25QQ1h2pK2oPcnqFx
            source_type: api_record
            title: 中国历代人物传记资料库：王國英（CBDB 562014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562014&o=json
            external_identifier: CBDB:562014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oD3PJjMLUawsYEVt6qw1j1
        status: active
        display_name: 王國英
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王觀昉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀昉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uS7V4P4KMenpgfUZzDHcZ5 | 王應遴 | accepted |
| children | p_oD3PJjMLUawsYEVt6qw1j1 | 王國英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觀昉（CBDB 560372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560372&o=json)
- [中国历代人物传记资料库：王國英（CBDB 562014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562014&o=json)
