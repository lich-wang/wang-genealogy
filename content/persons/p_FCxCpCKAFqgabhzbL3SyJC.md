---
schema: wang-person/v1
id: p_FCxCpCKAFqgabhzbL3SyJC
status: active
merged_into: null
display_name: 王從浩
cbdb_id: 10683
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KDoZdBjoNSoSCnMv3GVRyB
        subject_person_id: p_FCxCpCKAFqgabhzbL3SyJC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從浩，宋人物。中国历代人物传记资料库（CBDB）以人物编号 10683 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_waxNgOz5AOfFfbctPhgxZ8
          claim_id: c_KDoZdBjoNSoSCnMv3GVRyB
          source_id: s_DLJjQ9HAvE55vuhTvCQLnM
          stance: supports
          locator: CBDB:10683
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_DLJjQ9HAvE55vuhTvCQLnM
            source_type: api_record
            title: 中国历代人物传记资料库：王從浩（CBDB 10683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10683&o=json
            external_identifier: CBDB:10683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NAKJNPjTj9QnM6jExAgQf1
        subject_person_id: p_FCxCpCKAFqgabhzbL3SyJC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gJptJNVCDs5AoWrZanLuuA
          claim_id: c_NAKJNPjTj9QnM6jExAgQf1
          source_id: s_DLJjQ9HAvE55vuhTvCQLnM
          stance: supports
          locator: CBDB:10683
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_DLJjQ9HAvE55vuhTvCQLnM
            source_type: api_record
            title: 中国历代人物传记资料库：王從浩（CBDB 10683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10683&o=json
            external_identifier: CBDB:10683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_awIsDTYOr02PQaRXL_Ga9S
        subject_person_id: p_FCxCpCKAFqgabhzbL3SyJC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8kgVQUAKsHG2eDVp9wKUEc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d-6WuUXqm1ymcxG-f2GZNv
          claim_id: c_awIsDTYOr02PQaRXL_Ga9S
          source_id: s_x6eipvEZk1EKQJPrCzog94
          stance: supports
          locator: 王氏一原世譜，10b：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x6eipvEZk1EKQJPrCzog94
            source_type: api_record
            title: 中国历代人物传记资料库：王居義（CBDB 386193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386193&o=json
            external_identifier: CBDB:386193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8kgVQUAKsHG2eDVp9wKUEc
        status: active
        display_name: 王居義
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_IfG4jlnrzonMe9yjOrKDH2
        subject_person_id: p_FCxCpCKAFqgabhzbL3SyJC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cR8Wy9ippRepXxNQNHK459
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HvH79WBBqKWEK_qtHySn6F
          claim_id: c_IfG4jlnrzonMe9yjOrKDH2
          source_id: s_awokEZeNNvPNxGkRZeFs6p
          stance: supports
          locator: CBDB 双向互证（祖父 王從浩 ⇄ 孫 王惟堯）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_awokEZeNNvPNxGkRZeFs6p
            source_type: api_record
            title: 中国历代人物传记资料库：王惟堯（CBDB 10684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10684&o=json
            external_identifier: CBDB:10684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_cR8Wy9ippRepXxNQNHK459
        status: active
        display_name: 王惟堯
        merged_into_person_id: null
  other: []
---

# 王從浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王從浩，宋人物。中国历代人物传记资料库（CBDB）以人物编号 10683 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王從浩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8kgVQUAKsHG2eDVp9wKUEc | 王居義 | accepted |
| descendants | p_cR8Wy9ippRepXxNQNHK459 | 王惟堯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從浩（CBDB 10683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10683&o=json)
- [中国历代人物传记资料库：王居義（CBDB 386193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386193&o=json)
- [中国历代人物传记资料库：王惟堯（CBDB 10684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10684&o=json)
