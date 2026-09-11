---
schema: wang-person/v1
id: p_TqbdmyxqR2Ucz5qM82wt26
status: active
merged_into: null
display_name: 王伯載
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k1VqGcG1NnwEiaswbwNE8N
        subject_person_id: p_TqbdmyxqR2Ucz5qM82wt26
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯載
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pSHCMntFLiAHmPjStFnJbW
          claim_id: c_k1VqGcG1NnwEiaswbwNE8N
          source_id: s_G2oEBAvKvvVxWb8a4y2nhC
          stance: supports
          locator: CBDB:307681
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（307681）
          source: &a1
            id: s_G2oEBAvKvvVxWb8a4y2nhC
            source_type: api_record
            title: 中国历代人物传记资料库：王伯載（CBDB 307681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307681&o=json
            external_identifier: CBDB:307681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aE2syPW6vaT6a8aqgxNRS1
        subject_person_id: p_TqbdmyxqR2Ucz5qM82wt26
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯載，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 307681）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Yf6kYXGbQozBakEqdLGFso
          claim_id: c_aE2syPW6vaT6a8aqgxNRS1
          source_id: s_G2oEBAvKvvVxWb8a4y2nhC
          stance: supports
          locator: CBDB:307681
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_R1zNe7YvZifHIpLsYBF33d
        subject_person_id: p_TqbdmyxqR2Ucz5qM82wt26
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I3AoGPVCUSO85_2DGWq4zu
          claim_id: c_R1zNe7YvZifHIpLsYBF33d
          source_id: s_G2oEBAvKvvVxWb8a4y2nhC
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百四十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WQq7QzkQTzLqnMJ812eWYA
        status: active
        display_name: 王之誥
        merged_into_person_id: null
  other: []
---

# 王伯載

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯載 | accepted |
| bio.summary | 王伯載，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 307681） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_WQq7QzkQTzLqnMJ812eWYA | 王之誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯載（CBDB 307681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307681&o=json)
