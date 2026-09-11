---
schema: wang-person/v1
id: p_W1u9oKcXenmwqBgULRmE5G
status: active
merged_into: null
display_name: 王孟璿
cbdb_id: 220114
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_65Hmyom3KN9Y26G646P4T6
        subject_person_id: p_W1u9oKcXenmwqBgULRmE5G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟璿，明人物。中国历代人物传记资料库（CBDB）以人物编号 220114 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_a1ASvJ1D-IHjqhIpsNIGp7
          claim_id: c_65Hmyom3KN9Y26G646P4T6
          source_id: s_ce7Tt8NwmsP3FRaVrdtSpH
          stance: supports
          locator: CBDB:220114
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ce7Tt8NwmsP3FRaVrdtSpH
            source_type: api_record
            title: 中国历代人物传记资料库：王孟璿（CBDB 220114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220114&o=json
            external_identifier: CBDB:220114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_C3pNPodSju5ujC18hMWcu8
        subject_person_id: p_W1u9oKcXenmwqBgULRmE5G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟璿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ALJ7iySBSJCK7AF3U1296m
          claim_id: c_C3pNPodSju5ujC18hMWcu8
          source_id: s_ce7Tt8NwmsP3FRaVrdtSpH
          stance: supports
          locator: CBDB:220114
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_ce7Tt8NwmsP3FRaVrdtSpH
            source_type: api_record
            title: 中国历代人物传记资料库：王孟璿（CBDB 220114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220114&o=json
            external_identifier: CBDB:220114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7AxKR0aZzZlj9gcQ_KEfd4
        subject_person_id: p_W1u9oKcXenmwqBgULRmE5G
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MvdGFnhj1EQnLBNV2b5DR9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ZS0gzAyv6uy5Iodl0e5lu
          claim_id: c_7AxKR0aZzZlj9gcQ_KEfd4
          source_id: s_dZiEcnZ4AKZh3HXJzDUpCr
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第七十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dZiEcnZ4AKZh3HXJzDUpCr
            source_type: api_record
            title: 中国历代人物传记资料库：王慎德（CBDB 206584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206584&o=json
            external_identifier: CBDB:206584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MvdGFnhj1EQnLBNV2b5DR9
        status: active
        display_name: 王宥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_5LTIkITBPxGcugHuOZCF2t
        subject_person_id: p_W1u9oKcXenmwqBgULRmE5G
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1NRJDMaRvyp9yNoVJiZmjE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TGFEZHCLioqEquwqMoo6ww
          claim_id: c_5LTIkITBPxGcugHuOZCF2t
          source_id: s_ce7Tt8NwmsP3FRaVrdtSpH
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第七十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1NRJDMaRvyp9yNoVJiZmjE
        status: active
        display_name: 王慎德
        merged_into_person_id: null
  other: []
---

# 王孟璿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟璿，明人物。中国历代人物传记资料库（CBDB）以人物编号 220114 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王孟璿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MvdGFnhj1EQnLBNV2b5DR9 | 王宥 | accepted |
| descendants | p_1NRJDMaRvyp9yNoVJiZmjE | 王慎德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟璿（CBDB 220114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220114&o=json)
- [中国历代人物传记资料库：王慎德（CBDB 206584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206584&o=json)
