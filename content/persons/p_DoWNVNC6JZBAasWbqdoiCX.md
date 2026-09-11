---
schema: wang-person/v1
id: p_DoWNVNC6JZBAasWbqdoiCX
status: active
merged_into: null
display_name: 王祖嫡
cbdb_id: 126631
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jWC4MQrno65PCo7heE1FMY
        subject_person_id: p_DoWNVNC6JZBAasWbqdoiCX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖嫡，明人物。中国历代人物传记资料库（CBDB）以人物编号 126631 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_zqDYTAXHwJ2yvPEiNJHAg6
          claim_id: c_jWC4MQrno65PCo7heE1FMY
          source_id: s_sPMcogpnrS8m2BG4mXozNQ
          stance: supports
          locator: CBDB:126631
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_sPMcogpnrS8m2BG4mXozNQ
            source_type: api_record
            title: 中国历代人物传记资料库：王祖嫡（CBDB 126631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126631&o=json
            external_identifier: CBDB:126631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GeZ9tNYq8ENkvMLdgyp2Vm
        subject_person_id: p_DoWNVNC6JZBAasWbqdoiCX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖嫡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZCQDceCJSYN5ZEpD1adzCZ
          claim_id: c_GeZ9tNYq8ENkvMLdgyp2Vm
          source_id: s_sPMcogpnrS8m2BG4mXozNQ
          stance: supports
          locator: CBDB:126631
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_sPMcogpnrS8m2BG4mXozNQ
            source_type: api_record
            title: 中国历代人物传记资料库：王祖嫡（CBDB 126631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126631&o=json
            external_identifier: CBDB:126631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3DXEVTXlqcslPyr8z9x6-L
        subject_person_id: p_DoWNVNC6JZBAasWbqdoiCX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ct24JW85LFaBwBesKXW2J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gQJskFBSwI4wiivhMYmKLL
          claim_id: c_3DXEVTXlqcslPyr8z9x6-L
          source_id: s_DpXnKmpa5iqAqQ81mNyebu
          stance: supports
          locator: (乾隆)信陽州志，lgid=868493：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DpXnKmpa5iqAqQ81mNyebu
            source_type: api_record
            title: 中国历代人物传记资料库：王延世（CBDB 555424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555424&o=json
            external_identifier: CBDB:555424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8ct24JW85LFaBwBesKXW2J
        status: active
        display_name: 王延世
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_b9pSyJH4xc7AJqRN9X9-qO
        subject_person_id: p_GDdHk26J8HbYjRhjpiXZaG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DoWNVNC6JZBAasWbqdoiCX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jnrnOV5JwVaUEi0LeAdUhS
          claim_id: c_b9pSyJH4xc7AJqRN9X9-qO
          source_id: s_H4W14e8ww2jrNPermREHg5
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百一十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H4W14e8ww2jrNPermREHg5
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 211131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211131&o=json
            external_identifier: CBDB:211131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GDdHk26J8HbYjRhjpiXZaG
        status: active
        display_name: 王端
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王祖嫡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祖嫡，明人物。中国历代人物传记资料库（CBDB）以人物编号 126631 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王祖嫡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8ct24JW85LFaBwBesKXW2J | 王延世 | accepted |
| ancestors | p_GDdHk26J8HbYjRhjpiXZaG | 王端 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 211131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211131&o=json)
- [中国历代人物传记资料库：王延世（CBDB 555424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555424&o=json)
- [中国历代人物传记资料库：王祖嫡（CBDB 126631）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126631&o=json)
