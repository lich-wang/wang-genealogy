---
schema: wang-person/v1
id: p_73VrTP9Px5rRQ3uk3z2D5d
status: active
merged_into: null
display_name: 王逢泰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_74zEtnyrod7BxjmFaT3qVL
        subject_person_id: p_73VrTP9Px5rRQ3uk3z2D5d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eNN393uuZVt4mEAvp1cY4N
          claim_id: c_74zEtnyrod7BxjmFaT3qVL
          source_id: s_q59ShxdqZkm4u5EaLB6Fpc
          stance: supports
          locator: CBDB:703763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703763）
          source: &a1
            id: s_q59ShxdqZkm4u5EaLB6Fpc
            source_type: api_record
            title: 中国历代人物传记资料库：王逢泰（CBDB 703763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703763&o=json
            external_identifier: CBDB:703763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kVN5BRWYtVTcux5WKpDjGB
        subject_person_id: p_73VrTP9Px5rRQ3uk3z2D5d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢泰，清人物。籍贯平陰。（中国历代人物传记资料库 CBDB 703763）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gEPY-iwJ9_PtSkUUT9Jrdw
          claim_id: c_kVN5BRWYtVTcux5WKpDjGB
          source_id: s_q59ShxdqZkm4u5EaLB6Fpc
          stance: supports
          locator: CBDB:703763
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_eTLpgKApRUssDi5_rt6ywC
        subject_person_id: p_73VrTP9Px5rRQ3uk3z2D5d
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iNhoJMDyujnFRYHHAhtKCy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vvV8MoUk7n3rXHO49y2DaI
          claim_id: c_eTLpgKApRUssDi5_rt6ywC
          source_id: s_r6RysI9M8cE0htKNU_VMj7
          stance: supports
          locator: 平陰縣志，lgid=630889：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r6RysI9M8cE0htKNU_VMj7
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王逢泰妻)（CBDB 703764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703764&o=json
            external_identifier: CBDB:703764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iNhoJMDyujnFRYHHAhtKCy
        status: active
        display_name: 楊氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王逢泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢泰 | accepted |
| bio.summary | 王逢泰，清人物。籍贯平陰。（中国历代人物传记资料库 CBDB 703763） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_iNhoJMDyujnFRYHHAhtKCy | 楊氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逢泰（CBDB 703763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703763&o=json)
- [中国历代人物传记资料库：楊氏(王逢泰妻)（CBDB 703764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703764&o=json)
