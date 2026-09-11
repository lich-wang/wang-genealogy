---
schema: wang-person/v1
id: p_3XpQZsyy1MMzLgJ6d6jucq
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 265732
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sq2zHN5LDIaI0jQ0PL-1AZ
        subject_person_id: p_3XpQZsyy1MMzLgJ6d6jucq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yPZzxeg1Lzh6WqY9h6NnpV
          claim_id: c_Sq2zHN5LDIaI0jQ0PL-1AZ
          source_id: s_STFHG_Zfs2rzPH5gKYm0wl
          stance: supports
          locator: CBDB:265732
          quotation: null
          interpretation_note: CBDB 明确记录的王獻臣配偶
          source: &a1
            id: s_STFHG_Zfs2rzPH5gKYm0wl
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王獻臣妻)（CBDB 265732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265732&o=json
            external_identifier: CBDB:265732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ZqSyYBMBh0joAwN7WoD4aI
        subject_person_id: p_AfuEzx374a7WNXTfcMcWwd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3XpQZsyy1MMzLgJ6d6jucq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ppo0Lnftp6iPVpsQC7HuSD
          claim_id: c_ZqSyYBMBh0joAwN7WoD4aI
          source_id: s_STFHG_Zfs2rzPH5gKYm0wl
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AfuEzx374a7WNXTfcMcWwd
        status: active
        display_name: 王獻臣
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_AfuEzx374a7WNXTfcMcWwd | 王獻臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王獻臣妻)（CBDB 265732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265732&o=json)
