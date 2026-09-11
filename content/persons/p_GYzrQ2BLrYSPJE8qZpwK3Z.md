---
schema: wang-person/v1
id: p_GYzrQ2BLrYSPJE8qZpwK3Z
status: active
merged_into: null
display_name: 王蘊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZuJtVtP1nmY33G8aCdXpG5
        subject_person_id: p_GYzrQ2BLrYSPJE8qZpwK3Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HfswdCfEmsrrdhDqQqhNDh
          claim_id: c_ZuJtVtP1nmY33G8aCdXpG5
          source_id: s_Hpvy4Q9DgNbYJ7v6vcdLK4
          stance: supports
          locator: CBDB:25232
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25232）
          source: &a1
            id: s_Hpvy4Q9DgNbYJ7v6vcdLK4
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊（CBDB 25232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25232&o=json
            external_identifier: CBDB:25232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2geCfKGHs5F3DQxqT4atJ9
        subject_person_id: p_GYzrQ2BLrYSPJE8qZpwK3Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊，宋人物。籍贯吳江。（中国历代人物传记资料库 CBDB 25232）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LSeDtbWdue_0t86Uz4rT5v
          claim_id: c_2geCfKGHs5F3DQxqT4atJ9
          source_id: s_Hpvy4Q9DgNbYJ7v6vcdLK4
          stance: supports
          locator: CBDB:25232
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xxsL6UEKkuZV2pkcpg4l17
        subject_person_id: p_PETdD8Jz2DJR4mSmHcNTrv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GYzrQ2BLrYSPJE8qZpwK3Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gQ27N3xzy-TddeT8nq_RyJ
          claim_id: c_xxsL6UEKkuZV2pkcpg4l17
          source_id: s_Hpvy4Q9DgNbYJ7v6vcdLK4
          stance: supports
          locator: CBDB 双向互证（父 王仲舉 ⇄ 子 王蘊）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_PETdD8Jz2DJR4mSmHcNTrv
        status: active
        display_name: 王仲舉
        merged_into_person_id: null
  children:
    - claim:
        id: c_iiA57tbyP70s4XcXFMQV-y
        subject_person_id: p_GYzrQ2BLrYSPJE8qZpwK3Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RSUipjDpHxz3E9HHKd8tnd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YtWT1Rr2rtIb_AfzELAbSZ
          claim_id: c_iiA57tbyP70s4XcXFMQV-y
          source_id: s_Hpvy4Q9DgNbYJ7v6vcdLK4
          stance: supports
          locator: CBDB 双向互证（子 王大成 ⇄ 父 王蘊）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_RSUipjDpHxz3E9HHKd8tnd
        status: active
        display_name: 王大成
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王蘊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘊 | accepted |
| bio.summary | 王蘊，宋人物。籍贯吳江。（中国历代人物传记资料库 CBDB 25232） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PETdD8Jz2DJR4mSmHcNTrv | 王仲舉 | accepted |
| children | p_RSUipjDpHxz3E9HHKd8tnd | 王大成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘊（CBDB 25232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25232&o=json)
