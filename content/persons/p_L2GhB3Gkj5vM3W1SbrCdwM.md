---
schema: wang-person/v1
id: p_L2GhB3Gkj5vM3W1SbrCdwM
status: active
merged_into: null
display_name: 王順賢
cbdb_id: 307136
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KqwRsapDWbnPCfo6FHquNB
        subject_person_id: p_L2GhB3Gkj5vM3W1SbrCdwM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順賢，明人物。嘉靖二十三年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 307136）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_bL_Jq7QCozMhfTcINpbdjx
          claim_id: c_KqwRsapDWbnPCfo6FHquNB
          source_id: s_M4HHXmktuKCrPvkZa217Ss
          stance: supports
          locator: CBDB:307136
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_M4HHXmktuKCrPvkZa217Ss
            source_type: api_record
            title: 中国历代人物传记资料库：王順賢（CBDB 307136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307136&o=json
            external_identifier: CBDB:307136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pR1Y7HRo2geA4C1mJTg2nz
        subject_person_id: p_L2GhB3Gkj5vM3W1SbrCdwM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3GTDxwswmkHECrE46rrS5J
          claim_id: c_pR1Y7HRo2geA4C1mJTg2nz
          source_id: s_M4HHXmktuKCrPvkZa217Ss
          stance: supports
          locator: CBDB:307136
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eg7uQesTSOdOGN8P3UqDyD
        subject_person_id: p_f8PetQxctoF7VjZ8k12xc4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L2GhB3Gkj5vM3W1SbrCdwM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3p9nbl0V9kRyk2rWt9gBTr
          claim_id: c_eg7uQesTSOdOGN8P3UqDyD
          source_id: s_YFyxk8JFARg231IUJMvHPs
          stance: supports
          locator: CBDB：兄弟 王順德（203599）之父／母 王大才
          quotation: null
          interpretation_note: 由兄弟关系推断：王順賢 与 王順德 为同胞（CBDB 记「弟」），王順德 之父／母即 王順賢 之父／母。
          source:
            id: s_YFyxk8JFARg231IUJMvHPs
            source_type: api_record
            title: 中国历代人物传记资料库：王順賢（CBDB 307136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307136&o=json
            external_identifier: CBDB:307136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f8PetQxctoF7VjZ8k12xc4
        status: active
        display_name: 王大才
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SBZBM0FEbmFDum1c7-3MiG
        subject_person_id: p_53ADyQPeHfyWpAQcTUrMfN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_L2GhB3Gkj5vM3W1SbrCdwM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xD-hDUqpfpJkv-qeonnkTh
          claim_id: c_SBZBM0FEbmFDum1c7-3MiG
          source_id: s_YFyxk8JFARg231IUJMvHPs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203599 王順德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YFyxk8JFARg231IUJMvHPs
            source_type: api_record
            title: 中国历代人物传记资料库：王順賢（CBDB 307136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307136&o=json
            external_identifier: CBDB:307136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_53ADyQPeHfyWpAQcTUrMfN
        status: active
        display_name: 王順德
        merged_into_person_id: null
---

# 王順賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王順賢，明人物。嘉靖二十三年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 307136） | accepted |
| name.primary | 王順賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_f8PetQxctoF7VjZ8k12xc4 | 王大才 | accepted |
| other | p_53ADyQPeHfyWpAQcTUrMfN | 王順德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王順賢（CBDB 307136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307136&o=json)
