---
schema: wang-person/v1
id: p_rMH6azHPPfCWNVYvRKv58F
status: active
merged_into: null
display_name: 王璲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CdTC231D3ue7tYKN6wcrY1
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YNf1famd5zZoNPvCb2Pw3X
          claim_id: c_CdTC231D3ue7tYKN6wcrY1
          source_id: s_t3Bhwn4dLRCwysXHLohx7D
          stance: supports
          locator: CBDB:282815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282815）
          source: &a1
            id: s_t3Bhwn4dLRCwysXHLohx7D
            source_type: api_record
            title: 中国历代人物传记资料库：王璲（CBDB 282815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282815&o=json
            external_identifier: CBDB:282815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yZbNELifThAmgvNG5RgvPU
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璲，明人物。正德十二年進士，籍贯建平。（中国历代人物传记资料库 CBDB 282815）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wEAgpjnHGT2HOSR1zAFZkh
          claim_id: c_yZbNELifThAmgvNG5RgvPU
          source_id: s_t3Bhwn4dLRCwysXHLohx7D
          stance: supports
          locator: CBDB:282815
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Ct7lzsfSOxAbhCecVT7c7W
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TkW50ZX8vZ1sXKppHEQzWc
          claim_id: c_Ct7lzsfSOxAbhCecVT7c7W
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_S8PvPikNKeqv9SvZpdTNYm
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 202067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202067&o=json
            external_identifier: CBDB:202067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fVVctU3oARvj93SKk81Eji
        status: active
        display_name: 王祐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璲 | accepted |
| bio.summary | 王璲，明人物。正德十二年進士，籍贯建平。（中国历代人物传记资料库 CBDB 282815） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fVVctU3oARvj93SKk81Eji | 王祐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璲（CBDB 282815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282815&o=json)
- [中国历代人物传记资料库：王祐（CBDB 202067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202067&o=json)
