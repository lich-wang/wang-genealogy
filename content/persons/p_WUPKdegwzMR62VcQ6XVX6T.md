---
schema: wang-person/v1
id: p_WUPKdegwzMR62VcQ6XVX6T
status: active
merged_into: null
display_name: 王省
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FgFhmrFAe8p6N4omAKkW59
        subject_person_id: p_WUPKdegwzMR62VcQ6XVX6T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王省
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aLjoxN8PmqurqN5LmeA3cF
          claim_id: c_FgFhmrFAe8p6N4omAKkW59
          source_id: s_P223hSkCaKXjWci8XgaC1u
          stance: supports
          locator: CBDB:334990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334990）
          source: &a1
            id: s_P223hSkCaKXjWci8XgaC1u
            source_type: api_record
            title: 中国历代人物传记资料库：王省（CBDB 334990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334990&o=json
            external_identifier: CBDB:334990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.446Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nieRNVkmWJUvitqYGs8t4b
        subject_person_id: p_WUPKdegwzMR62VcQ6XVX6T
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
        - id: cs_BovrBCwYHLaoxh2QwnE3Cx
          claim_id: c_nieRNVkmWJUvitqYGs8t4b
          source_id: s_P223hSkCaKXjWci8XgaC1u
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xoDOe5GfMbJKX8-InbQXd0
        subject_person_id: p_WUPKdegwzMR62VcQ6XVX6T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aRn6IffrmgssVNouZo15nY
          claim_id: c_xoDOe5GfMbJKX8-InbQXd0
          source_id: s_P223hSkCaKXjWci8XgaC1u
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第五十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        status: active
        display_name: 王應辰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王省

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王省 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Uk3JWD2Whpfr1nbW4yeaJ2 | 王應辰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王省（CBDB 334990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334990&o=json)
