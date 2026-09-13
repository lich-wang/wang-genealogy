---
schema: wang-person/v1
id: p_iownahwhyVTvRCab3jvgcE
status: active
merged_into: null
display_name: 王文脩
cbdb_id: 302522
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lcn9qwnGr6CziesFsG9XN6
        subject_person_id: p_iownahwhyVTvRCab3jvgcE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文脩，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 302522）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UzI09_IseqRBDrpsPQywZJ
          claim_id: c_Lcn9qwnGr6CziesFsG9XN6
          source_id: s_KJxWuhzG8r1XECK5Yac3UX
          stance: supports
          locator: CBDB:302522
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KJxWuhzG8r1XECK5Yac3UX
            source_type: api_record
            title: 中国历代人物传记资料库：王文脩（CBDB 302522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302522&o=json
            external_identifier: CBDB:302522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oPFLL4QKE5T7amtpcGyAo6
        subject_person_id: p_iownahwhyVTvRCab3jvgcE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文脩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_p98Ne2JLTeCMVTigjz5kx7
          claim_id: c_oPFLL4QKE5T7amtpcGyAo6
          source_id: s_KJxWuhzG8r1XECK5Yac3UX
          stance: supports
          locator: CBDB:302522
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
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
        id: c_i4-fQPO_6ezIUSPsHsab48
        subject_person_id: p_iownahwhyVTvRCab3jvgcE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UcjkWZqqBQxTHAd68nDNjt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zREyZZtFKSHtjkhDkCuJJb
          claim_id: c_i4-fQPO_6ezIUSPsHsab48
          source_id: s_KJxWuhzG8r1XECK5Yac3UX
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第四十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KJxWuhzG8r1XECK5Yac3UX
            source_type: api_record
            title: 中国历代人物传记资料库：王文脩（CBDB 302522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302522&o=json
            external_identifier: CBDB:302522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_UcjkWZqqBQxTHAd68nDNjt
        status: active
        display_name: 王景象
        merged_into_person_id: null
  other: []
---

# 王文脩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文脩，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 302522） | accepted |
| name.primary | 王文脩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_UcjkWZqqBQxTHAd68nDNjt | 王景象 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文脩（CBDB 302522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302522&o=json)
