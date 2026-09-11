---
schema: wang-person/v1
id: p_X3T6w98BRJaGnRFLHzRJ7P
status: active
merged_into: null
display_name: 王汝玉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Amra6yycpyHa7BLFrS6MUo
        subject_person_id: p_X3T6w98BRJaGnRFLHzRJ7P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h8Xvu5FteANM4485SfQeQZ
          claim_id: c_Amra6yycpyHa7BLFrS6MUo
          source_id: s_VnAiF9eJGM4H8gHKmvJn3t
          stance: supports
          locator: CBDB:294146
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294146）
          source: &a1
            id: s_VnAiF9eJGM4H8gHKmvJn3t
            source_type: api_record
            title: 中国历代人物传记资料库：王汝玉（CBDB 294146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294146&o=json
            external_identifier: CBDB:294146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.437Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_emjz8Na2LZ93eQXYpL8i1b
        subject_person_id: p_X3T6w98BRJaGnRFLHzRJ7P
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
        - id: cs_88uUy7F4Rvbn7grVJ1Gp3J
          claim_id: c_emjz8Na2LZ93eQXYpL8i1b
          source_id: s_VnAiF9eJGM4H8gHKmvJn3t
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
        id: c_IRl4RDkWujfsCjWTJlpt0B
        subject_person_id: p_NYtdu2CY4GDrtrwsQaXuDi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X3T6w98BRJaGnRFLHzRJ7P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MfCdkaN_es0EUDUi6iK7Zr
          claim_id: c_IRl4RDkWujfsCjWTJlpt0B
          source_id: s_VnAiF9eJGM4H8gHKmvJn3t
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NYtdu2CY4GDrtrwsQaXuDi
        status: active
        display_name: 王朝賢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝玉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NYtdu2CY4GDrtrwsQaXuDi | 王朝賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝玉（CBDB 294146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294146&o=json)
