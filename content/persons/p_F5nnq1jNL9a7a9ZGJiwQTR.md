---
schema: wang-person/v1
id: p_F5nnq1jNL9a7a9ZGJiwQTR
status: active
merged_into: null
display_name: 王愷
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TyPBBMtyq9bQjCmLL9tTnw
        subject_person_id: p_F5nnq1jNL9a7a9ZGJiwQTR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EFFNtcF4ZriM6Nfnx94rcK
          claim_id: c_TyPBBMtyq9bQjCmLL9tTnw
          source_id: s_646AWZ8BGPzZE1TScnWF6D
          stance: supports
          locator: CBDB:683469
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683469）
          source: &a1
            id: s_646AWZ8BGPzZE1TScnWF6D
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 683469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683469&o=json
            external_identifier: CBDB:683469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CB63oPQkeSb8BGX2RgDq4G
        subject_person_id: p_F5nnq1jNL9a7a9ZGJiwQTR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷，明人物。籍贯固始，曾任通判。（中国历代人物传记资料库 CBDB 683469）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QuVhC7_85NoZXznFoXZorb
          claim_id: c_CB63oPQkeSb8BGX2RgDq4G
          source_id: s_646AWZ8BGPzZE1TScnWF6D
          stance: supports
          locator: CBDB:683469
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6MmJ4vdtiYWBNgGTYPAoDW
        subject_person_id: p_F5nnq1jNL9a7a9ZGJiwQTR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cuLRLhG5ZU9mKGxZ61YTb9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NmRxZb-5eLjhkkT6Y5atVX
          claim_id: c_6MmJ4vdtiYWBNgGTYPAoDW
          source_id: s_d5SrNX5aosaTbZYK2F6XAe
          stance: supports
          locator: (康熙)固始縣志，lgid= 871425：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_d5SrNX5aosaTbZYK2F6XAe
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 683471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683471&o=json
            external_identifier: CBDB:683471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cuLRLhG5ZU9mKGxZ61YTb9
        status: active
        display_name: 王述
        merged_into_person_id: null
    - claim:
        id: c_mORivjgcDQ3-e9rbR_wjDg
        subject_person_id: p_F5nnq1jNL9a7a9ZGJiwQTR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UaKk5ztx8dJU2yAsFhPPHe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ybhCl2DzmjPCjuRg7X2TSF
          claim_id: c_mORivjgcDQ3-e9rbR_wjDg
          source_id: s_646AWZ8BGPzZE1TScnWF6D
          stance: supports
          locator: (康熙)固始縣志，lgid= 871425：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UaKk5ztx8dJU2yAsFhPPHe
        status: active
        display_name: 王建
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王愷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愷 | accepted |
| bio.summary | 王愷，明人物。籍贯固始，曾任通判。（中国历代人物传记资料库 CBDB 683469） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cuLRLhG5ZU9mKGxZ61YTb9 | 王述 | accepted |
| children | p_UaKk5ztx8dJU2yAsFhPPHe | 王建 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愷（CBDB 683469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683469&o=json)
- [中国历代人物传记资料库：王述（CBDB 683471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683471&o=json)
