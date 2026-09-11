---
schema: wang-person/v1
id: p_4PC2JzRydaXykTknqoVMo5
status: active
merged_into: null
display_name: 王忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cUgSxryGYG3JKkFzn2jhu9
        subject_person_id: p_4PC2JzRydaXykTknqoVMo5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j26DWHbjAuPYLNKCyQCoNV
          claim_id: c_cUgSxryGYG3JKkFzn2jhu9
          source_id: s_2e42p38nJLkAsMYS2UdA8i
          stance: supports
          locator: CBDB:126573
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126573）
          source: &a1
            id: s_2e42p38nJLkAsMYS2UdA8i
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 126573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126573&o=json
            external_identifier: CBDB:126573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k2FsLLTv5mBPfGV7E1ix1A
        subject_person_id: p_4PC2JzRydaXykTknqoVMo5
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
        - id: cs_23dRewBK5RLJQPGLnjKQ5s
          claim_id: c_k2FsLLTv5mBPfGV7E1ix1A
          source_id: s_2e42p38nJLkAsMYS2UdA8i
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
        id: c_Pooqa1FNeh6eVQSbi9cR_1
        subject_person_id: p_Q5DgCHGiiyjLBHo197jWHB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4PC2JzRydaXykTknqoVMo5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fisUKzLbpnQ_pNllhFRpAp
          claim_id: c_Pooqa1FNeh6eVQSbi9cR_1
          source_id: s_2e42p38nJLkAsMYS2UdA8i
          stance: supports
          locator: 武進陽湖縣志，lgid=152378：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q5DgCHGiiyjLBHo197jWHB
        status: active
        display_name: 王友諒
        merged_into_person_id: null
  children:
    - claim:
        id: c__DVcSrWOjQ9GeGBuk2gv09
        subject_person_id: p_4PC2JzRydaXykTknqoVMo5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MiT45BEZABeDdxC6DUoAF7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zz1uuTGr4ZfydGU_PcJviT
          claim_id: c__DVcSrWOjQ9GeGBuk2gv09
          source_id: s_2e42p38nJLkAsMYS2UdA8i
          stance: supports
          locator: 江南通志，lgid=65779：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MiT45BEZABeDdxC6DUoAF7
        status: active
        display_name: 王㒜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q5DgCHGiiyjLBHo197jWHB | 王友諒 | accepted |
| children | p_MiT45BEZABeDdxC6DUoAF7 | 王㒜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王忠（CBDB 126573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126573&o=json)
