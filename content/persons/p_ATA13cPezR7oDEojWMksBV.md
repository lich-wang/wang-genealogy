---
schema: wang-person/v1
id: p_ATA13cPezR7oDEojWMksBV
status: active
merged_into: null
display_name: 王翁怜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G42PYozvQiZ54TyfCbtCrE
        subject_person_id: p_ATA13cPezR7oDEojWMksBV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翁怜
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VGxqk5haFi17R5zaMALTF2
          claim_id: c_G42PYozvQiZ54TyfCbtCrE
          source_id: s_MYHijeX97VAuPnNToHLYCM
          stance: supports
          locator: CBDB:696189
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696189）
          source: &a1
            id: s_MYHijeX97VAuPnNToHLYCM
            source_type: api_record
            title: 中国历代人物传记资料库：王翁怜（CBDB 696189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696189&o=json
            external_identifier: CBDB:696189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2G8bj1ytTKbDZYM1sT8iWs
        subject_person_id: p_ATA13cPezR7oDEojWMksBV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CR9NgUL7fM3yo1i3dC9GME
          claim_id: c_2G8bj1ytTKbDZYM1sT8iWs
          source_id: s_MYHijeX97VAuPnNToHLYCM
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
        id: c_J1YQQ5uqMbgdQWK4oXmN9P
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ATA13cPezR7oDEojWMksBV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_azfBl64G3kS5XV18HpS8bW
          claim_id: c_J1YQQ5uqMbgdQWK4oXmN9P
          source_id: s_MYHijeX97VAuPnNToHLYCM
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王誠墓誌：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MRcNDk25WD9q2qKW2Sg6T2
        status: active
        display_name: 王誠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王翁怜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翁怜 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_MRcNDk25WD9q2qKW2Sg6T2 | 王誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翁怜（CBDB 696189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696189&o=json)
