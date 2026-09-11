---
schema: wang-person/v1
id: p_xA3rRB9F532Jc29D6Y6JTF
status: active
merged_into: null
display_name: 王英
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gKCEYRx4njUHFRVvgcMsU9
        subject_person_id: p_xA3rRB9F532Jc29D6Y6JTF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L45pE8oNFd82PQ7693u3bC
          claim_id: c_gKCEYRx4njUHFRVvgcMsU9
          source_id: s_HQ19GiwPm1CX7QAMxhfjtG
          stance: supports
          locator: CBDB:295378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295378）
          source: &a1
            id: s_HQ19GiwPm1CX7QAMxhfjtG
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 295378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295378&o=json
            external_identifier: CBDB:295378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7cJiYygNccs2qud15qBRnL
        subject_person_id: p_xA3rRB9F532Jc29D6Y6JTF
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
        - id: cs_mP4ZvtsTuuuMFjwBaCiSmP
          claim_id: c_7cJiYygNccs2qud15qBRnL
          source_id: s_HQ19GiwPm1CX7QAMxhfjtG
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
        id: c_vneQp7CXqeYFAKQY7pvwKn
        subject_person_id: p_xA3rRB9F532Jc29D6Y6JTF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2BUKVfjLttuBq79dFrNbRz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXigNkKO_IZVmBTk1CeVJM
          claim_id: c_vneQp7CXqeYFAKQY7pvwKn
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rSpqfo8s5BJMrtNFtFPgJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 202833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202833&o=json
            external_identifier: CBDB:202833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2BUKVfjLttuBq79dFrNbRz
        status: active
        display_name: 王崇
        merged_into_person_id: null
  other: []
---

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2BUKVfjLttuBq79dFrNbRz | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 202833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202833&o=json)
- [中国历代人物传记资料库：王英（CBDB 295378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295378&o=json)
