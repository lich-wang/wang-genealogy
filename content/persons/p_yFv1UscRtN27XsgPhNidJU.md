---
schema: wang-person/v1
id: p_yFv1UscRtN27XsgPhNidJU
status: active
merged_into: null
display_name: 王禎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hUWzARCHYFE69EUoYdHUiv
        subject_person_id: p_yFv1UscRtN27XsgPhNidJU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xMQmcBV3wg79tPJUJsr7JF
          claim_id: c_hUWzARCHYFE69EUoYdHUiv
          source_id: s_kdLzTDUhQxoQpmR2Zo4xZP
          stance: supports
          locator: CBDB:266253
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266253）
          source: &a1
            id: s_kdLzTDUhQxoQpmR2Zo4xZP
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 266253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266253&o=json
            external_identifier: CBDB:266253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.719Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZzP2u8dNd4LDTmChxxX9vz
        subject_person_id: p_yFv1UscRtN27XsgPhNidJU
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
        - id: cs_xWaKB1kZALGshrBSAkG6B9
          claim_id: c_ZzP2u8dNd4LDTmChxxX9vz
          source_id: s_kdLzTDUhQxoQpmR2Zo4xZP
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
        id: c_vaMkQmcxFLn-NY40l5AAXu
        subject_person_id: p_yFv1UscRtN27XsgPhNidJU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o3e3C2LBIWa5D0W4-QqD5G
          claim_id: c_vaMkQmcxFLn-NY40l5AAXu
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百五十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5KJAr2EEoaMkEH3WrA7h4Q
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 201041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201041&o=json
            external_identifier: CBDB:201041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.650Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5AUJjM5DJaTK73XoVdx2Mm
        status: active
        display_name: 王縉
        merged_into_person_id: null
  other: []
---

# 王禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禎 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5AUJjM5DJaTK73XoVdx2Mm | 王縉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 201041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201041&o=json)
- [中国历代人物传记资料库：王禎（CBDB 266253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266253&o=json)
